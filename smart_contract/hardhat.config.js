// https://eth-ropsten.alchemyapi.io/v2/MWiBe3vurqKVoIMPxwO-c-ijgJN-GwZr

require('@nomiclabs/hardhat-waffle');
require('dotenv').config()

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Zp7NzdkBtgOzhEXcpfT33rBRI2jC9Quu',
      accounts: [ process.env.PRIVATE_KEY ]
    }
  }
}