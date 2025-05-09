import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { TitleEscrowFactory } from "@tradetrust/contracts";

export const deployEscrowFactoryFixture = async ({ deployer }: { deployer: SignerWithAddress }) => {
  const escrowFactory = await ethers.getContractFactory("TitleEscrowFactory");
  return (await escrowFactory.connect(deployer).deploy()) as unknown as TitleEscrowFactory;
};
