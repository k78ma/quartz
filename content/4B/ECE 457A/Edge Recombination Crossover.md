---
title: Edge Recombination Crossover
tags:
  - ece457a
date: 2026-02-22
aliases: edge recombination crossover
---
ERX seeks to preserve adjacency (edge) information between elements. In an edge appears in a parent, ERX tries to keep it in the child. Global positions and order are not a priority.
- For example, in TSP, the tour quality is driven by the edges.

Algorithm:
1. Build edge table $N(v)$ for all cities $v$ from $P_{1}$, $P_{2}$
2. Choose a starting city; set child $C\leftarrow [c]$
3. While child is not complete:
    1. Remove $c$ from all sets $N(\cdot)$ (mark $c$ visited)
    2. If $N(c)\neq \emptyset$: choose next city $u\in N(c)$ with smallest $\left| N(u) \right|$
    3. Else (dead-end): choose any unvisited city $u$ (tie-break)
    4. Append $u$ to $C$: set $s \leftarrow u$
4. Return child permutation $C$.

Basically, each $N(v)$ is a set of adjacency options inherited from parents. Small $\left| N(v) \right|$ indicates a high constraint node, so ERX selects it early to avoid losing valid inherited edges. If idea is that if we postpone a hard-to-place city, we may lose its last inherited adjacencies, so choosing smallest $\left| N \right|$ tends to preserve more parent edges overall.

![[erx-example.pdf]]

