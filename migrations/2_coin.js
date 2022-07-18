const Hello = artifacts.require("Coin");

module.exports = function (deployer) {
  deployer.deploy(Hello);
};
