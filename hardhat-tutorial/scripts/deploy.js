const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const cryptoDevNFTContract = CRYPTO_DEV_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
  const cryptoDevTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );

  // deploy the contract
  const deployedCryptoDevTokenContract = await cryptoDevTokenContract.deploy(
    cryptoDevNFTContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Dev Token Contract Address:",
    deployedCryptoDevTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });