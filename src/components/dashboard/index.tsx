import React from 'react';
import { Spin } from 'antd';
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
    ethPrice: 0,
    renBTCPrice: 0,
    currentETHDepositedLoading: true,
    currentStableCoinsDepositedLoading: true,
    totalFeesUSDLoading: true,
    totalETHDepositedLoading: true,
    totalUSDDepositedLoading: true,
    totalDepositsLoading: true,
    totalUsersLoading: true,
  };
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this.getCurrentETHDeposited();
    await this.fetchSuterPrice();
    await this.getRenBTCPrice();
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
    let balanceWithDecimal = await newWeb3.eth.getBalance(
      CoinInfos['eth'].suterShiledContractAddress,
    );
    let balance = newWeb3.utils.fromWei(balanceWithDecimal, 'ether');
    this.setState({
      currentETHDeposited: balance,
      currentETHDepositedLoading: false,
    });
  }

  async fetchSuterPrice() {
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
    this.setState({ suterPrice: suterPrice * 2 });
  }

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
    this.setState({ ethPrice: ethPrice });
  }

  async getRenBTCPrice() {
    let renBTCBTCPrice = 0;
    try {
      let response = await axios.get(
        'huobi_api/market/detail/merged?symbol=renbtcbtc',
      );
      if (response.status == 200) {
        let price = response.data.tick.bid[0];
        renBTCBTCPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
          'Price Api Error',
          'Fetch RenBTC/BTC price error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      console.log(error);
      openNotificationWithIcon(
        'Network Error',
        'Fetch RenBTC/BTC price error',
        'warning',
        4.5,
      );
    }

    let BTCUSDTPrice = 0;
    try {
      let response = await axios.get(
        'huobi_api/market/detail/merged?symbol=btcusdt',
      );
      if (response.status == 200) {
        let price = response.data.tick.bid[0];
        BTCUSDTPrice = parseFloat(price);
      } else {
        openNotificationWithIcon(
          'Price Api Error',
          'Fetch BTC/USDT price error',
          'error',
          4.5,
        );
      }
    } catch (error) {
      console.log(error);
      openNotificationWithIcon(
        'Network Error',
        'Fetch BTC/USDT price error',
        'warning',
        4.5,
      );
    }
    this.setState({ renBTCPrice: renBTCBTCPrice * BTCUSDTPrice });
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
    this.setState({ daiPrice: daiPrice });
  }

  pools() {
    let { suterPrice, daiPrice, ethPrice, renBTCPrice } = this.state;
    let poolInfos = [
      [
        CoinInfos['eth'].suterShiledContractAddress,
        CoinInfos['eth'].suterShiledContractABI,
        CoinInfos['eth'].decimal,
        CoinInfos['eth'].suterShieldUnit,
        ethPrice,
      ],
      [
        CoinInfos['usdt'].suterShiledContractAddress,
        CoinInfos['usdt'].suterShiledContractABI,
        CoinInfos['usdt'].decimal,
        CoinInfos['usdt'].suterShieldUnit,
        1,
        CoinInfos['usdt'].contractAddress,
        CoinInfos['usdt'].contractABI,
      ],
      [
        CoinInfos['dai'].suterShiledContractAddress,
        CoinInfos['dai'].suterShiledContractABI,
        CoinInfos['dai'].decimal,
        CoinInfos['dai'].suterShieldUnit,
        daiPrice,
        CoinInfos['dai'].contractAddress,
        CoinInfos['dai'].contractABI,
      ],
      [
        CoinInfos['suter'].suterShiledContractAddress,
        CoinInfos['suter'].suterShiledContractABI,
        CoinInfos['suter'].decimal,
        CoinInfos['suter'].suterShieldUnit,
        suterPrice,
        CoinInfos['suter'].contractAddress,
        CoinInfos['suter'].contractABI,
      ],
      [
        CoinInfos['renBTC'].suterShiledContractAddress,
        CoinInfos['renBTC'].suterShiledContractABI,
        CoinInfos['renBTC'].decimal,
        CoinInfos['renBTC'].suterShieldUnit,
        renBTCPrice,
        CoinInfos['renBTC'].contractAddress,
        CoinInfos['renBTC'].contractABI,
      ],
    ];
    return poolInfos;
  }

  async getCurrentStableCoinsDeposited() {
    let ethInfo = CoinInfos['eth'];
    let totalValue = 0;
    let pools = this.pools();
    for (const item of pools) {
      if (ethInfo.suterShiledContractAddress === item[0]) {
        continue;
      }
      var suterShiledTokenContract = new Contract(item[6], item[5]);
      suterShiledTokenContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      let balanceWithDecimal = await suterShiledTokenContract.methods
        .balanceOf(item[0])
        .call();

      totalValue += ((balanceWithDecimal * 1.0) / 10 ** item[2]) * item[4];
    }
    this.setState({
      currentStableCoinsDeposited: totalValue,
      currentStableCoinsDepositedLoading: false,
    });
  }

  async getTotalFeesUSD() {
    let { ethPrice } = this.state;
    let totalFeesValue = 0;
    let pools = this.pools();

    let ethInfo = CoinInfos['eth'];
    for (const item of pools) {
      var suterShieldContract = new Contract(item[1], item[0]);
      suterShieldContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      let burnFee = await suterShieldContract.methods.totalBurnFee().call();
      let transferFee = await suterShieldContract.methods
        .totalTransferFee()
        .call();

      totalFeesValue += ((burnFee * 1.0) / 10 ** item[2]) * item[4];
      totalFeesValue +=
        ((transferFee * 1.0) / 10 ** ethInfo.decimal) * ethPrice;
    }
    this.setState({ totalFeesUSD: totalFeesValue, totalFeesUSDLoading: false });
  }

  async getTotalETHDeposited() {
    let ethInfo = CoinInfos['eth'];
    var suterETHShieldContract = new Contract(
      ethInfo.suterShiledContractABI,
      ethInfo.suterShiledContractAddress,
    );
    suterETHShieldContract.setProvider(
      new Web3.providers.HttpProvider(JSONRPC_URL),
    );
    let totalETHDeposited = await suterETHShieldContract.methods
      .totalDeposits()
      .call();
    this.setState({
      totalETHDepositedLoading: false,
      totalETHDeposited:
        (totalETHDeposited * 1.0 * ethInfo.suterShieldUnit) /
        10 ** ethInfo.decimal,
    });
  }

  async getTotalUSDDeposited() {
    let totalValue = 0;
    let pools = this.pools();

    for (const item of pools) {
      var suterShieldContract = new Contract(item[1], item[0]);
      suterShieldContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      let amount = await suterShieldContract.methods.totalDeposits().call();
      totalValue += ((amount * 1.0 * item[3]) / 10 ** item[2]) * item[4];
    }
    this.setState({
      totalUSDDeposited: totalValue,
      totalUSDDepositedLoading: false,
    });
  }

  async getTotalUser() {
    let totalUsers = 0;
    let pools = this.pools();
    for (const item of pools) {
      var suterShieldContract = new Contract(item[1], item[0]);
      suterShieldContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      let userAmount = await suterShieldContract.methods.totalUsers().call();
      totalUsers += parseInt(userAmount);
    }
    this.setState({ totalUsers: totalUsers, totalUsersLoading: false });
  }

  async totalDeposits() {
    let totalDepositCount = 0;
    let pools = this.pools();
    for (const item of pools) {
      var suterShieldContract = new Contract(item[1], item[0]);
      suterShieldContract.setProvider(
        new Web3.providers.HttpProvider(JSONRPC_URL),
      );
      let count = await suterShieldContract.methods.totalFundCount().call();
      totalDepositCount += parseInt(count);
    }
    this.setState({
      totalDeposits: totalDepositCount,
      totalDepositsLoading: false,
    });
  }
  render() {
    // console.log(this.state)
    let { intl } = this.props;
    let {
      currentETHDeposited,
      currentStableCoinsDeposited,
      totalFeesUSD,
      totalETHDeposited,
      totalDeposits,
      totalUSDDeposited,
      totalUsers,
    } = this.state;
    let {
      currentETHDepositedLoading,
      currentStableCoinsDepositedLoading,
      totalFeesUSDLoading,
      totalETHDepositedLoading,
      totalUSDDepositedLoading,
      totalDepositsLoading,
      totalUsersLoading,
    } = this.state;
    return (
      <div className="dashboardContainer">
        <div className="cardContainer">
          <div className="card">
            <h2>{intl.get('CurrentETHDeposited')}</h2>
            {currentETHDepositedLoading ? (
              <Spin size="large" />
            ) : (
              <h1>{currentETHDeposited.toLocaleString()}</h1>
            )}
          </div>
          <div className="card">
            <h2>{intl.get('TotalETHDeposited')}</h2>
            {totalETHDepositedLoading ? (
              <Spin size="large" />
            ) : (
              <h1>{totalETHDeposited.toLocaleString()}</h1>
            )}
          </div>
          <div className="card">
            <h2>{intl.get('TotalUsers')}</h2>
            {totalUsersLoading ? (
              <Spin size="large" />
            ) : (
              <h1>{totalUsers.toLocaleString()}</h1>
            )}
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <h2>{intl.get('CurrentStableCoinsDeposited')}</h2>
            {currentStableCoinsDepositedLoading ? (
              <Spin size="large" />
            ) : (
              <h1>${currentStableCoinsDeposited.toLocaleString()}</h1>
            )}
          </div>
          <div className="card">
            <h2>{intl.get('TotalUSDDeposited')}</h2>
            {totalUSDDepositedLoading ? (
              <Spin size="large" />
            ) : (
              <h1>${totalUSDDeposited.toLocaleString()}</h1>
            )}
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <h2>{intl.get('TotalFeesUSD')}</h2>
            {totalFeesUSDLoading ? (
              <Spin size="large" />
            ) : (
              <h1>${totalFeesUSD.toLocaleString()}</h1>
            )}
          </div>
          <div className="card">
            <h2>{intl.get('TotalDeposits')}</h2>
            {totalDepositsLoading ? (
              <Spin size="large" />
            ) : (
              <h1>{totalDeposits.toLocaleString()}</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
