![[Untitled.png|168]]

```
pre-order: [3, 9, 20, 15, 7]
in-order: [9, 3, 15, 20, 7]
post-order: [9, 15, 20, 7, 3]

[9 | 20, 15, 7]
```

```python
# Definition for a binary tree node.

# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def buildTree(self, preorder, inorder, postorder) -> TreeNode:

	if not preorder or not inorder:
		return

	root = TreeNode(preorder[0])
	mid = inorder.index(preorder[0])

	root.left = self.buildTree(preorder[1:mid+1], inorder[:mid])
	root.right = self.buildTree(preorder[mid+1:], inorder[mid+1:])

	return root
```

1. First item of `preorder` is always the root.
2. If you find the root in `inorder`, the values to the left of the root are the left subtree, and the values to the right of the root are the right subtree.

- Left subtree = 1`
- Right subtree = 3
