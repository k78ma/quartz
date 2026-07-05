---
title: Cooperative ACO
tags:
  - ece457a
date: 2026-04-09
aliases: cooperative aco
---
There are several cooperative approaches to doing ACO. 

Heterogenous approach is used in multi-objective optimization problems, where each colony optimizes a different criterion.

Homogeneous and parallel approaches:
- Fine-grained: Each processor holds a single ant
- Coarse-grained: Each processor holds a complete colony

Middendorf multi-colony algorithm: Colonies are connected in a directed-ring fashion. There are four exchange approaches: 
- All colonies get the same global best solution
- Circular exchange of locally best solutions
- Circular exchange of migrants
- Mixture of previous two approaches

Applied to TSP, it was found that the best exchange method was the circular exchange of locally best solutions, and that a moderate number of colonies better than single colony.