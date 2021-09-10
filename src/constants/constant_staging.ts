import {
  ERC20ABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,
} from './abi';

export default {
  ENV: 'staging',

  QA_URL: 'https://shield.staging.suterusu.io/qa',
  XSUTER_URL: 'https://shield.staging.suterusu.io/xsuter',
  SUTER_VM_URl: 'https://bridge.staging.suterusu.io',

  CHAIN_NAME: 'ftm_test',
  ShieldApi: 'staging_data_platform_api',
  SuterusuProtocolV2:
    'https://docs.suterusu.io/suterusu-protocol-1/suterusu-protocol-v2',

  ERC20ABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,
  BlackList: [],
};
