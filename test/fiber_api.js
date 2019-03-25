const SampleContract = artifacts.require("../contracts/SampleContract.sol");
const Fiber = artifacts.require("../contracts/Fiber.sol");

contract('SampleContract', async (accounts) => {
    
    /** Administrative **/

    it("should return a network ID of 0 if it published successfully", async () => {
        const instance = await SampleContract.deployed();
        const networkID = await instance.getNet.call();
        assert.equal(0, networkID.toNumber(), "The network ID returned is incorrect");
    });

    it("should emit a Fiber request event", async () => {
        const instance = await SampleContract.deployed();
        const fiberContract = new web3.eth.Contract(Fiber.abi, Fiber.address);

        let events = [];
        fiberContract.events.FiberReq({fromBlock: "latest"}, (err, event) => events.push(event));
        await instance.testEvent({ from: accounts[0], gas: 450000 });

        assert.equal(events.length, 1, "The Fiber Request event was not emitted");
    });

});