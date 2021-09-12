import {
  ERC20ABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,
} from './abi';

export default {
  ENV: 'staging',

  BSC_CHAIN_ID: '0x61',
  ETH_CHAIN_ID: '0x3',
  POLY_CHAIN_ID: '0x13881',
  FAN_CHAIN_ID: '0xfa2',

  BSC_WEB: 'https://bscshield.staging.suterusu.io',
  ETH_WEB: 'https://ethshield.staging.suterusu.io',
  POLY_WEB: 'https://polygonshield.staging.suterusu.io',
  FAN_WEB: 'https://ftmshield.staging.suterusu.io',

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
