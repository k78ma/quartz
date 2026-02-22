---
title: Permutation Genetic Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases: permutation genetic algorithms
---
Some problems deal with discrete, ordered structure. 

A permutation is a collection where each element appears once, in a specific order, such as:
$$
[3,1,4,2,5]
$$
The objective depends on the relative order of elements, and adjacency relationship between elements.

This often arises in applications like the traveling salesman problem, scheduling and sequencing, and routing and ordering tasks.

Binary or real-valued crossover, when applied naively to permutations, may produce duplicate or missing elements, such that the produced permutation is invalid. Specifically, a valid permutation must satisfy $\,\, \forall \,i \neq j \, : \,x_{i} \neq x_{j}$. This preserves the uniqueness of all elements.

![[Permutation Genetic Algorithms-1771791905800.webp|322x289]]

Thus, we turn to [[Variation Operators for Permutation Genetic Algorithms|variation operators for permutation genetic algorithms]].

![[permutation-ga-tsp.pdf]]