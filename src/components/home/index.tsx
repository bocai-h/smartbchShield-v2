import React from 'react';
import { Spin, Row, Col, Button } from 'antd';
import { openNotificationWithIcon } from '../tools';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';

var Contract = require('web3-eth-contract');

import { Sentry } from 'umi';

import axios from 'axios';

import Web3 from 'web3';

import './index.less';

class Home extends React.Component {
  state = {
    showCoinList: false,

    loading: true,

    habit: [
      {
        name: 'ETH',
        logo:
          'https://sutershield-logo.s3.ap-southeast-1.amazonaws.com/eth/static/ETH.svg',
      },
      {
        name: 'USDT',
        logo:
          'https://sutershield-logo.s3.ap-southeast-1.amazonaws.com/eth/static/USDT.svg',
      },
      {
        name: 'DAI',
        logo:
          'https://sutershield-logo.s3.ap-southeast-1.amazonaws.com/eth/static/DAI.svg',
      },
      {
        name: 'SUTER',
        logo:
          'https://sutershield-logo.s3.ap-southeast-1.amazonaws.com/eth/static/SUTER.svg',
      },
      {
        name: 'RENBTC',
        logo:
          'https://sutershield-logo.s3.ap-southeast-1.amazonaws.com/eth/static/RENBTC.svg',
      },
    ],

    list: [],

    result: [],

    logo: require('../../static/default-logo.svg'),

    s_logo: require('../../static/default-s-coin.svg'),

    coin_logo: require('../../static/default-coin-logo.svg'),
  };

  constructor(props) {
    super(props);
    this.connectWalletTip = this.connectWalletTip.bind(this);
    this.homeTitle = this.homeTitle.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onInput = this.onInput.bind(this);
    this.showCoinList = this.showCoinList.bind(this);
    this.closeCoinList = this.closeCoinList.bind(this);

    this.createPool = this.createPool.bind(this);
  }

  async componentDidMount() {
    await this.requestCoin();
    await this.requestBlockChain();
  }

