---
title: Ant Colony Optimization
tags:
  - ece457a
date: 2026-04-01
aliases: ant colony optimization
---
Many hard problems are solved in nature without central control, with complex global behavior arising from simple local rules. 

An example of this is the ant path-finding problem: ants repeatedly travel between a nest and food source. The environment may contain multiple possible paths, and the ants have no global knowledge of the terrain. How do they discover the shortest path? While moving, they deposit pheromones. These pheromones persist for some before evaporating. Other ants sense pheromones and are biased toward stronger trails. 

Ants choosing shorter paths return to the nest faster. A faster return means that more pheromones are deposited per unit time; longer paths accumulate accumulate pheromones slowly. This provides positive feedback, such that paths that are used more often become increasingly attractive; shorter paths reinforce themselves faster than long paths

On the other hand, remember that pheromones evaporate over time. Thus, poor or accidental paths lose reinforcement. This serves as negative feedback; evaporation prevents early mistakes from dominating forever.

We can map this to optimization concepts. Optimization emerges from biased random exploration guided by collective memory.

![[Ant Colony Optimization-1775096358260.webp]]

We can have many ants that explore the search space in parallel, building solutions incrementally. Good solutions reinforce themselves via pheromones, and bad solutions fade away through evaporation.

## ACO vs. GA
ACO tends to outperform [[Genetic Algorithms|genetic algorithms]] when the problem is combinatorial (permutation, graphs), with a large and discrete search space. In these cases, solution quality depends strongly on adjacency structure, so good partial solutions like edges and subpaths should be reused. 
- Examples: TSP, vehicle routing, network routing, scheduling with precedence constraints.

GA outperforms ACO when variables are real-valued or mixed-type. Especially for problems that benefit from recombining distance features, and building blocks are not adjacency-based. Or, when fitness evaluation is expensive and population size must be small.
- Examples: Continuous optimization, hyperparameter tuning, feature selection, neural architecture search

![[Ant Colony Optimization-1775242187759.webp]]