---
title: Greedy Best-First Search
tags:
  - ece457a
date: 2026-02-15
aliases: greedy best-first search
---
Greedy [[Best-First Search|best-first search]] selects the node that appears closest to the goal. This uses only the heuristic estimate $h(n)$, **ignoring** the cost accumulated so far.

Expansion rule: Maintain the frontier in a priority queue, always expand the node with smallest $h(n)$ value.

## Properties
- Complete: No
    - can get trapped following misleading heuristic
    - loop or chase deep subtrees
    - completeness is not guaranteed even with cycle checking
- Optimal: No
    - ignores past cost $g(n)$
    - may find a suboptimal solution even with admissible $h(n)$
- Time complexity: $O(b^{m})$ (worse case)
    - can be dramatically reduced with good heuristic
- Space complexity: $O(b^{m})$


## Example

![[Greedy Best-First Search-1771212528503.webp]]

![[Greedy Best-First Search-1771212552288.webp]]

![[Greedy Best-First Search-1771212833963.webp]]
