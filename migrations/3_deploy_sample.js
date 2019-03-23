const SampleContract = artifacts.require("../contracts/SampleContract.sol");

module.exports = function (deployer) {
    deployer.deploy(SampleContract);
};
