---
title: Cooperative PSO
tags:
  - ece457a
date: 2026-04-09
aliases: cooperative pso
---
## Concurrent PSO
One form of a multi-swarm algorithm is concurrent PSO.

Two different swarms are updated in parallel, both using different algorithms. The swarms exchange their global best values every pre-determined number of iterations, with both tracking the better $\text{gbest}$.

![[Cooperative PSO-1775769393485.webp|449]]

## Cooperative PSO
CPSO applies the same concept as cooperative GA, having multiple swarms where the fitness of any particle in any swarm depends on the particles of the other swarms.

The general idea is to have different swarms optimizing different variables of the problem (different dimensions of the solution). The fitness of any particle is determined by its value and the value of the best particles in all the other swarms. This performs best if the problem variables are independent.

![[Cooperative PSO-1775769468184.webp|449]]

## Hybrid Cooperative PSO
In this method, two swarms are serially updated; one with a normal PSO algorithm and one using CPSO. 

Each swarm is updated for one iteration only. When the PSO swarm gets updated, its $\text{gbest}$ value is sent to the CPSO swarm. The CPSO swarm uses the elements of the received $\text{gbest}$ to update random particles of its sub-swarms. After CPSO gets updated, it sends its context vector back to the PSO swarm, and the PSO swarm uses the received context vector to replace a randomly chosen particle.

![[Cooperative PSO-1775769598846.webp|430]]

![[Cooperative PSO-1775769604795.webp|433]]

![[Cooperative PSO-1775769609438.webp|435]]

![[Cooperative PSO-1775769613224.webp|436]]

![[Cooperative PSO-1775769619511.webp|439]]

![[Cooperative PSO-1775769625137.webp|444]]
