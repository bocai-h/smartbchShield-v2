import React from 'react';
import './index.less';
import LoadingModal from '../loadingModal';
import Web3 from 'web3';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Row, Col, Tooltip } from 'antd';

var Contract = require('web3-eth-contract');

class Balance extends React.Component {
  state = {
    balance: 0,
    suterShieldBalance: 0,
    processing: false,
  };
  constructor(props) {
    super(props);
    this.getBalance = this.getBalance.bind(this);
    this.suterShieldBalance = this.suterShieldBalance.bind(this);
  }
  async componentDidMount() {
    this.setState({ processing: true });
    await this.getBalance();
    await this.suterShieldBalance();
    this.setState({ processing: false });

    let { setBalanceFunc } = this.props;
    let { balance, suterShieldBalance } = this.state;
    setBalanceFunc(balance, suterShieldBalance);

    this.interval = setInterval(async () => {
      await this.getBalance();
      await this.suterShieldBalance();
      let { balance, suterShieldBalance } = this.state;
      let { setBalanceFunc } = this.props;
      setBalanceFunc(balance, suterShieldBalance);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async getBalance() {
    let { account, coinType } = this.props;
    let info = window.globalCoinInfos[coinType];
    let balance = 0;

    if (!info.is_platform_coin) {
      var suterShiledTokenContract = new Contract(
        ERC20ABI,
        info.contract_address,
      );

      suterShiledTokenContract.setProvider(window.ethereum);

      let balanceWithDecimal = await suterShiledTokenContract.methods
        .balanceOf(account)
        .call();

      balance = (balanceWithDecimal * 1.0) / 10 ** info.decimal;
    } else {
      let newWeb3 = new Web3(
        new Web3.providers.HttpProvider(window.blockchain.jrpc),
      );
      let balanceWithDecimal = await newWeb3.eth.getBalance(account);
      balance = newWeb3.utils.fromWei(balanceWithDecimal, 'ether');
    }
    this.setState({
      balance: parseInt(
        (balance * 10 ** info.decimal) / 10 ** info.suter_shields_unit,
      ),
    });
  }

  async suterShieldBalance() {
    let { client } = this.props;
    if (!client) {
      return;
    }
    // let balance = await client.readBalanceFromContract();
    let balance = client.account.balance();
    this.setState({ suterShieldBalance: balance });
  }

  transformRate(a, b) {
    let molecular = a;
    let denominator = b;
    let min = Math.min(molecular, denominator);
    return `${Number.parseInt(
      (molecular / min).toFixed(4),
    )} : ${Number.parseInt((denominator / min).toFixed(4))}`;
  }

  render() {
    let { coinType, intl } = this.props;
    let info = window.globalCoinInfos[coinType];
    let { balance, suterShieldBalance, processing } = this.state;
    return (
      <>
        {processing ? <LoadingModal intl={intl} /> : ''}
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
                {`Suter ${info.name}`} {intl.get('Balance')}
              </h1>
              <div className="balanceInfoContainer">
                <div>
                  <img src={window.globalCoinInfos[coinType].s_logo} />
                </div>
                <div className="info">
                  <h2>{suterShieldBalance.toLocaleString()}</h2>
                  <p className="value">
                    {`Suter ${info.name}`}(=
                    {(
                      (suterShieldBalance *
                        1.0 *
                        10 ** info.suter_shields_unit) /
                      10 ** info.decimal
                    ).toLocaleString()}{' '}
                    {info.name})
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6} className="coinBalance">
            <div>
              <h1>
                {info.name} {intl.get('Balance')}
              </h1>
              <div className="balanceInfoContainer">
                <div>
                  <img src={window.globalCoinInfos[coinType].coin_logo} />
                </div>
                <div className="info">
                  <h2>{balance.toLocaleString()} Unit</h2>
                  <p className="value">
                    {info.name}(=
                    {(
                      (balance * 10 ** info.suter_shields_unit * 1.0) /
                      10 ** info.decimal
                    ).toLocaleString()}{' '}
                    {info.name})
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6}>
            <div className="three">
              <div className="twoLogo">
                <img src={window.globalCoinInfos[coinType].coin_logo} />
                <img
                  src={window.globalCoinInfos[coinType].s_logo}
                  className="ml-1"
                />
              </div>
              <div className="unit">
                <h2>
                  {this.transformRate(
                    10 ** info.suter_shields_unit,
                    10 ** info.decimal,
                  )}
                </h2>
                <p className="value">Unit</p>
                <Tooltip
                  placement="topLeft"
                  title={intl.get('i')}
                  trigger={['hover', 'click']}
                >
                  <ExclamationCircleOutlined
                    className="i"
                    style={{ zIndex: 100 }}
                  />
                </Tooltip>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={6} className="logo">
            <img
              className="token_logo"
              src={window.globalCoinInfos[coinType].logo}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default Balance;
