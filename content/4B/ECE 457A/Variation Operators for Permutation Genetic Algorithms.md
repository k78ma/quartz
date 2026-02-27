---
title: Variation Operators for Permutation Genetic Algorithms
tags:
date: 2026-02-22
aliases:
  - variation operators for permutation genetic algorithms
  - PMX
---
Binary or real-valued crossover and mutation, when applied naively to permutations, may produce duplicate or missing elements, such that the produced permutation is invalid. Specifically, a valid permutation must satisfy $\,\, \forall \,i \neq j \, : \,x_{i} \neq x_{j}$. This preserves the uniqueness of all elements.

## Crossover
- [[Partially Matched Crossover]]
- [[Order Crossover]]: Preserves relative order
- [[Cycle Crossover]]: Preserves positions via cycles
- [[Edge Recombination Crossover]]: Preserves adjacency edges (good for TSP)

![[Variation Operators for Permutation Genetic Algorithms-1771795575177.webp|537x164]]



## Mutation
For permutation mutation, we usually just swap two positions. This preserves permutation feasibility and injects diversity. 