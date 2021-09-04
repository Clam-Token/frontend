var global = global || {};
global.contracts = global.contracts || {};

var contract = contract || {};
contract.Market = {
    abi: [{
            "inputs": [{
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_exchangeValue",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "inputs": [],
            "name": "cashoutBNB",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "cashoutCLAM",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "exchangeBNBtoCLAM",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }],
            "name": "exchangeCLAMtoBNB",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalanceBNB",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalanceCLAM",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getExchangeValue",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_exchangeValue",
                "type": "uint256"
            }],
            "name": "setExchangeValue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],

    address_test: "0xFECB7B913a28B48fCC25720B3bF716d8f23a4067",
    address: ""
};