---
title: Premature Convergence and Deception for GA
tags:
  - ece457a
date: 2026-02-22
aliases: premature convergence and deception for ga
---
## Premature Convergence
In [[Genetic Algorithms|genetic algorithms]], premature convergence is defined as the population losing diversity too early such that the search collapses into a suboptimal region.

Symptoms:
- Many identical or near-identical individuals
- No fitness improvement despite crossover and mutation

Common causes:
- Excessive selection pressure
- Small population size
- Strong elitism

## Deception
A problem is deceptive when partial patterns look beneficial, but assembling them steers search away from the global optimum.

![[Premature Convergence and Deception for GA-1771788422160.webp|411x284]]

Selection amplifies locally attractive structure, but reducing diversity makes it harder to escape the trap.

For example, consider this 3-bit deceptive trap:
- Let $u$ = number of ones in a 3-bit block. 
- Define:
$$
f(u)=\begin{cases}
4,  & u=0  &  \text{(000 is global)} \\
u,  & u\in  \{ 1,2,3 \} & \text{(more 1s looks better)}
\end{cases}
$$
Then, consider the fitness by the number of $1$s:

![[Premature Convergence and Deception for GA-1771788562188.webp|318x193]]

![[Premature Convergence and Deception for GA-1771788581122.webp|347x273]]

Selection favors increasing $u$, but the global optimum is at $u=0$.