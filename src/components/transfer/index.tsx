import React from 'react';
import { Card, Button, Tooltip } from 'antd';
import './index.less';
import { MessageWithAlink, openNotificationWithIcon } from '../tools';
import PublicKeyModal from '../publicKeyModal';
import SpinModal from '../spinModal';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Sentry } from 'umi';
import Web3 from 'web3';

class Transfer extends React.Component {
  state = {
    myAddressModal: false,
    transferValue: 0,
    inputFill: '',
    isAdr: false,
    transferAddress: '',
    proccesing: false,
    buttonTxt: 'EnterAnAmount',
    pKey: '',
    fee: '0.00',
  };

  constructor(props) {
    super(props);
    this.closeMyAddressModeal = this.closeMyAddressModeal.bind(this);
    this.openMyAddressModal = this.openMyAddressModal.bind(this);
    this.isERC20Adr = this.isERC20Adr.bind(this);
    this.handleTransferValue = this.handleTransferValue.bind(this);
    this.handleTransferAddress = this.handleTransferAddress.bind(this);
    this.transfer = this.transfer.bind(this);
    this.maxFill = this.maxFill.bind(this);
    this.countFee = this.countFee.bind(this);
    this.publicKey = this.publicKey.bind(this);
    this.assignRef = this.assignRef.bind(this);
  }

  publicKey(pKey) {
    this.setState({
      pKey,
    });
  }

  assignRef(c: HTMLElement) {
    this.inputRef = c;
  }
  adjustPointer() {
    let pos = this.inputRef.value.length - 'Unit'.length - 1;
    this.inputRef.selectionStart = pos;
    this.inputRef.selectionEnd = pos;
  }

  closeMyAddressModeal() {
    this.setState({ myAddressModal: false });
  }
  openMyAddressModal() {
    this.setState({ myAddressModal: true });
  }

  isERC20Adr(adr: string) {
    const provider = new Web3.providers.HttpProvider(window.blockchain.jrpc);

    const newWeb3 = new Web3(provider);

    const isAdr = newWeb3.utils.isAddress(adr);

    this.setState({
      isAdr,
    });

    return isAdr;
  }

  handleTransferValue(e) {
    let { transferAddress, isAdr } = this.state;

    let value = parseInt(e.target.value.replace('Unit', '').replace(/,/gi, ''));

    if (value < 0 || isNaN(value)) {
      value = 0;
    }

    if (value > 10000000000) {
      value = 10000000000;
    }

    if (value === 0) {
      this.setState({ buttonTxt: 'EnterAnAmount' });
    } else {
      if (transferAddress.length !== 130 && !isAdr) {
        this.setState({ buttonTxt: 'InvalidSuterAccount' });
      } else {
        this.setState({ buttonTxt: 'ConfirmTransfer' });
      }
    }

    let { max } = this.props;

    if (value > max) {
      this.setState({ buttonTxt: 'InsufficientBalance' });
    }

    this.setState(
      { transferValue: value, inputFill: `${value.toLocaleString()} Unit` },
      () => {
        // 同步计算
        this.adjustPointer();
        this.countFee();
      },
    );
  }

  handleTransferAddress(e) {
    let suterAccountAddress = e.target.value.replace(/(^\s*)|(\s*$)/g, '');

    this.setState({ buttonTxt: 'ConfirmTransfer', isAdr: false });

    if (
      suterAccountAddress.length !== 130 &&
      !this.isERC20Adr(suterAccountAddress)
    ) {
      this.setState({ buttonTxt: 'InvalidSuterAccount' });
    }

    this.setState({ transferAddress: suterAccountAddress }, () => {
      // 同步计算
      this.countFee();
    });
  }

  countFee() {
    let { coinType } = this.props;
    let { isAdr, transferValue } = this.state;
    let unit = window.globalCoinInfos[coinType].suter_shields_unit;

    if (isAdr) {
      let fee = '0.00';

      if (unit <= 18) {
        fee = (transferValue / 10 ** (18 - unit) / 100).toFixed(4);
      } else {
        fee = ((transferValue * 10 ** (unit - 18)) / 100).toFixed(4);
      }

      this.setState({
        fee,
      });

      return;
    }

    this.setState({
      fee: '0.00',
    });
  }

  maxFill() {
    let { max } = this.props;
    let { transferAddress, isAdr } = this.state;

    this.setState(
      {
        transferValue: max,
        inputFill: `${max.toLocaleString()} Unit`,
      },
      () => {
        // 同步计算
        this.countFee();
      },
    );

    if (transferAddress.length !== 130 && !isAdr) {
      this.setState({ buttonTxt: 'InvalidSuterAccount' });
    } else {
      this.setState({ buttonTxt: 'ConfirmTransfer' });
    }
  }

