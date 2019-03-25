const Fiber = artifacts.require("../contracts/Fiber.sol");

module.exports = function(deployer) {
  deployer.deploy(Fiber, { overwrite: false });
};
