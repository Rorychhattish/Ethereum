# Tree Data Structures

## Overview

Blockchains use **tree data structures** to efficiently store, organize, and verify changing state data such as balances and transactions.

Previous recap:

* **Ethereum:** Account-based model
* **Bitcoin:** UTXO (Unspent Transaction Output) model

---

## What is a Tree?

A **tree** is a hierarchical data structure made of **nodes**.

Key terms:

* **Node** – basic unit of a tree
* **Parent** – node above another node
* **Child** – node connected below a parent
* **Leaf** – node with no children
* **Root** – top-most node in the tree
* **Siblings** – nodes with the same parent
* **Subtree** – any section of a tree that forms its own tree

---

## Types of Trees

### Simple Tree

One parent with one or more children.

### Binary Tree

A tree where each parent has **at most two children**.

### General Tree

A tree where a parent can have **any number of children**.

---

## Tree vs Linked List

### Linked List

```javascript
class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

### Tree

```javascript
class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}
```

* Linked list → one next node
* Tree → multiple child nodes

---

## Binary Search Tree (BST)

A **Binary Search Tree** is a binary tree with ordering rules.

Properties:

* Left subtree contains keys **less than** the parent.
* Right subtree contains keys **greater than** the parent.
* Every subtree is also a BST.

Example:

```text
        8
       / \
      3   10
     / \    \
    1   6    14
```

---

## Why BST is Efficient

Searching in a balanced BST takes **O(log n)** time.

Adding an entire new level increases the worst-case search time by only **one step**, making BSTs highly efficient for searching and sorting.

---

## Tree Height

**Height** = number of levels in a tree.

As the tree grows, nodes increase exponentially, while search time grows logarithmically.

---

## Big O Summary

| Operation                     | Time Complexity |
| ----------------------------- | --------------- |
| Constant Time                 | O(1)            |
| Logarithmic Time (BST search) | O(log n)        |
| Linear Time                   | O(n)            |

Blockchains prefer efficient data structures because storage and lookup operations are expensive.

---

## Real-World Example

A **file system** is a tree structure.

```text
Root
├── Documents
│   ├── Notes.txt
│   └── Resume.pdf
└── Pictures
    └── Photo.jpg
```

Directories are parent nodes and files/subdirectories are child nodes.

---

## Why Trees Matter in Blockchain

Trees are used because they:

* Organize hierarchical data
* Enable efficient searching
* Enable efficient verification
* Support scalable blockchain databases

---

## Conclusion

Trees are one of the most important data structures in blockchain systems.

Important concepts:

* Nodes
* Root
* Parent / Child
* Leaf
* Binary Tree
* Binary Search Tree
* O(log n) search efficiency

The next major blockchain data structure built on these concepts is the **Merkle Tree**.

