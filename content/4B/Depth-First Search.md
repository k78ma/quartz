---
title: Depth-First Search
tags:
  - ece457a
date: 2026-01-22
aliases: depth-first search
---
In DFS, we traverse a search tree by expanding the deepest unexpanded node first, following one path as far as possible before backtracking. The fringe discipline is a LIFO stack (explicit or via recursion). 

DFS is useful for feasibility checking, constraint satisfaction, and structural exploration.

## Properties
- **Completeness:** Not complete in infinite-depth or cyclic spaces. May follow an infinite branch and never find a solution.
- **Optimality:** Not optimal, as the first solution found may be arbitrarily bad.
- **Cost awareness:** Ignores path cost completely.

Essentially, DFS trades guarantees for speed and memory efficiency. It has a low memory usage of $O(b\cdot d)$.

## Traversal
Usually we use [[Tree Traversal|pre-order traversal]] (left, right, root). Basically, we go as deep as possible; when stuck, backtrack to the nearest ancestor with an unexpanded child.

![[Depth-First Search-1769121545908.webp]]
