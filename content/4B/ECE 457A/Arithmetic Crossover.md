---
title: Arithmetic Crossover
tags:
  - ece457a
date: 2026-02-22
aliases: arithmetic crossover
---
Given two parent solutions, $x^{(1)}, x^{(2)}$, an offspring is generated as a convex combination:
$$
x^{(c)}=\alpha x^{(1)}+(1-\alpha)x^{(2)}, \quad  \alpha \in  [0,1]
$$
This is essentially a weighted interpolation between the two parents: 

![[Variation Operators in Real-Valued Genetic Algorithms-1771790096764.webp|263x204]]

This is a geometry-aware recombination. It preserves feasibility for box constraints.

![[Variation Operators in Real-Valued Genetic Algorithms-1771790148577.webp]]

