require("@nomiclabs/hardhat-waffle");
const INFURA_API_KEY="f49d8a4cd5d8413b9681749780207ae5";
const RINKEBY_PRIVATE_KEY="a66e52fdb15ab69a07cdd48be9d31e4568264e14a78f76ca3dbd74eb6f4c3ca8";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:
  {
    rinkeby :
    {
      url:`https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts:[`0x${RINKEBY_PRIVATE_KEY}`]

    }
  }
};
