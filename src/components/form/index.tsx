import React from 'react';
import './index.less';
import Balance from '../balance';
import Fund from '../fund';
import Transfer from '../transfer';
import Burn from '../burn';
import Register from '../register';
class Form extends React.Component {
  state = {
    registered: false,
    client: '',
    updateKey: '',
    balance: 0,
    suterShieldBalance: 0,
  };

  constructor(props) {
    super(props);
    this.setClient = this.setClient.bind(this);
    this.updateKeyFunc = this.updateKeyFunc.bind(this);
    this.setBalance = this.setBalance.bind(this);
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

  render() {
    let { account, coinType } = this.props;
    let {
      registered,
      client,
      updateKey,
      balance,
      suterShieldBalance,
    } = this.state;

    return (
      <div className="form">
        {!registered ? (
          <Register
            account={account}
            coinType={coinType}
            setClient={this.setClient}
          />
        ) : (
          ''
        )}
        {registered ? (
          <Balance
            coinType={coinType}
            client={client}
            account={account}
            key={updateKey}
            setBalanceFunc={this.setBalance}
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
            />
            <Transfer
              coinType={coinType}
              client={client}
              account={account}
              updateKeyFunc={this.updateKeyFunc}
              max={suterShieldBalance}
            />
            <Burn
              coinType={coinType}
              client={client}
              account={account}
              updateKeyFunc={this.updateKeyFunc}
              max={suterShieldBalance}
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
