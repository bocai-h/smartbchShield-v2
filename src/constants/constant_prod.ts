export default {
	ENV: 'prod',
	ETH_CHAIN_ID: '0x3',
	ETHERSCAN: 'https://ropsten.etherscan.io',
	SUTER_ETH_CONTRACT_ADDRESS: '0x5e3959EFfa2A1D8192239F893B85D5586eE11B90',
	SUTER_ETH_CONTRACT_ABI: [
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
		  "name": "totalFee",
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
	SUTER_USDT_CONTRACT_ADDRESS: '0x1F3631e10709E643085d037d2d6f1c0BbB6dca39',
	SUTER_USDT_CONTRACT_ABI: [
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
		  "name": "totalFee",
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
	USDT_TOKEN_CONTRACT_ADDRESS: '0xc36a5e9d80967a58c9cb98aa67648da0133870d8',
	USDT_TOKEN_CONTRACT_ABI: [
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
			indexed: false,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'Paused',
		type: 'event',
	  },
	  {
		anonymous: false,
		inputs: [
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'previousAdminRole',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'newAdminRole',
			type: 'bytes32',
		  },
		],
		name: 'RoleAdminChanged',
		type: 'event',
	  },
	  {
		anonymous: false,
		inputs: [
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'sender',
			type: 'address',
		  },
		],
		name: 'RoleGranted',
		type: 'event',
	  },
	  {
		anonymous: false,
		inputs: [
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'sender',
			type: 'address',
		  },
		],
		name: 'RoleRevoked',
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
		anonymous: false,
		inputs: [
		  {
			indexed: false,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'Unpaused',
		type: 'event',
	  },
	  {
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
	  },
	  {
		inputs: [],
		name: 'MINTER_ROLE',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
	  },
	  {
		inputs: [],
		name: 'PAUSER_ROLE',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
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
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		],
		name: 'getRoleAdmin',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
	  },
	  {
		inputs: [
		  {
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'uint256',
			name: 'index',
			type: 'uint256',
		  },
		],
		name: 'getRoleMember',
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
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		],
		name: 'getRoleMemberCount',
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
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'grantRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	  {
		inputs: [
		  {
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'hasRole',
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
		inputs: [
		  {
			internalType: 'address',
			name: 'to',
			type: 'address',
		  },
		  {
			internalType: 'uint256',
			name: 'amount',
			type: 'uint256',
		  },
		],
		name: 'mint',
		outputs: [],
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
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	  {
		inputs: [],
		name: 'paused',
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
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'renounceRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	  {
		inputs: [
		  {
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'revokeRole',
		outputs: [],
		stateMutability: 'nonpayable',
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
	  {
		inputs: [],
		name: 'unpause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	],
	DAI_TOKEN_CONTRACT_ADDRESS: '0x518531411954ab9c501996B1483420CF7479a1aD',
	DAI_TOKEN_CONTRACT_ABI: [
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
			indexed: false,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'Paused',
		type: 'event',
	  },
	  {
		anonymous: false,
		inputs: [
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'previousAdminRole',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'newAdminRole',
			type: 'bytes32',
		  },
		],
		name: 'RoleAdminChanged',
		type: 'event',
	  },
	  {
		anonymous: false,
		inputs: [
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'sender',
			type: 'address',
		  },
		],
		name: 'RoleGranted',
		type: 'event',
	  },
	  {
		anonymous: false,
		inputs: [
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'sender',
			type: 'address',
		  },
		],
		name: 'RoleRevoked',
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
		anonymous: false,
		inputs: [
		  {
			indexed: false,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'Unpaused',
		type: 'event',
	  },
	  {
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
	  },
	  {
		inputs: [],
		name: 'MINTER_ROLE',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
	  },
	  {
		inputs: [],
		name: 'PAUSER_ROLE',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
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
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		],
		name: 'getRoleAdmin',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
	  },
	  {
		inputs: [
		  {
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'uint256',
			name: 'index',
			type: 'uint256',
		  },
		],
		name: 'getRoleMember',
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
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		],
		name: 'getRoleMemberCount',
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
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'grantRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	  {
		inputs: [
		  {
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'hasRole',
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
		inputs: [
		  {
			internalType: 'address',
			name: 'to',
			type: 'address',
		  },
		  {
			internalType: 'uint256',
			name: 'amount',
			type: 'uint256',
		  },
		],
		name: 'mint',
		outputs: [],
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
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	  {
		inputs: [],
		name: 'paused',
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
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'renounceRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	  {
		inputs: [
		  {
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'revokeRole',
		outputs: [],
		stateMutability: 'nonpayable',
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
	  {
		inputs: [],
		name: 'unpause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	],
	SUTER_DAI_CONTRACT_ADDRESS: '0xE7b2d671FEc23a17715AF296Cb31C401783Eb17f',
	SUTER_DAI_CONTRACT_ABI: [
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
		  "name": "totalFee",
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
	SUTER_TOKEN_CONTRACT_ADDRESS: '0x281Df1B928fE3C0E9a883c783610a2c7494cD62f',
	SUTER_TOKEN_CONTRACT_ABI:[
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
			indexed: false,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'Paused',
		type: 'event',
	  },
	  {
		anonymous: false,
		inputs: [
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'previousAdminRole',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'newAdminRole',
			type: 'bytes32',
		  },
		],
		name: 'RoleAdminChanged',
		type: 'event',
	  },
	  {
		anonymous: false,
		inputs: [
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'sender',
			type: 'address',
		  },
		],
		name: 'RoleGranted',
		type: 'event',
	  },
	  {
		anonymous: false,
		inputs: [
		  {
			indexed: true,
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		  {
			indexed: true,
			internalType: 'address',
			name: 'sender',
			type: 'address',
		  },
		],
		name: 'RoleRevoked',
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
		anonymous: false,
		inputs: [
		  {
			indexed: false,
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'Unpaused',
		type: 'event',
	  },
	  {
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
	  },
	  {
		inputs: [],
		name: 'MINTER_ROLE',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
	  },
	  {
		inputs: [],
		name: 'PAUSER_ROLE',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
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
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		],
		name: 'getRoleAdmin',
		outputs: [
		  {
			internalType: 'bytes32',
			name: '',
			type: 'bytes32',
		  },
		],
		stateMutability: 'view',
		type: 'function',
	  },
	  {
		inputs: [
		  {
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'uint256',
			name: 'index',
			type: 'uint256',
		  },
		],
		name: 'getRoleMember',
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
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		],
		name: 'getRoleMemberCount',
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
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'grantRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	  {
		inputs: [
		  {
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'hasRole',
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
		inputs: [
		  {
			internalType: 'address',
			name: 'to',
			type: 'address',
		  },
		  {
			internalType: 'uint256',
			name: 'amount',
			type: 'uint256',
		  },
		],
		name: 'mint',
		outputs: [],
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
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	  {
		inputs: [],
		name: 'paused',
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
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'renounceRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	  {
		inputs: [
		  {
			internalType: 'bytes32',
			name: 'role',
			type: 'bytes32',
		  },
		  {
			internalType: 'address',
			name: 'account',
			type: 'address',
		  },
		],
		name: 'revokeRole',
		outputs: [],
		stateMutability: 'nonpayable',
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
	  {
		inputs: [],
		name: 'unpause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	  },
	],
	SUTER_SUTER_CONTRACT_ADDRESS: '0xa75045DbE7B374E5924db2BFc3eA4178aac28378',
	SUTER_SUTER_CONTRACT_ABI: [
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
		  "name": "totalFee",
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
  ]
  };
  