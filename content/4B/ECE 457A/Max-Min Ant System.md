---
title: Max-Min Ant System
tags:
  - ece457a
date: 2026-04-03
aliases: max-min ant system
---
In MMAS, only the best ant deposits pheromone (iteration-best or best-so-far). Furthermore, we enforce bounds to prevent premature lock-in/stagnation:

![[Max-Min Ant System-1775240867534.webp|422]]

Typical updates:
$$
\begin{align}
\tau_{ij}  & \leftarrow (1-\rho)\tau_{ij} + \Delta \tau_{ij}^{\text{best}} \\[2ex] 
\tau_{ij} & \leftarrow \text{min}(\tau_{\text{max}}, \text{max}(\tau_{\text{min}}, \tau_{ij}))
\end{align}
$$
This lets us explicitly control stagnation and maintain exploration.