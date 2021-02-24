import React from 'react';
import './index.less';
import { CoinLogoMap } from '../tools';
import Web3 from 'web3';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Row, Col, Tooltip } from 'antd';

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
    let info = CoinInfos[coinType];
    let balance = 0;
    if (coinType !== 'eth') {
      var suterShiledTokenContract = new Contract(
        info.contractABI,
        info.contractAddress,
      );
      suterShiledTokenContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      // console.log(suterShiledTokenContract)
      let balanceWithDecimal = await suterShiledTokenContract.methods
        .balanceOf(account)
        .call();
      balance = (balanceWithDecimal * 1.0) / 10 ** info.decimal;
    } else {
      let newWeb3 = new Web3(new Web3.providers.HttpProvider(JSONRPC_URL));
      let balanceWithDecimal = await newWeb3.eth.getBalance(account);
      balance = newWeb3.utils.fromWei(balanceWithDecimal, 'ether');
    }
    this.setState({
      balance: parseInt((balance * 10 ** info.decimal) / info.suterShieldUnit),
    });
  }

  async suterShieldBalance() {
    let { client } = this.props;
    if (!client) {
      return;
    }
    let balance = await client.readBalanceFromContract();
    this.setState({ suterShieldBalance: balance });
  }
  transformRate(a, b) {
    let molecular = a;
    let denominator = b;
    let min = Math.min(molecular, denominator);
    return `${molecular / min}:${denominator / min}`;
  }

  render() {
    let { coinType, intl } = this.props;
    let info = CoinInfos[coinType];
    let { balance, suterShieldBalance } = this.state;
    return (
      <Row className="balanceContainer" align="top" justify="space-between">
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={6}
          className="suterShieldBalance"
        >
          <div>
            <h1>
              {info.suterShiledBalanceDesc} {intl.get('Balance')}
            </h1>
            <div className="balanceInfoContainer">
              <div>
                <img src={CoinLogoMap[coinType][1]} />
              </div>
              <div className="info">
                <h2>{suterShieldBalance.toLocaleString()}</h2>
                <p className="value">
                  {info.valueDesc}(=
                  {(
                    (suterShieldBalance * 1.0 * info.suterShieldUnit) /
                    10 ** info.decimal
                  ).toLocaleString()}{' '}
                  {info.unit})
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6} className="coinBalance">
          <div>
            <h1>
              {info.coinBalanceDesc} {intl.get('Balance')}
            </h1>
            <div className="balanceInfoContainer">
              <div>
                <img src={CoinLogoMap[coinType][2]} />
              </div>
              <div className="info">
                <h2>{balance.toLocaleString()} Unit</h2>
                <p className="value">
                  {info.unit}(=
                  {(
                    (balance * info.suterShieldUnit * 1.0) /
                    10 ** info.decimal
                  ).toLocaleString()}{' '}
                  {info.unit})
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <div className="three">
            <div className="twoLogo">
              <img src={CoinLogoMap[coinType][2]} />
              <img src={CoinLogoMap[coinType][1]} className="ml-1" />
            </div>
            <div className="unit">
              <h1>
                {this.transformRate(info.suterShieldUnit, 10 ** info.decimal)}
              </h1>
              <p>Unit</p>
              <Tooltip placement="topLeft" title={intl.get('i')}>
                <ExclamationCircleOutlined className="i" />
              </Tooltip>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={6} className="logo">
          <img src={CoinLogoMap[coinType][0]} style={{ float: 'right' }} />
        </Col>
      </Row>
    );
  }
}

export default Balance;
