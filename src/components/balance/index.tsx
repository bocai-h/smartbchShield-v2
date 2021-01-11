import React from 'react';
import './index.less';
import { Infos } from '../tools';
import Web3 from 'web3';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

var Contract = require('web3-eth-contract');

class Balance extends React.Component {
  state = {
    balance: 0,
    suterShieldBalance: 0,
  };
  constructor(props) {
    super(props);
    this.getBalance = this.getBalance.bind(this);
  }
  async componentDidMount() {
    await this.getBalance();
    await this.suterShieldBalance();
    let { setBalanceFunc } = this.props;
    let { balance, suterShieldBalance } = this.state;
    setBalanceFunc(balance, suterShieldBalance);
  }
  async getBalance() {
    let { account, coinType } = this.props;
    let info = Infos[coinType];
    let balance = 0;
    if (coinType !== 'eth') {
      var suterShiledTokenContract = new Contract(
        info.contractABI,
        info.contractAddress,
      );
      suterShiledTokenContract.setProvider(window.web3.currentProvider);
      // console.log(suterShiledTokenContract)
      let balanceWithDecimal = await suterShiledTokenContract.methods
        .balanceOf(account)
        .call();
      balance = (balanceWithDecimal * 1.0) / (10 ** info.decimal);
    } else {
      let newWeb3 = new Web3(window.web3.currentProvider);
      let balanceWithDecimal = await newWeb3.eth.getBalance(account);
      balance = newWeb3.utils.fromWei(balanceWithDecimal, 'ether');
    }
    this.setState({ balance: parseInt(balance * info.suterShieldUnit) });
  }

  async suterShieldBalance() {
    let { client } = this.props;
    if (!client) {
      return;
    }
    let balance = await client.readBalanceFromContract();
    this.setState({ suterShieldBalance: balance });
  }
  render() {
    let { coinType, intl } = this.props;
    let info = Infos[coinType];
    let { balance, suterShieldBalance } = this.state;
    return (
      <div className="balanceContainer">
        <div>
          <h1>
            {info.suterShiledBalanceDesc} {intl.get('Balance')}
          </h1>
          <div className="balanceInfoContainer">
            <div>
              <img src={info.logo[coinType][1]} />
            </div>
            <div className="info">
              <h2>{suterShieldBalance.toLocaleString()}</h2>
              <p className="value">
                {info.valueDesc}(=
                {(
                  (suterShieldBalance * 1.0) /
                  info.suterShieldUnit
                ).toLocaleString()}{' '}
                {info.unit})
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1>
            {info.coinBalanceDesc} {intl.get('Balance')}
          </h1>
          <div className="balanceInfoContainer">
            <div>
              <img src={info.logo[coinType][2]} />
            </div>
            <div className="info">
              <h2>{balance.toLocaleString()} Unit</h2>
              <p className="value">
                {info.unit}(=
                {((balance * 1.0) / info.suterShieldUnit).toLocaleString()}{' '}
                {info.unit})
              </p>
            </div>
          </div>
        </div>
        <div className="three">
          <div className="twoLogo">
            <img src={info.logo[coinType][1]} />
            <img src={info.logo[coinType][2]} className="ml-1" />
          </div>
          <div className="unit">
            <h1>1:{info.suterShieldUnit}</h1>
            <p>Unit</p>
            <Tooltip placement="topLeft" title={intl.get('i')}>
              <ExclamationCircleOutlined className="i" />
            </Tooltip>
          </div>
        </div>

        <div>
          <img src={info.logo[coinType][0]} />
        </div>
      </div>
    );
  }
}

export default Balance;
