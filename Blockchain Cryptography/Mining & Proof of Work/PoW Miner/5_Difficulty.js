// Goal: Proof of Work
// Now it's time to actually mine the block. This is where we get the work part of proof of work!
// In the mine function, prior to hashing the block, add a nonce property. This property should start at 0
// Keep changing the nonce until you find a hash that is less than the TARGET_DIFFICULTY





const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction);
}

function mine() {
    // Determine the height (number of blocks already in the chain)
    const height = blocks.length;
    const transactions = mempool.splice(0, MAX_TRANSACTIONS);

    // Create block object
    const newBlock = {
        id: height,
        transactions,
        nonce: 0
    };

    let hash;
    let int;

    // Proof of Work loop
    while (true) {
        // Stringify block
        const blockString = JSON.stringify(newBlock);

        // Hash block
        hash = SHA256(blockString).toString();

        // Convert hash to BigInt
        int = BigInt(`0x${hash}`);

        // Check difficulty
        if (int < TARGET_DIFFICULTY) {
            break;
        }

        // Increment nonce
        newBlock.nonce++;
    }

    // Add hash after mining
    newBlock.hash = hash;

    // Add block to chain
    blocks.push(newBlock);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};
