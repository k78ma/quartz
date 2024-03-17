---
title: Construct Binary Tree from Preorder and Inorder Traversal (LC 105)
tags:
  - cs
  - problems
  - dsa
date: 2024-03-16
aliases:
---
Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return _the binary tree_.

Example:
![[Construct Binary Tree from Preorder and Inorder Traversal (LC 105).png|236]]

```
Input: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
Output: [3,9,20,null,null,15,7]
```

## Solution
There are two facts we can take advantage of to construct our tree.
1. The first item in `preorder` will always be the root.
2. If we find the root in `inorder`, the values to the left of it will belong to the left subtree and the values to the right of it will belong to the right subtree.

From the second fact, we can find the length of the left and right subtrees. Thus then tells us how to partition `preorder` correctly. 

In the example, the root `3` is at position `1` in `inorder`, so we know that:
- Left subarray has length 1 – `9`
- Right subarray has length 3 – `15, 20, 7`

In `preorder`, we then know that the partition is `9 | 20, 15, 7`. Then, we can recursively do what we just did on our subtrees; find root in pre-order, and then find the left and right subtrees in in-order. We will repeat this until we get to our base cases 

We can take advantage of this and use a recursive approach to construct our tree.

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        
        if not preorder or not inorder:
            return
        
        # Identify root and its position in inorder
        root = TreeNode(preorder[0])
        mid = inorder.index(preorder[0])
        
        # Build left subtree
        root.left = self.buildTree(preorder[1:mid+1], inorder[:mid])
        # Build right subtree
        root.right = self.buildTree(preorder[mid+1:], inorder[mid + 1:])
        
        return root
```

- Base case: no nodes left to traverse
- We can find the root node by looking at the first order of a pre-order array
- Find the position of root (saved as `mid`) by finding its index in the inorder array

The [[slice notation]] is tricky here.

For left subtree:
- In `preorder`, we go from the index `1` (exclude `0` because it's the current root) to `mid`. However, slice notation is exclusive for stopping, so we need to go to `mid+1`.
- In `inorder`, we go from the start of the array up to `mid` but we exclude `mid`.

For right subtree:
- In `preorder`, we want to start from first number after `mid`, since this means we've "cut out" the left subtree. This means we go from `mid+1` to the end. 
- Same goes for `inorder`!