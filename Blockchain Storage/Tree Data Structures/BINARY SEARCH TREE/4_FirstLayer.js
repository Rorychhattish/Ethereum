// Goal: Modify Add Node
// Modify the addNode function to also handle adding the first children of the root.




class Tree {
    constructor(root) {
        this.root = null;
    }
    addNode(node){
        if(this.root === null){
            this.root = node;
        }
        else if (this.root.left === null){
            this.root.left = node;
        }
        else{
            this.root.right = node;
        }
    }
}
module.exports = Tree;
