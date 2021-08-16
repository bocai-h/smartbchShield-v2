const SuterPlatformCoinABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_transfer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_burn',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_unit',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'label',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogUint256',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        indexed: false,
        internalType: 'struct Utils.G1Point[]',
        name: 'parties',
        type: 'tuple[]',
      },
    ],
    name: 'TransferOccurred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BURN_FEE_DIVIDEND',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BURN_FEE_MULTIPLIER',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRANSFER_FEE_DIVIDEND',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRANSFER_FEE_MULTIPLIER',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'unitAmount',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'u',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'encGuess',
        type: 'bytes',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'epochBase',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'epochLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'unitAmount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'encGuess',
        type: 'bytes',
      },
    ],
    name: 'fund',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
    ],
    name: 'getAccountState',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[2]',
        name: 'y_available',
        type: 'tuple[2]',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[2]',
        name: 'y_pending',
        type: 'tuple[2]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[]',
        name: 'y',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'epoch',
        type: 'uint256',
      },
    ],
    name: 'getBalance',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[2][]',
        name: 'accounts',
        type: 'tuple[2][]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
    ],
    name: 'getGuess',
    outputs: [
      {
        internalType: 'bytes',
        name: 'y_guess',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastGlobalUpdate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'lastRollOver',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'c',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 's',
        type: 'uint256',
      },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'yHash',
        type: 'bytes32',
      },
    ],
    name: 'registered',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'multiplier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dividend',
        type: 'uint256',
      },
    ],
    name: 'setBurnFeeStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_epochBase',
        type: 'uint256',
      },
    ],
    name: 'setEpochBase',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_epochLength',
        type: 'uint256',
      },
    ],
    name: 'setEpochLength',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_suterAgency',
        type: 'address',
      },
    ],
    name: 'setSuterAgency',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'multiplier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dividend',
        type: 'uint256',
      },
    ],
    name: 'setTransferFeeStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_unit',
        type: 'uint256',
      },
    ],
    name: 'setUnit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'suterAgency',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalBurnFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalDeposits',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalFundCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalTransferFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalUsers',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[]',
        name: 'C',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'D',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[]',
        name: 'y',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'u',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const SuterERC20ABI = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'unitAmount',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'u',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'encGuess',
        type: 'bytes',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'unitAmount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'encGuess',
        type: 'bytes',
      },
    ],
    name: 'fund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'c',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 's',
        type: 'uint256',
      },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_transfer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_burn',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_unit',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'label',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogUint256',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'multiplier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dividend',
        type: 'uint256',
      },
    ],
    name: 'setBurnFeeStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_epochBase',
        type: 'uint256',
      },
    ],
    name: 'setEpochBase',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_epochLength',
        type: 'uint256',
      },
    ],
    name: 'setEpochLength',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_suterAgency',
        type: 'address',
      },
    ],
    name: 'setSuterAgency',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'multiplier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dividend',
        type: 'uint256',
      },
    ],
    name: 'setTransferFeeStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_unit',
        type: 'uint256',
      },
    ],
    name: 'setUnit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[]',
        name: 'C',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'D',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[]',
        name: 'y',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'u',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        indexed: false,
        internalType: 'struct Utils.G1Point[]',
        name: 'parties',
        type: 'tuple[]',
      },
    ],
    name: 'TransferOccurred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BURN_FEE_DIVIDEND',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BURN_FEE_MULTIPLIER',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'epochBase',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'epochLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
    ],
    name: 'getAccountState',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[2]',
        name: 'y_available',
        type: 'tuple[2]',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[2]',
        name: 'y_pending',
        type: 'tuple[2]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[]',
        name: 'y',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'epoch',
        type: 'uint256',
      },
    ],
    name: 'getBalance',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[2][]',
        name: 'accounts',
        type: 'tuple[2][]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
    ],
    name: 'getGuess',
    outputs: [
      {
        internalType: 'bytes',
        name: 'y_guess',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastGlobalUpdate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'lastRollOver',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'yHash',
        type: 'bytes32',
      },
    ],
    name: 'registered',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'suterAgency',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalBurnFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalDeposits',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalFundCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalTransferFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalUsers',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRANSFER_FEE_DIVIDEND',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRANSFER_FEE_MULTIPLIER',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const SuterUSDTABI = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'unitAmount',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'u',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'encGuess',
        type: 'bytes',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'unitAmount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'encGuess',
        type: 'bytes',
      },
    ],
    name: 'fund',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'c',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 's',
        type: 'uint256',
      },
    ],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_transfer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_burn',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_unit',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'label',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogUint256',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'multiplier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dividend',
        type: 'uint256',
      },
    ],
    name: 'setBurnFeeStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_epochBase',
        type: 'uint256',
      },
    ],
    name: 'setEpochBase',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_epochLength',
        type: 'uint256',
      },
    ],
    name: 'setEpochLength',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_suterAgency',
        type: 'address',
      },
    ],
    name: 'setSuterAgency',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'multiplier',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'dividend',
        type: 'uint256',
      },
    ],
    name: 'setTransferFeeStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_unit',
        type: 'uint256',
      },
    ],
    name: 'setUnit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[]',
        name: 'C',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'D',
        type: 'tuple',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[]',
        name: 'y',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'u',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'proof',
        type: 'bytes',
      },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        indexed: false,
        internalType: 'struct Utils.G1Point[]',
        name: 'parties',
        type: 'tuple[]',
      },
    ],
    name: 'TransferOccurred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BURN_FEE_DIVIDEND',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'BURN_FEE_MULTIPLIER',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'epochBase',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'epochLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
    ],
    name: 'getAccountState',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[2]',
        name: 'y_available',
        type: 'tuple[2]',
      },
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[2]',
        name: 'y_pending',
        type: 'tuple[2]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[]',
        name: 'y',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256',
        name: 'epoch',
        type: 'uint256',
      },
    ],
    name: 'getBalance',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point[2][]',
        name: 'accounts',
        type: 'tuple[2][]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'x',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'y',
            type: 'bytes32',
          },
        ],
        internalType: 'struct Utils.G1Point',
        name: 'y',
        type: 'tuple',
      },
    ],
    name: 'getGuess',
    outputs: [
      {
        internalType: 'bytes',
        name: 'y_guess',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastGlobalUpdate',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'lastRollOver',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'yHash',
        type: 'bytes32',
      },
    ],
    name: 'registered',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'suterAgency',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalBurnFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalDeposits',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalFundCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalTransferFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalUsers',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRANSFER_FEE_DIVIDEND',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TRANSFER_FEE_MULTIPLIER',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const ERC20ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const factoryContractABI = [
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_feeTo',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_feeToSetter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_transfer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_burn',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token0',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'PoolCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allCoins',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allPools',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allPoolsLength',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'burn',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'unit',
        type: 'uint256',
      },
    ],
    name: 'createPool',
    outputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeTo',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeToSetter',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'getCoin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'getPool',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
    ],
    name: 'initPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_burn',
        type: 'address',
      },
    ],
    name: 'setBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_fee',
        type: 'uint256',
      },
    ],
    name: 'setFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_feeTo',
        type: 'address',
      },
    ],
    name: 'setFeeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_feeToSetter',
        type: 'address',
      },
    ],
    name: 'setFeeToSetter',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_transfer',
        type: 'address',
      },
    ],
    name: 'setTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'transfer',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export {
  ERC20ABI,
  SuterUSDTABI,
  SuterERC20ABI,
  factoryContractABI,
  SuterPlatformCoinABI,
};
