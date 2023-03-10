require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.17",
	networks: {
		goerli: {
			url: process.env.ALCHEMY_API_KEY,
			accounts: [process.env.GOERLI_PRIVATE_KEY],
		},
	},
};
