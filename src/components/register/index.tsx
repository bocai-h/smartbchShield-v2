import React from 'react';
import { Modal, Button } from 'antd';
import { Client } from '../tools';
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
    this.onCancel = this.onCancel.bind(this);
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
    let info = CoinInfos[coinType];
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
  onCancel() {
    this.props.cancelSelectCoin();
    this.setState({ visible: false });
  }
  render() {
    let { visible, inputValue, spin, agree } = this.state;
    let { intl } = this.props;
    let submitable = (inputValue !== '' && agree);
    return (
      <>
        <Modal
          className="register"
          closable={true}
          visible={visible}
          footer={null}
          width={400}
          centered
          onCancel={this.onCancel}
        >
          <div>
            <div className="title">
              <h1>{intl.get("Register")}</h1>
              <h1>{intl.get("SuterusuAccount")}</h1>
            </div>
            <div className="tip">{intl.get("RegisterWarning")}</div>
            <div className="inputContainer">
              <input
                placeholder={intl.get("InsertYourprivatekey")}
                value={inputValue}
                type="text"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="checkboxContainer">
               <input type="checkbox" onChange={this.handleCheckbox}/> 
               <p>{intl.get("RegisterAgree")}</p>
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
                {intl.get("Register")}
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
export default Register;
