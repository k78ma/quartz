---
title: Backtracking
tags: 
date: 2024-02-28
aliases:
---
Backtracking is a method for [[combinatorial search]] problems, which involve finding groupings and assignments of objects that satisfy certain conditions. 

In these problems, the search space is in the shape of a tree. The tree that represents all the possible states is called a **state-space tree** (because it represents all the possible states in the search space). Each node of the state-space tree represents a state we can reach in a combinatorial search (by making a particular combination). Leaf nodes are the solutions to the problem. 

**Solving combinatorial search problems boils down to DFS on the state-space tree**. Since the search space can be quite large, we often have to "[[Tree Pruning|prune]]" the tree, i.e. discard branches and stop further traversals. This is why it's often called backtracking.

The difference between backtracking and [[Depth First Search on Trees|DFS on Tree]] is that in backtracking, we are not given a tree to traverse but must construct the tree as we go.

## Implementation
Draw the tree to visualize the problem. A small test case that's big enough to reach at least one solution (leaf node). In this process, think about:
1. How do we know if we've reached a solution?
2. How do we branch (generate possible children)?

Then, our generic backtracking looks like this:
```python
def dfs(start_index, path):
	if is_leaf(start_index):
		report(path)
		return
	for edge in get_edges(start_index):
		path.add(edge)
		dfs(start_index + 1, path)
		path.pop()
```

- `start_index` tracks the current level of the state-space tree we're in
- `edge` is the choice we make

The main logic we have to fill out are `is_leaf()` and `get_edges()`, which correspond to the 2 questions above. Sometimes these helper functions can be just one line of code, in which case it wouldn't be necessary to separate into another function.

## Time & Space Complexity
**Time:** We visit each node of the state-space tree exactly once so the time complexity of a backtracking algorithm is proportional to the number of nodes in the state-space tree. The number of nodes in a tree can be calculated by multiplying `number of children of each node ^ height of the tree`.

**Space:** The space complexity of a backtracking algorithm is typically the height of the tree because that's where the recursive call stack is of maximum height and uses the most memory