---
title: One-Point Crossover
tags:
  - ece457a
date: 2026-02-22
aliases: one-point crossover
---
One-point crossover is a simple crossover/recombination method for binary-representation genetic algorithms. We choose a crossover point $k$, then exchange segments after $k$:

![[Variation Operators for Genetic Algorithms-1771785777106.webp|303x223]]

This preserves contiguous blocks and their parental origin.