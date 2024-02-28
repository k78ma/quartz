---
title: Visible Tree Node
tags:
  - cs
  - dsa
date: 2024-02-27
aliases:
---
In a binary tree, a node is labeled as "visible" if, on the path from the root to that node, there isn't any node with a value higher than this node's value.

The root is always "visible" since there are no other nodes between the root and itself. Given a binary tree, count the number of "visible" nodes.

```python
def visible_tree_node(root: Node) -> int:
    
    def dfs(node, max_seen):
        if node == None:
            return 0
        
        num_visible_nodes = 0
        
        if node.val >= max_seen:
            max_seen = node.val
            num_visible_nodes += 1
            
        num_visible_nodes += dfs(node.left, max_seen)
        num_visible_nodes += dfs(node.right, max_seen)
        
        return num_visible_nodes
        
    return dfs(root, -float("inf"))

```

**Base case:** A node that does not exist (imaginary child of leaf node) will have zero visible nodes. 

**Return value:** Child → Parent. We want small cases (child) to return the same thing as the large recursion case (parent). So, for every node, we want it to return the number of visible nodes in the sub-tree this node is the root of. Thus, we have `return num_visible_nodes`.

**State:** Parent → Child. We want children to know the maximum number seen so far so that it can compare its value and its children's values against it to determine if they're visible nodes.