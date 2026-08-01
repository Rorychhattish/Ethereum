# UTXO & Account Models

## Overview

Blockchains need a way to track user balances.

* **Bitcoin:** UTXO (Unspent Transaction Output) model
* **Ethereum:** Account-based model

## Transaction Components

A blockchain transaction requires:

* Amount
* Payer (sender)
* Payee (receiver)
* Digital signature (payer authorization)

## Account Model (Ethereum)

Tracks only the **total balance** of an account.

Example:

* Alice: 60 ETH
* Bob: 20 ETH
* Bob sends 5 ETH to Alice

Result:

* Bob: 15 ETH
* Alice: 65 ETH

Simple and easy to understand.

## UTXO Model (Bitcoin)

Bitcoin tracks balances using **unspent transaction outputs (UTXOs)**.

Example:

* Alice sends Bob 5 BTC
* Bob receives a **5 BTC UTXO**
* Bob spends that UTXO later

Key points:

* UTXOs can be spent **only once**
* Remaining change creates **new UTXOs**
* UTXOs are spread across many blocks
* Prevents **double spending**

## Account vs UTXO

| Account Model                | UTXO Model                        |
| ---------------------------- | --------------------------------- |
| Tracks total account balance | Tracks individual unspent outputs |
| Simple and intuitive         | Better privacy                    |
| Good for smart contracts     | Stateless and efficient           |
| Used by Ethereum             | Used by Bitcoin                   |

## Conclusion

* **Ethereum:** Account model for flexible smart-contract state.
* **Bitcoin:** UTXO model for simplicity, privacy, and preventing double spending.
