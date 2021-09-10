import {
  ERC20ABI,
  SuterUSDTABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,
} from './abi';

export default {
  ENV: 'dev',

  ETH_CHAIN_ID: '0xfa2',
  ETHERSCAN: 'https://ropsten.etherscan.io',
  JSONRPC_URL: 'https://ropsten.infura.io/v3/d80602309b7c48e78b80a372a3f6c825',

  QA_URL: 'https://shield.staging.suterusu.io/qa',
  XSUTER_URL: 'https://shield.staging.suterusu.io/xsuter',
  SUTER_VM_URl: 'https://bridge.staging.suterusu.io',

  CHAIN_NAME: 'ftm_test',
  ShieldApi: 'staging_data_platform_api',

  SuterShieldV1: 'https://v1.ethshield.staging.suterusu.io',
  SuterShieldV2: 'https://ethshield.staging.suterusu.io',
  SuterusuProtocolV2:
    'https://docs.suterusu.io/suterusu-protocol-1/suterusu-protocol-v2',

  factoryContractAddress: '0xA718Cdf845B05A5073bD6d653F4B5A59161ec552',

  ERC20ABI,
  SuterUSDTABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,

  BlackList: [],
};
