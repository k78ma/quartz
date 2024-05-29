---
title: Binary Tree
tags:
  - cs
  - dsa
date: 2024-02-26
aliases:
---
A $n$-nary tree is a tree in which each node has no more than $n$ children. So, in a binary tree, each node has 0 to 2 children.

A node can be defined as:
```python
class Node:
	def __init__(self, val):
		self.val = val
		self.left = None
		self.right = None
```

#### Types of Binary Trees

**Full-binary tree:** Every node has 0 or 2 children.

**Complete binary tree:** All levels are completely filled except possibly the last level and all nodes in the last level are as far left as possible. This may sound like an odd concept. We will see its usage in relation to [[Heap|heaps]].

**Perfect binary tree:** All internals nodes have two children and all leaf nodes have the same level. Perfect binary trees are often used to estimate time complexity for combinatorial problems where the search space is a perfect binary tree.

Properties of perfect binary trees:
- Number of nodes in a perfect binary tree is $2^{n}-1$ where $n$ is the number of levels. 
	- Calculation: The first level has 1 node, the root. The next level has 2 nodes. The following levels have 4, 8, 16.. nodes. This is a geometric sequence and the sum is $a(1-r^{n}) / (1-r)$. Plug in `a = 1` and `r = 2` and we get $2^{n}-1$.
- Number of internal nodes = number of leaf nodes - 1. 
	- Calculation: A perfect binary tree of height `n+1` will have `2^n` leaf nodes. The internal nodes in the tree of height `n+1` form a perfect binary tree of height `n` with `2^n-1` total nodes. Comparing the two values, we see that number of internal nodes = number leaf nodes - 1.
- Total number of nodes = 2 $\times$ number of leaf nodes - 1. This is a derivative of property #2 and the fact that the total number of nodes = number of leaf nodes + number of internal nodes. So the number of total nodes and leaf nodes are both `O(2^n)`.