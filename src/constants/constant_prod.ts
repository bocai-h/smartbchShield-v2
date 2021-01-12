export default {
	ENV: 'prod',
	ETH_CHAIN_ID: '0x3',
	ETHERSCAN: 'https://ropsten.etherscan.io',
	JSONRPC_URL: 'https://ropsten.infura.io/v3/d80602309b7c48e78b80a372a3f6c825',
	CoinInfos: {
		usdt: {
		  suterShiledBalanceDesc: 'Suter USDT',
		  coinBalanceDesc: 'USDT',
		  valueDesc: 'Suter USDT',
		  unit: 'USDT',
		  suterShieldUnit: 10**18,
		  contractABI: [
			{
			  "inputs": [],
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Approval",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "Paused",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "previousAdminRole",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "newAdminRole",
				  "type": "bytes32"
				}
			  ],
			  "name": "RoleAdminChanged",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
				}
			  ],
			  "name": "RoleGranted",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
				}
			  ],
			  "name": "RoleRevoked",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "from",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Transfer",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "Unpaused",
			  "type": "event"
			},
			{
			  "inputs": [],
			  "name": "DEFAULT_ADMIN_ROLE",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "MINTER_ROLE",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "PAUSER_ROLE",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				}
			  ],
			  "name": "allowance",
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
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "approve",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "balanceOf",
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
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
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
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "burnFrom",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "decimals",
			  "outputs": [
				{
				  "internalType": "uint8",
				  "name": "",
				  "type": "uint8"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "subtractedValue",
				  "type": "uint256"
				}
			  ],
			  "name": "decreaseAllowance",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				}
			  ],
			  "name": "getRoleAdmin",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "uint256",
				  "name": "index",
				  "type": "uint256"
				}
			  ],
			  "name": "getRoleMember",
			  "outputs": [
				{
				  "internalType": "address",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				}
			  ],
			  "name": "getRoleMemberCount",
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
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "grantRole",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "hasRole",
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
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "addedValue",
				  "type": "uint256"
				}
			  ],
			  "name": "increaseAllowance",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "mint",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "name",
			  "outputs": [
				{
				  "internalType": "string",
				  "name": "",
				  "type": "string"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "pause",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "paused",
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
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "renounceRole",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "revokeRole",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "symbol",
			  "outputs": [
				{
				  "internalType": "string",
				  "name": "",
				  "type": "string"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalSupply",
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
				  "internalType": "address",
				  "name": "recipient",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "transfer",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "recipient",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "transferFrom",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "unpause",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			}
		  ],
		  contractAddress: "0x2CAe8Fd599bD0F9F9A65C6da9a532B2494fe10B0",
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
		  suterShiledContractAddress: "0x7c6BBCFFaE07abFE1c8338c939dd4C24a03DB5ed",
		  decimal: 18
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
		  suterShiledContractAddress: '0x340D47F5ba7fE9490A1edfB4473BF2Fd17e5cec5',
		  decimal: 18
		},
		dai: {
		  suterShiledBalanceDesc: 'Suter DAI',
		  coinBalanceDesc: 'DAI',
		  valueDesc: 'Suter DAI',
		  unit: 'DAI',
		  suterShieldUnit: 10**22,
		  contractABI:[
			{
			  "inputs": [],
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Approval",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "Paused",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "previousAdminRole",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "newAdminRole",
				  "type": "bytes32"
				}
			  ],
			  "name": "RoleAdminChanged",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
				}
			  ],
			  "name": "RoleGranted",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
				}
			  ],
			  "name": "RoleRevoked",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "from",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Transfer",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "Unpaused",
			  "type": "event"
			},
			{
			  "inputs": [],
			  "name": "DEFAULT_ADMIN_ROLE",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "MINTER_ROLE",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "PAUSER_ROLE",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				}
			  ],
			  "name": "allowance",
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
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "approve",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "balanceOf",
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
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
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
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "burnFrom",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "decimals",
			  "outputs": [
				{
				  "internalType": "uint8",
				  "name": "",
				  "type": "uint8"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "subtractedValue",
				  "type": "uint256"
				}
			  ],
			  "name": "decreaseAllowance",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				}
			  ],
			  "name": "getRoleAdmin",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "uint256",
				  "name": "index",
				  "type": "uint256"
				}
			  ],
			  "name": "getRoleMember",
			  "outputs": [
				{
				  "internalType": "address",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				}
			  ],
			  "name": "getRoleMemberCount",
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
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "grantRole",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "hasRole",
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
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "addedValue",
				  "type": "uint256"
				}
			  ],
			  "name": "increaseAllowance",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "mint",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "name",
			  "outputs": [
				{
				  "internalType": "string",
				  "name": "",
				  "type": "string"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "pause",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "paused",
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
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "renounceRole",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "revokeRole",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "symbol",
			  "outputs": [
				{
				  "internalType": "string",
				  "name": "",
				  "type": "string"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalSupply",
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
				  "internalType": "address",
				  "name": "recipient",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "transfer",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "recipient",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "transferFrom",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "unpause",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			}
		  ],
		  contractAddress: '0xf095E20aD872fff20036afa156F132340d060B83',
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
		  suterShiledContractAddress: '0x70E22CD2Ed11491ECC5257D5fd607F1B3422581A',
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
			  "inputs": [],
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Approval",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "Paused",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "previousAdminRole",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "newAdminRole",
				  "type": "bytes32"
				}
			  ],
			  "name": "RoleAdminChanged",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
				}
			  ],
			  "name": "RoleGranted",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
				}
			  ],
			  "name": "RoleRevoked",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "from",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "internalType": "uint256",
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Transfer",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "Unpaused",
			  "type": "event"
			},
			{
			  "inputs": [],
			  "name": "DEFAULT_ADMIN_ROLE",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "MINTER_ROLE",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "PAUSER_ROLE",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "owner",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				}
			  ],
			  "name": "allowance",
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
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "approve",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "balanceOf",
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
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
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
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "burnFrom",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "decimals",
			  "outputs": [
				{
				  "internalType": "uint8",
				  "name": "",
				  "type": "uint8"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "subtractedValue",
				  "type": "uint256"
				}
			  ],
			  "name": "decreaseAllowance",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				}
			  ],
			  "name": "getRoleAdmin",
			  "outputs": [
				{
				  "internalType": "bytes32",
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "uint256",
				  "name": "index",
				  "type": "uint256"
				}
			  ],
			  "name": "getRoleMember",
			  "outputs": [
				{
				  "internalType": "address",
				  "name": "",
				  "type": "address"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				}
			  ],
			  "name": "getRoleMemberCount",
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
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "grantRole",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "hasRole",
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
				  "internalType": "address",
				  "name": "spender",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "addedValue",
				  "type": "uint256"
				}
			  ],
			  "name": "increaseAllowance",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "to",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "mint",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "name",
			  "outputs": [
				{
				  "internalType": "string",
				  "name": "",
				  "type": "string"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "pause",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "paused",
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
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "renounceRole",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "bytes32",
				  "name": "role",
				  "type": "bytes32"
				},
				{
				  "internalType": "address",
				  "name": "account",
				  "type": "address"
				}
			  ],
			  "name": "revokeRole",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "symbol",
			  "outputs": [
				{
				  "internalType": "string",
				  "name": "",
				  "type": "string"
				}
			  ],
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "totalSupply",
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
				  "internalType": "address",
				  "name": "recipient",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "transfer",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [
				{
				  "internalType": "address",
				  "name": "sender",
				  "type": "address"
				},
				{
				  "internalType": "address",
				  "name": "recipient",
				  "type": "address"
				},
				{
				  "internalType": "uint256",
				  "name": "amount",
				  "type": "uint256"
				}
			  ],
			  "name": "transferFrom",
			  "outputs": [
				{
				  "internalType": "bool",
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "name": "unpause",
			  "outputs": [],
			  "stateMutability": "nonpayable",
			  "type": "function"
			}
		  ],
		  contractAddress: '0x12339e04d2fA260E56133a58dc1aCC3c5051CDD1',
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
		  suterShiledContractAddress: '0x02a32b975c2c1FbF1367B19c79eC1BFB5cb45746',
		  decimal: 18
		},
	}
  };
  