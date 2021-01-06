import React from 'react';
import { Col} from 'antd';
import './index.less';
import Web3 from 'web3';
var Contract = require('web3-eth-contract');
class Dashboard extends React.Component {
  state = {
    currentETHDeposited: 0,
    currentStableCoinsDeposited: 0,
    totalFeesUSD: 0,
    totalETHDeposited: 0,
    totalDeposits: 0,
    totalUSDDeposited: 0,
    totalUsers: 0
  };
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
   this.getCurrentETHDeposited();
   this.getCurrentStableCoinsDeposited();
  }
  async getCurrentETHDeposited() {
    let newWeb3 = new Web3(window.web3.currentProvider);
    let balanceWithDecimal = await newWeb3.eth.getBalance(SUTER_ETH_CONTRACT_ADDRESS);
    let balance = newWeb3.utils.fromWei(balanceWithDecimal, 'ether');
    this.setState({ currentETHDeposited: balance });
  }

  async getCurrentStableCoinsDeposited() {
    let totalValue = 0;
    let pools = [[SUTER_USDT_CONTRACT_ADDRESS, USDT_TOKEN_CONTRACT_ADDRESS, USDT_TOKEN_CONTRACT_ABI], [SUTER_DAI_CONTRACT_ADDRESS, DAI_TOKEN_CONTRACT_ADDRESS, DAI_TOKEN_CONTRACT_ABI], [SUTER_SUTER_CONTRACT_ADDRESS, SUTER_TOKEN_CONTRACT_ADDRESS, SUTER_TOKEN_CONTRACT_ABI]];
    for (const item of pools) {
      var suterShiledTokenContract = new Contract(item[2],item[1]);
      suterShiledTokenContract.setProvider(window.web3.currentProvider);
      let balanceWithDecimal = await suterShiledTokenContract.methods.balanceOf(item[0]).call();
      totalValue += balanceWithDecimal;
     }
    this.setState({ currentStableCoinsDeposited: totalValue });
  }

  render() {
    let { currentETHDeposited, currentStableCoinsDeposited, totalFeesUSD, totalETHDeposited, totalDeposits, totalUSDDeposited, totalUsers }  = this.state
    return (
      <div className="dashboardContainer">
        <div className="cardContainer">
         <Col span={24}>
           <div className="card">
             <h2>Current ETH Deposited</h2>
             <h1>{currentETHDeposited}</h1>
           </div>
           <div className="card">
             <h2>Current Stable Coins Deposited</h2>
             <h1>{currentStableCoinsDeposited}</h1>
           </div>
           <div className="card">
             <h2>Total Fees USD</h2>
             <h1>{totalFeesUSD}</h1>
           </div>
          </Col>
        </div>
        <div className="cardContainer">
         <Col span={24}>
           <div className="card">
              <h2>Total ETH Deposited</h2>
              <h1>{totalETHDeposited}</h1>
           </div>
           <div className="card">
             <h2>Total USD Deposited</h2>
             <h1>{totalDeposits}</h1>
           </div>
           <div className="card">
             <h2>Total Deposits</h2>
             <h1>{totalUSDDeposited}</h1>
           </div>
          </Col>
        </div>
        <div className="cardContainer">
          <Col span={24}>
           <div className="card">
             <h2>Total Users</h2>
             <h1>{totalUsers}</h1>
           </div>
          </Col>
        </div>
      </div>
    );
  }
}
export default Dashboard;
