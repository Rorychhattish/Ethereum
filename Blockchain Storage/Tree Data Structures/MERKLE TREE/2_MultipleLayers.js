// Goal: Handle Bigger Trees
// Update the getRoot function to handle merkle trees with more than two leaf nodes.
// When breaking down the logic of merkle trees, first we hash together A and B, then we hash together C and D. Then we hash together the combination of A and B (AB) with the combination of C and D (CD). Something like this:

//     ABCD
//     /  \ 
//    AB  CD
//   / \  / \
//   A B  C D
// Writing the code you will likely find it useful to think of the tree as having multiple layers:

// The first layer is the leaves (A, B, C, D)
// The second is the combination of both of those combinations (AB, CD)
// The last layer is the final combination: the merkle root (ABCD)
// In each layer, we'll need to combine elements two-at-a-time until we reach a layer with just a single element. At that point we can stop, knowing we've found the root.
// For this stage you'll need to handle a single leaf node, two leaf nodes, four leaf nodes and eight leaf nodes.






class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot() {
        let layer = this.leaves;
        
        while (layer.length > 1){
            const nextLayer = [];
            for(let i = 0; i < layer.length; i += 2){
                nextLayer.push(
                    this.concat(layer[i] , layer[i+1])
                );
            }
            layer = nextLayer;
        }
        return layer[0];
    }
}
module.exports = MerkleTree;
