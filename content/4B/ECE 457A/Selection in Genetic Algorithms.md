---
title: Selection in Genetic Algorithms
tags:
  - ece457a
date: 2026-02-22
aliases: selection in genetic algorithms
---
Selection is the only force in a genetic algorithm that directly biases the search toward quality. Variation operators like [[Variation Operators for Binary Genetic Algorithms|crossover]] and [[Variation Operators for Binary Genetic Algorithms|mutation]] just propose solutions. Thus, selection plays a large part in determining the convergence speed, and can destroy diversity if misused.

## Selection pressure
Selection pressure describes how strongly better individuals are favored during reproduction.
- Low selection pressure: Slower convergence, better exploration/diversity, more robust to local optima
- High selection pressure: Fast convergence, diversity collapses quickly, higher risk of premature convergence

Below, each curve represents the population fitness distribution before and after selection under different selection pressures:

![[Selection in Genetic Algorithms-1771787133093.webp|320x284]]


## Parent Selection
Parent selection controls who reproduces.
### Fitness-Proportionate Selection (FPS)
In FPS, an individual $i$ is selected with probability
$$
p_{i}= \frac{f_{i}}{\sum_{j}f_{j}}
$$
This ties selection pressure directly to fitness magnitude.

![[Selection in Genetic Algorithms-1771787260862.webp|0x0]]

- Advantages: Simple, intuitive, works well early in search
- Weakness: Highly sensitive to scaling, dominant individuals can take over, weak pressure late in search

![[Selection in Genetic Algorithms-1771787326350.webp]]

FPS also faces the function transposition problem. Two fitness distributions where the values are shifted by the same constant produce drastically different probabilities.

![[Selection in Genetic Algorithms-1771787392208.webp]]

### Rank-Based Selection
Rank-based selection instead assigns selection probabilities based on relative ordering, not raw fitness values. This makes it scale and translation invariant, making the selection pressure more stable throughout the search. However, we incur the overhead cost of sorting, although this is usually negligible.

### Tournament Selection
Tournament selection implements the above rank-based idea but makes it cheaper by choosing parents from a smaller subset of individuals rather than the entire population.

Procedure:
- Randomly select $k$ individuals from the population
- Choose the best individual among them
- Repeat to select parents

This selection still depends on relative ranking, not fitness magnitude. We can also control the selection pressure by changing the tournament size $k$. This gives us a simple, explicit pressure knob to work with.
- $k=1$: Random selection (no pressure)
- $k=2$: Mild pressure
- Large $k$: Aggressive selection

![[Selection in Genetic Algorithms-1771787612773.webp]]


![[Selection in Genetic Algorithms-1771787685580.webp]]

## Survivor Selection
Survivor selection determines who enters the next generation (who stays in $P_{t+1}$).

Common strategies:
- Replace worst
- Replace random
- Age-based replacement

![[Selection in Genetic Algorithms-1771787965572.webp]]

### Elitism
Elitism guarantees the preservation of the best solution so far. This has the benefit of preventing loss of the current best and stabilizes progress. However, it risks increased effective selection pressure, and can freeze population structure.

![[Selection in Genetic Algorithms-1771788088321.webp]]
