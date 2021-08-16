import React from 'react';
import { openNotificationWithIcon } from '../tools';

import unit from '../../static/unit.png';
import adr from '../../static/address.svg';
import commit from '../../static/commit.png';
import unitFinish from '../../static/unit-finish.svg';
import commitFinish from '../../static/commit-finish.svg';

import { LinkOutlined } from '@ant-design/icons';

const Contract = require('web3-eth-contract');

import LoadingModal from '../loadingModal';

import { Slider, Spin } from 'antd';

import { Sentry } from 'umi';

import axios from 'axios';

import Web3 from 'web3';

import './index.less';

class Pool extends React.Component {
  state = {
    adr,
    unit,
    commit,
    unitFinish,
    commitFinish,

    fee: 0,

    step: 1,

    unitVal: 0,

    symbol: '--',

    adrload: true,

    poolload: true,

    loadCommit: false,

    unitStr: '1 : 1',

    contractAdr: '',

    coin_logo: require('../../static/default-coin-logo.svg'),
  };

  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.commit = this.commit.bind(this);
    this.onInput = this.onInput.bind(this);
    this.checkAdr = this.checkAdr.bind(this);
    this.onChange = this.onChange.bind(this);
    this.linkUnit = this.linkUnit.bind(this);
    this.checkUnit = this.checkUnit.bind(this);
    this.backStep1 = this.backStep1.bind(this);
    this.backStep2 = this.backStep2.bind(this);
    this.requestPoolName = this.requestPoolName.bind(this);
    this.connectWalletTip = this.connectWalletTip.bind(this);
    this.requestBlockChain = this.requestBlockChain.bind(this);
  }

  async componentDidMount() {
    await this.requestBlockChain();
  }

  async requestBlockChain() {
    try {
      let response = await axios.get(
        `/${ShieldApi}/public_api/suter_shield_blockchain.json?blockchain_type=${CHAIN_NAME}`,
      );

      if (response.status == 200) {
        (window as any)['blockchain'] = response.data.blockchain;

        this.setState({
          adrload: false,
        });
      } else {
        openNotificationWithIcon(
          'suter_shield_blockchain Api Error',
          'Fetch suter_shield_blockchain error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      openNotificationWithIcon(
        'Network Error',
        'Fetch suter_shield_blockchain error',
        'warning',
        4.5,
      );

      Sentry.captureException(error);
    }
  }

  async requestPoolName() {
    const { intl } = this.props;

    const { contractAdr } = this.state;

    let adr = String(contractAdr).toLowerCase();

    if (!adr.startsWith('0x')) adr = `0x${adr}`;

    try {
      const provider = new Web3.providers.HttpProvider(window.blockchain.jrpc);

      const custom = new Contract(ERC20ABI, adr);

      const factory = new Contract(factoryContractABI, factoryContractAddress);

      custom.setProvider(provider);

      factory.setProvider(provider);

      const name = await custom.methods.symbol().call();

      const money = await factory.methods.fee().call();

      const symbol = name.toUpperCase();

      const fee = Number.parseInt((money / 10 ** 18).toFixed(4));

      this.setState({
        fee,
        symbol,
      });
    } catch (err) {
      openNotificationWithIcon(
        'Contract Address Error',
        intl.get('IllegalAdr'),
        'warning',
        4.5,
      );

      this.reset();
    }

    this.setState({
      poolload: false,
    });
  }

  onInput(e) {
    this.setState({
      contractAdr: e.target.value.trim(),
    });
  }

  async checkAdr() {
    this.setState({
      adrload: true,
    });

    const { intl } = this.props;

    const { contractAdr } = this.state;

    if (!contractAdr) {
      openNotificationWithIcon(
        'Contract Address Error',
        intl.get('IllegalAdr'),
        'warning',
        4.5,
      );

      this.setState({
        adrload: false,
      });

      return;
    }

    const provider = new Web3.providers.HttpProvider(window.blockchain.jrpc);

    const newWeb3 = new Web3(provider);

    const factory = new Contract(factoryContractABI, factoryContractAddress);

    factory.setProvider(provider);

    const isAdr = newWeb3.utils.isAddress(contractAdr);

    if (isAdr) {
      const notExist = '0x0000000000000000000000000000000000000000';

      const already = await factory.methods.getPool(contractAdr).call();

      if (already == notExist) {
        this.setState({
          step: 2,
        });

        this.setState({
          adrload: false,
        });

        return;
      }

      openNotificationWithIcon(
        'ERROR',
        intl.get('PoolAlreadyExist'),
        'error',
        5.5,
      );

      this.setState({
        adrload: false,
      });

      return;
    }

    openNotificationWithIcon(
      'Contract Address Error',
      intl.get('IllegalAdr'),
      'warning',
      4.5,
    );

    this.setState({
      adrload: false,
    });
  }

  onChange(unit) {
    if (unit >= 0) {
      this.setState({
        unitVal: unit,
        unitStr: `${10 ** unit} : 1`,
      });

      return;
    }

    this.setState({
      unitVal: unit,
      unitStr: `1 : ${10 ** Math.abs(unit)}`,
    });
  }

  checkUnit() {
    this.setState({ step: 3 });

    this.requestPoolName();
  }

  async commit() {
    const { intl } = this.props;

    const { fee } = this.state;

    if (!fee) {
      openNotificationWithIcon(
        'Contract Address Error',
        intl.get('IllegalAdr'),
        'warning',
        4.5,
      );

      this.reset();

      return;
    }

    this.setState({
      loadCommit: true,
    });

    try {
      const { account } = this.props;

      const { unitVal, contractAdr } = this.state;

      const web3 = new Web3(window.blockchain.jrpc);

      const platform = new Contract(factoryContractABI, factoryContractAddress);

      platform.setProvider(window.ethereum);

      const create = await platform.methods
        .createPool(contractAdr, 18 + unitVal)
        .send({
          from: account,
          value: web3.utils.toWei(String(fee), 'ether'),
        });

      if (!create.status) {
        openNotificationWithIcon(
          'ERROR',
          intl.get('CreatePoolError'),
          'error',
          5.5,
        );

        this.reset();

        return;
      }

      openNotificationWithIcon(
        'SUCCESS',
        intl.get('CreatePoolSuccess'),
        'success',
        5.5,
      );

      setTimeout(() => {
        window.open('/app', '_self');
      }, 3000);
    } catch (error) {
      openNotificationWithIcon('Error', error.message, 'error');

      this.reset();
    }

    this.setState({
      loadCommit: false,
    });
  }

  reset() {
    this.setState({
      fee: 0,

      step: 1,

      unitVal: 0,

      symbol: '--',

      adrload: false,

      poolload: true,

      unitStr: '1 : 1',

      contractAdr: '',
    });
  }

  backStep1() {
    this.setState({
      fee: 0,

      step: 1,

      unitVal: 0,

      symbol: '--',

      adrload: false,

      poolload: true,

      unitStr: '1 : 1',
    });
  }

  backStep2() {
    this.setState({
      fee: 0,

      step: 2,

      symbol: '--',

      poolload: true,
    });
  }

  linkUnit() {}

  connectWalletTip() {
    let { intl } = this.props;

    openNotificationWithIcon(
      intl.get('Tips'),
      intl.get('PleaseConnectYourWalletFirst'),
      'info',
      2,
    );
  }

  render() {
    let { intl, account } = this.props;

    let {
      adr,
      unit,
      commit,
      unitFinish,
      commitFinish,
      fee,
      step,
      symbol,
      unitStr,
      unitVal,
      coin_logo,
      loadCommit,
      contractAdr,
    } = this.state;

    return (
      <>
        <div className="pool">
          <div className="title">{intl.get('poolTitle')}</div>

          <div className="steps">
            <div className="steps-1">
              <img src={adr} />

              <span
                className={step > 0 ? 'steps-name finishName' : 'steps-name'}
              >
                {intl.get('poolAdr')}
              </span>
            </div>

            <div className="steps-2">
              <img src={step > 1 ? unitFinish : unit} />

              <span
                className={step > 1 ? 'steps-name finishName' : 'steps-name'}
              >
                {intl.get('poolUnit')}
              </span>
            </div>

            <div className="steps-3">
              <img src={step > 2 ? commitFinish : commit} />

              <span
                className={step > 2 ? 'steps-name finishName' : 'steps-name'}
              >
                {intl.get('poolCommit')}
              </span>
            </div>

            <div className={step > 1 ? 'line1 finishLine' : 'line1'} />
            <div className={step > 2 ? 'line2 finishLine' : 'line2'} />
          </div>

          {step == 1 ? (
            <div className="step-adr">
              <div className="adr">
                <span className="adr-name">{intl.get('poolAdrName')}</span>

                <textarea
                  id="adr-input"
                  onInput={this.onInput}
                  defaultValue={contractAdr}
                  placeholder={intl.get('poolPlaceholder')}
                />
              </div>

              <Spin size="large" spinning={this.state.adrload}>
                <div className="btn" onClick={this.checkAdr}>
                  {intl.get('poolNext')}
                </div>
              </Spin>
            </div>
          ) : (
            ''
          )}

          {step == 2 ? (
            <div className="step-unit">
              <div className="hint">
                {intl.get('poolUnitHint')}

                <LinkOutlined className="link" onClick={this.linkUnit} />
              </div>

              <div className="slider">
                <Slider
                  max={4}
                  min={-4}
                  step={1}
                  tipFormatter={null}
                  defaultValue={unitVal}
                  onChange={this.onChange}
                />
              </div>

              <div className="unit">
                <span className="unit-name">Unit</span>

                <span className="unit-value">{unitStr}</span>
              </div>

              <div className="handler">
                <div className="back" onClick={this.backStep1}>
                  {intl.get('poolBack')}
                </div>

                <div className="submit" onClick={this.checkUnit}>
                  {intl.get('poolNext')}
                </div>
              </div>
            </div>
          ) : (
            ''
          )}

          {step == 3 ? (
            <div className="step-commit">
              <div className="info">
                <div className="info-coin">
                  <div className="info-coin-base">
                    <span className="info-coin-base-title">
                      {intl.get('poolCommitTitle')}
                    </span>

                    <div className="info-coin-base-name">
                      <img src={coin_logo} alt="" />

                      <span className="info-coin-base-name-symbol">
                        {symbol}
                      </span>
                    </div>
                  </div>

                  <div className="info-coin-adr">{contractAdr}</div>
                </div>

                <div className="info-unit">
                  <div className="info-unit-num">
                    <span className="info-unit-num-title">Unit</span>

                    <span className="info-unit-num-ratio">{unitStr}</span>
                  </div>

                  <div className="info-unit-fee">
                    <span className="info-unit-fee-title">
                      {intl.get('poolFee')}
                    </span>

                    <span className="info-unit-fee-ratio">
                      {fee || '--'} ETH
                    </span>
                  </div>
                </div>
              </div>

              <div className="handler">
                <div className="back" onClick={this.backStep2}>
                  {intl.get('poolBack')}
                </div>

                <Spin size="large" spinning={this.state.poolload}>
                  <div
                    className="submit"
                    onClick={
                      account
                        ? () => {
                            this.commit();
                          }
                        : this.connectWalletTip
                    }
                  >
                    {intl.get('poolConfirm')}
                  </div>
                </Spin>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        {loadCommit ? <LoadingModal intl={intl} /> : ''}
      </>
    );
  }
}

export default Pool;
