import React from 'react';
import {Button } from 'antd';
import { Client } from '../tools';
import Web3 from 'web3';
import openEye from '../../static/openEye.svg';
import closeEye from '../../static/closeEye.svg';
import loginLogo from '../../static/login.svg';
import './index.less';

var Contract = require('web3-eth-contract');
class Login extends React.Component {
  state = {
    inputValue: '',
    toggleShowPrivateKey: false
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleShowPrivateKey = this.toggleShowPrivateKey.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({ inputValue: value});
  }
  toggleShowPrivateKey(){
    this.setState({toggleShowPrivateKey: !this.state.toggleShowPrivateKey})
  }

  render() {
    let { intl } = this.props;
    let { inputValue, toggleShowPrivateKey } = this.state;
    return (
      <>
       <div className="loginContainer">
         <div className="left">
           <h1>Log in</h1>
           <p>Your Suterusu Account</p>
           <div className="inputContainer">
             <input
                placeholder={intl.get("InsertYourprivatekey")}
                value={inputValue}
                type={toggleShowPrivateKey ? "text" : "password"}
                onChange={this.handleInputChange}
              /> 
              <div className="inputAppend">
                <img src={toggleShowPrivateKey ? closeEye : openEye} onClick={this.toggleShowPrivateKey} />
              </div>
           </div>
           <div className="btnContainer">
              <Button shape="round" block className="loginBtn">
                Login
              </Button>
            </div>
            <hr/>
            <div className="goToRegister">
              Don't have a account? Register.
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
