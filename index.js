const Web3 = require('web3'); 

const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));
const fiberAPI = [{ "anonymous": false, "inputs": [ { "indexed": false, "name": "caller", "type": "address" }, { "indexed": false, "name": "calltype", "type": "string" }, { "indexed": false, "name": "req", "type": "string" } ], "name": "FiberReq", "type": "event", "signature": "0x06f77ffe0cb043d6c2ff81fddce2e251023aa7a9e0986d6e71534a011bc5c9b6" }, { "constant": false, "inputs": [ { "name": "_calltype", "type": "string" }, { "name": "_req", "type": "string" } ], "name": "request", "outputs": [ { "name": "queryID", "type": "bytes32" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x01d511f1" }];

// The address will need to be changed after its initial deployment, but will remain the same after
const Fiber = new web3.eth.Contract(fiberAPI, '0xa57d0B20BcCcC137779fe6C55d1AD1644f83706D');
Fiber.events.FiberReq({
    fromBlock: 'latest',
}, (err, event) => {
    const req = event.returnValues;
    const res = {
        requester: req.caller,
        type: req.calltype,
        source: req.req
    };
    console.log(res);
});