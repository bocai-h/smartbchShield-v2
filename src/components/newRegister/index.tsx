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
  };

  constructor(props) {
    super(props);
    this.toggleShowPrivateKey = this.toggleShowPrivateKey.bind(this);
    this.generatePrivateKey = this.generatePrivateKey.bind(this);
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
    this.downloadString(privateKey, 'text/text', 'privatekey.txt');
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
    } = this.state;
    return (
      <>
        <div className="registerContainer">
          <div className="left">
            <div className="title">
              <h1>Register</h1>
              <p>Your Suterusu Account</p>
            </div>
            <div className="registerTipsContainer">
              Please use our key generator or use a key that is as random as
              your Metamask wallet private key as the Suter account private key,
              and copy it on paper for safekeeping.{' '}
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
                <div>
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
                  <Button shape="round" block className="PrivateKeyGenerator">
                    Copy and Next
                  </Button>
                </div>
              )}
              <p style={{ textAlign: 'center', marginBottom: 0 }}>or</p>
              <Button shape="round" block>
                Create By Yourself
              </Button>
            </div>
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
