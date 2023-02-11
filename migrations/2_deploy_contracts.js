const Refugee = artifacts.require("Refugee");

module.exports = function(deployer) {

  deployer.deploy(Refugee);
};

//To deploy Smart contract
// step - 1️⃣ => truffle compile
// step - 2 => write migration code
// step - 3 => command "truffle develop"
// step - 4 => command inside truffle develop "truffle migrate"
//Finish 😎 