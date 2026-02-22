---
title: Variation Operators for Genetic Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases:
  - variation operators for genetic algorithms
  - crossover
  - mutation
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

### One-Point Crossover
We choose a crossover point $k$, then exchange segments after $k$:

![[Variation Operators for Genetic Algorithms-1771785777106.webp|303x223]]

This preserves contiguous blocks and their parental origin.

### N-Point Crossover
We choose $n$ crossover points, and alternate segments between parents:

![[Variation Operators for Genetic Algorithms-1771785841637.webp|296x190]]

This has more mixing than one-point crossover, leading to greater disruption of building blocks. This improves exploration but fragments parental structure.

### Uniform Crossover
We flip a coin for each gene and then select the gene from either parent based on the result.

![[Variation Operators for Genetic Algorithms-1771786002640.webp|291x177]]

This maximizes mixing, but ignores positional structure.
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
