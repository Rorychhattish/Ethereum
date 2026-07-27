# Blockchain Structure

## What is a Blockchain?

A blockchain is a **distributed, peer-to-peer database** that stores data in a chain of validated blocks. Each block contains transactions and is cryptographically linked to the previous block using hashes.

---

## Blockchain Architecture

Each block contains:

- **Index** – Position of the block in the chain.
- **Timestamp** – Time the block was created (UNIX timestamp).
- **Previous Hash** – Hash of the previous block.
- **Data** – Transactions or other stored information.
- **Nonce** – Number used during mining.
- **Hash** – Digital fingerprint of the block.

The block hash is calculated as:

```text
Hash(index + previousHash + timestamp + data + nonce)
```

---

## Genesis Block

The **Genesis Block** is the first block in a blockchain.

- Index = `0`
- Previous Hash = `0`

---

## Nodes & Peer-to-Peer Network

A **node** is a computer that stores a copy of the blockchain.

Blockchain uses a **Peer-to-Peer (P2P)** network where:

- Every node maintains the ledger.
- There is no central server.
- All nodes verify new blocks.

---

## Consensus

Since there is no central authority, nodes agree on valid blocks using a **consensus mechanism**.

Example:

- Bitcoin → **Proof of Work (PoW)**

This solves the **Byzantine Generals Problem**, allowing distributed nodes to agree on valid data.

---

## Mining & Difficulty

Mining is the process of finding a valid **nonce** so that the block hash satisfies the network's difficulty.

Example difficulty:

```text
000xxxxxxxxxxxxxxxx...
```

More leading zeros = Higher mining difficulty.

---

## Data Integrity

Changing any data inside a block changes its hash.

This causes:

- Current block becomes invalid.
- All following blocks become invalid because their `previousHash` no longer matches.

To successfully modify old data, an attacker would need to re-mine that block and every block after it, making blockchain highly secure.

---

## Valid New Block Requirements

A new block must:

- Have an index one greater than the previous block.
- Store the correct previous block hash.
- Have a correctly calculated hash.
- Meet the network difficulty requirement.

