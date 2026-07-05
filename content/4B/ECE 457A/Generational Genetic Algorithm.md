---
title: Generational Genetic Algorithm
tags:
  - ece457a
date: 2026-02-22
aliases: generational genetic algorithm
---
In a generational genetic algorithm, at each generation, the **entire population** is replaced by offspring produced via selection, crossover, and mutation.

Basically, evolution proceeds in discrete generations, such that parents are discarded after producing offspring; the new generation is componsed entirely of new individuals.

We can consider the [[Simple Genetic Algorithm]] to be a specific instantiation of a generational GA; it assumes fixed-length encoding, fitness-proportional selection, standard crossover, mutation, and full replacement. Thus, GGA is a broader class than SGA.

![[Steady-State Genetic Algorithm-1771784156278.webp]]