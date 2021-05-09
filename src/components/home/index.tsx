import React from 'react';
import { Row, Col, Button, Tooltip } from 'antd';
import './index.less';
import ethLogo from '../../static/ethLogo.svg';
import daiLogo from '../../static/daiLogo.svg';
import usdtLogo from '../../static/usdtLogo.svg';
import suterLogo from '../../static/suterLogo.svg';
import renBTCLogo from '../../static/renBTCLogo.svg';
import SHIBLogo from '../../static/SHIBLogo.svg';
import { openNotificationWithIcon } from '../tools';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.connectWalletTip = this.connectWalletTip.bind(this);
    this.homeTitle = this.homeTitle.bind(this);
    this.upcoming = this.upcoming.bind(this);
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

  upcoming() {
    let { intl } = this.props;
    openNotificationWithIcon(intl.get('Tips'), intl.get('Upcoming'), 'info', 2);
  }

  developingTip() {
    openNotificationWithIcon('Tips', 'Developing...', 'info', 2);
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
            {intl.get('Via')}
          </h1>
          <h1>{intl.get('SuterusuNetwork')}</h1>
        </>
      );
    } else {
      return (
        <>
          <h1>{intl.get('homeTitleCN1')}</h1>
          <h1>
            <span className="boldFont">{intl.get('homeTitleCN2')}</span>
            {intl.get('homeTitleCN3')}
          </h1>
        </>
      );
    }
  }

  render() {
    let { account, selectCoin, intl } = this.props;
    this.homeTitle();
    return (
      <div className="home">
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
        <Row
          className="cardContainer"
          justify="start"
          wrap={true}
          gutter={[0, 32]}
        >
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <div
              className="card"
              onClick={
                account === ''
                  ? this.connectWalletTip
                  : () => {
                      selectCoin('eth');
                    }
              }
            >
              <div>
                <h1>ETH</h1>
                <p>Transfer ETH to SETH</p>
              </div>
              <div className="ETH">
                <img src={ethLogo} alt="eth logo" />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <div
              className="card"
              onClick={
                account === ''
                  ? this.connectWalletTip
                  : () => {
                      selectCoin('dai');
                    }
              }
            >
              <div>
                <h1>DAI</h1>
                <p>Transfer DAI to SDAI</p>
              </div>
              <div className="DAI">
                <img src={daiLogo} alt="dai logo" />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <div
              className="card"
              onClick={
                account === ''
                  ? this.connectWalletTip
                  : () => {
                      selectCoin('usdt');
                    }
              }
            >
              <div>
                <h1>USDT</h1>
                <p>Transfer USDT to SUSDT</p>
              </div>
              <div className="USDT">
                <img src={usdtLogo} alt="usdt logo" />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <div
              className="card"
              onClick={
                account === ''
                  ? this.connectWalletTip
                  : () => {
                      selectCoin('suter');
                    }
              }
            >
              <div>
                <h1>SUTER</h1>
                <p>Transfer SUTER to SSUTER</p>
              </div>
              <div className="SUTER">
                <img src={suterLogo} alt="suter logo" />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <div
              className="card"
              onClick={
                account === ''
                  ? this.connectWalletTip
                  : () => {
                      selectCoin('renBTC');
                    }
              }
            >
              <div>
                <h1>RENBTC</h1>
                <p>Transfer RENBTC to SRENBTC</p>
              </div>
              <div className="renBTC">
                <img src={renBTCLogo} alt="renBTC logo" />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Tooltip
              title={intl.get('Upcoming')}
              placement="rightTop"
              color="#b9aaff"
            >
              <div className="card" onClick={this.upcoming}>
                <div>
                  <h1>SHIB</h1>
                  <p>Upcoming</p>
                </div>
                <div className="SHIB">
                  <img src={SHIBLogo} alt="SHIB logo" />
                </div>
              </div>
            </Tooltip>
          </Col>
          {/* <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Tooltip
              title={intl.get('Upcoming')}
              placement="rightTop"
              color="#b9aaff"
            >
              <div className="card" onClick={this.upcoming}>
                <div>
                  <h1>SUTER/USDT</h1>
                  <p>Lp token</p>
                </div>
                <div className="suterUsdtLp">
                  <img src={suterUsdtLpLogo} alt="suterUsdtLp logo" />
                </div>
              </div>
            </Tooltip>
          </Col> */}
          {/* <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Tooltip
              title={intl.get('Upcoming')}
              placement="rightTop"
              color="#b9aaff"
            >
              <div className="card" onClick={this.upcoming}>
                <div>
                  <h1>AAVE</h1>
                  <p>Upcoming</p>
                </div>
                <div className="TORN">
                  <img src={aaveLogo} alt="aave logo" />
                </div>
              </div>
            </Tooltip>
          </Col> */}
          {/* <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Tooltip
              title={intl.get('Upcoming')}
              placement="rightTop"
              color="#b9aaff"
            >
              <div className="card" onClick={this.upcoming}>
                <div>
                  <h1>TORN</h1>
                  <p>Upcoming</p>
                </div>
                <div className="TORN">
                  <img src={tornLogo} alt="torn logo" />
                </div>
              </div>
            </Tooltip>
          </Col> */}
        </Row>
      </div>
    );
  }
}

export default Home;
