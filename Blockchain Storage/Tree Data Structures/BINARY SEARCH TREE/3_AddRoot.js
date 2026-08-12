// Goal: Add Node Method
// Create a new method addNode on Tree which will take a new node and add it to the tree.
// Assume that the tree is empty for this stage. Simply set the root to be the node passed into the method.




class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    this.root = node;
  }
}
module.exports = Tree;
