---
title: Balanced Binary Tree (LC 110)
tags:
  - cs
  - dsa
date: 2024-02-27
aliases:
---
Instead of propagating from the root node to child nodes, we want to do [[Tree Traversal|post-order traversal]]; we traverse to left and right child nodes before we do the parent node.

AlgoMonster solution:
- `tree_height` helper function returns `-1` if the tree is unbalanced and the height of the tree if otherwise

```python
# Returns -1 if is not a balanced binary tree. The height if it is.
def tree_height(tree):
	if tree is None:
        return 0
    left_height = tree_height(tree.left)
    right_height = tree_height(tree.right)
    if left_height is -1 or right_height is -1:
        return -1
    if abs(left_height - right_height) > 1:
        return -1
    return max(left_height, right_height) + 1
    
def is_balanced(tree: Node) -> bool:
    return tree_height(tree) != -1
```

NeetCode solution:
- `dfs` returns a list where the first element is a boolean indicating whether the node's subtrees are balanced; the 2nd element is the height of the sub-tree

```python
def isBalanced(self, root: Optional[TreeNode]) -> bool:
	
	def dfs(node):
		if not node:
			return [True, 0]
		
		left, right = dfs(node.left), dfs(node.right)
		balanced = (abs(left[1] - right[1]) <= 1 
					and left[0] 
					and right[0])
		
		height = max(left[1], right[1]) + 1
		return [balanced, height]
	
	return dfs(root)[0]
```

