import React from 'react';
import { Col} from 'antd';
import './index.less';

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
