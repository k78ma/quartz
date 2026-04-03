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
