// Goal: Generalize
// Complete the function addNode so that it can handle adding nodes no matter how large the tree gets.




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
}

module.exports = Tree;//5
