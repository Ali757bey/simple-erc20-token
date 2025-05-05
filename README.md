# Blessing Token (BLSS)
![Solidity](https://img.shields.io/badge/Solidity-0.8.23-blue)
![Foundry](https://img.shields.io/badge/Build-Foundry-orange)
![Status](https://img.shields.io/badge/Status-Deployed-success)

A professional ERC-20 token smart contract project built using **Solidity, Foundry, RainbowKit** and **Tailwind CSS**. This repo showcases both smart contract fundamentals and a connected dApp frontend.

---

## Overview 

This project implements a professional, gas-optimized ERC-20 token called **Blessings (BLSS)**. It includes:

- A smart contract deployed on the **Sepolia testnet**
- A frontend **wallet-connected dApp**
- Foundry test suite for core contract functionality

---

## Features

- Fixed supply ERC-20 token using OpenZeppelin
- Fully modular deployment via Foundry scripts
- Secure wallet signing with cast wallet
- On-chain contract verification (Etherscan + Sourcify)
- Frontend dApp: view balance, transfer tokens, connect wallet

---

## Wallet Security

This project uses Foundry’s **keystore-based** cast wallet, avoiding the need to store .env private keys.
To safely import your wallet:

```bash
cast wallet import <yourWallet> --interactive
```

---

## Project Purpose

- Build experience in **professional Solidity** development practices.
- Learn secure deployment practices (scripted, modular, verifiable).
- Reinforce **best practices** with Foundry testing and gas optimization.
- Bridge smart contracts with a **wallet-aware frontend**.
- Showcase skills in a real-world portfolio-ready project.

---

## Sepolia Deployment

- **Deployed Address**: `0x5f369B7026B69a54EC437cf294C8e4e68a406060`
- **Block Explorer**: [View on Sepolia Etherscan](https://sepolia.etherscan.io/address/0x5f369B7026B69a54EC437cf294C8e4e68a406060)
- ✅ **Verified Source Code** on Etherscan ✅
- **Block**: 8,237,587
- Total Supply: 1000 BLSS

---

## Testing Approach

Tests are written using the **Arrange - Act - Assert** pattern with Foundry cheatcodes:

- `forge test` for Solidity-based testing
- `makeAddr()` for address mocking
- `vm.expectRevert()` to handle failure scenarios

Test suite includes: 

- Token name and symbol validation
- Total supply check
- Transfer success and failure tests (insufficient balance)

Run tests with: 

```bash
forge test
```

---

## Frontend dApp

A wallet-aware dApp built with: 
- **Next.js (App Router)**
- **Tailwind CSS**
- **RainbowKit + Wagmi v2**
- Live token balance + transfer interaction
- Loading indicators and success/error toasts

### How to Run Locally

```bash
cd blessing-dapp
npm install
npm run dev
```
View in browser at: `http://localhost:3000`

---

##  Technologies Used

| Category         | Stack                                    |
| ---------------- | ---------------------------------------- |
| Smart Contracts  | Solidity, Foundry, OpenZeppelin          |
| Frontend         | Next.js, Tailwind CSS, Wagmi, RainbowKit |
| Deployment Tools | Anvil, cast wallet, Sourcify, Etherscan  |
| Testing          | Forge, Cheatcodes, vm tools              |
| Version Control  | Git, GitHub                              |


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
- Add mint/burn roles with AccessControl
- Implement token permit (EIP-2612)
- Deploy dApp to Vercel or Netlify
- Build mobile support via RainbowKit or React Native
- Add unit tests for frontend hooks + state

---

## About the Developer
Built by **Isaiah (Ali) Fletcher** 

Focused on professional-grade Solidity, Blockchain, and DevOps development.
Exploring professional Web3 development through real world builds.

---
