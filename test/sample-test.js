const { expect } = require("chai");
const { ethers } = require("hardhat");

const GWEI = 10n ** 9n
const ETHER = 10n ** 18n

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("XpContract1");
    const greeter = await Greeter.deploy();
    await greeter.deployed();

    let tx = await greeter.mint({ value: ETHER * 1n});
    let receipt = await tx.wait();

    console.log(receipt.events?.filter((x) => {return x.event == "buyXpEvent"}));

    //expect(await greeter.greet()).to.equal("Hello, world!");

    //const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    //await setGreetingTx.wait();

    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
