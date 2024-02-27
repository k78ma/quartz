---
title: Tree Traversal
tags:
  - cs
  - dsa
date: 2024-02-26
aliases:
---
## In-order Traversal
Visit left branch first, then the current node, and finally the right branch.
```python
def in_order_traversal(root: Node):
    if root is not None:
        in_order_traversal(root.left)
        print(root.val)
        in_order_traversal(root.right)
```

## Pre-order Traversal
Visits the current node first, then the left subtree, and finally the right subtree. 
```python
def pre_order_traversal(root: Node):
    if root is not None:
        print(root.val)
        pre_order_traversal(root.left)
        pre_order_traversal(root.right)
```

## Post-order Traversal
Visit the left subtree, then the right subtree, and finally the current node.
```python
def post_order_traversal(root: Node):
    if root is not None:
        post_order_traversal(root.left)
        post_order_traversal(root.right)
        print(root.val)
```