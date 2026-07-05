---
title: Simple Genetic Algorithm
tags:
  - ece457a
date: 2026-02-22
aliases:
  - simple genetic algorithm
  - SGA
---
The simple genetic algorithm is the canonical baseline [[Genetic Algorithms|genetic algorithm]]. It deliberately assumes:
- A single representation (often fixed-length strings)
- A single fitness function to rank candidates
- Standard crossover + mutation
- Selection with constant pressure
    - Fitness-proportional selection

## Algorithm
1. Initialize a population of candidate solutions, $P^{(0)}$.
2. Evaluate fitness $f(x)$ of each individual $x \in P^{(0)}$.
3. Define $t\leftarrow 0$.
4. Repeat until termination:
    - Select parents from $P^{(t)}$
    - Apply crossover to parents
    - Apply mutation to offspring
    - Evaluate $P^{(t+1)}$
    - $t\leftarrow t+1$

### Population initialization
Typical initialization strategies involve:
- Uniform random sampling
- Random but feasible (constraint-aware)
- Seeding with heuristic solutions.

Initialization affects early diversity, convergence speed, and risk of bias.

### Fitness function
Fitness is the only feedback the algorithm receives. It can represent objective value, penalize value, or a ranking/dominance score. The key requirement is that fitness must be comparable across individuals.

### Parent selection vs. survivor selection
There are two distinct solutions in SGA:
- Parent solution: who reproduces? This control the selection pressure
- Survivor solution: who remains? This controls the diversity retention

### Termination criteria
Typical termination conditions:
- Maximum number of generations
- Maximum number of fitness evaluations
- Convergence of population
- Target fitness reached

Note that termination does not imply optimality!

## Example

![[sga-example.pdf]]