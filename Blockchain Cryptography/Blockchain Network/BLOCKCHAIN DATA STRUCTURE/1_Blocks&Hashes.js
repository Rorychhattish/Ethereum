// Goal: Return a Hash
// In your Block.js file, we have a class Block. Using the SHA256 function from the Crypto JS Library, return a valid hash in the toHash function.
// For now, there's no need to hash anything in particular since the block contains none of the components




const SHA256 = require('crypto-js/sha256');

class Block {
    toHash() {
        return SHA256("").toString();
    }
}
