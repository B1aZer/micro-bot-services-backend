const { expect } = require("chai");
const { ethers } = require("hardhat");

const GWEI = 10n ** 9n
const ETHER = 10n ** 18n

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("GooDeePayment");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

    let tx = await greeter.mint(123312, { value: ETHER * 1n});
    let receipt = await tx.wait();

    console.log(receipt.events?.filter((x) => {return x.event == "buyCoinsEvent"}));

  });
});
