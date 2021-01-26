import React from 'react';
import { Button } from 'antd';
import { Client, openNotificationWithIcon } from '../tools';
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
  };

  constructor(props) {
    super(props);
    this.toggleShowPrivateKey = this.toggleShowPrivateKey.bind(this);
    this.generatePrivateKey = this.generatePrivateKey.bind(this);
    this.copyGeneratedPrivateKey = this.copyGeneratedPrivateKey.bind(this);
    this.createdByYourself = this.createdByYourself.bind(this);
  }

  toggleShowPrivateKey() {
    this.setState({ toggleShowPrivateKey: !this.state.toggleShowPrivateKey });
  }

  generatePrivateKey() {
    let lastestWeb3 = new Web3(window.ethereum);
    let entropy = randomstring.generate({ length: 32, charset: 'alphabetic' });
    let privateKey = lastestWeb3.eth.accounts.create(entropy)['privateKey'];
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
    } = this.state;
    return (
      <>
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
                    placeholder={intl.get('InsertYourprivatekey')}
                    type={toggleShowPrivateKey ? 'text' : 'password'}
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
                    placeholder={intl.get('InsertYourprivatekey')}
                    type={toggleShowPrivateKey ? 'text' : 'password'}
                  />
                  <div className="inputAppend">
                    <img
                      src={toggleShowPrivateKey ? closeEye : openEye}
                      onClick={this.toggleShowPrivateKey}
                    />
                  </div>
                </div>
                <div className="checkboxContainer">
                  <input type="checkbox" />
                  <p>{intl.get('RegisterAgree')}</p>
                </div>
                <div className="btnContainer">
                  <Button shape="round" block>
                    Please Confirm Your Private Key
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
