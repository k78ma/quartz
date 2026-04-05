---
title: Ant Colony System
tags:
  - ece457a
date: 2026-04-03
aliases: ant colony system
---
ACS is a stronger variant of ant colony optimization, introducing two key modifications over [[Ant System|AS]].

First, a **pseudo-random proportional rule**. When picking the next move, we pick the next best edge with probability $q_{0}$, encouraging exploration. Otherwise, we sample by probabilities (exploration).

Second, a **local pheromone update** during construction:
$$
\tau_{ij} \leftarrow (1-\xi)\tau_{ij} + \xi \tau_{0}
$$
which temporarily reduces the attractiveness of recently used edges. Note that this is during construction, as the ants walk! In AS, the pheromones do not change while the ants walk, only updating after tours finish.

ACS also uses a global update, but it is used on the best-so-far tour only:
$$
\tau_{ij} \leftarrow (1-\rho)\tau_{ij} + \Delta \tau_{ij}^{ \text{best}}
$$

![[Ant Colony System-1775240546747.webp]]

![[Ant Colony System-1775240558062.webp]]

![[Ant Colony System-1775413578828.webp]]