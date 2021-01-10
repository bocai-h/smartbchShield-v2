import React from 'react';
import { Card, Button } from 'antd';
import './index.less';
import { Infos, MessageWithAlink, openNotificationWithIcon } from '../tools';
import PublicKeyModal from '../publicKeyModal';
import SpinModal from '../spinModal';

class Transfer extends React.Component {
  state = {
    myAddressModal: false,
    transferValue: 0,
    inputFill: "",
    transferAddress: '',
    proccesing: false,
    buttonTxt: "EnterAnAmount"
  };
  constructor(props) {
    super(props);
    this.closeMyAddressModeal = this.closeMyAddressModeal.bind(this);
    this.openMyAddressModal = this.openMyAddressModal.bind(this);
    this.handleTransferValue = this.handleTransferValue.bind(this);
    this.handleTransferAddress = this.handleTransferAddress.bind(this);
    this.transfer = this.transfer.bind(this);
    this.maxFill = this.maxFill.bind(this);
    this.assignRef = this.assignRef.bind(this);
  }
  assignRef(c: HTMLElement) {
    this.inputRef = c;
  }
  adjustPointer() {
    let pos = this.inputRef.value.length - "Unit".length - 1;
    this.inputRef.selectionStart = pos;
    this.inputRef.selectionEnd = pos;
  }

  closeMyAddressModeal() {
    this.setState({ myAddressModal: false });
  }
  openMyAddressModal() {
    this.setState({ myAddressModal: true });
  }
  handleTransferValue(e) {
    let { intl } = this.props;
    let { transferAddress } = this.state;
    let value = parseInt(e.target.value.replace("Unit", '').replace(/,/gi, ''));
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    if (value > 10000000000) {
      value = 10000000000;
    }
    if(value === 0){
      this.setState({buttonTxt: "EnterAnAmount"})
    }else{
      if(transferAddress.length !== 130){
        this.setState({buttonTxt: "InvalidSuterAccount"})
      }else{
        this.setState({buttonTxt: "ConfirmTransfer"})
      }
    }
    let { max } = this.props;
    if (value > max) {
      this.setState({buttonTxt: "InsufficientBalance"})
      // value = max;
      // openNotificationWithIcon('Warning', intl.get("BalanceNotEnough"), 'warn', 4);
    }
    this.setState({ transferValue: value, inputFill: `${value.toLocaleString()} Unit` }, ()=>{
      this.adjustPointer();
    });
  }

  handleTransferAddress(e) {
    let suterAccountAddress = e.target.value.replace(/(^\s*)|(\s*$)/g, "");
    this.setState({buttonTxt: "ConfirmTransfer"})
    if(suterAccountAddress.length !== 130){
      this.setState({buttonTxt: "InvalidSuterAccount"})
      // openNotificationWithIcon('Warning', intl.get("InvalidAddress"), 'warn', 4);
    }
    this.setState({ transferAddress: suterAccountAddress});
  }
  maxFill() {
    let { max } = this.props;
    this.setState({ transferValue: max, inputFill: `${max.toLocaleString()} Unit` });
  }

  async transfer() {
    let { client, updateKeyFunc, intl } = this.props;
    let { transferValue, transferAddress } = this.state;
    this.setState({ proccesing: true });
    let result;
    try {
      result = await client.transfer(transferAddress, transferValue);
    } catch (error) {
      if (error.code !== '') {
        openNotificationWithIcon('Error', error.message, 'error');
      } else {
        openNotificationWithIcon('Error', error.toString(), 'warning');
      }
      this.setState({ proccesing: false });
      return;
    }
    let txHash = result.transactionHash;
    const message = intl.get('ViewInEtherScan');
    const aLink = `${ETHERSCAN}/tx/${txHash}`;
    openNotificationWithIcon(
      `${intl.get('Transfer')} ${intl.get('TransactionHasSent')}`,
      <MessageWithAlink message={message} aLink={aLink} />,
      'success',
      10,
    );

    this.setState({ transferValue: '0' });
    this.setState({ transferAddress: '' });
    this.setState({ proccesing: false });
    updateKeyFunc();
  }
  render() {
    let { coinType, client, intl, max } = this.props;
    let info = Infos[coinType];
    let {
      myAddressModal,
      transferValue,
      transferAddress,
      proccesing,
      inputFill,
      buttonTxt
    } = this.state;
    return (
      <div className="transfer">
        {proccesing ? <SpinModal intl={intl} /> : ''}
        <Card style={{ width: 350 }}>
          <PublicKeyModal
            visible={myAddressModal}
            client={client}
            closeMyAddressModeal={this.closeMyAddressModeal}
            intl={intl}
          />
          <div className="title">
            <h1>{intl.get('Transfer')}</h1>
            <p className="myAddress" onClick={this.openMyAddressModal}>
              {intl.get('MySuterAccountAddress')}
            </p>
          </div>
          <div className="inputContainer">
            <input
              placeholder="0 Unit"
              className={`${transferValue > max ? "insufficientInput" : ""}`}
              value={inputFill}
              ref={this.assignRef}
              onChange={this.handleTransferValue}
              type="text"
            />
            <div className="inputAppend">
              <span className="maxBtn" onClick={this.maxFill}>
                {intl.get('Max')}
              </span>
              <img src={info.logo[coinType][1]} width="20px" />
            </div>
          </div>
          <div className="addressInputContainer">
            <p>{intl.get('RecipientAddress')}</p>
            <textarea
              placeholder={intl.get('PleaseInputSuterAccountAddressHere')}
              value={transferAddress}
              onChange={this.handleTransferAddress}
              className={(transferValue !== 0 || transferAddress.length!== 0) && transferAddress.length !== 130 ? "invalidAddress" : ""}
            />
          </div>
          <div className="confirmContainer">
            <Button
              className={`confirm ${transferValue===0? 'grey' : ''} ${transferValue > max ? "insufficientInput" : ""} ${(transferValue !== 0 || transferAddress.length!== 0) && transferAddress.length !== 130 ? "invalidAddress" : ""}`}
              shape="round"
              block
              onClick={this.transfer}
              disabled={transferValue <= 0 || transferValue > max || transferAddress.length !== 130}
            >
              {intl.get(buttonTxt)}
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Transfer;
