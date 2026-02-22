---
title: Local Search
tags:
date: 2026-02-20
aliases:
  - local search
  - greedy descent
  - hill climbing
---
Local search is essentially greedy descent:
$$
s_{k+1} \in  \underset{s' \in  N(s_{k})}{\operatorname{argmin}} E(s')
$$
where we always take the move that results in the lowest immediate cost. This is essentially [[Hill Climbing Search|hill climbing search]] (but not for a tree).

It's very effective at intensification/exploitation, but stops at local optimum relative to the neighborhood $N(\cdot)$. It cannot cross a barrier without allowing non-improving moves.

![[Local Search-1771630571225.webp]]


To be more specific: in order to escape, we need a mechanism that occasionally accepts worse solutions:
$$
\Delta E=E(s') - E(s)
$$
- if $\Delta E\leq 0$: Improving (or equal) move
- if $\Delta E>0$: Uphill move (temporary degradation)

![[Local Search-1771630562926.webp]]


To do this, we turn to [[Simulated Annealing]] and [[Tabu Search]].
