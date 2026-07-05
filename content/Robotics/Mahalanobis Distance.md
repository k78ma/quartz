---
title: Mahalanobis Distance
tags: 
date: 2024-03-03
aliases:
---
Mahalanobis distance measures the distance between a point and a distribution. It takes into account the correlations of the data set and is scale-invariant.

Defined as:
$$
D^{2}=(x-\mu)^{T}S^{-1}(x-\mu)
$$
where:
- $x$ is a vector of the point whose distance from the distribution is being measured
- $\mu$ is the mean vector of the distribution
- $S$ is the covariance matrix of the distribution
- $S^{-1}$ is the inverse of the covariance matrix