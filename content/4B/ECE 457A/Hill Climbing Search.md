---
title: Hill Climbing Search
tags:
  - ece457a
date: 2026-02-16
aliases: hill climbing search
---
Hill-climbing is a local-neighborhood exploration search algorithm. We start with an arbitrary solution, then search for a better one by incrementally changing a single element of the solution. Successors of anode are sorted by heuristic value.

1. If there exists a successors $s$ of the current state $n$ such that
    - $h(s) \leq h(n)$, and
    - $h(s) \leq h(t)$ for all successors $t$ of $n$
2. then move from $n$ to $s$
3. Otherwise, halt at $n$.

## Example

![[Hill Climbing Search-1771279642267.webp]]


## Comparisons
Hill climbing vs. [[Greedy Best-First Search]]:
- Both use heuristic $h(\cdot)$ to prefer better states
- Hill climbing does not keep a frontier and does not backtrack or jump to an alternative path (it does not remember where it has been)

Hill climbing vs. [[Beam Search]]:
- Equivalent to beam search with beam width $\beta=1$ (keep only one candidate at each step)

![[Hill Climbing Search-1771279598586.webp]]

In the above example, [[Greedy Best-First Search]] would go $A,C,F,K, B, D, H,L$. That is, it uses global frontier information and can recover from local minima.

## Limitations
The key limitation of hill climbing search is that it may terminate at local minima, plateaus, or ridges.

![[Hill Climbing Search-1771279584818.webp]]


## Applications

![[Hill Climbing Search-1771279770942.webp]]

![[Hill Climbing Search-1771279786503.webp]]