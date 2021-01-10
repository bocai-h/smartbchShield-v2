import React from 'react';
import { Card, Button } from 'antd';
import './index.less';
import { Infos, MessageWithAlink, openNotificationWithIcon } from '../tools';
import SpinModal from '../spinModal';

class Fund extends React.Component {
  state = {
    inputValue: 0,
    inputFill: "0.00 Unit",
    processing: false
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fund = this.fund.bind(this);
    this.maxFill = this.maxFill.bind(this);
    this.assignRef = this.assignRef.bind(this);
  }
  assignRef(c: HTMLElement) {
    this.inputRef = c;
  }
  handleInputChange(e) {
    let { intl } = this.props;
    let value = parseInt(e.target.value.replace("Unit", '').replace(/,/gi, ''));
    if (isNaN(value)) {
      value = 0;
    }
    if (value < 0 || isNaN(value)) {
      value = 0;
    }
    if (value > 10000000000) {
      value = 10000000000;
    }
    let { max } = this.props;
    if (value > max) {
      // value = max;
      openNotificationWithIcon('Warning', intl.get("BalanceNotEnough"), 'warn', 4);
    }
    this.setState({ inputFill: `${value.toLocaleString()} Unit`, inputValue: value}, () => {
      let pos = this.inputRef.value.length - "Unit".length - 1;
      this.inputRef.selectionStart = pos;
      this.inputRef.selectionEnd = pos;
    });
  }
  async fund() {
    let { client, intl } = this.props;
    let { inputValue } = this.state;
    this.setState({ processing: true });
    let result;
    try {
      result = await client.deposit(inputValue);
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
    this.setState({ inputValue: 0 });
    this.props.updateKeyFunc();
    this.setState({ processing: false });
  }

  maxFill() {
    let { max } = this.props;
    this.setState({ inputValue: max });
  }
  render() {
    let { coinType, intl, max } = this.props;
    let { inputValue, inputFill, processing } = this.state;
    let info = Infos[coinType];
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
              placeholder="0.00 Unit"
              className={`${inputValue <= 0 || inputValue > max ? "InvalidInput" : ""}`}
              value={inputFill}
              ref={this.assignRef}
              onChange={this.handleInputChange}
            />
            <div className="inputAppend">
              <span className="maxBtn" onClick={this.maxFill}>
                {intl.get('Max')}
              </span>
              <img src={info.logo[coinType][2]} width="20px" />
            </div>
          </div>
          <p>
            {isNaN(inputValue) ? 0 : inputValue.toLocaleString()} Unit {info.unit} ={' '}
            {(inputValue * 1.0 / info.suterShieldUnit).toLocaleString()}{' '}
            {info.unit}
          </p>
          <div className="confirmContainer">
            <Button
              className="confirm"
              shape="round"
              block
              disabled={inputValue <= 0 || inputValue > max}
              onClick={this.fund}
            >
              {intl.get("ConfirmFund")}
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Fund;
