import React from 'react';
import { notification, Tooltip } from 'antd';
import axios from 'axios';
import usdtLogo from '../../static/usdtLogo.svg';
import ethLogo from '../../static/ethLogo.svg';
import daiLogo from '../../static/daiLogo.svg';
import suterLogo from '../../static/suterLogo.svg';
import renBTCLogo from '../../static/renBTCLogo.svg';
import susdt from '../../static/S_USDT.svg';
import usdt from '../../static/USDT.svg';
import seth from '../../static/S_ETH.svg';
import eth from '../../static/ETH.svg';
import sdai from '../../static/S_DAI.svg';
import dai from '../../static/DAI.svg';
import ssuter from '../../static/S_SUTER.svg';
import suter from '../../static/SUTER.svg';
import srenBTC from '../../static/S_RENBTC.svg';
import renBTC from '../../static/RENBTC.svg';
import Web3 from 'web3';
const BigNumber = require('bignumber.js');
const Client = require('../../../suterusu-protocol/lib/suterusu.js');
// const Client = require('/Users/jiangchongyang/Desktop/chongyang/waibao/suterusu-protocol/lib/suterusu.js');

const openNotificationWithIcon = (
  title: string,
  desc: any,
  type: string,
  duration: number = 0,
  onClickFunc = () => {},
) => {
  notification[type]({
    className: type,
    message: title,
    description: desc,
    duration: duration,
    onClick: onClickFunc,
  });
};

const openNotificationWithKey = (
  key: string,
  title: string,
  desc: any,
  type: string,
  duration: number = 0,
  onClickFunc = () => {},
) => {
  const onClickFuncWraper = ckey => () => {
    onClickFunc();
    notification.close(ckey);
  };
  notification[type]({
    key: key,
    message: title,
    description: desc,
    duration: duration,
    onClick: onClickFuncWraper(key),
  });
};

const MessageWithAlink = props => {
  return (
    <a href={props.aLink} target="_blank">
      {props.message}
    </a>
  );
};

// const fetchSuterPrice = async () => {
//   let suterPrice = 0;
//   try {
//     let response = await axios.get(
//       'kucoin_api/api/v1/market/orderbook/level1?symbol=SUTER-USDT',
//     );
//     if (response.status == 200) {
//       let price = response.data.data.price;
//       suterPrice = parseFloat(price);
//     } else {
//       console.log(response);
//       openNotificationWithIcon(
//         'Price Api Error',
//         'Fetch suter price error',
//         'error',
//         4.5,
//       );
//     }
//   } catch (error) {
//     console.log(error);
//     openNotificationWithIcon(
//       'Network Error',
//       'Fetch suter price error',
//       'warning',
//       4.5,
//     );
//   }
//   return suterPrice;
// };

const fetchSuterPrice = async () => {
  let suterPrice = 0;
  // let start_time = Math.floor(new Date() / 1000);
  try {
    let response = await axios.get(
      `mxc_api/open/api/v2/market/deals?symbol=SUTER_USDT&limit=1`,
    );
    if (response.status == 200) {
      let data = response.data.data[0];
      suterPrice = parseFloat(data['trade_price']);
    } else {
      console.log(response);
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
  return suterPrice;
};

const MobileBrowserCheck = (): boolean => {
  let check = false;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    // true for mobile device
    check = true;
  } else {
    // false for not mobile device
    check = false;
  }
  return check;
};

const RegisterGasEstimate = async (account): boolean => {
  let check = false;
  // get account bnb balance
  let newWeb3 = new Web3(new Web3.providers.HttpProvider(JSONRPC_URL));
  let bnbBalanceWithDecimal = await newWeb3.eth.getBalance(account);

  // BSC price is always 10Gwei
  // let gasPrice = 10000000000;
  let gasPrice = await newWeb3.eth.getGasPrice();
  let gas = 144760;
  let gasPriceBn = new BigNumber(gasPrice);
  let gasFee = gasPriceBn.times(gas); // trueinus(gas);

  check = new BigNumber(bnbBalanceWithDecimal).minus(gasFee) >= 0;
  return check;
};

const ethChainNameMap = {
  '0x1': 'Ethereum Main Network (MainNet)',
  '0x3': 'Ropsten Test Network',
  '0x4': 'Rinkeby Test Network',
  '0x5': 'Goerli Test Network',
  '0x2a': 'Kovan Test Network',
};

const tronChainNameMap = {
  shasta: 'Shasta',
  trongrid: 'MainNet',
};

const CoinLogoMap = {
  usdt: [usdtLogo, susdt, usdt],
  eth: [ethLogo, seth, eth],
  dai: [daiLogo, sdai, dai],
  suter: [suterLogo, ssuter, suter],
  renBTC: [renBTCLogo, srenBTC, renBTC],
};

export {
  openNotificationWithIcon,
  openNotificationWithKey,
  MessageWithAlink,
  ethChainNameMap,
  tronChainNameMap,
  Client,
  CoinLogoMap,
  fetchSuterPrice,
  MobileBrowserCheck,
  RegisterGasEstimate,
};
