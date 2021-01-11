import React from 'react';
import { Card, Button } from 'antd';
import './index.less';
import { CoinLogoMap, MessageWithAlink, openNotificationWithIcon } from '../tools';
import SpinModal from '../spinModal';

class Burn extends React.Component {
  state = {
    inputValue: 0,
    inputFill: "",
    proccesing: false,
    buttonTxt: "EnterAnAmount"
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.burn = this.burn.bind(this);
    this.maxFill = this.maxFill.bind(this);
    this.assignRef = this.assignRef.bind(this);
    this.adjustPointer = this.adjustPointer.bind(this);
  }
  assignRef(c: HTMLElement) {
    this.inputRef = c;
  }
  adjustPointer() {
    let pos = this.inputRef.value.length - "Unit".length - 1;
    this.inputRef.selectionStart = pos;
    this.inputRef.selectionEnd = pos;
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
    if(value === 0){
      this.setState({buttonTxt: "EnterAnAmount"})
    }else{
      this.setState({buttonTxt: "ConfirmBurn"})
    }
    let { max } = this.props;
    if (value > max) {
      this.setState({buttonTxt: "InsufficientBalance"})
      // value = max;
      // openNotificationWithIcon('Warning', intl.get("BalanceNotEnough"), 'warn', 4);
    }
    this.setState({ inputFill: `${value.toLocaleString()} Unit`, inputValue: value}, () => {
      this.adjustPointer();
    });
  }
  async burn() {
    let { client, intl, coinType } = this.props;
    let { inputValue } = this.state;
    this.setState({ proccesing: true });
    let info = CoinInfos[coinType];
    let result;
    try {
      result = await client.withdraw(inputValue);
    } catch (error) {
      if (error.code !== '') {
        openNotificationWithIcon('Error', error.message, 'error');
      } else {
        openNotificationWithIcon('Error', error.toString(), 'error');
      }
      this.setState({ proccesing: false });
      return;
    }

    let txHash = result.transactionHash;
    const message = intl.get('ViewInEtherScan');
    const aLink = `${ETHERSCAN}/tx/${txHash}`;
    openNotificationWithIcon(
      `${intl.get('Burn')} ${intl.get('TransactionHasSent')}`,
      <MessageWithAlink message={message} aLink={aLink} />,
      'success',
      10,
    );

    // refetch suter shield balance
    this.setState({ inputValue: 0, inputFill: "" });
    this.setState({ proccesing: false });
    this.props.updateKeyFunc();
  }
  maxFill() {
    let { max } = this.props;
    this.setState({ inputValue: max, inputFill: `${max.toLocaleString()} Unit` });
  }
  render() {
    let { coinType, intl, max } = this.props;
    let { inputValue, proccesing, inputFill, buttonTxt } = this.state;
    let info = CoinInfos[coinType];
    return (
      <div className="burn">
        {proccesing ? <SpinModal intl={intl} /> : ''}
        <Card style={{ width: 350 }}>
          <h1>{intl.get('Burn')}</h1>
          <p>
            {intl.get('Burn')} S{info.unit} {intl.get('To')} {info.unit}
          </p>
          <div className="inputContainer">
            <input
              placeholder="0 Unit"
              className={`${inputValue > max ? "insufficientInput" : ""}`}
              type="text"
              value={inputFill}
              ref={this.assignRef}
              onChange={this.handleInputChange}
            />
            <div className="inputAppend">
              <span className="maxBtn" onClick={this.maxFill}>
                {intl.get('Max')}
              </span>
              <img src={CoinLogoMap[coinType][1]} width="20px" />
            </div>
          </div>
          <p>
            {intl.get('YouWillReceive')} {inputValue.toLocaleString()} Unit {info.unit}(=
            {((inputValue * 1.0) / info.suterShieldUnit).toLocaleString()} {info.unit})
          </p>
          <div className="confirmContainer">
            <Button
              className={`confirm ${inputValue===0? 'grey' : ''} ${inputValue > max ? "insufficientInput" : ""}`}
              shape="round"
              block
              onClick={this.burn}
              disabled={inputValue <= 0 || inputValue > max}
            >
              {intl.get(buttonTxt)}
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Burn;
