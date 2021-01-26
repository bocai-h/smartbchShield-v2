import React from 'react';
import { Modal, Button } from 'antd';
import { Client, openNotificationWithIcon } from '../tools';
import Web3 from 'web3';
import openEye from '../../static/openEye.svg';
import closeEye from '../../static/closeEye.svg';
import './index.less';

var Contract = require('web3-eth-contract');
class Register extends React.Component {
  state = {
    visible: true,
    inputValue: '',
    spin: false,
    agree: false,
    toggleShowPrivateKey: false,
    buttonTxt: 'RegisterOrLogin',
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.register = this.register.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.toggleShowPrivateKey = this.toggleShowPrivateKey.bind(this);
  }
  handleInputChange(e) {
    let value = e.target.value;
    this.setState({ inputValue: value, buttonTxt: 'RegisterOrLogin' });
    if (value !== '' && !this.isPrivateKeyValid(value)) {
      this.setState({ buttonTxt: 'invalidPrivateKeyTips' });
    }
  }
  handleCheckbox(e) {
    this.setState({ agree: !this.state.agree });
  }
  toggleShowPrivateKey() {
    this.setState({ toggleShowPrivateKey: !this.state.toggleShowPrivateKey });
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
    suterShieldContract.setProvider(window.ethereum);
    var lastestWeb3 = new Web3(window.ethereum);
    let suterShieldClient;
    try {
      if (coinType !== 'eth') {
        var suterShiledTokenContract = new Contract(
          info.contractABI,
          info.contractAddress,
        );
        suterShiledTokenContract.setProvider(window.ethereum);
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
    } catch (error) {
      if (error.code !== '') {
        openNotificationWithIcon('Error', error.message, 'error');
      } else {
        openNotificationWithIcon('Error', error.toString(), 'warning');
      }
      this.setState({ spin: false });
      return;
    }
    // set client to form component
    setClient(suterShieldClient);
    this.setState({ spin: false });
    this.setState({ visible: false });
  }
  onCancel() {
    this.props.cancelSelectCoin();
    this.setState({ visible: false });
  }
  isPrivateKeyValid(privateKey) {
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{16,32}$/;
    return reg.test(privateKey);
  }
  render() {
    let {
      visible,
      inputValue,
      spin,
      agree,
      toggleShowPrivateKey,
      buttonTxt,
    } = this.state;
    let { intl } = this.props;
    let submitable =
      inputValue !== '' && agree && this.isPrivateKeyValid(inputValue);
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
              <h1>{intl.get('RegisterOrLogin')}</h1>
              <h1>{intl.get('SuterusuAccount')}</h1>
            </div>
            <div className="tip">{intl.get('RegisterWarning')}</div>
            <p className="privateKeyTips">{intl.get('privateKeyTips')}</p>
            <div className="inputContainer">
              <input
                placeholder={intl.get('InsertYourPrivatekey')}
                value={inputValue}
                type={toggleShowPrivateKey ? 'text' : 'password'}
                className={
                  inputValue != '' && !this.isPrivateKeyValid(inputValue)
                    ? 'invalidPrivateKey'
                    : ''
                }
                onChange={this.handleInputChange}
              />
              <div className="inputAppend">
                <img
                  src={toggleShowPrivateKey ? closeEye : openEye}
                  onClick={this.toggleShowPrivateKey}
                />
              </div>
            </div>
            <div className="checkboxContainer">
              <input type="checkbox" onChange={this.handleCheckbox} />
              <p>{intl.get('RegisterAgree')}</p>
            </div>
            <div className="registerBtnContainer">
              <Button
                className={`registerBtn ${
                  inputValue != '' && !this.isPrivateKeyValid(inputValue)
                    ? 'invalidPrivateKey'
                    : ''
                }`}
                shape="round"
                block
                disabled={!submitable}
                onClick={this.register}
                loading={spin}
              >
                {intl.get(buttonTxt)}
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}
export default Register;
