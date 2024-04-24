---
title: Balanced Binary Tree
tags:
  - cs
  - dsa
date: 2024-02-26
aliases:
---
Every node in a balanced binary tree meets the condition that the height difference of the left and right subtree of the node is not more than 1. They use insertion/deletion procedures that adjust the tree after each insertion, keeping it close enough to be balanced that the maximum height is logarithmic.

Since binary tree operations are $O(h)$, where $h$ is the height of the binary search tree, having a balanced binary tree means that $h = \log n$. Thus, searching, insertion, and deletion in a balanced binary tree is always worst case of $O(\log n)$, whereas the worst case would be $O(n)$ in an unbalanced binary tree.

For algorithm design, it's important to know these trees exist and that we can be use as black boxes to provide an efficient dictionary implementation.

Balanced binary tree implementations:
- [[Red-black trees]]
- [[AVL trees]]

## Exploiting Balanced Trees
The key to exploiting balanced binary search trees is using them as black boxes