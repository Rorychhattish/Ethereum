# ⛏️ Proof of Work & Mining

## Overview

Proof of Work (PoW) is a blockchain consensus mechanism that secures decentralized networks by requiring miners to solve computational puzzles before adding new blocks.

Ethereum originally used Proof of Work before transitioning to Proof of Stake, while Bitcoin still relies on PoW.

---

## Topics Covered

- Blockchain Consensus
- Decentralized Networks
- 51% Consensus Rule
- Nakamoto Consensus
- Double Spending Prevention
- Proof of Work (PoW)
- Mining Process
- Nonce
- Target Difficulty
- SHA-256 Hashing
- Block Validation
- Miner Rewards
- Network Security

---

## How Proof of Work Works

1. Collect valid transactions.
2. Create a block candidate.
3. Add a nonce.
4. Hash the block.
5. Compare the hash with the target difficulty.
6. If valid, broadcast the block.
7. Receive the mining reward.

---

## Mining Algorithm

```text
Collect Transactions
        │
        ▼
Create Block Header
        │
        ▼
Add Nonce
        │
        ▼
Hash Block
        │
        ▼
Hash < Target ?
   │           │
 Yes         No
 │            │
 ▼            ▼
Block Added  Increase Nonce
              │
              └──────────► Repeat
```

---

## Key Concepts

- Consensus Mechanism
- Proof of Work
- Mining
- Nonce
- Target Difficulty
- SHA-256
- Longest Chain Rule
- Block Reward

---

## Why Proof of Work?

- Secure blockchain network
- Prevent double spending
- Validate transactions
- Maintain decentralized consensus
- Make attacks extremely expensive

---

## Technologies

- Blockchain
- Ethereum
- Bitcoin
- SHA-256
- Cryptography
- Consensus Algorithms