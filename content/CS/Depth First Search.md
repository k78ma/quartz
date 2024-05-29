---
title: Depth First Search
tags:
  - cs
  - dsa
date: 2024-02-26
aliases:
  - DFS
---
In DFS, we go as deep as we can to look for a value, and when there is nothing new to discover, we retrace our steps to find something new. This is like [[Tree Traversal#Pre-order Traversal|Pre-order Traversal]].

Simplified, written out version:

```python
def dfs(root, target):

	# Current node value
    if root is None:
        return None
    if root.val == target:
        return root
        
    # Return non-null return value from the recursive calls
    left = dfs(root.left, target)
    if left is not None:
        return left

    # At this point, we know left is null, and right could be null or non-null
    # We return right child's recursive call result directly because:
    # - If it's non-null we should return it
    # - If it's null, then both left and right are null, we want to return null
    return dfs(root.right, target)
    # the code can be shortened to: return dfs(root.left, target) or dfs(root.right, target)
```

Concise version:

```python
def dfs(root, target):
	if root is None:
		return None
	if root.val == target:
		return root
	return dfs(root.left, target) or dfs(root.right, target)
```

The action of retracing steps in DFS is called [[Backtracking]]; in DFS, you backtrack after exploring a deeper node. We can view backtracking as the concept of retracing and DFS as the algorithm that implements it. This is also a [[Divide and Conquer]] algorithm because we have 2 recursive calls `dfs(root.left)` and `dfs(root.right)`, and return based on results from the recursive calls. We are splitting into subproblems of the same type (search in left and right children) until they are simple enough to be solved directly (null nodes or found target) and combine the results from these subproblems (return non-null node).

### Uses
#### Tree
DFS is essentially pre-order tree traversal.
- Traverse and find/create/modify/delete node
- Traverse with return value (finding max subtree, detect balanced tree)
#### Combinatorial problems
DFS/backtracking and combinatorial problems are a match made in heaven Combinatorial search problems boil down to searching in trees.
- How many ways are there to arrange something
- Find all possible combinations of ...
- Find all solutions to a puzzle
#### Graph
Trees are special graphs that have no cycle. We can still use DFS in graphs with cycles. We just have to record the nodes we have visited and avoiding re-visiting them and going into an infinite loop.
- Find a path from point A to B
- Find connected components
- Detect cycles