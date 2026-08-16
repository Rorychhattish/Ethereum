// Goal: Root of Two Leaves
// First, let's write a constructor for the MerkleTree class. This constructor will take two arguments passed in this order:
// An array of leaf nodes
// A combination function used to concatenate and hash two leaves together
//  Let's take a closer look at the combination function.

// Next, let's add a function getRoot on the MerkleTree class. This function will find the merkle root.
// For this stage you will only need to take two leaves and hash them together:

//     Root
//     /  \ 
//    A    B
//  Here, A and B are the leaf nodes and the root is the result of the concatenation. Simply take the first and second leaf nodes and use the concatenate function to get the result.
//  Don't worry about generalizing just yet! On the next stage we'll move onto some more in-depth scenarios.






class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot() {
        return this.concat(this.leaves[0],this.leaves[1]);
    }
} 
module.exports = MerkleTree;

