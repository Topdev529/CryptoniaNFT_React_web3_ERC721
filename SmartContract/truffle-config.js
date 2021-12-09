const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config()

const { API_URL, MNEMONIC } = process.env;
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, API_URL)
      },
      network_id: 3
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, API_URL);
      },
      network_id: 4,
      networkCheckTimeout: 1000000
    },
    mainnet: {
      provider: () => new HDWalletProvider(MNEMONIC, "https://eth-mainnet.alchemyapi.io/v2/sjfqbLht5CAKuBuzAVfjLyLPjw4y1TKO"),
      network_id: 1
    }
  },
  compilers: {
    solc: {      
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  }

};