import React from 'react';
import './index.less';
import Balance from '../balance';
import Fund from '../fund';
import Transfer from '../transfer';
import Burn from '../burn';
import Register from '../register';
import Login from '../Login';
import WarningIcon from '../../static/warning.svg';
import CloseIcon from '../../static/close.svg';
class Form extends React.Component {
  state = {
    registered: false,
    client: '',
    updateKey: '',
    balance: 0,
    suterShieldBalance: 0,
    warningTips: true,
    logined: false
  };

  constructor(props) {
    super(props);
    this.setClient = this.setClient.bind(this);
    this.updateKeyFunc = this.updateKeyFunc.bind(this);
    this.setBalance = this.setBalance.bind(this);
    this.closeWarningTips = this.closeWarningTips.bind(this);
  }
  setBalance(balance, suterShieldBalance) {
    this.setState({ balance: balance, suterShieldBalance: suterShieldBalance });
  }
  updateKeyFunc() {
    let key = Math.random()
      .toString(36)
      .substr(2, 5);
    this.setState({ updateKey: key });
  }

  setClient(client) {
    this.setState({ client: client, registered: true });
  }
  closeWarningTips() {
    this.setState({warningTips: false})
  }

  render() {
    let { account, coinType, intl } = this.props;
    let {
      registered,
      client,
      updateKey,
      balance,
      suterShieldBalance,
      warningTips,
      logined,
    } = this.state;

    return (
      <div className="form">
        { warningTips ? <div className="tipsContainer">
        {!logined ? (
          <Login/>
        ) : (
          ''
        )}
          <img src={WarningIcon} className="warningIcon"/>
          <div>{intl.get("warningTips")}</div>
          <img src={CloseIcon} className="closeIcon" onClick={this.closeWarningTips}/>
        </div> : ""}
        {registered ? (
          <Balance
            coinType={coinType}
            client={client}
            account={account}
            key={updateKey}
            setBalanceFunc={this.setBalance}
            intl={intl}
          />
        ) : (
          ''
        )}
        {registered ? (
          <div className="operationContainer">
            <Fund
              coinType={coinType}
              client={client}
              account={account}
              updateKeyFunc={this.updateKeyFunc}
              max={balance}
              intl={intl}
            />
            <Transfer
              coinType={coinType}
              client={client}
              account={account}
              updateKeyFunc={this.updateKeyFunc}
              max={suterShieldBalance}
              intl={intl}
            />
            <Burn
              coinType={coinType}
              client={client}
              account={account}
              updateKeyFunc={this.updateKeyFunc}
              max={suterShieldBalance}
              intl={intl}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Form;
