---
title: Adaptive Differential Evolution
tags:
  - ece457a
date: 2026-04-10
aliases: adaptive differential evolution
---
[[Differential Evolution|DE]] is powerful but not parameter-free or failure-proof. Many successful variants adapt parameters automatically: scale factor $F$, combination rate $CR$, strategy choice, etc.

Adaptation allows us to use the best behavior at a given time: early on, we need to explore; later on, we need to be more precise and exploit.

## jDE
The key idea of jDE is that each individual carries its own parameters. Each solution $x_{i}$ is associated with $F_{i}, CR_{i}$. These parameters evolve together with the solution.

Typically, we occasionally update $F_{i},CR_{i}$ randomly, and then keep successful values. This lets good parameter settings survive naturally.

## JADE
In this method, we use past steps to guide future search. Specifically, we use current-to-best mutation and keep an archive of past solutions.

We update $F$ and $CR$ based on successful trials, so that we bias toward effective parameter values. This reinforces good search directions and reduces wasted exploration. Search become experience driven.

## SHADE
In SHADE, we store successful parameter values $F$ and $CR$ in memory. New parameters are sampled from this memory.

The sampling becomes increasingly informed, and this stabilizes parameter selection, avoiding random fluctuations. The learning is accumulated over time.

##  L-SHADE
In L-SHADE, we follow the above SHADE method, but reduce the population size during the search. In early stages, a large population enables exploration; later on, a smaller population enables refinement.

The effect of this is faster convergence and better resource allocation.
