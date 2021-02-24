import React from 'react';
import { Card, Button } from 'antd';
import './index.less';
import {
  CoinLogoMap,
  MessageWithAlink,
  openNotificationWithIcon,
} from '../tools';
import SpinModal from '../spinModal';

class Fund extends React.Component {
  state = {
    inputValue: 0,
    inputFill: '',
    processing: false,
    buttonTxt: 'EnterAnAmount',
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fund = this.fund.bind(this);
    this.maxFill = this.maxFill.bind(this);
    this.assignRef = this.assignRef.bind(this);
    this.adjustPointer = this.adjustPointer.bind(this);
  }
  assignRef(c: HTMLElement) {
    this.inputRef = c;
  }
  adjustPointer() {
    let pos = this.inputRef.value.length - 'Unit'.length - 1;
    this.inputRef.selectionStart = pos;
    this.inputRef.selectionEnd = pos;
  }
  handleInputChange(e) {
    let { intl } = this.props;
    let value = parseInt(e.target.value.replace('Unit', '').replace(/,/gi, ''));
    if (isNaN(value)) {
      value = 0;
    }
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    if (value > 10000000000) {
      value = 10000000000;
    }
    if (value === 0) {
      this.setState({ buttonTxt: 'EnterAnAmount' });
    } else {
      this.setState({ buttonTxt: 'ConfirmFund' });
    }
    let { max } = this.props;
    if (value > max) {
      // value = max;
      this.setState({ buttonTxt: 'InsufficientBalance' });
      // openNotificationWithIcon('Warning', intl.get("BalanceNotEnough"), 'warn', 4);
    }
    this.setState(
      { inputFill: `${value.toLocaleString()} Unit`, inputValue: value },
      () => {
        this.adjustPointer();
      },
    );
  }
  async fund() {
    let { client, intl, coinType } = this.props;
    let { inputValue } = this.state;
    this.setState({ processing: true });
    let info = CoinInfos[coinType];
    let result;
    try {
      if (coinType === 'usdt') {
        result = await client.depositUSDT(inputValue.toString());
      } else {
        result = await client.deposit(inputValue.toString());
      }
    } catch (error) {
      if (error.code !== '') {
        openNotificationWithIcon('Error', error.message, 'error');
      } else {
        openNotificationWithIcon('Error', error.toString(), 'error');
      }
      this.setState({ processing: false });
      return;
    }
    let txHash = result.transactionHash;

    const message = intl.get('ViewInEtherScan');
    const aLink = `${ETHERSCAN}/tx/${txHash}`;
    openNotificationWithIcon(
      `${intl.get('Fund')} ${intl.get('TransactionHasSent')}`,
      <MessageWithAlink message={message} aLink={aLink} />,
      'success',
      10,
    );
    // refetch suter shield balance
    this.setState({ inputValue: 0, inputFill: '' });
    this.props.updateKeyFunc();
    this.setState({ processing: false });
  }

  maxFill() {
    let { max } = this.props;
    this.setState({
      inputValue: max,
      inputFill: `${max.toLocaleString()} Unit`,
    });
    this.setState({ buttonTxt: 'ConfirmFund' });
  }
  render() {
    let { coinType, intl, max } = this.props;
    let { inputValue, inputFill, processing, buttonTxt } = this.state;
    let info = CoinInfos[coinType];
    return (
      <div className="fund">
        {processing ? <SpinModal intl={intl} /> : ''}
        <Card style={{ width: 350 }}>
          <h1>{intl.get('Fund')}</h1>
          <p>
            {intl.get('Deposit')} {info.unit} {intl.get('To')} S{info.unit}
          </p>
          <div className="inputContainer">
            <input
              placeholder="0 Unit"
              className={`${inputValue > max ? 'insufficientInput' : ''}`}
              value={inputFill}
              ref={this.assignRef}
              type="text"
              onChange={this.handleInputChange}
            />
            <div className="inputAppend">
              <span className="maxBtn" onClick={this.maxFill}>
                {intl.get('Max')}
              </span>
              <img src={CoinLogoMap[coinType][2]} width="20px" />
            </div>
          </div>
          <p>
            {isNaN(inputValue) ? 0 : inputValue.toLocaleString()} Unit{' '}
            {info.unit} ={' '}
            {(
              (inputValue * 1.0 * info.suterShieldUnit) /
              10 ** info.decimal
            ).toLocaleString()}{' '}
            {info.unit}
          </p>
          <div className="confirmContainer">
            <Button
              className={`confirm ${inputValue === 0 ? 'grey' : ''} ${
                inputValue > max ? 'insufficientInput' : ''
              }`}
              shape="round"
              block
              disabled={inputValue <= 0 || inputValue > max}
              onClick={this.fund}
            >
              {intl.get(buttonTxt)}
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Fund;
