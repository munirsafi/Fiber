const Web3 = require('web3'); 
 
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));
const fiberAPI = [{ "anonymous": false, "inputs": [{ "indexed": false, "name": "calltype", "type": "string" }, { "indexed": false, "name": "req", "type": "string" } ], "name": "FiberReq", "type": "event" }, { "constant": false, "inputs": [{ "name": "_calltype", "type": "string" }, { "name": "_req", "type": "string" } ], "name": "request", "outputs": [{ "name": "queryID", "type": "bytes32" }], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];

// The address will need to be changed after its initial deployment, but will remain the same after
const Fiber = new web3.eth.Contract(fiberAPI, '0x3FEFa7221bA0d8641d3f9A7c6f2610f9ba1034a1');
Fiber.events.FiberReq({
    fromBlock: 'latest',
}, (err, event) => {
    console.log('FiberReq event!: ' + JSON.stringify(event));
});