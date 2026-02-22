---
title: Steady-State Genetic Algorithm
tags:
  - ece457a
date: 2026-02-22
aliases:
  - steady-state genetic algorithm
  - SSGA
---
Steady-state GA is an alternative evolutionary model where population replacement is incremental rather than [[Generational Genetic Algorithm|generational]]. The core idea is that evolution proceeds continuously, not in full generations. Only a small number of individuals are replaced at each step, and high-fitness individuals may persist for many iterations.

This is called "steady-state" because the population remains in near-steady configuration, with only small changes at each iteration instead of full replacement.

![[Steady-State Genetic Algorithm-1771784156278.webp]]
