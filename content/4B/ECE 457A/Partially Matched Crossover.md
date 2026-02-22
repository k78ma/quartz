---
title: Partially Matched Crossover
tags:
  - ece457a
date: 2026-02-22
aliases:
  - partially matched crossover
  - PMX
---
The idea of PMX is to copy a segment to preserve useful positional structure, and then repair conflicts systematically so every element appears exactly once.

Given parents $P_{1}, P_{2}$:
1. Choose two cut points $[c_{1}, c_{2}]$
2. Create child $C$ by copying segment $P_{1}[c_{1}:c_{2}]$ into $C[c_{1}:c_{2}]$
3. For each position $k\in [c_{1},c_{2}]$, form a paired correspondence
   $$
   P_{1}[k] \leftrightarrow P_{2}[k]
   $$
4. Fill positions outside the segment using $P_{2}$, but if a value conflicts with the copied segment, resolve it by following the correspondence chain until a non-conflicting value is found.

![[Variation Operators for Permutation Genetic Algorithms-1771792199914.webp]]

![[pmx-example.pdf]]
