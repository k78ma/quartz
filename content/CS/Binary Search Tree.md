---
title: Binary Search Tree
tags:
  - cs
  - dsa
date: 2024-02-26
aliases:
  - BST
---
A binary search tree (BST) is a type of [[Binary Tree]] where:
$$
\text{all left descendants} < \text{node} < \text{all right descendants}
$$

![[Binary Search Tree.png]]

Binary search trees allow for fast search and flexible updates. 
- Search: [[Binary Search]] requires that we have fast access to two elements, the median elements above and below the given node. To combine these ideas, we need a "linked list" with two pointers per node. 
