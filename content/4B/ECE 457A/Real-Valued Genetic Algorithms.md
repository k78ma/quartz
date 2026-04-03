---
title: Real-Valued Genetic Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases: real-valued genetic algorithms
---
Many optimization problems are inherently continuous, where $x \in \mathbb{R}^{n}$. In such problems, binary encoding introduces artificial discretization of a continuous space, and long chromosomes are needed to achieve acceptable precision. With real-valued GA, we can work directly in the problem's native space.

Note that with real-valued genetic algorithms, we no longer have to do encoding, so the genotype = phenotype. We can represent a solution directly as a real-valued vector, where each gene corresponds to a real-valued problem variable.
- Example: Tuning controller gains

Real-valued genetic algorithms are particularly effective when:
- Objective function is continuous
- Gradient information is unavailable
- Search space is multimodal, noisy, or rugged
- Global exploration is more important than local optimality

![[Real-Valued Genetic Algorithms-1771789521283.webp|423x249]]

![[Real-Valued Genetic Algorithms-1771789621397.webp]]

Note that our [[Variation Operators for Binary Genetic Algorithms|variation operators for binary genetic algorithms]] no longer work, as we can't do things like bit-level crossover. Thus, we turn to [[Variation Operators for Real-Valued Genetic Algorithms|variation operators for real-valued genetic algorithms]].

## Constraints in Real-Valued GA
Most real-valued optimization problems impose box contraints:
$$
x_{i}^{\text{min}} \leq x_{i}\leq x_{i}^{\text{max}}
$$
After mutation or crossover, variables may violate these bounds. Thus, we need some constraint-handling strategies:
- Repair (clipping): Force values back to nearest bound
- Reflection: Mirror excess back into feasible region
- Rejection & resampling: Discard and withdraw offspring

![[Real-Valued Genetic Algorithms-1771789928899.webp]]


## Example

![[real-ga-example.pdf]]