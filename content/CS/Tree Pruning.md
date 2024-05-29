---
title: Tree Pruning
tags:
  - cs
  - dsa
date: 2024-02-28
aliases:
---
Tree pruning lets us cut branches off our state-space tree. The fewer branches, the faster the algorithm. We prune a branch when it's clear that going into that branch would not yield a valid final state. This happens when the problem comes with one or more constraints, and the branches violates those contraints.

```python
def dfs(start_index, path):

	if is_leaf(start_index):
		report (path)
		return

	for edge in get_edges(start_index):
		# Prune
		if not is_valid(edge):
			continue
		path.add(edge)

		# Increment start_index
		dfs(start_index + len(edge), path)
		path.pop()
```

The difference between this and normal [[Backtracking]] are:
- We added a pruning step that checks if a branch is valid using `is_valid`
- We increment `start_index` by a variable size instead of always 1