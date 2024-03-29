---
title: Gaussian Distribution
tags:
  - stats
date: 2024-03-28
aliases:
  - Gaussian
  - normal distribution
---
For a single real-valued variable $x$, the Gaussian distribution is given by
$$
N(x|\mu, \sigma^{2})= \frac{1}{(2\pi \sigma^{2})^{1/2}}\exp \left\{  -\frac{1}{2\sigma^{2}}(x-\mu)^{2}  \right\}
$$
which is a [[Probability Density Function|probability density]] over $x$ governed by:
- $\mu$, the mean
- $\sigma^{2}$, the [[variance]]

The square root of variance, $\sigma$, is the *standard deviation*. The reciprocal of the variance, $\beta = 1 / \sigma^{2}$, is called the *precision*.

The Gaussian distribution satisfies:
$$
N(x|\mu, \sigma^{2})>0
$$
It's also normalized:
$$
\int_{-\infty}^{\infty} N(x|\mu, \sigma^{2})  \, dx =1
$$
This means it satisfies the two requirements of a valid probability density.