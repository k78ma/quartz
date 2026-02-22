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

Genetic algorithms are not a good choice when the problem is convex, smooth, and well-conditioned, or when gradient/second order information is available. They're also not good when the evaluation budget is extremely limited. In these cases, simpler methods like trajectory search may be better.

## Representation
-  See [[Representation in Genetic Algorithms]]

Representation is the language of the search.
- Good encoding: Small genetic changes correspond to meaningful solution changes
- Bad encoding: Break structure such that neighbors in genotype are unrelated in phenotype

![[Genetic Algorithms-1771782146814.webp|452x288]]

## Crossover
- See [[Variation Operators for Genetic Algorithms#Crossover]]

Crossover is a structured guess; essentially, we are saying that good partial solutions combined might result in a better solution.

This is most effective when the encoding preserves the building blocks. Poorly aligned crossover can destroy structure faster than it creates it.

![[Genetic Algorithms-1771782221486.webp|0x0]]

## Mutation
- See [[Variation Operators for Genetic Algorithms#Mutation]]

Mutation provides fresh directions when the population becomes similar/homogeneous. It prevents the search from getting stuck in local traps. We can think of it as a small random nudge to open new pathways.

![[Genetic Algorithms-1771782335110.webp|0x0]]

## Selection
- See [[Selection in Genetic Algorithms]]

Selection is the mechanism that chooses parents (and sometimes survivors), and turns fitness differences into reproduction opportunities. We want the selection process to bias reproduction toward better solutions while still allowing chance. 

Selection pressure is how strongly selection favors high-fitness individuals over others. 
- Low selection pressure: Slower convergence, better exploration/diversity, more robust to local optima
- High selection pressure: Fast convergence, diversity collapses quickly, higher risk of premature convergence

![[Genetic Algorithms-1771782404559.webp|0x0]]

Selection without variation collapses diversity. Variation without selection is random search.

Common selection schemes:
- Fitness-proportionate: $p_{i} \propto f_{i}$
- Tournament selection: best-of-$k$
- Rank-based selection: probability of survival depends on rank (not raw fitness)

## Example

![[binary-ga.pdf]]