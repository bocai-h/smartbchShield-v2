import React from 'react';
import { Button } from 'antd';
import { Client, openNotificationWithIcon } from '../tools';
import SpinModal from '../spinModal';
import Web3 from 'web3';
import openEye from '../../static/openEye.svg';
import closeEye from '../../static/closeEye.svg';
import registerLogo from '../../static/register.svg';
import './index.less';

var randomstring = require('randomstring');
var Contract = require('web3-eth-contract');
class Login extends React.Component {
  state = {
    generatedPrivateKey: '',
    toggleShowPrivateKey: false,
    PrivateKeyGenerated: false,
    createdByYourself: false,
    privateKey: '',
    confirmPrivateKey: '',
    agree: false,
    registerBtnTxt: 'InputYourPrivateKey',
    proccessing: false,
  };

  constructor(props) {
    super(props);
    this.toggleShowPrivateKey = this.toggleShowPrivateKey.bind(this);
    this.generatePrivateKey = this.generatePrivateKey.bind(this);
    this.copyGeneratedPrivateKey = this.copyGeneratedPrivateKey.bind(this);
    this.createdByYourself = this.createdByYourself.bind(this);
    this.handlePrivateKeyInput = this.handlePrivateKeyInput.bind(this);
    this.handleConfirmPrivateKeyInput = this.handleConfirmPrivateKeyInput.bind(
      this,
    );
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.register = this.register.bind(this);
  }

  toggleShowPrivateKey() {
    this.setState({ toggleShowPrivateKey: !this.state.toggleShowPrivateKey });
  }

  async register() {
    this.setState({ proccessing: true });
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
    try {
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
      await suterShieldClient.register(inputValue);
    } catch (error) {
      if (error.code !== '') {
        openNotificationWithIcon('Error', error.message, 'error');
      } else {
        openNotificationWithIcon('Error', error.toString(), 'warning');
      }
      this.setState({ proccessing: false });
      return;
    }
    // set client to form component
    setClient(suterShieldClient);
    this.setState({ proccessing: false });
  }

  handlePrivateKeyInput(e) {
    let value = e.target.value;
    this.setState({ privateKey: value, registerBtnTxt: 'Register' });
    let { confirmPrivateKey } = this.state;
    if (confirmPrivateKey !== value) {
      this.setState({ registerBtnTxt: 'invalidConfirmPrivateKeyTips' });
    }
    if (!this.isPrivateKeyValid(value)) {
      this.setState({ registerBtnTxt: 'invalidPrivateKeyTips' });
    }
  }
  handleConfirmPrivateKeyInput(e) {
    let { privateKey } = this.state;
    let value = e.target.value;
    this.setState({ confirmPrivateKey: value, registerBtnTxt: 'Register' });

    if (privateKey !== '' && !this.isPrivateKeyValid(privateKey)) {
      this.setState({ registerBtnTxt: 'invalidPrivateKeyTips' });
    }
    if (value !== privateKey) {
      this.setState({ registerBtnTxt: 'invalidConfirmPrivateKeyTips' });
    }
  }
  handleCheckbox(e) {
    this.setState({ agree: !this.state.agree });
  }

  isPrivateKeyValid(privateKey) {
    let reg = /^(?=.*[a-z])(?=.*\d)[^]{16,64}$/;
    return reg.test(privateKey);
  }

  generatePrivateKey() {
    let lastestWeb3 = new Web3(window.ethereum);
    let entropy = randomstring.generate({ length: 32, charset: 'alphabetic' });
    let privateKey = lastestWeb3.eth.accounts
      .create(entropy)
      ['privateKey'].substring(2);
    this.setState({
      PrivateKeyGenerated: true,
      generatedPrivateKey: privateKey,
    });
    this.downloadString(
      privateKey,
      'text/text',
      `${this.fileNameGenerator('privateKey')}.txt`,
    );
  }

  fileNameGenerator(baseName: string): string {
    let d = new Date();
    let fileName = `${baseName}_${d.getFullYear()}_${d.getMonth()}_${d.getDate()}_${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}`;
    return fileName;
  }

