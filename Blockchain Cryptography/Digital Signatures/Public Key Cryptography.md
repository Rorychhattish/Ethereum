# Public Key Cryptography

## Cryptography Historically

Historically, up until the 1970s, cryptography focused on encrypting messages so they could not be read even if intercepted. It was primarily used for protecting military and government communications.

Early encryption methods were simple, such as shifting letters in the alphabet. Over time, stronger encryption techniques were developed using **secret keys**, where both the sender and receiver shared the same key. This approach is known as **Symmetric-Key Cryptography**.

As cryptography evolved, researchers looked for a way to allow secure communication without requiring both parties to exchange a secret key beforehand.

---

## Personal Computing and the Birth of Public Key Cryptography

With the rise of personal computing, cryptographers realized that people needed a secure way to communicate over public networks without first meeting to exchange secret keys.

In **1976**, **Whitfield Diffie** introduced the revolutionary idea of **Public Key Cryptography**.

The concept uses two mathematically related keys:

* **Public Key** – Can be shared with everyone.
* **Private Key** – Must remain secret.

This approach became known as **Asymmetric Cryptography** because only one party owns the private key.

---

## Digital Signatures

Public key cryptography introduced the concept of **digital signatures**.

If Bob signs a message using his **private key**, anyone can verify that signature using Bob's **public key**.

This proves:

* The message was created by Bob.
* The message has not been modified.
* The sender cannot deny creating the message.

---

## Secure Communication

If someone encrypts a message using Bob's **public key**, only Bob can decrypt it using his **private key**.

This enables secure communication over insecure networks without sharing secret keys in advance.

---

## RSA and ECDSA

Today, two of the most widely used public key cryptography algorithms are:

### RSA

RSA is based on the mathematical difficulty of factoring the product of two very large prime numbers. It has been widely used for encryption and digital signatures.

### ECDSA

ECDSA (Elliptic Curve Digital Signature Algorithm) uses elliptic curve mathematics to provide strong security with much smaller key sizes than RSA.

Ethereum and Bitcoin both use **ECDSA** with the **secp256k1** elliptic curve for generating wallet keys and verifying digital signatures.

---

## Public Key Cryptography in Ethereum

Ethereum relies on public key cryptography for:

* Wallet generation
* Transaction signing
* Ownership verification
* Smart contract interactions

Every Ethereum transaction is digitally signed using the user's **private key**. Network nodes verify the signature using the corresponding **public key** before accepting the transaction.

This ensures:

* Authentication
* Integrity
* Non-Repudiation
* Secure decentralized transactions
