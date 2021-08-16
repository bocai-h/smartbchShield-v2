import {
  ERC20ABI,
  SuterUSDTABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,
} from './abi';

export default {
  ENV: 'prod',

  ETH_CHAIN_ID: '0x1',
  ETHERSCAN: 'https://etherscan.io',
  JSONRPC_URL: 'https://mainnet.infura.io/v3/d80602309b7c48e78b80a372a3f6c825',

  QA_URL: 'https://shield.suterusu.io/qa',
  XSUTER_URL: 'https://shield.suterusu.io/xsuter',
  SUTER_VM_URl: 'https://bridge.suterusu.io',

  CHAIN_NAME: 'eth',
  ShieldApi: 'data_platform_api',

  factoryContractAddress: '0x3aDf6023951f8A38792056ec1cB8e7C2Dee7b148',

  ERC20ABI,
  SuterUSDTABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,

  BlackList: [],
};
