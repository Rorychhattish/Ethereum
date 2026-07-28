// Goal: Add the Genesis Block
// The Blockchain.js file contains the Blockchain class with a chain array. Let's add the Genesis Block to this array.
// Create a new Block in the Blockchain constructor then add it to the chain array.




const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [new Block("Genesis Block") ];
    }
}
