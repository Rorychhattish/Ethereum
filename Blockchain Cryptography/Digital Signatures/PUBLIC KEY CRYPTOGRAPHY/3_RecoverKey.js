// Goal: Recover the Key
// Given a message, signature, and recoveryBit find the public key and return it! Be sure to hash the message when passing it to the recovery method.




const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const messageHash = hashMessage(message);

    // 2. Use the library to recover the public key
    // We pass the hash, the signature, and the recovery bit
    const publicKey = secp.recoverPublicKey(messageHash, signature, recoveryBit);

    // 3. Return the public key (as a Uint8Array)
    return publicKey;
}

module.exports = recoverKey;
