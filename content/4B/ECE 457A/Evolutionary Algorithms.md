---
title: Evolutionary Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases: evolutionary algorithms
---
Evolutionary algorithms are stochastic, population-based search methods that iteratively improve candidate solutions using fitness-based evaluation. Typically, this involves some sort of **variation/mutation/recombination** to generate diversity and explore new regions of the search space, along with **selection** to favor high-fitness solutions. Thus, evolutionary algorithms do not learn a model explicitly; they learn by accumulating and preserving useful information inside high-fitness solutions.

### Fitness
Fitness assigns a scalar value to each candidate solution $x \in \Omega$, measuring how well it satisfies the problem objective and constraints. Fitness induces a preference ordering over the search space, defining what the algorithm considers good, bad, or acceptable. It is determined entirely by the environment (objective function, constraints, performance criteria).

For a geometric interpretation, we can consider the search to be looking for a target region $T \in \Omega$, signifying solutions with acceptable fitness. Every candidate solution corresponds to a point in parameter space; the fitness function induces a landscape.