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
    transferAddress: '',
    proccesing: true,
  };
  constructor(props) {
    super(props);
    this.closeMyAddressModeal = this.closeMyAddressModeal.bind(this);
    this.openMyAddressModal = this.openMyAddressModal.bind(this);
    this.handleTransferValue = this.handleTransferValue.bind(this);
    this.handleTransferAddress = this.handleTransferAddress.bind(this);
    this.transfer = this.transfer.bind(this);
    this.maxFill = this.maxFill.bind(this);
  }
  closeMyAddressModeal() {
    this.setState({ myAddressModal: false });
  }
  openMyAddressModal() {
    this.setState({ myAddressModal: true });
  }
  handleTransferValue(e) {
    let value = parseInt(e.target.value);
    if (value < 0) {
      value = 0;
    }
    let { max } = this.props;
    if (value > max) {
      value = max;
    }
    this.setState({ transferValue: value.toString() });
  }

  handleTransferAddress(e) {
    this.setState({ transferAddress: e.target.value });
  }
  maxFill() {
    let { max } = this.props;
    this.setState({ transferValue: max });
  }

  async transfer() {
    let { client, updateKeyFunc } = this.props;
    let { transferValue, transferAddress } = this.state;
    this.setState({ proccesing: true });
    let result = await client.transfer(transferAddress, transferValue);
    let txHash = result.transactionHash;
    const message = `View in etherscan`;
    const aLink = `${ETHERSCAN}/tx/${txHash}`;
    openNotificationWithIcon(
      'Transfer transaction has sent!',
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
    let { coinType, client } = this.props;
    let info = Infos[coinType];
    let {
      myAddressModal,
      transferValue,
      transferAddress,
      proccesing,
    } = this.state;
    return (
      <div className="transfer">
        {proccesing ? <SpinModal /> : ''}
        <Card style={{ width: 350 }}>
          <PublicKeyModal
            visible={myAddressModal}
            client={client}
            closeMyAddressModeal={this.closeMyAddressModeal}
          />
          <div className="title">
            <h1>Transfer</h1>
            <p className="myAddress" onClick={this.openMyAddressModal}>
              My Suter Account Address
            </p>
          </div>
          <div className="inputContainer">
            <input
              placeholder="0"
              value={transferValue}
              onChange={this.handleTransferValue}
              type="number"
            />
            <div className="inputAppend">
              <span className="maxBtn" onClick={this.maxFill}>
                Max
              </span>
              <img src={info.logo[coinType][1]} width="20px" />
            </div>
          </div>
          <div className="addressInputContainer">
            <p>Recipient Address</p>
            <textarea
              placeholder="Please paste your Suter Account Address Here"
              value={transferAddress}
              onChange={this.handleTransferAddress}
            />
          </div>
          <div className="confirmContainer">
            <Button
              className="confirm"
              shape="round"
              block
              onClick={this.transfer}
              disabled={transferValue === 0 || transferAddress === ''}
            >
              Confirm Transfer
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Transfer;
