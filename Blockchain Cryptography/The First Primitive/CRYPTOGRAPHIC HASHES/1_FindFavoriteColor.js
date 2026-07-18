// Goal: Find the Color
// Given a SHA256 hash, find the color input that would generate that hash. You can assume that all the hashes be generated only from colors provided in the COLORS array.
// To take the hash of a color, first use utf8ToBytes to translate the string to bytes. Then, use sha256 to hash it.
// When you want to compare two hashes, first use toHex to turn each hash from a Uint8Array to a string of hexadecimal characters.
// So comparing two hashes would look like this:

// const a = "apple";
// const b = "banana";

// const aBytes = utf8ToBytes(a);
// const bBytes = utf8ToBytes(b);

// const aHash = sha256(aBytes);
// const bHash = sha256(bBytes);

// console.log(toHex(aHash) === toHex(aHash)); // true
// console.log(toHex(aHash) === toHex(bHash)); // false




const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

function findColor(hash) {
    // 1. Convert the TARGET hash (Uint8Array) to a Hex string once
    const targetHashHex = toHex(hash);

    for (let i = 0; i < COLORS.length; i++) {
        const color = COLORS[i];

        // 2. Convert each color to bytes and then hash it
        const colorBytes = utf8ToBytes(color);
        const colorHash = sha256(colorBytes);

        // 3. Convert our generated hash to a Hex string
        const generatedHashHex = toHex(colorHash);

        // 4. Compare the two Hex strings
        if (generatedHashHex === targetHashHex) {
            return color;
        }
    }
}

module.exports = findColor;