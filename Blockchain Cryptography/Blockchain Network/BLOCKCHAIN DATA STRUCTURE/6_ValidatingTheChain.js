// Goal: Create an isValid Function
// Create a function called isValid on our Blockchain that will return true or false if a block is valid or invalid respectively
// isValid should check the integrity of every block in its chain by looking at each block's previousHash field and making sure that it is equal to the hash of the block before it

// 💡 Hint
// To compare the output of the SHA256 function you will need to convert it into a string (.toString) before comparing. Example:
// const hash1 = SHA256("a");
// const hash2 = SHA256("a");
// console.log(hash1 === hash2); // false
// console.log(hash1.toString() === hash2.toString()); // true
//  Notice that first one is false! These two are objects and are compared by reference which is why we need to convert it to a string!




const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block("Genesis Block")];
    }
    addBlock(block) {
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        this.chain.push(block);
    }
    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const block = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (block.previousHash !== previousBlock.toHash()) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Blockchain;

