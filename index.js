const Web3 = require('web3'); 

const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));
const fiberABI = [{ "anonymous": false, "inputs": [ { "indexed": false, "name": "caller", "type": "address" }, { "indexed": false, "name": "calltype", "type": "string" }, { "indexed": false, "name": "req", "type": "string" } ], "name": "FiberReq", "type": "event", "signature": "0x06f77ffe0cb043d6c2ff81fddce2e251023aa7a9e0986d6e71534a011bc5c9b6" }, { "constant": false, "inputs": [ { "name": "_calltype", "type": "string" }, { "name": "_req", "type": "string" } ], "name": "request", "outputs": [ { "name": "queryID", "type": "bytes32" } ], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x01d511f1" }];
const callbackABI = [{ "constant": false, "inputs": [{ "name": "_fiberID", "type": "bytes32" }, { "name": "_response", "type": "string" } ], "name": "__callback", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];


let accounts = [];
(async () => {
    accounts = await web3.eth.getAccounts();
})();


// The address will need to be changed after its initial deployment, but will remain the same after
const Fiber = new web3.eth.Contract(fiberABI, '0x7Ed1826B9590d91Fe0A321830498480B3c9202b0');
Fiber.events.FiberReq({
    fromBlock: 'latest',
}, async (err, event) => {
    try {
        const req = event.returnValues;
        const res = {
            requester: req.caller,
            type: req.calltype,
            source: req.req
        };
        const genericContract = await new web3.eth.Contract(callbackABI, res.requester);
        const randomID = (res.requester + (new Date()).getTime()).substring(0, 31);
        const response = await genericContract.methods.__callback(web3.utils.fromAscii(randomID), 'test').send({ from: accounts[0], gas: 450000 });
    } catch(e) {
        console.log(e);
    }
});