  async requestCoin() {
    try {
      let response = await axios.get(
        `/${ShieldApi}/public_api/suter_shield_coins.json?blockchain_type=${CHAIN_NAME}`,
      );

      if (response.status == 200) {
        let shieldCoins = response.data.blockchain.suter_shield_coins;

        let customCoins = localStorage.getItem('createPool') || '[]';

        let coins = shieldCoins.concat(JSON.parse(customCoins));

        this.setState({
          list: coins,
          result: coins,
        });

        let globalCoinInfos: any = {};

        for (const it of coins) {
          globalCoinInfos[it.name] = it;
        }

        (window as any)['globalCoinInfos'] = globalCoinInfos;
      } else {
        openNotificationWithIcon(
          'suter_shield_coins Api Error',
          'Fetch suter_shield_coins error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      openNotificationWithIcon(
        'Network Error',
        'Fetch suter_shield_coins error',
        'warning',
        4.5,
      );
      Sentry.captureException(error);
    }
  }

  async requestBlockChain() {
    try {
      let response = await axios.get(
        `/${ShieldApi}/public_api/suter_shield_blockchain.json?blockchain_type=${CHAIN_NAME}`,
      );

      if (response.status == 200) {
        (window as any)['blockchain'] = response.data.blockchain;

        this.setState({
          loading: false,
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

  connectWalletTip() {
    let { intl } = this.props;

    openNotificationWithIcon(
      intl.get('Tips'),
      intl.get('PleaseConnectYourWalletFirst'),
      'info',
      2,
    );
  }

  homeTitle() {
    let { intl } = this.props;
    if (intl.options.currentLocale === 'en-US') {
      return (
        <>
          <h1>{intl.get('ChooseWhichCryptoCurrencyYou')}</h1>
          <h1>
            {intl.get('WantTo')}{' '}
            <span className="boldFont">{intl.get('PrivatelyTransfer')}</span>{' '}
          </h1>
          <h1>
            {intl.get('Via')} {intl.get('SuterusuNetwork')}
          </h1>
        </>
      );
    } else {
      return (
        <>
          <h1>{intl.get('homeTitleCN1')}</h1>
          <h1>{intl.get('homeTitleCN2')}</h1>

          <h1>
            <span className="boldFont">{intl.get('homeTitleCN3')}</span>{' '}
            {intl.get('homeTitleCN4')}
          </h1>
        </>
      );
    }
  }

  createPool() {
    window.open('/create_pool', '_blank');
  }

  onFocus() {
    this.setState({ showCoinList: true });
  }

  closeCoinList() {
    this.setState({ showCoinList: false });
  }

  showCoinList(e) {
    e.stopPropagation();
  }

  async onInput(e) {
    let { list } = this.state;

    let val = e.target.value;

    let result = [];

    if (!!val) {
      result = list.filter(
        res =>
          res.name.toLowerCase().includes(val.toLowerCase()) ||
          res.contract_address.toLowerCase().includes(val.toLowerCase()),
      );

      let newWeb3 = new Web3(window.blockchain.jrpc);

      let isAdr = newWeb3.utils.isAddress(val);

      if (!result.length && isAdr) {
        this.setState({
          loading: true,
        });

        const res = await this.customCoin(val);

        this.setState({
          loading: false,
        });

        if (res) {
          return;
        }
      }

      this.setState({
        result,
      });
    } else {
      this.setState({
        result: list,
      });
    }
  }

  async customCoin(val) {
    let adr = String(val).toLowerCase();

    if (!adr.startsWith('0x')) {
      adr = `0x${adr}`;
    }

    try {
      let factoryContract = new Contract(
        factoryContractABI,
        factoryContractAddress,
      );

      factoryContract.setProvider(
        new Web3.providers.HttpProvider(window.blockchain.jrpc),
      );

      const suterShieldAdr = await factoryContract.methods.getPool(adr).call();

      if (suterShieldAdr == '0x0000000000000000000000000000000000000000') {
        return false;
      }

      let customCoinContract = new Contract(ERC20ABI, adr);

      let suterShieldContract = new Contract(SuterERC20ABI, suterShieldAdr);

      customCoinContract.setProvider(
        new Web3.providers.HttpProvider(window.blockchain.jrpc),
      );

      suterShieldContract.setProvider(
        new Web3.providers.HttpProvider(window.blockchain.jrpc),
      );

      const symbol = await customCoinContract.methods.symbol().call();

      const decimals = await customCoinContract.methods.decimals().call();

      const unit = await suterShieldContract.methods.unit().call();

      const name = symbol.toUpperCase();

      const decimal = Number(decimals);

      const suter_shields_unit = Number(unit);

      const { logo, s_logo, coin_logo } = this.state;

      const newCoin = {
        name,
        decimal,
        suter_shields_unit,
        contract_address: adr,
        suter_shields_contract_address: suterShieldAdr,

        logo,
        s_logo,
        coin_logo,

        price: '',

        mining: false,
        mining_end: false,
        is_platform_coin: false,

        mining_contract_address: null,
        mining_release_duration: null,
        mining_lock_multiply_duration: null,
      };

      window.globalCoinInfos[name] = newCoin;

      const result = [newCoin];

      const { list: old } = this.state;

      const list = old.concat(result);

      let history = localStorage.getItem('createPool') || '[]';

      let update = JSON.parse(history).concat([newCoin]);

      localStorage.setItem('createPool', JSON.stringify(update));

      this.setState({
        list,
        result,
      });

      return true;
    } catch (error) {
      openNotificationWithIcon('Error', error.message, 'error');
      return false;
    }
  }

  render() {
    let { account, selectCoin, intl } = this.props;

    let { result, habit, showCoinList, loading } = this.state;

    this.homeTitle();

    return (
      <div className="home" onClick={this.closeCoinList}>
        <Row>
          <Col span={24}>
            <div className="title">
              {this.homeTitle()}

              <Button className="tutorialBtn" shape="round" size="large">
                <a href="/tutorial" target="_blank">
                  {intl.get('CheckTutorial')}
                </a>
              </Button>
            </div>
          </Col>
        </Row>

        <div className="hint">{intl.get('searchHint')}</div>

        <Spin size="large" spinning={loading} onClick={this.showCoinList}>
          <div className="search" onClick={this.showCoinList}>
            <div className="search_input">
              <input
                type="text"
                className="search_input_coin"
                placeholder={intl.get('placeholder')}
                onFocus={this.onFocus}
                onInput={this.onInput}
              />

              <SearchOutlined className="searchOutlined" />
            </div>

            {showCoinList ? (
              <div className="coin">
                <div className="habit">
                  <span className="habit_name">{intl.get('habit')}</span>

                  <div className="habit_list">
                    {habit.map((it, index) => {
                      return (
                        <div
                          className="habit_coin"
                          key={index}
                          onClick={
                            account === ''
                              ? this.connectWalletTip
                              : () => {
                                  selectCoin(it.name);
                                }
                          }
                        >
                          <img src={it.logo} />

                          <span className="habit_coin_name">{it.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="list">
                  {result.map((it, index) => {
                    return (
                      <div
                        className="list_coin"
                        key={index}
                        onClick={
                          account === ''
                            ? this.connectWalletTip
                            : () => {
                                selectCoin(it.name);
                              }
                        }
                      >
                        <img src={it.coin_logo} />

                        <div className="list_coin_item">
                          <span className="list_coin_item_name">{it.name}</span>

                          <span className="list_coin_item_chain">
                            {it.contract_address}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {!result.length ? (
                    <div className="noResult">
                      <span className="noResult_name">
                        {intl.get('noResultName')}
                      </span>

                      <span
                        onClick={this.createPool}
                        className="noResult_create"
                      >
                        {intl.get('noResultCreate')}
                      </span>
                    </div>
                  ) : (
                    ''
                  )}
                </div>

                <div className="addPool" onClick={this.createPool}>
                  <PlusCircleOutlined className="addPool_img" />

                  <span className="addPool_name">{intl.get('addPool')}</span>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </Spin>
      </div>
    );
  }
}

export default Home;
