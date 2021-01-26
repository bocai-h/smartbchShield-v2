import React from 'react';
import { Button } from 'antd';
import { Client, openNotificationWithIcon } from '../tools';
import Web3 from 'web3';
import openEye from '../../static/openEye.svg';
import closeEye from '../../static/closeEye.svg';
import registerLogo from '../../static/register.svg';
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
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({ inputValue: value });
  }
  toggleShowPrivateKey() {
    this.setState({ toggleShowPrivateKey: !this.state.toggleShowPrivateKey });
  }

  render() {
    let { intl, setBeforeFilter } = this.props;
    let { inputValue, toggleShowPrivateKey } = this.state;
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
              <Button shape="round" block className="PrivateKeyGenerator">
                Private Key Generator
              </Button>
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
