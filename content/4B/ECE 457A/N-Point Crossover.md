---
title: N-Point Crossover
tags:
  - ece457a
date: 2026-02-22
aliases: n-point crossover
---
One-point crossover is a simple crossover/recombination method for binary-representation genetic algorithms. We choose $n$ crossover points, and alternate segments between parents:

![[Variation Operators for Genetic Algorithms-1771785841637.webp|296x190]]

This has more mixing than one-point crossover, leading to greater disruption of building blocks. This improves exploration but fragments parental structure.