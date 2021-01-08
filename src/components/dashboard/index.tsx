import React from 'react';
import { Col} from 'antd';
import './index.less';
import Web3 from 'web3';
import axios from 'axios';
import { openNotificationWithIcon } from '../../components/tools';

var Contract = require('web3-eth-contract');
class Dashboard extends React.Component {
  state = {
    currentETHDeposited: 0,
    currentStableCoinsDeposited: 0,
    totalFeesUSD: 0,
    totalETHDeposited: 0,
    totalDeposits: 0,
    totalUSDDeposited: 0,
    totalUsers: 0,
    suterPrice: 0,
    daiPrice: 0,
    ethPrice: 0,
    usdtDecimals: 1,
    daiDecimals: 1,
    suterDecimals: 1
  };
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
   this.getCurrentETHDeposited();
   await this.fetchSuterPrice();
   await this.getDaiPrice();
   await this.getETHPrice();
   await this.getCurrentStableCoinsDeposited();
   this.getTotalFeesUSD();
  }
  async getCurrentETHDeposited() {
    let newWeb3 = new Web3(window.web3.currentProvider);
    let balanceWithDecimal = await newWeb3.eth.getBalance(SUTER_ETH_CONTRACT_ADDRESS);
    let balance = newWeb3.utils.fromWei(balanceWithDecimal, 'ether');
    this.setState({ currentETHDeposited: balance });
  }

  async fetchSuterPrice(){
    let suterPrice = 0;
    try {
      let response = await axios.get(
       'kucoin_api/api/v1/market/orderbook/level1?symbol=SUTER-USDT',
      );
      if (response.status == 200) {
        let price = response.data.data.price;
        suterPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
         'Price Api Error',
         'Fetch suter price error',
         'error',
         4.5,
        );
      }
    } catch (error) {
     console.log(error);
      openNotificationWithIcon(
       'Network Error',
       'Fetch suter price error',
       'warning',
       4.5,
      );
    }
    this.setState({suterPrice: suterPrice})
  };

  async getETHPrice() {
    let ethPrice = 0;
    try {
      let response = await axios.get(
       'huobi_api/market/detail/merged?symbol=ethusdt',
      );
      if (response.status == 200) {
        let price = response.data.tick.bid[0];
        ethPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
         'Price Api Error',
         'Fetch ETH price error',
         'error',
         4.5,
        );
      }
    } catch (error) {
     console.log(error);
      openNotificationWithIcon(
       'Network Error',
       'Fetch ETH price error',
       'warning',
       4.5,
      );
    }
    this.setState({ethPrice: ethPrice})
  }

  async getDaiPrice() {
    let daiPrice = 0;
    try {
      let response = await axios.get(
       'huobi_api/market/detail/merged?symbol=daiusdt',
      );
      if (response.status == 200) {
        let price = response.data.tick.bid[0];
        daiPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
         'Price Api Error',
         'Fetch DAI price error',
         'error',
         4.5,
        );
      }
    } catch (error) {
     console.log(error);
      openNotificationWithIcon(
       'Network Error',
       'Fetch DAI price error',
       'warning',
       4.5,
      );
    }
    this.setState({daiPrice: daiPrice})
  }


  async getCurrentStableCoinsDeposited() {
    let totalValue = 0;
    let pools = [[SUTER_USDT_CONTRACT_ADDRESS, USDT_TOKEN_CONTRACT_ADDRESS, USDT_TOKEN_CONTRACT_ABI], [SUTER_DAI_CONTRACT_ADDRESS, DAI_TOKEN_CONTRACT_ADDRESS, DAI_TOKEN_CONTRACT_ABI], [SUTER_SUTER_CONTRACT_ADDRESS, SUTER_TOKEN_CONTRACT_ADDRESS, SUTER_TOKEN_CONTRACT_ABI]];
    for (const item of pools) {
      var suterShiledTokenContract = new Contract(item[2],item[1]);
      suterShiledTokenContract.setProvider(window.web3.currentProvider);
      let balanceWithDecimal = await suterShiledTokenContract.methods.balanceOf(item[0]).call();
      let decimals = await suterShiledTokenContract.methods.decimals().call();
      if(item[0] === SUTER_SUTER_CONTRACT_ADDRESS) {
        totalValue += (balanceWithDecimal * 1.0 / decimals) * this.state.suterPrice;
        this.setState({suterDecimals: decimals})
      }else if(item[0] === SUTER_USDT_CONTRACT_ADDRESS){
        totalValue += balanceWithDecimal * 1.0 / decimals;
        this.setState({usdtDecimals: decimals})
      }else if(item[0] === SUTER_DAI_CONTRACT_ADDRESS){
        totalValue += (balanceWithDecimal * 1.0 / decimals) * this.state.daiPrice;
        this.setState({daiDecimals: decimals})
      }
     }
    this.setState({ currentStableCoinsDeposited: totalValue });
  }

  async getTotalFeesUSD() {
    let totalFeesValue = 0;
    let pools = [[SUTER_ETH_CONTRACT_ADDRESS,SUTER_ETH_CONTRACT_ABI], [SUTER_USDT_CONTRACT_ADDRESS, SUTER_USDT_CONTRACT_ABI], [SUTER_DAI_CONTRACT_ADDRESS, SUTER_DAI_CONTRACT_ABI], [SUTER_SUTER_CONTRACT_ADDRESS, SUTER_SUTER_CONTRACT_ABI]];
    for (const item of pools) {
      var suterShieldContract = new Contract(
        item[1],
        item[0],
      );
      suterShieldContract.setProvider(window.web3.currentProvider);
      let fee = await suterShieldContract.methods.totalFee().call();
      let newWeb3 = new Web3(window.web3.currentProvider);
      if(item[0] === SUTER_ETH_CONTRACT_ADDRESS ){
        totalFeesValue = newWeb3.utils.fromWei(fee, 'ether') * this.state.ethPrice;
      }else if(item[0] === SUTER_USDT_CONTRACT_ADDRESS){
        totalFeesValue = fee * 1.0 / this.state.usdtDecimals
      }else if(item[0] === SUTER_DAI_CONTRACT_ADDRESS){
        totalFeesValue = fee * 1.0 / this.state.daiDecimals * this.state.daiPrice;
      }else if(item[0] === SUTER_SUTER_CONTRACT_ADDRESS){
        totalFeesValue = fee * 1.0 / this.state.suterDecimals * this.state.suterPrice;
      }
    }
    this.setState({totalFeesUSD: totalFeesValue})
  }

  render() {
    // console.log(this.state)
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
             <h1>${currentStableCoinsDeposited}</h1>
           </div>
           <div className="card">
             <h2>Total Fees USD</h2>
             <h1>${totalFeesUSD}</h1>
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
