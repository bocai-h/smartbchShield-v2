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
  }

  connectWalletTip() {
    openNotificationWithIcon(
      'Tips',
      'Please connect your wallet first.',
      'info',
      2,
    );
  }

  developingTip() {
    openNotificationWithIcon('Tips', 'Developing...', 'info', 2);
  }

  render() {
    let { account, selectCoin, checkQA } = this.props;
    return (
      <div className="home">
        <Row>
          <Col span={24}>
            <div className="title">
              <h1>Choose which crypto currency you</h1>
              <h1>
                want to <span className="boldFont">transfer privately and securely</span>{' '}
                in
              </h1>
              <h1>Suterusu Network</h1>
              <Button
                className="tutorialBtn"
                shape="round"
                onClick={() => checkQA('help')}
              >
                Check Tutorial
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
