import React from 'react';
import { Button, Row, Col } from 'antd';
import './index.less';
import { Client } from '../tools';
import Web3 from 'web3';

var Contract = require('web3-eth-contract');

class SuterETH extends React.Component {
  constructor(props) {
    super(props);
    this.initSuterEthClient = this.initSuterEthClient.bind(this);
    this.suterEthRegister = this.suterEthRegister.bind(this);
    this.suterEthDeposit = this.suterEthDeposit.bind(this);
    this.suterEthBalance = this.suterEthBalance.bind(this);
    this.suterEthWithdraw = this.suterEthWithdraw.bind(this);
    this.suterEthTransfer = this.suterEthTransfer.bind(this);
    this.publicKey = this.publicKey.bind(this);

    // secret will use private key in prod
    this.secret = this.props.account.substring(2);
    // this.secret="test secret"
  }

  async componentDidMount() {
    await this.initSuterEthClient();
  }

  initSuterEthClient = async () => {
    const { account } = this.props;
    var suterEthContract = new Contract(
      SUTER_ETH_CONTRACT_ABI,
      SUTER_ETH_CONTRACT_ADDRESS,
    );
    suterEthContract.setProvider(window.web3.currentProvider);
    var lastestWeb3 = new Web3(window.web3.currentProvider);
    this.suterEthClient = new Client.ClientSuterETH(
      lastestWeb3,
      suterEthContract,
      account,
    );
    await this.suterEthClient.init();
  };

  publicKey = async () => {
    await this.suterEthClient.register(this.secret);
    let pk = this.suterEthClient.account.publicKeyEncoded();
    console.log('pk=', pk);
    return pk;
  };
  suterEthRegister = async () => {
    await this.suterEthClient.register(this.secret);
    console.log(
      'this.suterEthClient.account.keypair=',
      this.suterEthClient.account.keypair,
    );
  };

  suterEthDeposit = async () => {
    await this.suterEthClient.register(this.secret);
    await this.suterEthClient.deposit(10);
  };

  suterEthBalance = async () => {
    console.log('this.secret=', this.secret);
    await this.suterEthClient.register(this.secret);
    let balance = await this.suterEthClient.readBalanceFromContract();
    console.log('balance=', balance);
    // let localTrackedBalance = this.suterEthClient.account.balance();
    // console.log('localTrackedBalance=', localTrackedBalance);
  };

  suterEthWithdraw = async () => {
    await this.suterEthClient.register(this.secret);
    let balance = await this.suterEthClient.readBalanceFromContract();
    console.log('withdraw amount=', balance);
    let result = await this.suterEthClient.withdraw(balance);
    console.log('suterEthWithdraw=', result);
  };

  suterEthTransfer = async () => {
    await this.suterEthClient.register(this.secret);
    let balance = await this.suterEthClient.readBalanceFromContract();
    console.log('suterEthTransfer balance=', balance);

    let toAccount =
      '0x11952485f41654b1becea8781e40eb671d2a36b434e02cf37299773d6e467d592041898f20e45b66397fa3aa6524a09f9d2b591f3ba15d1d27546fb18ada872b';
    let transferAmount = balance;
    console.log('transferAmount=', transferAmount);
    this.suterEthClient.transfer(toAccount, transferAmount);
    // console.log("suterEthTransfer successed");
  };

  render() {
    return (
      <div className="suterETH">
        <h3>suter ETH</h3>
        <Row>
          <Col span={24}>
            <Button type="primary" size="large" onClick={this.publicKey}>
              public key
            </Button>
            <Button type="primary" size="large" onClick={this.suterEthRegister}>
              Register
            </Button>
            <Button type="primary" size="large" onClick={this.suterEthDeposit}>
              Deposit
            </Button>
            <Button type="primary" size="large" onClick={this.suterEthBalance}>
              Get Balance
            </Button>
            <Button type="primary" size="large" onClick={this.suterEthWithdraw}>
              withdraw
            </Button>
            <Button type="primary" size="large" onClick={this.suterEthTransfer}>
              transfer
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SuterETH;
