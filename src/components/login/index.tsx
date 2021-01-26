import React from 'react';
import { Button } from 'antd';
import { Client, openNotificationWithIcon } from '../tools';
import Web3 from 'web3';
import openEye from '../../static/openEye.svg';
import closeEye from '../../static/closeEye.svg';
import loginLogo from '../../static/login.svg';
import './index.less';

var Contract = require('web3-eth-contract');
class Login extends React.Component {
  state = {
    inputValue: '',
    toggleShowPrivateKey: false,
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleShowPrivateKey = this.toggleShowPrivateKey.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({ inputValue: value });
  }
  toggleShowPrivateKey() {
    this.setState({ toggleShowPrivateKey: !this.state.toggleShowPrivateKey });
  }
  async login() {
    let { account, coinType, setClient } = this.props;
    let { inputValue } = this.state;
    let info = CoinInfos[coinType];
    var suterShieldContract = new Contract(
      info.suterShiledContractABI,
      info.suterShiledContractAddress,
    );
    suterShieldContract.setProvider(window.ethereum);
    var lastestWeb3 = new Web3(window.ethereum);
    let suterShieldClient;
    if (coinType !== 'eth') {
      var suterShiledTokenContract = new Contract(
        info.contractABI,
        info.contractAddress,
      );
      suterShiledTokenContract.setProvider(window.ethereum);

      suterShieldClient = new Client.ClientSuterERC20(
        lastestWeb3,
        suterShieldContract,
        account,
        suterShiledTokenContract,
      );
    } else {
      suterShieldClient = new Client.ClientSuterETH(
        lastestWeb3,
        suterShieldContract,
        account,
      );
    }
    await suterShieldClient.init();
    let ok = await suterShieldClient.login(inputValue);
    if (ok === -1) {
      openNotificationWithIcon(
        'Warning',
        'This suter account not exists',
        'warn',
        4,
      );
    } else {
      setClient(suterShieldClient);
    }
  }

  render() {
    let { intl, setBeforeFilter } = this.props;
    let { inputValue, toggleShowPrivateKey } = this.state;
    return (
      <>
        <div className="loginContainer">
          <div className="left">
            <h1>Login</h1>
            <p>Your Suterusu Account</p>
            <div className="inputContainer">
              <input
                placeholder={intl.get('InsertYourprivatekey')}
                value={inputValue}
                type={toggleShowPrivateKey ? 'text' : 'password'}
                onChange={this.handleInputChange}
              />
              <div className="inputAppend">
                <img
                  src={toggleShowPrivateKey ? closeEye : openEye}
                  onClick={this.toggleShowPrivateKey}
                />
              </div>
            </div>
            <div className="btnContainer">
              <Button
                shape="round"
                block
                className="loginBtn"
                disabled={inputValue === ''}
                onClick={this.login}
              >
                Login
              </Button>
            </div>
            <div className="goToRegister">
              Don't have a account?{' '}
              <a className="registerLink" onClick={setBeforeFilter}>
                Register
              </a>
              .
            </div>
          </div>
          <div className="right">
            <img src={loginLogo} />
          </div>
        </div>
      </>
    );
  }
}
export default Login;
