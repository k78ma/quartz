---
title: Genetic Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases: genetic algorithms
---
Among [[Population-based Algorithms|population-based algorithms]], genetic algorithms are conceptually simple and widely applicable. They are strongly inspired natural evolution, operating on a population using:
- Selection (survival of the fittest)
- Recombination (information mixing)
- Mutation (innovation)

![[Genetic Algorithms-1771781864502.webp|305x346]]

Considering [[Information in Search Algorithms|information in search algorithms]], genetic algorithms inject structure through the representation (what patterns can exist), variation operator (what patterns are preserved or disrupted), and selection (what information is retained).

![[Genetic Algorithms-1771781980107.webp]]

### Representation
Representation is the language of the search.
- Good encoding: Small genetic changes correspond to meaningful solution changes
- Bad encoding: Break structure such that neighbors in genotype are unrelated in phenotype

![[Genetic Algorithms-1771782146814.webp]]

### Crossover
Crossover is a structured guess; essentially, we are saying that good partial solutions combined might result in a better solution.

This is most effective when the encoding preserves the building blocks. Poorly aligned crossover can destroy structure faster than it creates it.

![[Genetic Algorithms-1771782221486.webp]]


### Mutation
Mutation provides fresh directions when the population becomes similar/homogeneous. It prevents the search from getting stuck in local traps. We can think of it as a small random nudge to open new pathways.

![[Genetic Algorithms-1771782335110.webp]]

### Selection
Selection turns fitness differences into reproduction opportunities. If the selection pressure is too weak, the learning will be slow. If it's too strong, we might converge prematurely, losing diversity.

![[Genetic Algorithms-1771782404559.webp]]

Selection without variation collapses diversity. Variation without selection is random search.