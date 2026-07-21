// Goal: Hash the Message
// The noble-secp256k1 library (v 1.7.1) provides us with all of the cryptography we're going to need throughout this course. Let's make use of the keccak256 hash and utf8ToBytes function.
// Your first step is to take the string message passed in and turn it into an array of UTF-8 bytes. You can do so with the utf8ToBytes function.
// Then take the keccak256 hash of those bytes and return this value.




const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    const bytes = utf8ToBytes(message);

    // 2. Compute the Keccak-256 hash of those bytes
    const hash = keccak256(bytes);

    // 3. Return the resulting Uint8Array
    return hash;
}

module.exports = hashMessage;