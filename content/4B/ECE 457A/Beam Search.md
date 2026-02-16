---
title: Beam Search
tags:
  - ece457a
date: 2026-02-16
aliases: beam search
---
Beam search is an informed, memory-bounded variant of [[Breadth-First Search|BFS]]. It reduces the memory cost of BFS, using heuristic information to guide expansion, trading away guarantees for scalability.

Essentially, at each depth we only expand the top $\beta$ nodes. $\beta$ is called the beam width and is the maximum number of nodes retained per level. Nodes are ranked using an evaluation function; all other nodes are discarded permanently.
## Properties
- Complete: No (may discard the only solution path)
- Optimal: No (even with admissible heuristics)
- Time complexity: $O(\beta\cdot d)$
- Space complexity: $O(\beta\cdot d)$

## Example

![[Beam Search-1771277252137.webp]]

![[Beam Search-1771277280128.webp]]

![[Beam Search-1771277289000.webp]]
