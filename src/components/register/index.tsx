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
    agree: false
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  handleInputChange(e) {
    let value = e.target.value;
    this.setState({ inputValue: value });
  }
  handleCheckbox(e){
    this.setState({ agree: !this.state.agree })
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
    let { visible, inputValue, spin, agree } = this.state;
    let submitable = (inputValue !== '' && agree);
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
            <div className="tip">Please use your Ethereum account private key as your Suter Account private key and treat it like your Ethereum private key. Never share with anyone.</div>
            <div className="inputContainer">
              <input
                placeholder="Insert Your private key"
                value={inputValue}
                type="text"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="checkboxContainer">
               <input type="checkbox" onChange={this.handleCheckbox}/> 
               <p>I use Ethereum account private key as Suter Account private key and keep it secure.</p>
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
