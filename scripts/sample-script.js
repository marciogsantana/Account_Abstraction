const main = async () => {
  console.log("Deploying simpleAccountFactory \n");
  const _simpleAccountFactory = await ethers.getContractFactory(
    "SimpleAccountFactory"
  );
  const entryPoint = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
  const simpleAccountFactory = await _simpleAccountFactory.deploy(entryPoint);
  await simpleAccountFactory.deployed();
  console.log(`simpleAccountFactory Factory deployed at ${simpleAccountFactory.address} \n`);
     
  
};

const runMain = async () => {
try {
  await main();
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
};

runMain();



//import { ethers} from "hardhat";
//export async function main() {
//  console.log("Deploying simpleAccountFactory \n");
//  const _simpleAccountFactory = await ethers.getContractFactory(
//    "SimpleAccountFactory"
//  );
//  const entryPoint = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
//  const simpleAccountFactory = await _simpleAccountFactory.deploy(entryPoint);
//  await simpleAccountFactory.deployed();
//  console.log(`simpleAccountFactory Factory deployed at ${simpleAccountFactory.address} \n`);
//}
//main().catch((error) => {
//  console.error(error);
//  process.exitCode = 1;
//});