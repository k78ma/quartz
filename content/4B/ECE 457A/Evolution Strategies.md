---
title: Evolution Strategies
tags:
  - ece457a
date: 2026-04-09
aliases:
  - evolution strategies
  - ES
---
Evolution strategies do not only evolve solutions, but also how solutions are varied. They are a mutation-driven search for real-valued/continuous optimization problems, using Gaussian perturbation and deterministic selection, with strong theoretical foundations.

There are two evolution "levels".
- Solution evolution: Candidate solutions $x \in \mathbb{R}^{n}$ that represent problem variables are mutated to explore new regions, and selected based on fitness $F(x)$.
- Strategy evolution: A mutation strength $\sigma$ that controls the search step size, determining exploration vs. exploitation, is also mutated and selected.

Thus, an individual in ES comprises of both the candidate and the mutation strength, such that we have $\langle x,\sigma \rangle$ or $\langle x_{1},\dots,x_{n}, \sigma_{1}, \dots, \sigma_{n} \rangle$.

Comparing to other search strategies:

![[Evolution Strategies-1775753246595.webp]]

## Formulation
**Problem setting:** Black-box optimization in $\mathbb{R}^{n}$ without gradient information.

**Search model:**
$$
x_{k} \sim \mathcal{N}(m, \sigma^{2}C)
$$
- $m \in \mathbb{R}^{n}$ is the current search mean (center of sampling)
- $\sigma>0$ is the global step size (overall exploration scale)
- $C\in \mathbb{R}^{n\times n}$ is the covariance (shape + directions)

**Selection mechanism:** 
$$
(\mu, \lambda) \quad \text{or} \quad (\mu+\lambda)
$$
Deterministic truncation of the best individuals (rank-based.)

![[Evolution Strategies-1775752864618.webp|344]]

### Selection Mechanisms
- See [[ES Selection Strategies]]
