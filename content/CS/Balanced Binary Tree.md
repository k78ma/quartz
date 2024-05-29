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
The key to exploiting balanced binary search trees is using them as black boxes.

Suppose we are given the task of reading $n$ numbers and then printing them out in sorted order. We have access to a balanced dictionary data structure, which supports the operations search, insert, delete, minimum, maximum, successor, and predecessor in $O(\log n)$ time. How can we sort in $O(n\log n)$ time with only:
1. Insert and in-order traversal?
2. Minimum, successor, and insert?
3. Minimum, insert, and delete?

Every algorithm using a binary search tree has to start by building the tree. This involves initializing the tree, and then reading/inserting each of the $n$ items into the tree. This is $O(n\log n)$, since each insertion takes $O(\log n)$ time at most and we have to do it $n$ times.

- With insertion and in-order traversal, we can build a search tree by inserting all $n$ elements, and then do a traversal to access items in sorted order.

- With minimum, successor, and insert, we can build a search tree by inserting all $n$ elements, then start from the minimum element and repeatedly find the successor to traverse the elements in sorted order.

- With minimum, insert, and delete, we once again build the tree. Then, we can repeatedly find and delete the minimum element to traverse the elements in sorted order.

Each of these algorithms does a linear number of logarithmic-time operations, and hence runs in $O(n \log n)$ time. The key to exploiting balanced binary search trees is using them as black boxes!