import React from 'react';
import { Modal, Button } from 'antd';
import { Infos, Client } from '../tools';
import Web3 from 'web3';
import './index.less';

var Contract = require('web3-eth-contract');
class Register extends React.Component {
  state = {
    visible: true,
    inputValue: '',
    spin: false,
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
  }
  handleInputChange(e) {
    let value = e.target.value;
    this.setState({ inputValue: value });
  }
  async register() {
    this.setState({ spin: true });
    let { account, coinType, setClient } = this.props;
    let { inputValue } = this.state;
    let info = Infos[coinType];
    var suterShieldContract = new Contract(
      info.suterShiledContractABI,
      info.suterShiledContractAddress,
    );
    suterShieldContract.setProvider(window.web3.currentProvider);
    var lastestWeb3 = new Web3(window.web3.currentProvider);
    let suterShieldClient;
    if (coinType !== 'eth') {
      var suterShiledTokenContract = new Contract(
        info.contractABI,
        info.contractAddress,
      );
      suterShiledTokenContract.setProvider(window.web3.currentProvider);

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
    // set client to form component
    setClient(suterShieldClient);
    this.setState({ spin: false });
    this.setState({ visible: false });
  }
  render() {
    let { visible, inputValue, spin } = this.state;
    let submitable = inputValue !== '';
    return (
      <>
        <Modal
          className="register"
          closable={false}
          visible={visible}
          footer={null}
          width={400}
          centered
        >
          <div>
            <div className="title">
              <h1>Register</h1>
              <h1>Suterusu Account</h1>
            </div>
            <div className="tip">Please register Suterusu Account</div>
            <div className="inputContainer">
              <input
                placeholder="Your private key"
                value={inputValue}
                type="text"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="registerBtnContainer">
              <Button
                className="registerBtn"
                shape="round"
                block
                disabled={!submitable}
                onClick={this.register}
                loading={spin}
              >
                Register
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
export default Register;
