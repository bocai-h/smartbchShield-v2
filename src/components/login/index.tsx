import React from 'react';
import {Button } from 'antd';
import { Client } from '../tools';
import Web3 from 'web3';
import openEye from '../../static/openEye.svg';
import closeEye from '../../static/closeEye.svg';
import './index.less';

var Contract = require('web3-eth-contract');
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
       <div className="loginContainer">
         <div>left</div>
         <div>right</div>
       </div>
      </>
    );
  }
}
export default Login;
