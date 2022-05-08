//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "hardhat/console.sol";
//import "@openzeppelin/contracts/security/Pausable.sol";

contract XpContract1 {

    event buyXpEvent(
        address sender,
        uint256 amountPayed
    );

    constructor() {
        console.log("Deploying a Greeter");
    }

    function mint() public payable {
        require(msg.value > 0);
        emit buyXpEvent(msg.sender, msg.value);
    }

}
