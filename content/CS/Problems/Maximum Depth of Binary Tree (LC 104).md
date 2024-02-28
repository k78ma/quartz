---
title: Maximum Depth of Binary Tree (LC 104)
tags:
  - cs
  - problems
date: 2024-02-27
aliases:
---
Given the `root` of a binary tree, return _its maximum depth_.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return 0
            return max(dfs(node.left), dfs(node.right)) + 1
            
        return dfs(root) if root else 0
```

The problem asks for the maximum depth of the tree, which means we must find the path from the root to the deepest node of the tree. Since we don't know where the deepest node is, we will visit every node. Therefore, a complete traversal of the tree is needed, and the best way to do that is to use [[Depth First Search|DFS]].

For our DFS, we need to determine a return value and a state.
- **Return value**: When we visit a node, we return the longest path from that node down to a leaf node. This is the number of nodes on the longest path from the node we're currently looking at down to a leaf node.
- **State:** To determine the depth of current node, we only need depth from its children and don't need any additional state.

In the [AlgoMonster version](https://algo.monster/problems/tree_max_depth), their definition of depth is the number of edges, so we would need to do `return dfs(root) - 1` instead, since our definition of depth is the same as node count.

**Time complexity:** `O(n)` – we are traveling `n` nodes and `n-1` edges. We have to travel each edge twice so the total is $n + 2(n-1) = 3n-2$, which is `O(n)`.

**Space complexity:** `O(n)` The call stack uses at most `O(h)` memory where `h` is the height of the tree, which is worst case `O(n)` when the tree is skewed (each node has one or no children).