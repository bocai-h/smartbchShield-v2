const SuterETHABI = [
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

export { SuterETHABI, SuterERC20ABI, SuterUSDTABI };