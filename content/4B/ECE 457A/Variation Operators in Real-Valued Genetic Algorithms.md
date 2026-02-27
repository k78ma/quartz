---
title: Variation Operators in Real-Valued Genetic Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases:
  - variation operators in real-valued genetic algorithms
  - arithmetic crossover
  - BLX
  - SBX
---
For real-valued genetic algorithms, we need crossover and mutation operators that directly operate on real-valued chromosomes. 

## Crossover
Methods:
- [[Arithmetic Crossover]]
- [[Blend Crossover]]
- [[Simulated Binary Crossover]]

## Mutation
Mutation acts on a single parent at a time. Given a parent $\mathbf{x}$, mutation samples:
$$
x' = x+\epsilon
$$
where $\epsilon$ is a random perturbation.

### Gaussian Mutation
A Gaussian mutation is a standard operator for real-valued chromosomes. For each gene:
$$
x_{i}'=x_{i}+\epsilon, \quad  \epsilon \sim \mathcal{N}(0, \sigma^{2})
$$
This is centered around the parent value $x_{i}$, with mostly small mutations and occasional larger steps. The $\sigma$ parameter sets the mutation strength.

![[Variation Operators in Real-Valued Genetic Algorithms-1771790925878.webp]]

### Adaptive Gaussian Mutation
Mutation strength can be changed over generations, while the mutation distribution remains Gaussian.

At generation $g$:
$$
x_{i}'=x_{i}+\epsilon_{i}(g), \quad  \epsilon_{i}(g)\sim \mathcal{N}(0, \sigma(g)^{2})
$$
We use large $\sigma(g)$ early for strong exploration, then small $\sigma(g)$ later for finer exploration.

### Boundary Handling
Real-valued mutation can produce infeasible values outside of our constraints:
$$
x_{i}<x_{i}^{\text{min}} \quad \text{or} \quad x_{i} > x_{i}^{\text{max}}
$$
This is common when mutation strength $\sigma$ is large (early generations). We can use the same strategies as covered in [[Real-Valued Genetic Algorithms#Constraints in Real-Valued GA]]: clipping, reflection, resampling.

### Mutation Strength vs. Convergence
If we have $\sigma$ too large, we will have random walk behavior with poor convergence. If it is too small, we will converge prematurely due to loss of diversity.

Note that some variables require finer perturbations than others!