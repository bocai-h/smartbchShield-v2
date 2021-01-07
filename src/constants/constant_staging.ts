export default {
  ENV: 'staging',
  ETH_CHAIN_ID: '0x3',
  ETHERSCAN: 'https://ropsten.etherscan.io',
  SUTER_ETH_CONTRACT_ADDRESS: '0x2528ADd95fD8fe0260F3Ef1Fe1bAfb9954F929b3',
  SUTER_ETH_CONTRACT_ABI: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ip",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CLn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CRn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "y",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "u",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "verifyBurn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  SUTER_USDT_CONTRACT_ADDRESS: '0xa08CB5b27d12707F8E957798f01Ec75809f46595',
  SUTER_USDT_CONTRACT_ABI: [
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
          name: '_epochBase',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_epochLength',
          type: 'uint256',
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
      stateMutability: 'nonpayable',
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
  ],
  USDT_TOKEN_CONTRACT_ADDRESS: '0xc36a5e9d80967a58c9cb98aa67648da0133870d8',
  USDT_TOKEN_CONTRACT_ABI: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ip",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CLn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CRn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "y",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "u",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "verifyBurn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  DAI_TOKEN_CONTRACT_ADDRESS: '0x518531411954ab9c501996B1483420CF7479a1aD',
  DAI_TOKEN_CONTRACT_ABI: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ip",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CLn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CRn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "y",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "u",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "verifyBurn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  SUTER_DAI_CONTRACT_ADDRESS: '0x97eDC52256C633bC7C9AAca0C3bc8cE2A09a92F4',
  SUTER_DAI_CONTRACT_ABI:[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ip",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CLn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CRn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "y",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "u",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "verifyBurn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  SUTER_TOKEN_CONTRACT_ADDRESS: '0x281Df1B928fE3C0E9a883c783610a2c7494cD62f',
  SUTER_TOKEN_CONTRACT_ABI: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ip",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CLn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CRn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "y",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "u",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "verifyBurn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  SUTER_SUTER_CONTRACT_ADDRESS: '0xACA1eFCFD838bD797746FE8dB9301B31F90C8f97',
  SUTER_SUTER_CONTRACT_ABI:[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ip",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CLn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "CRn",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "y",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "epoch",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "x",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "y",
              "type": "bytes32"
            }
          ],
          "internalType": "struct Utils.G1Point",
          "name": "u",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "proof",
          "type": "bytes"
        }
      ],
      "name": "verifyBurn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
};