  async transfer() {
    let { client, intl } = this.props;
    let { transferValue, transferAddress, isAdr, pKey } = this.state;

    if (transferAddress.trim() == pKey.trim()) {
      openNotificationWithIcon('Error', intl.get('NoCanSendYourself'), 'error');
      return;
    }

    this.setState({ proccesing: true });

    let result;

    try {
      if (isAdr) {
        // ERC20地址提现
        result = await client.withdraw(transferAddress, transferValue);
      } else {
        // Suter二层转账地址
        result = await client.transfer(transferAddress, transferValue);
      }
    } catch (error) {
      if (error.code) {
        openNotificationWithIcon('Error', error.message, 'error');
      } else {
        openNotificationWithIcon('Error', intl.get('EpochError'), 'error');
      }

      this.setState({ proccesing: false });

      Sentry.captureException(error);

      return;
    }

    let txHash = result.transactionHash;

    const message = intl.get('ViewInEtherScan');

    const aLink = `${window.blockchain.scan_url}/tx/${txHash}`;

    openNotificationWithIcon(
      `${intl.get('Send')} ${intl.get('TransactionHasSent')}`,
      <MessageWithAlink message={message} aLink={aLink} />,
      'success',
      10,
    );

    this.setState({
      inputFill: '',
      transferAddress: '',
      transferValue: 0,
      proccesing: false,
    });
  }

  render() {
    let { coinType, client, intl, max } = this.props;

    let {
      myAddressModal,
      transferValue,
      isAdr,
      transferAddress,
      proccesing,
      inputFill,
      buttonTxt,
      fee,
    } = this.state;

    return (
      <div className="transfer">
        {proccesing ? <SpinModal intl={intl} /> : ''}
        <Card style={{ width: 750 }}>
          <PublicKeyModal
            intl={intl}
            client={client}
            visible={myAddressModal}
            publicKey={this.publicKey}
            closeMyAddressModeal={this.closeMyAddressModeal}
          />

          <div className="title">
            <div className="titleContainer">
              <h1>{intl.get('Send')}</h1>
            </div>

            <div>
              <p className="myAddress" onClick={this.openMyAddressModal}>
                {intl.get('MySuterAccountAddress')}
              </p>
            </div>
          </div>

          <div className="handler">
            <div className="addressInputContainer">
              <p>{intl.get('SendRecipientAddress')}</p>

              <textarea
                placeholder={intl.get('PleaseInputSuterAccountAddressHere')}
                value={transferAddress}
                onChange={this.handleTransferAddress}
                className={
                  (transferValue !== 0 || transferAddress.length !== 0) &&
                  transferAddress.length !== 130 &&
                  !isAdr
                    ? 'invalidAddress'
                    : ''
                }
              />
            </div>

            <div className="inputContainer">
              <p>{intl.get('Amount')}</p>

              <input
                placeholder="0 Unit"
                className={`${transferValue > max ? 'insufficientInput' : ''}`}
                value={inputFill}
                ref={this.assignRef}
                onChange={this.handleTransferValue}
                type="text"
              />

              <div className="inputAppend">
                <span className="maxBtn" onClick={this.maxFill}>
                  {intl.get('Max')}
                </span>
                <img
                  src={window.globalCoinInfos[coinType].s_logo}
                  width="30px"
                />
              </div>

              <div className="fee">
                <div className="hint">
                  {intl.get('fee')}

                  <Tooltip
                    placement="topLeft"
                    title={intl.get('sendFeeTips')}
                    trigger={['hover', 'click']}
                  >
                    <ExclamationCircleOutlined className="i" />
                  </Tooltip>
                </div>

                {isAdr ? (
                  <div className="amount">
                    <img
                      src={window.globalCoinInfos[coinType].coin_logo}
                      width="15px"
                    />

                    <span className="val">{fee}</span>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>

          <div className="confirmContainer">
            <Button
              className={`confirm ${transferValue === 0 ? 'grey' : ''} ${
                transferValue > max ? 'insufficientInput' : ''
              } ${
                (transferValue !== 0 || transferAddress.length !== 0) &&
                transferAddress.length !== 130 &&
                !isAdr
                  ? 'invalidAddress'
                  : ''
              }`}
              shape="round"
              block
              onClick={this.transfer}
              disabled={
                transferValue <= 0 ||
                transferValue > max ||
                (transferAddress.length !== 130 && !isAdr)
              }
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
