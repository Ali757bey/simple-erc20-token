# Blessing Token (BLSS)
![Solidity](https://img.shields.io/badge/Solidity-0.8.23-blue)
![Foundry](https://img.shields.io/badge/Build-Foundry-orange)
![Status](https://img.shields.io/badge/Status-Deployed-success)

A professional ERC-20 token smart contract project built using Solidity, Foundry, and OpenZeppelin standards.

---

## Overview 

This project implements a basic, gas-optimized ERC-20 token called **Blessings (BLSS)** using OpenZeppelin libraries and scripted/deployed with Foundry.

The token:
- Mints a fixed total supply at deployment.
- Allows standard ERC-20 transfers between addresses.

---

## Sepolia Deployment

- **Deployed Address**: `0x5f369B7026B69a54EC437cf294C8e4e68a406060`
- **Block Explorer**: [View on Sepolia Etherscan](https://sepolia.etherscan.io/address/0x5f369B7026B69a54EC437cf294C8e4e68a406060)
- **Block**: 8,237,587
- ✅ **Verified Source Code** on Etherscan ✅

---

## Features

- Fixed supply ERC-20 token using OpenZeppelin
- Fully modular deploy via Foundry `script/` setup
- Dynamic environment config via `HelperConfig.s.sol`
- Secure wallet handling using `cast wallet` (no .env private keys)
- On-chain contract verification via Sourcify

---

## Technologies Used

- **Solidity** ^0.8.23
- **Foundry** (Forge, Anvil)
- **OpenZeppelin Contracts**
- **Git / GitHub** for version control

---

## Project Purpose

- Build experience in professional Solidity development practices.
- Learn and apply best practices for writing, testing, and deploying smart contracts.
- Prepare for advanced blockchain development projects (DeFi, NFTs, Layer 2s).
- Serve as a portfolio piece demonstrating end-to-end smart contract deployment and verification

---

## Testing Approach

  Includes a full Foundry test suite:
  - Positive tests (token name, symbol, supply, transfers)
  - Negative test (transfer fails when balance is too low)

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

## How to Build & Deploy

Install dependencies and build the project:

```bash
forge install
forge build
```

Deploy locally with Anvil:

```bash
anvil
forge script script/DeployMyToken.s.sol --rpc-url http://localhost:8545 --account <yourWallet> --broadcast
```

Deploy to Sepolia:

```bash
forge script script/DeployMyToken.s.sol --rpc-url $SEPOLIA_RPC_URL --account <yourWallet> --broadcast --verify
```

---

## Next Steps (Future Enhancements)
- Build a basic frontend using React + Ethers.js
- Expand token with burn/mint/permit functionality
- Add roles/permissions with OpenZeppelin's `AccessControl`
- Build a frontend dApp to interact with Blessing Token

---

## Developer Notes

To securely sign and deploy contracts, this project uses Foundry's local wallet system instead of storing private keys in `.env`.

You can import a wallet interactively using:

```bash
cast wallet import <yourWallet> --interactive
```

## About the Developer
Built by **Isaiah (Ali) Fletcher** 

Focused on professional-grade Solidity, Blockchain, and DevOps development.

---
