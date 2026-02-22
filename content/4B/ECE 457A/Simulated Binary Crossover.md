---
title: Simulated Binary Crossover
tags:
  - ece457a
date: 2026-02-22
aliases: simulated binary crossover
---
Simulated binary crossover emulates the effect of binary crossover in real-valued spaces. There is a high probability of small perturbations, and a low probability of large jumps, preserving locality while allowing exploration. This is controlled by a distribution parameter $\eta_{c}$.
- Larger $\eta_{c}$ means that offspring is closer to parents
- Smaller $\eta_{c}$ means more exploratory behavior

![[Variation Operators in Real-Valued Genetic Algorithms-1771790689214.webp]]

This is conceptually similar to [[Blend Crossover]] but not using a uniform distribution.