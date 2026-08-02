# Unspent Transaction Outputs (UTXO)

## Overview

Bitcoin uses the **UTXO (Unspent Transaction Output)** model instead of the account-based model used by Ethereum.

A UTXO represents a specific amount of BTC that can be spent **only once**.

## Example 1: Sending BTC

* Bob receives **12.5 BTC** from mining (a new UTXO).
* Bob wants to send **6.0 BTC** to Alice.

Transaction outputs:

* Alice: **6.0 BTC UTXO**
* Bob: **6.5 BTC UTXO** (change)

The original **12.5 BTC UTXO** is marked as **spent**.

## Example 2: Multiple Inputs

Alice owns:

* 1.0 BTC
* 1.5 BTC
* 0.8 BTC

Total: **3.3 BTC**

Alice wants to pay **3.0 BTC**.

She uses **all three UTXOs as inputs**.

Outputs:

* Receiver: **3.0 BTC**
* Alice: **0.3 BTC** (new change UTXO)

The previous three UTXOs are marked as **spent**.

## Key Points

* A UTXO can be spent only **once**.
* Transactions can have **multiple inputs and outputs**.
* Remaining funds are returned as a **new change UTXO**.
* Users often accumulate many small UTXOs over time.

