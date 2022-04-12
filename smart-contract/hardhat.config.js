require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/7cR3FIRzxvAbis5r3JxSCGqrw0PoRtGM',
      accounts: [
        '2a101d324a57c1f55faa70671bfa01bb39496eded637f0a5179a336cbd2429ba'
      ],
    },
  },
};
