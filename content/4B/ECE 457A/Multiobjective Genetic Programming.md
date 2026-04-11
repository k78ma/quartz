---
title: Multiobjective Genetic Programming
tags:
  - ece457a
date: 2026-04-10
aliases: multiobjective genetic programming
---
In practice, good programs are rarely judged by only one criterion. Then, GP can become a multiobjective problem:
$$
\text{min}(f_{1}(T), f_{2}(T), \dots, f_{k}(T))
$$
For example:
$$
\text{min}(\text{error}(T), \text{size}(T))
$$
Thus, multiobjective GP does not seek one best solution; instead, it seeks a **pareto set**.

We say that a solution $T_{1}$ dominates $T_{2}$ if $T_{1}$ is no worse in every objective, and is strictly better in at least one objective.
- $T_{c}$ is dominated by $T_{A}$ because they have the same error but $T_{A}$ is smaller. $T_{A}$ and $T_{B}$ reflect a real trade-off.

![[Multiobjective Genetic Programming-1775868010802.webp|351]]

Practically, the final choice depends on what we care about.