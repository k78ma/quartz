---
title: Multivariate Normal Distribution
tags:
  - state-estimation
  - stats
date: 2024-11-25
aliases:
  - multivariate normal distribution
---
Recall that the univariate normal distribution is described by the function
$$
p(x|\mu,\sigma)=\frac{1}{\sqrt{ 2\pi \sigma^{2} }}\exp\left( -\frac{(x-\mu)^{2}}{2\sigma^{2}} \right)
$$
The multivariate normal distribution is a generalization of the univariate normal distribution for a multidimensional random variable:
$$
p(\mathbf{x}|\mathbf{\mu, \Sigma})=\frac{1}{\sqrt{ (2\pi)^{n} | \mathbf{\Sigma} | }}\exp\left( -\frac{1}{2}(\mathbf{x}-\mathbf{\mu})^{T} \mathbf{\Sigma}^{-1}(\mathbf{x-\mu}) \right)
$$
where:
- $\mathbf{x}$ is an $n$-dimensional random vector
- $\mu$ is an $n$-dimensional mean vector
- $\mathbf{\Sigma}$ is a square $n\times n$ covariance matrix

## Bivariate Distribution

![[Multivariate Normal Distribution.png|600]]

The projection of the 3-dimensional Gaussian slice is an ellipse.

![[Multivariate Normal Distribution-1.png|644]]