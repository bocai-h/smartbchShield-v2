import React from 'react';
import { Card, Button } from 'antd';
import './index.less';
import { Infos, MessageWithAlink, openNotificationWithIcon } from '../tools';
import SpinModal from '../spinModal';

class Fund extends React.Component {
  state = {
    inputValue: 0,
    processing: false,
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fund = this.fund.bind(this);
    this.maxFill = this.maxFill.bind(this);
  }
  handleInputChange(e) {
    let value = parseInt(e.target.value);
    if(isNaN(value)){
      value = 0;
    }
    if (value < 0) {
      value = 0;
    }
    let { max } = this.props;
    if (value > max) {
      value = max;
    }
    this.setState({ inputValue: value.toString() });
  }
  async fund() {
    let { client, intl } = this.props;
    let { inputValue } = this.state;
    this.setState({ processing: true });
    let result
    try {
      result = await client.deposit(inputValue);
    }catch(error){
      if(error.code !== ''){
        openNotificationWithIcon("Error", error.message, 'error')
      }else{
        openNotificationWithIcon("Error", error.toString(), 'error')
      }
      this.setState({ processing: false });
      return;
    }
    let txHash = result.transactionHash;

    const message = intl.get("ViewInEtherScan");;
    const aLink = `${ETHERSCAN}/tx/${txHash}`;
    openNotificationWithIcon(
      `${intl.get('Fund')}${intl.get('TransactionHasSent')}`,
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
    let { coinType, intl } = this.props;
    let { inputValue, processing } = this.state;
    let info = Infos[coinType];
    return (
      <div className="fund">
        {processing ? <SpinModal intl={intl}/> : ''}
        <Card style={{ width: 350 }}>
          <h1>{intl.get("Fund")}</h1>
          <p>
            { intl.get("Deposit") } {info.unit} { intl.get("To") } S{info.unit}
          </p>
          <div className="inputContainer">
            <input
              placeholder="0 Unit"
              type="number"
              value={inputValue}
              onChange={this.handleInputChange}
            />
            <div className="inputAppend">
              <span className="maxBtn" onClick={this.maxFill}>
                { intl.get("Max") }
              </span>
              <img src={info.logo[coinType][2]} width="20px" />
            </div>
          </div>
          <p>
            {isNaN(inputValue) ? 0 : inputValue} Unit {info.unit} ={' '}
            {(
              (inputValue < 0 ? 0 * 1.0 : inputValue * 1.0) /
              info.suterShieldUnit
            ).toFixed(5)}{' '}
            {info.unit}
          </p>
          <div className="confirmContainer">
            <Button
              className="confirm"
              shape="round"
              block
              disabled={inputValue > 0 ? false : true}
              onClick={this.fund}
            >
             { intl.get("ConfirmFund") }
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Fund;
