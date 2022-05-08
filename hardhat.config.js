require("@nomiclabs/hardhat-waffle");
require('dotenv/config');
require("@nomiclabs/hardhat-etherscan");

console.log(`0x${process.env.PRIVATE_KEY}`);

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    hardhat: {
      chainId: 1337,
      gas: 'auto',
    },
    mainnet: {
      url: process.env.MAINNET_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      // 80 Gwei
      gasPrice: 80000000000,
    },
    rinkeby: {
      url: process.env.RINKEBY_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
