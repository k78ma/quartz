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
CMA-ES replaces explicit parameter mutation by learning the covariance matrix $C$ directly. $C$ is typically learned through evolution paths; after sampling $\lambda$ offspring, CMA-ES ranks them by fitness and keeps the best ones. They are converted into normalized successful steps $y_{i:\lambda}=\frac{x_{i:\lambda}-m}{\sigma}$, where $x_{i:\lambda}$ is the $i$-th best offspring among the $\lambda$ samples. These vectors tell us which directions produced good solutions. CMA-ES then updates C so that future samples are more likely to point in those directions. A simple mental model is:
$$
C \approx \text{number of successful steps}
$$