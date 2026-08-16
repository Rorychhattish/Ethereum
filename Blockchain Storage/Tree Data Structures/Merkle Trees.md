Merkle Trees

Merkle Trees are data structures used to efficiently verify that data belongs to a larger dataset. They are widely used in blockchain and peer-to-peer networks.

How It Works

A binary Merkle Tree combines data hashes step-by-step until a single Merkle Root is produced:

        Merkle Root
         /       \
       ABCD      EFGH
       /  \      /  \
     AB   CD    EF   GH
    / \  / \   / \  / \
    A B  C D   E F  G H

Each parent is created by hashing the combination of its two child hashes.

Merkle Root

The Merkle Root is a single hash representing the entire dataset.

If two peers have the same Merkle Root, they can efficiently verify that their underlying data is consistent without comparing every individual item.

Merkle Proof

A major advantage of the tree structure is that we can prove a specific piece of data belongs to the tree without having all the data.

For example, to prove that E belongs to the tree, we only need:

F
GH
ABCD

These hashes allow us to reconstruct the expected Merkle Root.

If E is changed to M, the resulting root changes, so the proof fails.

Efficiency

Merkle Trees make verification highly efficient.

The average verification complexity is:

O(log₂ n)

For example, a tree containing 128 nodes requires only 7 hashes to verify a piece of data.

Key Takeaways
Merkle Tree: Hash-based tree structure.
Merkle Root: Single hash representing the entire dataset.
Merkle Proof: Proves data belongs to the tree without requiring the complete dataset.
Efficiency: Verification takes approximately O(log n).
Use: Commonly used in blockchains and distributed systems.