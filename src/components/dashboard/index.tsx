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
    totalUSDDeposited: 0,
    totalDeposits: 0,
    totalUsers: 0,
    suterPrice: 0,
    daiPrice: 0,
    ethPrice: 0
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
   await this.getTotalFeesUSD();
   await this.getTotalETHDeposited();
   await this.getTotalUSDDeposited();
   await this.totalDeposits();
   await this.getTotalUser();
  }
  async getCurrentETHDeposited() {
    let newWeb3 = new Web3(new Web3.providers.HttpProvider(JSONRPC_URL));
    let balanceWithDecimal = await newWeb3.eth.getBalance(CoinInfos["eth"].suterShiledContractAddress);
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
    let pools = [[CoinInfos["usdt"].suterShiledContractAddress, CoinInfos["usdt"].contractAddress, CoinInfos["usdt"].contractABI], [CoinInfos["dai"].suterShiledContractAddress, CoinInfos["dai"].contractAddress, CoinInfos["dai"].contractABI], [CoinInfos["suter"].suterShiledContractAddress, CoinInfos["suter"].contractAddress, CoinInfos["suter"].contractABI]];
    for (const item of pools) {
      var suterShiledTokenContract = new Contract(item[2],item[1]);
      suterShiledTokenContract.setProvider(new Web3.providers.HttpProvider(JSONRPC_URL));
      let balanceWithDecimal = await suterShiledTokenContract.methods.balanceOf(item[0]).call();
      if(item[0] === CoinInfos["suter"].suterShiledContractAddress) {
        let info = CoinInfos["suter"];
        totalValue += (balanceWithDecimal * 1.0 / (10 ** info.decimal)) * this.state.suterPrice;
      }else if(item[0] === CoinInfos["usdt"].suterShiledContractAddress){
        let info = CoinInfos["usdt"];
        totalValue += balanceWithDecimal * 1.0 / (10 ** info.decimal);
      }else if(item[0] === CoinInfos["dai"].suterShiledContractAddress){
        let info = CoinInfos["dai"];
        totalValue += (balanceWithDecimal * 1.0 / (10 ** info.decimal)) * this.state.daiPrice;
      }
     }
    this.setState({ currentStableCoinsDeposited: totalValue });
  }

  async getTotalFeesUSD() {
    let totalFeesValue = 0;
    let pools = [[CoinInfos["eth"].suterShiledContractAddress, CoinInfos["eth"].suterShiledContractABI], [CoinInfos["usdt"].suterShiledContractAddress,CoinInfos["usdt"].suterShiledContractABI], [CoinInfos["dai"].suterShiledContractAddress,CoinInfos["dai"].suterShiledContractABI], [CoinInfos["suter"].suterShiledContractAddress,CoinInfos["suter"].suterShiledContractABI]];
    for (const item of pools) {
      var suterShieldContract = new Contract(
        item[1],
        item[0],
      );
      suterShieldContract.setProvider(new Web3.providers.HttpProvider(JSONRPC_URL));
      let burnFee = await suterShieldContract.methods.totalBurnFee().call();
      let transferFee = await suterShieldContract.methods.totalTransferFee().call();
      let ethInfo = CoinInfos["eth"]
      if(item[0] === CoinInfos["eth"].suterShiledContractAddress ){
        totalFeesValue += ((burnFee + transferFee) * 1.0 / (10 ** ethInfo.decimal)) * this.state.ethPrice;
      }else if(item[0] === CoinInfos["usdt"].suterShiledContractAddress){
        let info = CoinInfos["usdt"]
        totalFeesValue += burnFee * 1.0 / (10 ** info.decimal)
        totalFeesValue += transferFee * 1.0 / (10 ** ethInfo.decimal) * this.state.ethPrice;
      }else if(item[0] === CoinInfos["dai"].suterShiledContractAddress){
        let info = CoinInfos["dai"]
        totalFeesValue += (burnFee * 1.0 / (10 ** info.decimal)) * this.state.daiPrice;
        totalFeesValue += transferFee * 1.0 / (10 ** ethInfo.decimal) * this.state.ethPrice;
      }else if(item[0] === CoinInfos["suter"].suterShiledContractAddress){
        let info = CoinInfos["suter"]
        totalFeesValue += (burnFee * 1.0 / (10 ** info.decimal)) * this.state.suterPrice;
        totalFeesValue += transferFee * 1.0 / (10 ** ethInfo.decimal) * this.state.ethPrice;
      }
    }
    this.setState({totalFeesUSD: totalFeesValue})
  }

  async getTotalETHDeposited() {
    let ethInfo = CoinInfos["eth"];
    var suterETHShieldContract = new Contract(
      ethInfo.suterShiledContractABI,
      ethInfo.suterShiledContractAddress
    );
    suterETHShieldContract.setProvider(new Web3.providers.HttpProvider(JSONRPC_URL));
    let totalETHDeposited = await suterETHShieldContract.methods.totalDeposits().call();
    this.setState({totalETHDeposited: (totalETHDeposited * 1.0 * ethInfo.suterShieldUnit) / (10 ** ethInfo.decimal)})
  }

  async getTotalUSDDeposited() {
    let totalValue = 0;
    let pools = [[CoinInfos["eth"].suterShiledContractAddress, CoinInfos["eth"].suterShiledContractABI], [CoinInfos["usdt"].suterShiledContractAddress, CoinInfos["usdt"].suterShiledContractABI], [CoinInfos["dai"].suterShiledContractAddress, CoinInfos["dai"].suterShiledContractABI], [CoinInfos["suter"].suterShiledContractAddress, CoinInfos["suter"].suterShiledContractABI]];
    for (const item of pools) {
      var suterShieldContract = new Contract(
        item[1],
        item[0],
      );
      suterShieldContract.setProvider(new Web3.providers.HttpProvider(JSONRPC_URL));
      let amount = await suterShieldContract.methods.totalDeposits().call();
      if(item[0] === CoinInfos["eth"].suterShiledContractAddress){
        let info = CoinInfos["eth"]
        totalValue += (amount * 1.0 * info.suterShieldUnit / (10 ** info.decimal)) * this.state.ethPrice;
      }else if(item[0] === CoinInfos["usdt"].suterShiledContractAddress){
        let info = CoinInfos["usdt"]
        totalValue += amount * 1.0 * info.suterShieldUnit / (10 ** info.decimal);
      }else if(item[0] === CoinInfos["dai"].suterShiledContractAddress){
        let info = CoinInfos["dai"]
        totalValue += (amount * 1.0 * info.suterShieldUnit / (10 ** info.decimal)) * this.state.daiPrice;
      }else if(item[0] === CoinInfos["suter"].suterShiledContractAddress){
        let info = CoinInfos["suter"]
        totalValue += (amount * 1.0 * info.suterShieldUnit / (10 ** info.decimal)) * this.state.suterPrice;
      }
    }
    this.setState({totalUSDDeposited: totalValue})
  }

  async getTotalUser() {
    let totalUsers = 0;
    let pools = [[CoinInfos["eth"].suterShiledContractAddress, CoinInfos["eth"].suterShiledContractABI], [CoinInfos["usdt"].suterShiledContractAddress, CoinInfos["usdt"].suterShiledContractABI], [CoinInfos["dai"].suterShiledContractAddress, CoinInfos["dai"].suterShiledContractABI], [CoinInfos["suter"].suterShiledContractAddress, CoinInfos["suter"].suterShiledContractABI]];
    for (const item of pools) {
      var suterShieldContract = new Contract(
        item[1],
        item[0],
      );
      suterShieldContract.setProvider(new Web3.providers.HttpProvider(JSONRPC_URL));
      let userAmount = await suterShieldContract.methods.totalUsers().call();
      totalUsers += parseInt(userAmount)
    }
    this.setState({totalUsers: totalUsers})
  }

  async totalDeposits(){
    let totalDepositCount = 0;
    let pools = [[CoinInfos["eth"].suterShiledContractAddress, CoinInfos["eth"].suterShiledContractABI], [CoinInfos["usdt"].suterShiledContractAddress, CoinInfos["usdt"].suterShiledContractABI], [CoinInfos["dai"].suterShiledContractAddress, CoinInfos["dai"].suterShiledContractABI], [CoinInfos["suter"].suterShiledContractAddress, CoinInfos["suter"].suterShiledContractABI]];
    for (const item of pools) {
      var suterShieldContract = new Contract(
        item[1],
        item[0],
      );
      suterShieldContract.setProvider(new Web3.providers.HttpProvider(JSONRPC_URL));
      let count = await suterShieldContract.methods.totalFundCount().call();
      totalDepositCount += parseInt(count)
    }
    this.setState({totalDeposits: totalDepositCount})
  }
  render() {
    // console.log(this.state)
    let { intl } = this.props;
    let { currentETHDeposited, currentStableCoinsDeposited, totalFeesUSD, totalETHDeposited, totalDeposits, totalUSDDeposited, totalUsers }  = this.state
    return (
      <div className="dashboardContainer">
        <div className="cardContainer">
         <Col span={24}>
           <div className="card">
             <h2>{intl.get("CurrentETHDeposited")}</h2>
             <h1>{currentETHDeposited.toLocaleString()}</h1>
           </div>
           <div className="card">
             <h2>{intl.get("CurrentStableCoinsDeposited")}</h2>
             <h1>${currentStableCoinsDeposited.toLocaleString()}</h1>
           </div>
           <div className="card">
             <h2>{intl.get("TotalFeesUSD")}</h2>
             <h1>${totalFeesUSD.toLocaleString()}</h1>
           </div>
          </Col>
        </div>
        <div className="cardContainer">
         <Col span={24}>
           <div className="card">
              <h2>{intl.get("TotalETHDeposited")}</h2>
              <h1>{totalETHDeposited.toLocaleString()}</h1>
           </div>
           <div className="card">
             <h2>{intl.get("TotalUSDDeposited")}</h2>
             <h1>${totalUSDDeposited.toLocaleString()}</h1>
           </div>
           <div className="card">
             <h2>{intl.get("TotalDeposits")}</h2>
             <h1>{totalDeposits.toLocaleString()}</h1>
           </div>
          </Col>
        </div>
        <div className="cardContainer lastCardContainer">
          <Col span={24}>
           <div className="card">
             <h2>{intl.get("TotalUsers")}</h2>
             <h1>{totalUsers.toLocaleString()}</h1>
           </div>
          </Col>
        </div>
      </div>
    );
  }
}
export default Dashboard;
