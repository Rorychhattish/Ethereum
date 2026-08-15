// Goal: hasNode Method
// Add a method hasNode that will take a number and search our tree to find a node that has that number inside it's data property.
// If a node exists with the number, return true. If not return false.

// For example:
// const tree = new Tree();
// const node1 = new Node(4);
// tree.addNode(node1);
// console.log(tree.hasNode(4)); // true
// console.log(tree.hasNode(7)); // false





class Tree {
    constructor(root) {
        this.root = null;
    }
    addNode(node) {
        if (this.root === null) {
            this.root = node;
            return;
        }

        let current = this.root;
        while(true){
            if(node.data < current.data){
                if (current.left === null) {
                    current.left = node;
                    return;
                }
                current = current.left;
            } else{
                if (current.right === null) {
                    current.right = node;
                    return;
                }
                current = current.right;
            }
        }
        
    }

    hasNode(number){
        let current = this.root;

        while (current !== null) {
            if (current.data === number) {
                return true;
            }
            if (number < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

module.exports = Tree;