  copyGeneratedPrivateKey() {
    let { generatedPrivateKey } = this.state;
    let textArea = document.createElement('textarea');
    textArea.value = generatedPrivateKey;
    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    let { intl } = this.props;
    openNotificationWithIcon(
      intl.get('Tips'),
      intl.get('Copied'),
      'success',
      1,
    );
    this.setState({ createdByYourself: true });
  }
  createdByYourself() {
    this.setState({ createdByYourself: true });
  }

  downloadString(text, fileType, fileName) {
    var blob = new Blob([text], { type: fileType });
    var a = document.createElement('a');
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() {
      URL.revokeObjectURL(a.href);
    }, 1500);
  }

  render() {
    let { intl, setBeforeFilter } = this.props;
    let {
      toggleShowPrivateKey,
      PrivateKeyGenerated,
      generatedPrivateKey,
      createdByYourself,
      privateKey,
      confirmPrivateKey,
      agree,
      registerBtnTxt,
      proccessing,
    } = this.state;
    let submitable =
      privateKey !== '' &&
      this.isPrivateKeyValid(privateKey) &&
      privateKey === confirmPrivateKey &&
      agree;
    return (
      <>
        {proccessing ? <SpinModal intl={intl} /> : ''}
        <div className="registerContainer">
          <div className="left">
            <div className="title">
              <h1>Register</h1>
              <p>Your Suterusu Account</p>
            </div>
            {!createdByYourself ? (
              <>
                <div className="registerTipsContainer">
                  Please use our key generator or use a key that is as random as
                  your Metamask wallet private key as the Suter account private
                  key, and copy it on paper for safekeeping.{' '}
                  <span className="tips">
                    Never share your private key with others
                  </span>
                  .
                </div>
                <div className="btnContainer">
                  {!PrivateKeyGenerated ? (
                    <Button
                      shape="round"
                      block
                      className="PrivateKeyGenerator"
                      onClick={this.generatePrivateKey}
                    >
                      Private Key Generator
                    </Button>
                  ) : (
                    <div className="privateKeyGeneratorInput">
                      <div className="inputContainer">
                        <input
                          value={generatedPrivateKey}
                          readOnly
                          type={toggleShowPrivateKey ? 'text' : 'password'}
                        />
                        <div className="inputAppend">
                          <img
                            src={toggleShowPrivateKey ? closeEye : openEye}
                            onClick={this.toggleShowPrivateKey}
                          />
                        </div>
                      </div>
                      <Button
                        shape="round"
                        block
                        className="PrivateKeyGenerator"
                        onClick={this.copyGeneratedPrivateKey}
                      >
                        Copy and Next
                      </Button>
                    </div>
                  )}
                  <p style={{ textAlign: 'center', marginBottom: 0 }}>or</p>
                  <Button shape="round" block onClick={this.createdByYourself}>
                    Create By Yourself
                  </Button>
                </div>
              </>
            ) : (
              <div className="createByYourself">
                <div className="inputContainer">
                  <p>Input Your Private Key</p>
                  <input
                    placeholder={intl.get('InsertYourPrivatekey')}
                    type={toggleShowPrivateKey ? 'text' : 'password'}
                    onChange={this.handlePrivateKeyInput}
                    className={
                      privateKey != '' && !this.isPrivateKeyValid(privateKey)
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

                <div className="inputContainer" style={{ marginTop: '20px' }}>
                  <p>Confirm Your Private Key</p>
                  <input
                    placeholder={intl.get('InsertYourPrivatekey')}
                    type={toggleShowPrivateKey ? 'text' : 'password'}
                    onChange={this.handleConfirmPrivateKeyInput}
                    className={
                      privateKey != '' && privateKey !== confirmPrivateKey
                        ? 'invalidConfirmPrivateKey'
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
                <div className="checkboxContainer">
                  <input type="checkbox" onChange={this.handleCheckbox} />
                  <p>{intl.get('RegisterAgree')}</p>
                </div>
                <div className="btnContainer">
                  <Button
                    shape="round"
                    block
                    disabled={!submitable}
                    onClick={this.register}
                  >
                    {intl.get(registerBtnTxt)}
                  </Button>
                </div>
              </div>
            )}

            <div className="goToLogin">
              Already have an account?{' '}
              <a className="loginLink" onClick={setBeforeFilter}>
                Login
              </a>
              .
            </div>
          </div>
          <div className="right">
            <img src={registerLogo} />
          </div>
        </div>
      </>
    );
  }
}
export default Login;
