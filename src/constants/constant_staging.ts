import {
  ERC20ABI,
  SuterUSDTABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,
} from './abi';

export default {
  ENV: 'dev',

  ETH_CHAIN_ID: '0x3',
  ETHERSCAN: 'https://ropsten.etherscan.io',
  JSONRPC_URL: 'https://ropsten.infura.io/v3/d80602309b7c48e78b80a372a3f6c825',

  QA_URL: 'https://shield.staging.suterusu.io/qa',
  XSUTER_URL: 'https://shield.staging.suterusu.io/xsuter',
  SUTER_VM_URl: 'https://bridge.staging.suterusu.io',

  CHAIN_NAME: 'eth',
  ShieldApi: 'data_platform_api',

  factoryContractAddress: '0xA718Cdf845B05A5073bD6d653F4B5A59161ec552',

  ERC20ABI,
  SuterUSDTABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,

  BlackList: [],
};
