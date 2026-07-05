---
title: Variation Operators for Binary Genetic Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases: variation operators for binary genetic algorithms
---
Variation operators generate new candidate solutions. Their role is to balance new competing objectives: exploration (discover new regions of the search space) and exploitation (refine and recombine good solutions).

## Crossover
Crossover aims to recombine information from multiple parents. This exploits existing building blocks, enabling structured exploration.

For example, we can combine genetic material from two parents:
$$
\text{Offspring} = \text{Recombination}(\text{parent}_{1}, \text{parent}_{2})
$$
The intuition is that good solutions often share useful building blocks. These blocks correspond to partial patterns in the genotype. Recombining blocks may yield to better solutions.

A simple intuition if we consider something like this: 
$$
\text{parent}_{1}=110\;101\; 00, \quad \text{parent}_{2}=001\;101\; 11
$$
These two share a $101$ block. Crossover would aim to preserve this shared structure while exploring new combinations.

### Crossover probability
We can choose to not crossover some parent pairs and instead simply pass them onto the next generation. Crossover probability $p_{c}$ is applied independently to each parent pair.

For every parent pair chosen for reproduction:
- Draw a random number $u \sim \mathcal{U}(0,1)$
- If $u \leq p_{c}$: apply crossover
- If $u>p_{c}$: copy parents unchanged

![[Variation Operators for Genetic Algorithms-1771786392225.webp|482x266]]

### Crossover Methods
- [[One-Point Crossover]]
- [[N-Point Crossover]]
- [[Uniform Crossover]]

## Mutation
Mutation introduces random variation, maintaining diversity. This allows escape from local optima.
### Mutation probability
Like crossover probability, for each gene in each offspring:
- Draw a random number $u \sim \mathcal{U}(0,1)$
- If $u\leq p_{m}$: mutate the gene
- If $u>p_{m}$: leave the gene unchanged

Typically, $p_{m} \approx \frac{1}{L}$, where $L$ is the chromosome length. Thus, on average, one bit mutates per chromosome, preserving most structure.

If $p_{m}$ is too low, diversity collapses, and population stagnates. This may cause premature convergence to local optima.

If $p_{m}$ is too high, the genetic algorithm drifts toward random search. Building blocks are destroyed, such that selection cannot accumulate strucutre.

### Bit-Flip Mutation
With a binary representation, we can simply do bit flips for mutation:

![[Variation Operators for Genetic Algorithms-1771786723685.webp|392x224]]
