import React from 'react';
import { Button } from 'antd';
import { Client, openNotificationWithIcon, CoinLogoMap } from '../tools';
import LoadingModal from '../loadingModal';
import Web3 from 'web3';
import openEye from '../../static/openEye.svg';
import closeEye from '../../static/closeEye.svg';
import './index.less';

var Contract = require('web3-eth-contract');
class Login extends React.Component {
  state = {
    inputValue: '',
    toggleShowPrivateKey: false,
    proccessing: false,
    btnTxt: 'Login',
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleShowPrivateKey = this.toggleShowPrivateKey.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({ inputValue: value, btnTxt: 'Login' });
    if (value !== '' && !this.isPrivateKeyValid(value)) {
      this.setState({ btnTxt: 'invalidPrivateKeyTips' });
    }
  }
  toggleShowPrivateKey() {
    this.setState({ toggleShowPrivateKey: !this.state.toggleShowPrivateKey });
  }

  isPrivateKeyValid(privateKey) {
    let reg = /^(?=.*[a-z])(?=.*\d)[^]{16,64}$/;
    return reg.test(privateKey);
  }

  async login() {
    this.setState({ proccessing: true });
    let { account, coinType, setClient } = this.props;
    let { inputValue } = this.state;
    let info = window.globalCoinInfos[coinType];
    let abi = info.is_platform_coin ? SuterPlatformCoinABI : SuterERC20ABI;

    var suterShieldContract = new Contract(
      abi,
      info.suter_shields_contract_address,
    );

    suterShieldContract.setProvider(window.ethereum);
    var lastestWeb3 = new Web3(window.ethereum);
    let suterShieldClient;

    if (!info.is_platform_coin) {
      var suterShiledTokenContract = new Contract(
        ERC20ABI,
        info.contract_address,
      );

      suterShiledTokenContract.setProvider(window.ethereum);

      suterShieldClient = new Client.ClientSuterERC20(
        lastestWeb3,
        suterShieldContract,
        account,
        suterShiledTokenContract,
      );
    } else {
      suterShieldClient = new Client.ClientSuterPlatformCoin(
        lastestWeb3,
        suterShieldContract,
        account,
      );
    }
    await suterShieldClient.init();
    let ok = await suterShieldClient.login(inputValue);
    if (ok === -1) {
      this.setState({ proccessing: false });
      openNotificationWithIcon(
        'Warning',
        this.props.intl.get('ThisSuterAccountNotExists'),
        'warn',
        4,
      );
    } else {
      setClient(suterShieldClient);
      this.setState({ proccessing: false });
    }
  }

  render() {
    let { intl, setBeforeFilter, coinType } = this.props;
    let { inputValue, toggleShowPrivateKey, proccessing, btnTxt } = this.state;
    let submitable = inputValue !== '' && this.isPrivateKeyValid(inputValue);
    return (
      <>
        {proccessing ? <LoadingModal intl={intl} /> : ''}
        <div className="loginContainer">
          <div className="left">
            <div className="title">
              <div className="tleft">
                <h1>{intl.get('Login')}</h1>
                <p>{intl.get('YourSuterusuAccount')}</p>
              </div>
              <div className="tright">
                <img src={window.globalCoinInfos[coinType].logo} />
              </div>
            </div>
            <div className="inputContainer">
              <input
                placeholder={intl.get('InsertYourPrivatekey', { coinType })}
                value={inputValue}
                type={toggleShowPrivateKey ? 'text' : 'password'}
                onChange={this.handleInputChange}
                className={
                  inputValue != '' && !this.isPrivateKeyValid(inputValue)
                    ? 'invalidPrivateKey'
                    : ''
                }
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
                disabled={!submitable}
                onClick={this.login}
              >
                {intl.get(btnTxt)}
              </Button>
            </div>
            <div className="goToRegister">
              {intl.get('DoNotHaveAAccount')}{' '}
              <a className="registerLink" onClick={setBeforeFilter}>
                {intl.get('Register')}
              </a>
              .
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;
