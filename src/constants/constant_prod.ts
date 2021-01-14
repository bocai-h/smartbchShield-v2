export default {
	ENV: 'prod',
	ETH_CHAIN_ID: '0x1',
	ETHERSCAN: 'https://etherscan.io',
	JSONRPC_URL: 'https://mainnet.infura.io/v3/d80602309b7c48e78b80a372a3f6c825',
	CoinInfos: {
		usdt: {
		  suterShiledBalanceDesc: 'Suter USDT',
		  coinBalanceDesc: 'USDT',
		  valueDesc: 'Suter USDT',
		  unit: 'USDT',
		  suterShieldUnit: 10**6,
		  contractABI:[
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"name",
			   "outputs":[
				  {
					 "name":"",
					 "type":"string"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"_upgradedAddress",
					 "type":"address"
				  }
			   ],
			   "name":"deprecate",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"_spender",
					 "type":"address"
				  },
				  {
					 "name":"_value",
					 "type":"uint256"
				  }
			   ],
			   "name":"approve",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"deprecated",
			   "outputs":[
				  {
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"_evilUser",
					 "type":"address"
				  }
			   ],
			   "name":"addBlackList",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"totalSupply",
			   "outputs":[
				  {
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"_from",
					 "type":"address"
				  },
				  {
					 "name":"_to",
					 "type":"address"
				  },
				  {
					 "name":"_value",
					 "type":"uint256"
				  }
			   ],
			   "name":"transferFrom",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"upgradedAddress",
			   "outputs":[
				  {
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "name":"balances",
			   "outputs":[
				  {
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"decimals",
			   "outputs":[
				  {
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"maximumFee",
			   "outputs":[
				  {
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"_totalSupply",
			   "outputs":[
				  {
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  
			   ],
			   "name":"unpause",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "name":"_maker",
					 "type":"address"
				  }
			   ],
			   "name":"getBlackListStatus",
			   "outputs":[
				  {
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "name":"",
					 "type":"address"
				  },
				  {
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "name":"allowed",
			   "outputs":[
				  {
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"paused",
			   "outputs":[
				  {
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "name":"who",
					 "type":"address"
				  }
			   ],
			   "name":"balanceOf",
			   "outputs":[
				  {
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  
			   ],
			   "name":"pause",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"getOwner",
			   "outputs":[
				  {
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"owner",
			   "outputs":[
				  {
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"symbol",
			   "outputs":[
				  {
					 "name":"",
					 "type":"string"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"_to",
					 "type":"address"
				  },
				  {
					 "name":"_value",
					 "type":"uint256"
				  }
			   ],
			   "name":"transfer",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"newBasisPoints",
					 "type":"uint256"
				  },
				  {
					 "name":"newMaxFee",
					 "type":"uint256"
				  }
			   ],
			   "name":"setParams",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"amount",
					 "type":"uint256"
				  }
			   ],
			   "name":"issue",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"amount",
					 "type":"uint256"
				  }
			   ],
			   "name":"redeem",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "name":"_owner",
					 "type":"address"
				  },
				  {
					 "name":"_spender",
					 "type":"address"
				  }
			   ],
			   "name":"allowance",
			   "outputs":[
				  {
					 "name":"remaining",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"basisPointsRate",
			   "outputs":[
				  {
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "name":"isBlackListed",
			   "outputs":[
				  {
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"_clearedUser",
					 "type":"address"
				  }
			   ],
			   "name":"removeBlackList",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"MAX_UINT",
			   "outputs":[
				  {
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"newOwner",
					 "type":"address"
				  }
			   ],
			   "name":"transferOwnership",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "name":"_blackListedUser",
					 "type":"address"
				  }
			   ],
			   "name":"destroyBlackFunds",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "inputs":[
				  {
					 "name":"_initialSupply",
					 "type":"uint256"
				  },
				  {
					 "name":"_name",
					 "type":"string"
				  },
				  {
					 "name":"_symbol",
					 "type":"string"
				  },
				  {
					 "name":"_decimals",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"constructor"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":false,
					 "name":"amount",
					 "type":"uint256"
				  }
			   ],
			   "name":"Issue",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":false,
					 "name":"amount",
					 "type":"uint256"
				  }
			   ],
			   "name":"Redeem",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":false,
					 "name":"newAddress",
					 "type":"address"
				  }
			   ],
			   "name":"Deprecate",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":false,
					 "name":"feeBasisPoints",
					 "type":"uint256"
				  },
				  {
					 "indexed":false,
					 "name":"maxFee",
					 "type":"uint256"
				  }
			   ],
			   "name":"Params",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":false,
					 "name":"_blackListedUser",
					 "type":"address"
				  },
				  {
					 "indexed":false,
					 "name":"_balance",
					 "type":"uint256"
				  }
			   ],
			   "name":"DestroyedBlackFunds",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":false,
					 "name":"_user",
					 "type":"address"
				  }
			   ],
			   "name":"AddedBlackList",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":false,
					 "name":"_user",
					 "type":"address"
				  }
			   ],
			   "name":"RemovedBlackList",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "name":"owner",
					 "type":"address"
				  },
				  {
					 "indexed":true,
					 "name":"spender",
					 "type":"address"
				  },
				  {
					 "indexed":false,
					 "name":"value",
					 "type":"uint256"
				  }
			   ],
			   "name":"Approval",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "name":"from",
					 "type":"address"
				  },
				  {
					 "indexed":true,
					 "name":"to",
					 "type":"address"
				  },
				  {
					 "indexed":false,
					 "name":"value",
					 "type":"uint256"
				  }
			   ],
			   "name":"Transfer",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  
			   ],
			   "name":"Pause",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  
			   ],
			   "name":"Unpause",
			   "type":"event"
			}
		  ],
		  contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
		  suterShiledContractABI: [
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "unitAmount",
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
				  "internalType": "bytes",
				  "name": "proof",
				  "type": "bytes"
				},
				{
				  "internalType": "bytes",
				  "name": "encGuess",
				  "type": "bytes"
				}
			  ],
			  "name": "burn",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "unitAmount",
				  "type": "uint256"
				},
				{
				  "internalType": "bytes",
				  "name": "encGuess",
				  "type": "bytes"
				}
			  ],
			  "name": "fund",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "c",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "s",
				  "type": "uint256"
				}
			  ],
			  "name": "register",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "_token",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "_transfer",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "_burn",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "_unit",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "string",
				  "name": "label",
				  "type": "string"
				},
				{
				  "indexed": true,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "LogUint256",
			  "type": "event"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "multiplier",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "dividend",
				  "type": "uint256"
				}
			  ],
			  "name": "setBurnFeeStrategy",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_epochBase",
				  "type": "uint256"
				}
			  ],
			  "name": "setEpochBase",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_epochLength",
				  "type": "uint256"
				}
			  ],
			  "name": "setEpochLength",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address payable",
				  "name": "_suterAgency",
				  "type": "address"
				}
			  ],
			  "name": "setSuterAgency",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "multiplier",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "dividend",
				  "type": "uint256"
				}
			  ],
			  "name": "setTransferFeeStrategy",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_unit",
				  "type": "uint256"
				}
			  ],
			  "name": "setUnit",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "C",
				  "type": "tuple[]"
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
				  "name": "D",
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "y",
				  "type": "tuple[]"
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
				  "internalType": "bytes",
				  "name": "proof",
				  "type": "bytes"
				}
			  ],
			  "name": "transfer",
			  "outputs": [],
			  "stateMutability": "payable",
			  "type": "function"
			},
			{
			  "anonymous": false,
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
				  "indexed": false,
				  "internalType": "struct Utils.G1Point[]",
				  "name": "parties",
				  "type": "tuple[]"
				}
			  ],
			  "name": "TransferOccurred",
			  "type": "event"
			},
			{
			  "inputs": [],
			  "name": "BURN_FEE_DIVIDEND",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "BURN_FEE_MULTIPLIER",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "epochBase",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "epochLength",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				}
			  ],
			  "name": "getAccountState",
			  "outputs": [
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
				  "internalType": "struct Utils.G1Point[2]",
				  "name": "y_available",
				  "type": "tuple[2]"
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
				  "internalType": "struct Utils.G1Point[2]",
				  "name": "y_pending",
				  "type": "tuple[2]"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "y",
				  "type": "tuple[]"
				},
				{
				  "internalType": "uint256",
				  "name": "epoch",
				  "type": "uint256"
				}
			  ],
			  "name": "getBalance",
			  "outputs": [
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
				  "internalType": "struct Utils.G1Point[2][]",
				  "name": "accounts",
				  "type": "tuple[2][]"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				}
			  ],
			  "name": "getGuess",
			  "outputs": [
				{
				  "internalType": "bytes",
				  "name": "y_guess",
				  "type": "bytes"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "lastGlobalUpdate",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "name": "lastRollOver",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "MAX",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "yHash",
				  "type": "bytes32"
				}
			  ],
			  "name": "registered",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "suterAgency",
			  "outputs": [
				{
				  "internalType": "address payable",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalBalance",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalBurnFee",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalDeposits",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalFundCount",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalTransferFee",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalUsers",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "TRANSFER_FEE_DIVIDEND",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "TRANSFER_FEE_MULTIPLIER",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "unit",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			}
		  ],
		  suterShiledContractAddress: "0x7dad0b8afdd4dec9b22b69915cbe7ea34d40f486",
		  decimal: 6
		},
		eth: {
		  suterShiledBalanceDesc: 'Suter ETH',
		  coinBalanceDesc: 'ETH',
		  valueDesc: 'Suter ETH',
		  unit: 'ETH',
		  suterShieldUnit: 10**16,
		  suterShiledContractABI: [
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "_transfer",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "_burn",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "_unit",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "string",
				  "name": "label",
				  "type": "string"
				},
				{
				  "indexed": true,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "LogUint256",
			  "type": "event"
			},
			{
			  "anonymous": false,
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
				  "indexed": false,
				  "internalType": "struct Utils.G1Point[]",
				  "name": "parties",
				  "type": "tuple[]"
				}
			  ],
			  "name": "TransferOccurred",
			  "type": "event"
			},
			{
			  "inputs": [],
			  "name": "BURN_FEE_DIVIDEND",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "BURN_FEE_MULTIPLIER",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "MAX",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "TRANSFER_FEE_DIVIDEND",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "TRANSFER_FEE_MULTIPLIER",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "unitAmount",
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
				  "internalType": "bytes",
				  "name": "proof",
				  "type": "bytes"
				},
				{
				  "internalType": "bytes",
				  "name": "encGuess",
				  "type": "bytes"
				}
			  ],
			  "name": "burn",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "epochBase",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "epochLength",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "unitAmount",
				  "type": "uint256"
				},
				{
				  "internalType": "bytes",
				  "name": "encGuess",
				  "type": "bytes"
				}
			  ],
			  "name": "fund",
			  "outputs": [],
			  "stateMutability": "payable",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				}
			  ],
			  "name": "getAccountState",
			  "outputs": [
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
				  "internalType": "struct Utils.G1Point[2]",
				  "name": "y_available",
				  "type": "tuple[2]"
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
				  "internalType": "struct Utils.G1Point[2]",
				  "name": "y_pending",
				  "type": "tuple[2]"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "y",
				  "type": "tuple[]"
				},
				{
				  "internalType": "uint256",
				  "name": "epoch",
				  "type": "uint256"
				}
			  ],
			  "name": "getBalance",
			  "outputs": [
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
				  "internalType": "struct Utils.G1Point[2][]",
				  "name": "accounts",
				  "type": "tuple[2][]"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				}
			  ],
			  "name": "getGuess",
			  "outputs": [
				{
				  "internalType": "bytes",
				  "name": "y_guess",
				  "type": "bytes"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "lastGlobalUpdate",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "name": "lastRollOver",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "c",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "s",
				  "type": "uint256"
				}
			  ],
			  "name": "register",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "yHash",
				  "type": "bytes32"
				}
			  ],
			  "name": "registered",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "multiplier",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "dividend",
				  "type": "uint256"
				}
			  ],
			  "name": "setBurnFeeStrategy",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_epochBase",
				  "type": "uint256"
				}
			  ],
			  "name": "setEpochBase",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_epochLength",
				  "type": "uint256"
				}
			  ],
			  "name": "setEpochLength",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address payable",
				  "name": "_suterAgency",
				  "type": "address"
				}
			  ],
			  "name": "setSuterAgency",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "multiplier",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "dividend",
				  "type": "uint256"
				}
			  ],
			  "name": "setTransferFeeStrategy",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_unit",
				  "type": "uint256"
				}
			  ],
			  "name": "setUnit",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "suterAgency",
			  "outputs": [
				{
				  "internalType": "address payable",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalBalance",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalBurnFee",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalDeposits",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalFundCount",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalTransferFee",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalUsers",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "C",
				  "type": "tuple[]"
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
				  "name": "D",
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "y",
				  "type": "tuple[]"
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
				  "internalType": "bytes",
				  "name": "proof",
				  "type": "bytes"
				}
			  ],
			  "name": "transfer",
			  "outputs": [],
			  "stateMutability": "payable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "unit",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			}
		  ],
		  suterShiledContractAddress: '0x02b4E089E96a0A672dE0a0d93E2869B899b15a44',
		  decimal: 18
		},
		dai: {
		  suterShiledBalanceDesc: 'Suter DAI',
		  coinBalanceDesc: 'DAI',
		  valueDesc: 'Suter DAI',
		  unit: 'DAI',
		  suterShieldUnit: 10**18,
		  contractABI:[
			{
			   "inputs":[
				  {
					 "internalType":"uint256",
					 "name":"chainId_",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"constructor"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"src",
					 "type":"address"
				  },
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"guy",
					 "type":"address"
				  },
				  {
					 "indexed":false,
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"Approval",
			   "type":"event"
			},
			{
			   "anonymous":true,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"bytes4",
					 "name":"sig",
					 "type":"bytes4"
				  },
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"usr",
					 "type":"address"
				  },
				  {
					 "indexed":true,
					 "internalType":"bytes32",
					 "name":"arg1",
					 "type":"bytes32"
				  },
				  {
					 "indexed":true,
					 "internalType":"bytes32",
					 "name":"arg2",
					 "type":"bytes32"
				  },
				  {
					 "indexed":false,
					 "internalType":"bytes",
					 "name":"data",
					 "type":"bytes"
				  }
			   ],
			   "name":"LogNote",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"src",
					 "type":"address"
				  },
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"dst",
					 "type":"address"
				  },
				  {
					 "indexed":false,
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"Transfer",
			   "type":"event"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"DOMAIN_SEPARATOR",
			   "outputs":[
				  {
					 "internalType":"bytes32",
					 "name":"",
					 "type":"bytes32"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"PERMIT_TYPEHASH",
			   "outputs":[
				  {
					 "internalType":"bytes32",
					 "name":"",
					 "type":"bytes32"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"",
					 "type":"address"
				  },
				  {
					 "internalType":"address",
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "name":"allowance",
			   "outputs":[
				  {
					 "internalType":"uint256",
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"usr",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"approve",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "name":"balanceOf",
			   "outputs":[
				  {
					 "internalType":"uint256",
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"usr",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"burn",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"decimals",
			   "outputs":[
				  {
					 "internalType":"uint8",
					 "name":"",
					 "type":"uint8"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"guy",
					 "type":"address"
				  }
			   ],
			   "name":"deny",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"usr",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"mint",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"src",
					 "type":"address"
				  },
				  {
					 "internalType":"address",
					 "name":"dst",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"move",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"name",
			   "outputs":[
				  {
					 "internalType":"string",
					 "name":"",
					 "type":"string"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "name":"nonces",
			   "outputs":[
				  {
					 "internalType":"uint256",
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"holder",
					 "type":"address"
				  },
				  {
					 "internalType":"address",
					 "name":"spender",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"nonce",
					 "type":"uint256"
				  },
				  {
					 "internalType":"uint256",
					 "name":"expiry",
					 "type":"uint256"
				  },
				  {
					 "internalType":"bool",
					 "name":"allowed",
					 "type":"bool"
				  },
				  {
					 "internalType":"uint8",
					 "name":"v",
					 "type":"uint8"
				  },
				  {
					 "internalType":"bytes32",
					 "name":"r",
					 "type":"bytes32"
				  },
				  {
					 "internalType":"bytes32",
					 "name":"s",
					 "type":"bytes32"
				  }
			   ],
			   "name":"permit",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"usr",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"pull",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"usr",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"push",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"guy",
					 "type":"address"
				  }
			   ],
			   "name":"rely",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"symbol",
			   "outputs":[
				  {
					 "internalType":"string",
					 "name":"",
					 "type":"string"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"totalSupply",
			   "outputs":[
				  {
					 "internalType":"uint256",
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"dst",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"transfer",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"src",
					 "type":"address"
				  },
				  {
					 "internalType":"address",
					 "name":"dst",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"wad",
					 "type":"uint256"
				  }
			   ],
			   "name":"transferFrom",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"version",
			   "outputs":[
				  {
					 "internalType":"string",
					 "name":"",
					 "type":"string"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "name":"wards",
			   "outputs":[
				  {
					 "internalType":"uint256",
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			}
		  ],
		  contractAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
		  suterShiledContractABI:[
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "unitAmount",
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
				  "internalType": "bytes",
				  "name": "proof",
				  "type": "bytes"
				},
				{
				  "internalType": "bytes",
				  "name": "encGuess",
				  "type": "bytes"
				}
			  ],
			  "name": "burn",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "unitAmount",
				  "type": "uint256"
				},
				{
				  "internalType": "bytes",
				  "name": "encGuess",
				  "type": "bytes"
				}
			  ],
			  "name": "fund",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "c",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "s",
				  "type": "uint256"
				}
			  ],
			  "name": "register",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "_token",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "_transfer",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "_burn",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "_unit",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "string",
				  "name": "label",
				  "type": "string"
				},
				{
				  "indexed": true,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "LogUint256",
			  "type": "event"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "multiplier",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "dividend",
				  "type": "uint256"
				}
			  ],
			  "name": "setBurnFeeStrategy",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_epochBase",
				  "type": "uint256"
				}
			  ],
			  "name": "setEpochBase",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_epochLength",
				  "type": "uint256"
				}
			  ],
			  "name": "setEpochLength",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address payable",
				  "name": "_suterAgency",
				  "type": "address"
				}
			  ],
			  "name": "setSuterAgency",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "multiplier",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "dividend",
				  "type": "uint256"
				}
			  ],
			  "name": "setTransferFeeStrategy",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_unit",
				  "type": "uint256"
				}
			  ],
			  "name": "setUnit",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "C",
				  "type": "tuple[]"
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
				  "name": "D",
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "y",
				  "type": "tuple[]"
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
				  "internalType": "bytes",
				  "name": "proof",
				  "type": "bytes"
				}
			  ],
			  "name": "transfer",
			  "outputs": [],
			  "stateMutability": "payable",
			  "type": "function"
			},
			{
			  "anonymous": false,
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
				  "indexed": false,
				  "internalType": "struct Utils.G1Point[]",
				  "name": "parties",
				  "type": "tuple[]"
				}
			  ],
			  "name": "TransferOccurred",
			  "type": "event"
			},
			{
			  "inputs": [],
			  "name": "BURN_FEE_DIVIDEND",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "BURN_FEE_MULTIPLIER",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "epochBase",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "epochLength",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				}
			  ],
			  "name": "getAccountState",
			  "outputs": [
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
				  "internalType": "struct Utils.G1Point[2]",
				  "name": "y_available",
				  "type": "tuple[2]"
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
				  "internalType": "struct Utils.G1Point[2]",
				  "name": "y_pending",
				  "type": "tuple[2]"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "y",
				  "type": "tuple[]"
				},
				{
				  "internalType": "uint256",
				  "name": "epoch",
				  "type": "uint256"
				}
			  ],
			  "name": "getBalance",
			  "outputs": [
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
				  "internalType": "struct Utils.G1Point[2][]",
				  "name": "accounts",
				  "type": "tuple[2][]"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				}
			  ],
			  "name": "getGuess",
			  "outputs": [
				{
				  "internalType": "bytes",
				  "name": "y_guess",
				  "type": "bytes"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "lastGlobalUpdate",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "name": "lastRollOver",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "MAX",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "yHash",
				  "type": "bytes32"
				}
			  ],
			  "name": "registered",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "suterAgency",
			  "outputs": [
				{
				  "internalType": "address payable",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalBalance",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalBurnFee",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalDeposits",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalFundCount",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalTransferFee",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalUsers",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "TRANSFER_FEE_DIVIDEND",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "TRANSFER_FEE_MULTIPLIER",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "unit",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			}
		  ],
		  suterShiledContractAddress: '0x54A8e0C76Eec21DD30842FbbcA2D336669102b77',
		  decimal: 18
		},
		suter: {
		  suterShiledBalanceDesc: 'Suter SUTER',
		  coinBalanceDesc: 'SUTER',
		  valueDesc: 'Suter SUTER',
		  unit: 'SUTER',
		  suterShieldUnit: 10**22,
		  contractABI:[
			{
			   "inputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"constructor"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"AdminRoleAdded",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"AdminRoleRemoved",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"owner",
					 "type":"address"
				  },
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"spender",
					 "type":"address"
				  },
				  {
					 "indexed":false,
					 "internalType":"uint256",
					 "name":"value",
					 "type":"uint256"
				  }
			   ],
			   "name":"Approval",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"BlacklistAdded",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"BlacklistRemoved",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"previousOwner",
					 "type":"address"
				  },
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"newOwner",
					 "type":"address"
				  }
			   ],
			   "name":"OwnershipTransferred",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":false,
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"Paused",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"PauserAdded",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"PauserRemoved",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"from",
					 "type":"address"
				  },
				  {
					 "indexed":true,
					 "internalType":"address",
					 "name":"to",
					 "type":"address"
				  },
				  {
					 "indexed":false,
					 "internalType":"uint256",
					 "name":"value",
					 "type":"uint256"
				  }
			   ],
			   "name":"Transfer",
			   "type":"event"
			},
			{
			   "anonymous":false,
			   "inputs":[
				  {
					 "indexed":false,
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"Unpaused",
			   "type":"event"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "name":"AdminRole",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"addAdmin",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"addBlacklist",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"addPauser",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"owner",
					 "type":"address"
				  },
				  {
					 "internalType":"address",
					 "name":"spender",
					 "type":"address"
				  }
			   ],
			   "name":"allowance",
			   "outputs":[
				  {
					 "internalType":"uint256",
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"spender",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"value",
					 "type":"uint256"
				  }
			   ],
			   "name":"approve",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"balanceOf",
			   "outputs":[
				  {
					 "internalType":"uint256",
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"decimals",
			   "outputs":[
				  {
					 "internalType":"uint8",
					 "name":"",
					 "type":"uint8"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"spender",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"subtractedValue",
					 "type":"uint256"
				  }
			   ],
			   "name":"decreaseAllowance",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"spender",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"addedValue",
					 "type":"uint256"
				  }
			   ],
			   "name":"increaseAllowance",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"isBlacklist",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"isOwner",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"isPauser",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"name",
			   "outputs":[
				  {
					 "internalType":"string",
					 "name":"",
					 "type":"string"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"owner",
			   "outputs":[
				  {
					 "internalType":"address",
					 "name":"",
					 "type":"address"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  
			   ],
			   "name":"pause",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"paused",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"removeAdmin",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"account",
					 "type":"address"
				  }
			   ],
			   "name":"removeBlacklist",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  
			   ],
			   "name":"renounceAdmin",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  
			   ],
			   "name":"renouncePauser",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"symbol",
			   "outputs":[
				  {
					 "internalType":"string",
					 "name":"",
					 "type":"string"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":true,
			   "inputs":[
				  
			   ],
			   "name":"totalSupply",
			   "outputs":[
				  {
					 "internalType":"uint256",
					 "name":"",
					 "type":"uint256"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"view",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"to",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"value",
					 "type":"uint256"
				  }
			   ],
			   "name":"transfer",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"from",
					 "type":"address"
				  },
				  {
					 "internalType":"address",
					 "name":"to",
					 "type":"address"
				  },
				  {
					 "internalType":"uint256",
					 "name":"value",
					 "type":"uint256"
				  }
			   ],
			   "name":"transferFrom",
			   "outputs":[
				  {
					 "internalType":"bool",
					 "name":"",
					 "type":"bool"
				  }
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  {
					 "internalType":"address",
					 "name":"newOwner",
					 "type":"address"
				  }
			   ],
			   "name":"transferOwnership",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			},
			{
			   "constant":false,
			   "inputs":[
				  
			   ],
			   "name":"unpause",
			   "outputs":[
				  
			   ],
			   "payable":false,
			   "stateMutability":"nonpayable",
			   "type":"function"
			}
		  ],
		  contractAddress: '0xAA2ce7Ae64066175E0B90497CE7d9c190c315DB4',
		  suterShiledContractABI:[
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "unitAmount",
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
				  "internalType": "bytes",
				  "name": "proof",
				  "type": "bytes"
				},
				{
				  "internalType": "bytes",
				  "name": "encGuess",
				  "type": "bytes"
				}
			  ],
			  "name": "burn",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "unitAmount",
				  "type": "uint256"
				},
				{
				  "internalType": "bytes",
				  "name": "encGuess",
				  "type": "bytes"
				}
			  ],
			  "name": "fund",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				},
				{
				  "internalType": "uint256",
				  "name": "c",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "s",
				  "type": "uint256"
				}
			  ],
			  "name": "register",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "_token",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "_transfer",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "_burn",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "_unit",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "string",
				  "name": "label",
				  "type": "string"
				},
				{
				  "indexed": true,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "LogUint256",
			  "type": "event"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "multiplier",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "dividend",
				  "type": "uint256"
				}
			  ],
			  "name": "setBurnFeeStrategy",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_epochBase",
				  "type": "uint256"
				}
			  ],
			  "name": "setEpochBase",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_epochLength",
				  "type": "uint256"
				}
			  ],
			  "name": "setEpochLength",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address payable",
				  "name": "_suterAgency",
				  "type": "address"
				}
			  ],
			  "name": "setSuterAgency",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "multiplier",
				  "type": "uint256"
				},
				{
				  "internalType": "uint256",
				  "name": "dividend",
				  "type": "uint256"
				}
			  ],
			  "name": "setTransferFeeStrategy",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "uint256",
				  "name": "_unit",
				  "type": "uint256"
				}
			  ],
			  "name": "setUnit",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "C",
				  "type": "tuple[]"
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
				  "name": "D",
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "y",
				  "type": "tuple[]"
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
				  "internalType": "bytes",
				  "name": "proof",
				  "type": "bytes"
				}
			  ],
			  "name": "transfer",
			  "outputs": [],
			  "stateMutability": "payable",
			  "type": "function"
			},
			{
			  "anonymous": false,
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
				  "indexed": false,
				  "internalType": "struct Utils.G1Point[]",
				  "name": "parties",
				  "type": "tuple[]"
				}
			  ],
			  "name": "TransferOccurred",
			  "type": "event"
			},
			{
			  "inputs": [],
			  "name": "BURN_FEE_DIVIDEND",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "BURN_FEE_MULTIPLIER",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "epochBase",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "epochLength",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				}
			  ],
			  "name": "getAccountState",
			  "outputs": [
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
				  "internalType": "struct Utils.G1Point[2]",
				  "name": "y_available",
				  "type": "tuple[2]"
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
				  "internalType": "struct Utils.G1Point[2]",
				  "name": "y_pending",
				  "type": "tuple[2]"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "internalType": "struct Utils.G1Point[]",
				  "name": "y",
				  "type": "tuple[]"
				},
				{
				  "internalType": "uint256",
				  "name": "epoch",
				  "type": "uint256"
				}
			  ],
			  "name": "getBalance",
			  "outputs": [
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
				  "internalType": "struct Utils.G1Point[2][]",
				  "name": "accounts",
				  "type": "tuple[2][]"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
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
				  "name": "y",
				  "type": "tuple"
				}
			  ],
			  "name": "getGuess",
			  "outputs": [
				{
				  "internalType": "bytes",
				  "name": "y_guess",
				  "type": "bytes"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "lastGlobalUpdate",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "name": "lastRollOver",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "MAX",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "yHash",
				  "type": "bytes32"
				}
			  ],
			  "name": "registered",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "suterAgency",
			  "outputs": [
				{
				  "internalType": "address payable",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalBalance",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalBurnFee",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalDeposits",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalFundCount",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalTransferFee",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalUsers",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "TRANSFER_FEE_DIVIDEND",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "TRANSFER_FEE_MULTIPLIER",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "unit",
			  "outputs": [
				{
				  "internalType": "uint256",
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			}
		  ],
		  suterShiledContractAddress: '0xab4e72599e2cec5dcc8249657833b3408905900e',
		  decimal: 18
		},
	}
  };
  