// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Test} from "forge-std/Test.sol";
import {MyToken} from "src/MyToken.sol";

contract MyTokenTest is Test {
    MyToken token;
    uint256 constant INITIAL_SUPPLY = 1000 * 10 ** 18;

    function setUp() public {
        // Mint 1000 tokens for the deployer
        token = new MyToken(INITIAL_SUPPLY);
    }

    function testTokenName() public view {
        // Arrange
        string memory expectedName = "Blessings";

        // Act
        string memory actualName = token.name();

        // Assert
        assertEq(actualName, expectedName);
    }

    function testTokenSymbol() public view {
        // Arrange
        string memory expectedSymbol = "BLSS";

        // Act
        string memory actualSymbol = token.symbol();

        // Assert
        assertEq(actualSymbol, expectedSymbol);
    }

    function testInitialSupply() public view {
        // Arrange
        uint256 expectedSupply = 1000 * 10 ** 18;

        // Act + Assert
        assertEq(token.totalSupply(), expectedSupply);
        assertEq(token.balanceOf(address(this)), expectedSupply);
    }

    function testTokenTransfer() public {
        // Arrange
        address addrRecipient = makeAddr("recipient");
        uint256 transferAmount = 100 * 10 ** 18;
        uint256 initialBalance = token.balanceOf(address(this));

        // Act
        token.transfer(addrRecipient, transferAmount);

        // Assert
        assertEq(token.balanceOf(addrRecipient), transferAmount);
        assertEq(
            token.balanceOf(address(this)),
            initialBalance - transferAmount
        );
    }

    function testTransferFailsWhenBalanceTooLow() public {
        // Arrange
        address addrRecipient = makeAddr("recipient");
        uint256 transferAmount = 2000 * 10 ** 18;

        // Act + Assert
        vm.expectRevert();
        token.transfer(addrRecipient, transferAmount);
    }
}
