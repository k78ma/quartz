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