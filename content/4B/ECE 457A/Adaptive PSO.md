---
title: Adaptive PSO
tags:
  - ece457a
date: 2026-04-09
aliases: adaptive pso
---
## TRIBES
TRIBES is an adaptive parameter-free PSO method. Its purpose is to remove the need for parameter setting, with the main focus being adapting the number of particles used in the search.

A tribe refers to a group of connected particles; all tribes should have some type of connection between them to inform one another of their findings. This will help in deciding which is the global minimum among all the different solutions that were found by different tribes.

![[Adaptive PSO-1775768812505.webp|436]]

A "good" particle is a particle that has improved its $\text{pbest}$ in the last iteration. Otherwise, it's neutral. Each particle memorizes the last two performance variations; if both variations were improving, it is an "excellent" particle. The number of good particles in a tribe is called $G$.

Then, a tribe is marked as good depending on the value of $G$. If the total number of particles in a tribe is $T$:
$$
\begin{align}
r  & = U(0,1)\\[2ex] 
\text{Tribe} & = \begin{cases}
\text{Good} & r < \frac{G}{T} \\
\text{Bad} & \text{otherwise}
\end{cases}
\end{align}
$$
A good tribe deletes its worst particle to conserve the number of performed function evaluations.

![[Adaptive PSO-1775768980836.webp]]

On the other hand, every bad tribe generates a new random particle simultaneously. All the new particles form a new tribe. Each particle gets connected to the tribe that generated it through its best particle.

### Intuition
The idea is to start with a single particle. Most likely, this particle won ’t improve in the first iteration. Hence, it will generate another particle forming another tribe. If both don’t improve, they will simultaneously generate two other particles forming a third two-particle tribe, and the process continues.

If things go bad, larger and larger tribes will be generated to increase the swarm search power. On the other hand, if good solutions start to occur, good tribes will start removing its worst particles reducing the tribes size possibly to complete extinction.