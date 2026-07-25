// Goal: Mine Block
// The goal of this stage is to update the mine() fuction to create a new block with a unique identifier and add it to our blocks array.
// For the purposes of this mining exercise, our block will be an object with a single property: an id that is equal to the block height prior to it being mined.
// Update the mine() function to create a new block object with a single property: id
// Set the id property to the block height prior to the new block being added
// Push the block object into the blocks array





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