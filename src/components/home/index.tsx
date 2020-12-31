import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import './index.less';
import ethLogo from '../../static/ethLogo.svg';
import daiLogo from '../../static/daiLogo.svg';
import usdtLogo from '../../static/usdtLogo.svg';
import suterLogo from '../../static/suterLogo.svg';
import { openNotificationWithIcon } from '../tools';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.connectWalletTip = this.connectWalletTip.bind(this)
    this.homeTitle = this.homeTitle.bind(this)
  }

  connectWalletTip() {
    let { intl } = this.props;
    openNotificationWithIcon(
      intl.get("Tips"),
      intl.get("PleaseConnectYourWalletFirst"),
      'info',
      2,
    );
  }

  developingTip() {
    openNotificationWithIcon('Tips', 'Developing...', 'info', 2);
  }

  homeTitle() {
    let { intl } = this.props;
    if(intl.options.currentLocale === "en-US"){
      return(<>
      <h1>{intl.get("ChooseWhichCryptoCurrencyYou")}</h1>
      <h1>
        {intl.get("WantTo")}{' '}
        <span className="boldFont">
        {intl.get("PrivatelyTransfer")}
        </span>{' '}
        {intl.get("Via")}
      </h1>
      <h1>{intl.get("SuterusuNetwork")}</h1></>)
    }else{
      return(<>
        <h1>{intl.get("homeTitleCN1")}</h1>
        <h1>
        <span className="boldFont">{intl.get("homeTitleCN2")}</span>
        {intl.get("homeTitleCN3")}</h1>
      </> )
    }
  }

  render() {
    let { account, selectCoin, checkQA, intl } = this.props;
    this.homeTitle();
    return (
      <div className="home">
        <Row>
          <Col span={24}>
            <div className="title">
              { this.homeTitle() }
              <Button
                className="tutorialBtn"
                shape="round"
                size="large"
                onClick={() => checkQA('help')}
              >
                {intl.get('CheckTutorial')}
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="cardContainer">
          <Col span={24}>
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
              <div>
                <img src={ethLogo} alt="eth logo" />
              </div>
            </div>
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
              <div>
                <img src={daiLogo} alt="dai logo" />
              </div>
            </div>
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
                <p>Transfer USDT to sUSDT</p>
              </div>
              <div>
                <img src={usdtLogo} alt="usdt logo" />
              </div>
            </div>
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
              <div>
                <img src={suterLogo} alt="suter logo" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
