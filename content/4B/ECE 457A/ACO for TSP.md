---
title: ACO for TSP
tags:
  - ece457a
date: 2026-04-03
aliases: aco for tsp
---
In TSP, a solution is a permutation (tour). Each ant builds a tour by visiting each city exactly once. From the current city $i$, the feasible next cities are the unvisited ones:
$$
\mathcal{N}_{i}^{(k)} = \{ j\in  V\, | \,j \text{ not visited by ant } k \}
$$
The effects on probabilities is that the denominator sums only over $\mathcal{N}_{i}^{(k)}$. As the tour grows, the candidate set shrinks.

![[ACO for TSP-1775239848708.webp|281]]

Ideally, we would have something like this happen:
1. Early iterations: Pheromone levels are nearly uniform. Ant decisions are dominated by heuristic information. Many different tours are sampled, resulting is diversity.
2. Mid iterations: Some edges appear frequently in good tours. Pheromones begin to differentiate edges. Ants start to share partial subpaths: Exploration and exploitation co-exist.
3. Late iterations: A small set of tours dominate, with most ants re-using the same edges. Improvements become incremental, exploiting high-quality solutions.

## Example

### Framework

![[ACO for TSP-1775241173229.webp]]

![[ACO for TSP-1775241182583.webp]]

![[ACO for TSP-1775241191223.webp]]

![[ACO for TSP-1775241210436.webp]]

### Numerical Example

![[ACO for TSP-1775425235100.webp]]

![[ACO for TSP-1775425244503.webp]]

![[ACO for TSP-1775425254914.webp]]

![[ACO for TSP-1775425288875.webp]]

![[ACO for TSP-1775425312430.webp]]



