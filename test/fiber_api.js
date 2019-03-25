const SampleContract = artifacts.require("../contracts/SampleContract.sol");

contract('SampleContract', async (accounts) => {
    
    /** Administrative **/

    it("should return a network ID of 0 if it published successfully", async () => {
        const instance = await SampleContract.deployed();
        const capturedID = await instance.getNet.call();
        assert.equal(0, capturedID.toNumber(), "The addresses don't match");
    });

});