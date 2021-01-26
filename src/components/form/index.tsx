import React from 'react';
import './index.less';
import Balance from '../balance';
import Fund from '../fund';
import Transfer from '../transfer';
import Burn from '../burn';
import Register from '../register';
import Login from '../login';
import WarningIcon from '../../static/warning.svg';
import CloseIcon from '../../static/close.svg';
class Form extends React.Component {
  state = {
    client: '',
    updateKey: '',
    balance: 0,
    suterShieldBalance: 0,
    warningTips: true,
    logined: false,
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
    this.setState({ client: client, logined: true });
  }
  closeWarningTips() {
    this.setState({ warningTips: false });
  }

  render() {
    let { account, coinType, intl } = this.props;
    let {
      client,
      updateKey,
      balance,
      suterShieldBalance,
      logined,
    } = this.state;

    return (
      <div className="form">
        {!logined ? (
          <Login
            intl={intl}
            setClient={this.setClient}
            account={account}
            coinType={coinType}
          />
        ) : (
          <div>
            <Balance
              coinType={coinType}
              client={client}
              account={account}
              key={updateKey}
              setBalanceFunc={this.setBalance}
              intl={intl}
            />
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
          </div>
        )}
      </div>
    );
  }
}

export default Form;
