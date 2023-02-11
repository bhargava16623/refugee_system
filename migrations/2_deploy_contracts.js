const Refugee = artifacts.require("Refugee");

module.exports = function(deployer) {
  deployer.deploy(Refugee);
};
