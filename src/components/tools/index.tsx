import React from 'react';
import { notification, Tooltip } from 'antd';
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
  let newWeb3 = new Web3(
    new Web3.providers.HttpProvider(window.blockchain.jrpc),
  );
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
  '0xfa2': 'Fantom Test Network',
  '0xfa': 'Fantom Main Network',
  '0x2711': 'BCH Test Network',
};

export {
  openNotificationWithIcon,
  openNotificationWithKey,
  MessageWithAlink,
  ethChainNameMap,
  Client,
  MobileBrowserCheck,
  RegisterGasEstimate,
};
