---
title: Hybrid ACO
tags:
  - ece457a
date: 2026-04-03
aliases: hybrid aco
---
[[Ant Colony Optimization]] is excellent at global exploration – finding promising regions. Local search is excellent at fine optimization – refining solutions. Combining both can yield stronger performance.
- I think local search in this case means [[Greedy Descent|hill-climbing]]

A typical hybrid loop looks like:
1. Ant builds a tour
2. Apply local search (e.g., 2-opt)
3. Use improved tour for pheromone update

![[Hybrid ACO-1775241938317.webp|201]]

This gives us shorter tours, faster convergence, and higher-quality final solutions.

## Common Local Searches
These are some common local search methods for TSP/routing problems.

**2-opt** (most common):
- Remove two edges and reconnect to eliminate crossings
- Simple, fast, strong baseline improvement

> [!example]- 2-opt example
> ![[Hybrid ACO-1775700241600.webp]]


**3-opt**:
- Remove 3 edges and reconnect in best possible way
- Explores larger neighborhood than 2-opt
- Higher cost but better improvement potential

**Or-opt**:
- Relocate a chain of 1-3 consecutive nodes
- Effective for fine local refinements, frequently used in vehicle routing

**Lin-Kernighan (LK)**:
- Variable-depth, adaptive $k$-opt method
- Dynamically decides how many edges to exchange
- State-of-the-art classical heuristic for TSP