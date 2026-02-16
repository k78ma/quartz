---
title: Depth-Limited Search
tags:
  - ece457a
date: 2026-01-26
aliases:
  - depth-limited search
  - DLS
---
Depth-limited search is [[Depth-First Search|depth-first search]] with a depth bound $\ell$. The motivation behind is that DFS can get stuck in infinitely deep paths, or cycles/loops.

The rule is just to expand like DFS, but do not expand beyond depth $\ell$. Thus, DLS finds a solution only if the goal depth $d \leq \ell$. Otherwise, it returns cutoff/failure even if a solution might exist.

Properties:
- Terminates (always)
- Complete if a solution exists within the bound $d \leq \ell$.
- Not optimal (can return a deeper/higher cost solution)

Complexity:
- Time: $O(b^{\ell})$
- Space: $O(bl)$ (linear in depth)

If $\ell \gg d$, DLS may waste effort compared to BFS.

![[Depth-Limited Search-1771192510775.webp]]

![[Depth-Limited Search-1771192542086.webp]]

