---
title: Order Crossover
tags:
  - ece457a
date: 2026-02-22
aliases:
  - order crossover
  - OX
  - OR
---
OX preserves the relative order of elements from one parent. Specifically, it preserves a contiguous block of positions from parent 1, and the relative order of remaining elements from parent 2.

1. Choose cut points $c_{1}<c_{2}$.
2. Copy segment $P_{1}[c_{1}:c_{2}]$ into the child at the same positions.
3. Starting from position $c_{2}+1$ in $P_{2}$ (wrap around), fill empty child slots with elements not already present, preserving $P_{2}$'s order.

![[Variation Operators for Permutation Genetic Algorithms-1771793092336.webp|486x219]]

![[Variation Operators for Permutation Genetic Algorithms-1771793111191.webp|482x174]]

So the end result would be: $[7,6,4,5,1,3,2]$.

![[Variation Operators for Permutation Genetic Algorithms-1771793187909.webp|486x284]]

Another example:

![[or-ox-example.pdf]]

For some reason this example fills cyclically from position $c_{2}+1$? But the first one fills in order from the start.