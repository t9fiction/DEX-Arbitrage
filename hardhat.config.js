require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { PRIVATE_KEY, API_URL_BSC, PRIVATE_KEY_polygon, YOUR_ETHERSCAN_API_KEY, API_URL_ropsten,  API_URL_mumbai } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    aurora: {
      url: `https://mainnet.aurora.dev`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    fantom: {
      url: `https://rpc.ftm.tools/`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    ropsten: {
      url: API_URL_ropsten,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    bsc: {
      url: API_URL_BSC,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mumbai: {
      url: API_URL_mumbai,
      accounts: [`0x${PRIVATE_KEY_polygon}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: YOUR_ETHERSCAN_API_KEY
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.7.6" },
      { version: "0.6.6" }
    ]
  },
};
