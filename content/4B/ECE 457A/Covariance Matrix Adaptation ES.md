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
- $C \in \mathbb{R}^{n\times n}$ is the covariance matrix that defines the shape and orientation of the search dist