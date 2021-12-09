const CryptoKittenNFT = artifacts.require("CryptoKittenNFT");
const baseURL = "https://ipfs.io/ipfs/QmRU1vGYmGj4PwM9CYvR26ZAFDPQ5utjkrSHd6SCn2u6ha/"

module.exports = function(deployer) {
  deployer.deploy(CryptoKittenNFT, baseURL);
}