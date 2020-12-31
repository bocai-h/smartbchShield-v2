import React from 'react';
import { Card, Button } from 'antd';
import './index.less';
import { Infos, MessageWithAlink, openNotificationWithIcon } from '../tools';
import SpinModal from '../spinModal';

class Burn extends React.Component {
  state = {
    inputValue: 0,
    proccesing: false,
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.burn = this.burn.bind(this);
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
  async burn() {
    let { client, intl } = this.props;
    let { inputValue } = this.state;
    this.setState({ proccesing: true });
    let result
    try{
      result = await client.withdraw(inputValue);
    }catch(error){
      if(error.code !== ''){
        openNotificationWithIcon("Error", error.message, 'error')
      }else{
        openNotificationWithIcon("Error", error.toString(), 'error')
      }
      this.setState({ proccesing: false });
      return
    }
    
    let txHash = result.transactionHash;
    const message = intl.get("ViewInEtherScan");
    const aLink = `${ETHERSCAN}/tx/${txHash}`;
    openNotificationWithIcon(
      `${intl.get('Burn')}${intl.get('TransactionHasSent')}`,
      <MessageWithAlink message={message} aLink={aLink} />,
      'success',
      10,
    );

    // refetch suter shield balance
    this.setState({ inputValue: 0 });
    this.setState({ proccesing: false });
    this.props.updateKeyFunc();
  }
  maxFill() {
    let { max } = this.props;
    this.setState({ inputValue: max });
  }
  render() {
    let { coinType, intl } = this.props;
    let { inputValue, proccesing } = this.state;
    let info = Infos[coinType];
    return (
      <div className="burn">
        {proccesing ? <SpinModal /> : ''}
        <Card style={{ width: 350 }}>
          <h1>{intl.get('Burn')}</h1>
          <p>
           {intl.get('Burn')} S{info.unit} {intl.get('To')} {info.unit}
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
               {intl.get('Max')}
              </span>
              <img src={info.logo[coinType][1]} width="20px" />
            </div>
          </div>
          <p>
            {intl.get("YouWillReceive")} {inputValue} Unit {info.unit}(=
            {(inputValue * 1.0) / info.suterShieldUnit} {info.unit})
          </p>
          <div className="confirmContainer">
            <Button
              className="confirm"
              shape="round"
              block
              onClick={this.burn}
              disabled={inputValue > 0 ? false : true}
            >
              {intl.get('ConfirmBurn')}
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Burn;
