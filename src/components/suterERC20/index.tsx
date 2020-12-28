import React from 'react';
import { Button, Row, Col } from 'antd';
import './index.less';
import { Client } from '../tools';
import Web3 from 'web3';

var Contract = require('web3-eth-contract');

class SuterETH extends React.Component {
  constructor(props) {
    super(props);
    this.initSuterERC20Client = this.initSuterERC20Client.bind(this);
    this.suterERC20Register = this.suterERC20Register.bind(this);
    this.suterERC20Deposit = this.suterERC20Deposit.bind(this);
    this.suterERC20Balance = this.suterERC20Balance.bind(this);
    this.suterERC20Withdraw = this.suterERC20Withdraw.bind(this);
    this.suterERC20Transfer = this.suterERC20Transfer.bind(this);
    this.publicKey = this.publicKey.bind(this);

    // secret will use private key in prod
    this.secret = this.props.account.substring(2);
    // this.secret="test secret"
  }

  componentDidMount() {
    this.initSuterERC20Client();
  }

  initSuterERC20Client = () => {
    const { account } = this.props;
    var suterERC20Contract = new Contract(
      SUTER_ERC20_CONTRACT_ABI,
      SUTER_ERC20_CONTRACT_ADDRESS,
    );
    var suterERC20TokenContract = new Contract(
      SUTER_ERC20_TOKEN_CONTRACT_ABI,
      SUTER_ERC20_TOKEN_CONTRACT_ADDRESS,
    );
    suterERC20Contract.setProvider(window.web3.currentProvider);
    suterERC20TokenContract.setProvider(window.web3.currentProvider);

    var lastestWeb3 = new Web3(window.web3.currentProvider);
    this.suterERC20Client = new Client.ClientSuterERC20(
      lastestWeb3,
      suterERC20Contract,
      account,
      suterERC20TokenContract,
    );
    this.suterERC20Client.init();
  };

  publicKey = async () => {
    await this.suterERC20Client.register(this.secret);
    let pk = this.suterERC20Client.account.publicKeyEncoded();
    console.log('pk=', pk);
    return pk;
  };

  suterERC20Register = async () => {
    await this.suterERC20Client.register(this.secret);
    console.log(
      'this.suterEthClient.account.keypair=',
      this.suterERC20Client.account.keypair,
    );
  };

  suterERC20Deposit = async () => {
    await this.suterERC20Client.register(this.secret);
    await this.suterERC20Client.deposit(100);
  };

  suterERC20Balance = async () => {
    console.log('this.secret=', this.secret);
    await this.suterERC20Client.register(this.secret);
    let balance = await this.suterERC20Client.readBalanceFromContract();
    console.log('balance=', balance);
    // let localTrackedBalance = this.suterEthClient.account.balance();
    // console.log('localTrackedBalance=', localTrackedBalance);
  };

  suterERC20Withdraw = async () => {
    await this.suterERC20Client.register(this.secret);
    let balance = await this.suterERC20Client.readBalanceFromContract();
    console.log('withdraw amount=', balance / 2);
    let result = await this.suterERC20Client.withdraw(balance / 2);
    console.log('suterEthWithdraw=', result);
  };

  suterERC20Transfer = async () => {
    await this.suterERC20Client.register(this.secret);
    let balance = await this.suterERC20Client.readBalanceFromContract();
    console.log('suterEthTransfer balance=', balance);

    let toAccount =
      '0x11952485f41654b1becea8781e40eb671d2a36b434e02cf37299773d6e467d592041898f20e45b66397fa3aa6524a09f9d2b591f3ba15d1d27546fb18ada872b';
    let transferAmount = balance;
    console.log('transferAmount=', transferAmount);
    this.suterERC20Client.transfer(toAccount, transferAmount);
    // console.log("suterEthTransfer successed");
  };

  render() {
    return (
      <div className="suterERC20">
        <h3>suter ERC20</h3>
        <Row>
          <Col span={24}>
            <Button type="primary" size="large" onClick={this.publicKey}>
              public key
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={this.suterERC20Register}
            >
              Register
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={this.suterERC20Deposit}
            >
              Deposit
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={this.suterERC20Balance}
            >
              Get Balance
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={this.suterERC20Withdraw}
            >
              withdraw
            </Button>
            <Button
              type="primary"
              size="large"
              onClick={this.suterERC20Transfer}
            >
              transfer
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SuterETH;
