---
title: Differential Evolution
tags:
  - ece457a
date: 2026-04-10
aliases:
  - differential evolution
  - DE
---
Traditional population-based metaheuristics use random mutation and choose step sizes externally. The direction is also not explicitly modeled. Differential evolution uses differences between individuals to extract direction and scale from the population, generating solutions using this internal structure. Thus, instead of data variation, we use data-driven direction search.

GA recombines parent material, while DE constructs a directional perturbation using population differences. Thus, DE is more geometric than classical GA, and tends to be better suited for real-valued continuous optimization. ES uses Gaussian mutation with self-adaptation and step-size control; CMA-ES goes further by learning covariance structure. DE is simpler, with no explicit covariance matrix and no Gaussian assumption, uses pairwise population differences directly.

## Walkthrough

![[Differential Evolution-1775874168120.webp]]


We maintain a population of candidate solutions:
$$
x_{i}\in  \mathbb{R}^{d}, \quad  i=1, \dots, N
$$
- each $x_{i}$ is a point in the search space
- the population evolves over iterations

Then, we aim to improve each $x_{i}$ using information from other solutions.

### Step 1: Generating a direction and mutation
 We pick three distinct solutions:
$$
x_{r_{1}}, x_{r_{2}}, x_{r_{3}}
$$
and form a direction vector:
$$
x_{r_{2}} - x_{r_{3}}
$$
We can then construct a new candidate:
$$
v_{i} = x_{r_{1}} + F(x_{r_{2}}-x_{r_{3}})
$$
where $F>0$ is a scaling factor.

### Step 2: Crossover
We now combine the original solution $x_{i}$ with the proposal $v_{i}$. For exach component $j=1,\dots, d$:
$$
u_{i,j} = \begin{cases}
v_{i,j} & \text{with probability } CR \\
x_{i,j} & \text{otherwise}
\end{cases}
$$

### Step 3: Selection
We then compare the trial vector $u_{i}$ with the current solution $x_{i}$:
$$
x_{i} \leftarrow \begin{cases}
u_{i} & \text{if } f(u_{i}) \leq f(x_{i}) \\
x_{i} & \text{otherwise}
\end{cases}
$$

Note: DE can generate infeasible trial vectors, so we often enforce some constraints like clipping to bounds.
## Characteristics
In DE, the step size comes from the population spread, and the direction comes from population differences. This leads to automatic scaling, and adaptive exploration vs. exploitation. And don't have to deal with estimating gradients, covariance, or moving randomly.

The idea is that at any stage of the search, the population has a center and a spread. If two solutions are far apart, their difference $x_{a}-x_{b}$ encodes the scale, orientation, and diversity. 


## DE Strategies
The general notation for these strategy names is DE/base/num/cross.
- Base: where the mutation starts
- Num: how many difference vectors are used
- Cross: how recombination is done

### DE/rand/1/bin
This is the canonical form we saw before, using random base vectors, with 1 difference vector, and binomial crossover. The mutation is:
$$
v_{i} = x_{r_{1}} + F(x_{r_{2}}-x_{r_{3}})
$$
Then, crossover builds $u_{i}$, and selection compares $u_{i}$ with $x_{i}$.

### DE/best/1/bin
Now the mutation is given by:
$$
v_{i} = x_{\text{best}} + F(x_{r_{1}}-x_{r_{2}})
$$
such that the current best individual anchors the mutation. This gives faster convergence and stronger exploitation, but diversity may collapses sooner, with premature convergence being likely.

### DE/current-to-best/1
Another common strategy is:
$$
v_{i} = x_{i}+F(x_{\text{best}}-x_{i}) + F(x_{r_{1}}-x_{r_{2}})
$$
This combines attraction toward the current best, and a differential perturbation for diversity. Essentially, one term pulls toward exploitation, while another term injects exploratory motion.

## Parameters

![[Differential Evolution-1775873565049.webp]]

### Scale factor
The scale factor $F$ controls the magnitude of differential mutation. If $F$ is small, we move cautiously, resulting in fine local search at the risk of stagnation. If $F$ is large, we take bold jumps, with stronger exploration, but at the risk of overshooting. Typically, we set $F\in [0.4,0.9]$.

### Crossover rate
$CR$ controls how much of the mutant enters the trial candidate. If CR is low, only a few components come from the mutant, preserving more of $x_{i}$; this results in conservative search. If CR is high, more mutant components survive, so search is more disruptive and exploration is stronger. Typically, we set $CR \in [0.1,0.9]$.

### Population size
Population size affects diversity, the sampling of difference directions, and computational cost. If $N$ is too large, we need to do a lot of evaluations, resulting in slower iteration and possibly redundant sampling. If $N$ is too small, we get weak diversity, poor directional information, and early stagnation. Rule of thumb: $N \approx 5d-10d$.

## Cost
For each generation, each target vector $x_{i}$ produces one trial $u_{i}$. Each trial requires one function evaluation. Thus, the total evaluations per generation is $N$.

Objective evaluation is often the dominant cost; DE adds minimal overhead beyond evaluation. This is one of the upsides of DE; we are essentially trading sophistication for sampling efficiency.

## Examples

> [!example]- Small Numerical Example
> ![[Differential Evolution-1775873207937.webp]]

> [!example]- Full DE Step Example
> ![[Differential Evolution-1775873236559.webp]]
> 
> ![[Differential Evolution-1775873245209.webp]]
> 
> ![[Differential Evolution-1775873260586.webp]]
> 
> ![[Differential Evolution-1775873268828.webp]]
> 
> ![[Differential Evolution-1775873277917.webp]]
> 
> ![[Differential Evolution-1775873285009.webp]]
> 
> ![[Differential Evolution-1775873291059.webp]]
> 
> ![[Differential Evolution-1775873296897.webp]]
> 
> ![[Differential Evolution-1775873310021.webp]]


