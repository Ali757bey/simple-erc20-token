# Blessing Token (BLSS)

A professional ERC-20 token smart contract project built using Solidity, Foundry, and OpenZeppelin standards.

---

## Overview 

This project implements a basic, gas-optimized ERC-20 token called **Blessings (BLSS)** using OpenZeppelin libraries and tested with Foundry.

The token:
- Mints a fixed total supply at deployment.
- Allows standard ERC-20 transfers between addresses.
- Includes a full Foundry test suite:
  - Positive tests (token name, symbol, supply, transfers)
  - Negative test (transfer fails when balance is too low)

---

## Project Purpose

- Build experience in professional Solidity development practices.
- Learn and apply best practices for writing, testing, and deploying smart contracts.
- Prepare for advanced blockchain development projects (DeFi, NFTs, Layer 2s).

---

## Technologies Used

- **Solidity** ^0.8.19
- **Foundry** (Forge, Anvil)
- **OpenZeppelin Contracts**
- **Git / GitHub** for version control

---

## Testing Approach

Tests are written using the **Arrange - Act - Assert** pattern with Foundry cheatcodes:

- `makeAddr()` to simulate test address
- `vm.expectRevert()` to catch expected transaction failures
- *(Planned for future projects: use of `vm.prank()` for multi-user simulations)*

Run all tests with: 

```bash
forge test
```
All test should pass with 0 warnings.

---

## How to Build

Install dependencies and compile the project:

```bash
forge install
forge build
```

---

## Next Steps (Future Enhancements)
- Deploy token to local blockchain with Anvil
- Write simple deployment scripts
- Expand with minting, burning, pausing, and access control features
- Build a frontend dApp to interact with Blessing Token

---

## About the Developer
Built by **Isaiah (Ali) Fletcher** 

Focused on professional-grade Solidity, Blockchain, and DevOps development.

---
