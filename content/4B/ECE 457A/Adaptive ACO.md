---
title: Adaptive ACO
tags:
  - ece457a
date: 2026-04-09
aliases: adaptive aco
---
Several approaches have been proposed to adapt the parameter values of ACO.

## ACSGA-TSP
In this method, ACS parameter values are optimized using a genetic algorithm. The idea is to have a GA running on top of the ACS to optimize its parameter values:
- $q_{0}$, the parameter determining whether greedy or probabilistic selection is adopted
- $r$, the local pheromone updating factor. (also written as $\xi$ in [[Ant Colony System|ACS]] notes?)
- $\beta$, the relative importance of the visibility heuristic

Each ant has its own set of ACS parameters, which is encoded by a 21-bit string. The chromomes are randomly initialized, and a simple crossover is used, along with simple bit-wise mutation. 

 The selection process is a bit more involved. The best 4 individuals of each generation are chosen, and ACS-TSP is run given the parameters encoded in each individual. Then the fitness of each individual is recorded. The global pheromone update is done by the ant producing the best tour. Then, further choose the 2 best individuals out of the 4, producing children by crossover and mutating them. The worst 2 individuals are then replaced with the 2 children.

Experimental results:

![[Adaptive ACO-1775709560511.webp]]


## Near Parameter Free ACS
Another option is to adapt the parameters using the same approach for optimizing the problem in hand. The parameters in question are $q_{0}, r, \alpha, \beta$.

Each ant is allowed to select suitable values of its parameters, and select the next solution component. Each ants own parameter values are then adaptively selected using an ant approach, where a separate ant pheromone matrix is kept for learning these values. No heuristic information is used.

Each parameter is given a suitable range, and the initial value of each parameter is in the middle of its range.

The pheromone matrix is defined such that for each parameter, the interval is discretized with step size $P$, dividing the interval into $w_{i}, i\in 1,\dots,p$. The parameter segment $w_{i}$is chosen using a transition rule based on pheromone values $v(i,j)$.

The actual value of each parameter is calculated as:
$$
\text{Value}_{i} = l_{i} + \frac{w_{i}}{p}(u_{i}-l_{i})
$$
where $l_{i}$ and $u_{i}$ are the lower and upper bounds of parameter $i$, and $w_{i}$ is the discretized division.

Experimental results:

![[Adaptive ACO-1775709808963.webp]]

