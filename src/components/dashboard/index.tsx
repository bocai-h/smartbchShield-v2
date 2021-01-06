import React from 'react';
import { Col} from 'antd';
import './index.less';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboardContainer">
        <div className="cardContainer">
         <Col span={24}>
           <div className="card">
             <h1>Current ETH Deposited</h1>
           </div>
           <div className="card">
             <h1>Current Stable Coins Deposited</h1>
           </div>
           <div className="card">
             <h1>Total Fees USD</h1>
           </div>
          </Col>
        </div>
        <div className="cardContainer">
         <Col span={24}>
           <div className="card">
              <h1>Total ETH Deposited</h1>
           </div>
           <div className="card">
             <h1>Total USD Deposited</h1>
           </div>
           <div className="card">
             <h1>Total Deposits</h1>
           </div>
          </Col>
        </div>
        <div className="cardContainer">
          <Col span={24}>
           <div className="card">
             <h1>Total Users</h1>
           </div>
          </Col>
        </div>
      </div>
    );
  }
}
export default Dashboard;
