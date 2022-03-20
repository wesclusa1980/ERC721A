async function main() {
    // We get the contract to deploy
    const Erc721A = await ethers.getContractFactory("ERC721A");
    const erc721A = await ERC721A.deploy("Hello, Hardhat!");
  
    await erc721A.deployed();
  
    console.log("Greeter deployed to:", greeter.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });