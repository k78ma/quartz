---
title: Covariance Matrix Adaptation ES
tags:
  - ece457a
date: 2026-04-09
aliases:
  - covariance matrix adaptation es
  - CMA-ES
---
We saw that there are several ways to do [[ES Gaussian Mutation]]: single global step, uncorrelated, and correlated. We can generalize this into just saying:
$$
x_{k} \sim \mathcal{N}(m,\sigma^{2}C)
$$
where:
- mean $m \in \mathbb{R}^{n}$ is the current search mean
- $\sigma>0$ is the global step size
- $C \in \mathbb{R}^{n\times n}$ is the covariance matrix that defines the shape and orientation of the search distribution

In 2 dimensions:
$$
C = BD^{2}B^{T}
$$
where
$$
D = \begin{pmatrix}
\sigma_{1} & 0 \\
0 & \sigma_{2}
\end{pmatrix}, \quad  B = \begin{pmatrix}
\cos \alpha & -\sin \alpha \\
\sin \alpha & \cos \alpha
\end{pmatrix}
$$


Recall that in classical correlated ES the chromosome was:
$$
\langle x_{1}, x_{2}, \sigma_{1}, \sigma_{2}, \alpha \rangle 
$$
CMA-ES replaces explicit parameter mutation by **learning the covariance matrix $C$ directly**. 

$C$ is typically learned through evolution paths; after sampling $\lambda$ offspring, CMA-ES ranks them by fitness and keeps the best ones. Then:
- The mean $m$ is updated to move toward better samples
- The covariance matrix $C$ is updated to reinforce successful directions
- The global step size $\sigma$ is increased when progress suggests larger moves, and decreased when refinement is needed.

CMA-ES is considered state-of-the-art; it's much more principled than just correlated ES, because we are essentially still adaptively guessing in CMA-ES.