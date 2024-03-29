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

The maximum of a distribution is known as its *mode* – for a Gaussian, the mode and the mean are the same.

### Mean and Variance
The average value of $x$ is given by:
$$
E[x]=\int_{-\infty}^{\infty} N(x|\mu, \sigma^{2})x \, dx  = \mu
$$
The integral above is referred to as the *first-order moment* of the distribution, because it's the expectation of $x$ raised to the power one. We can find the second-order with:
$$
E[x^{2}]=\int_{-\infty}^{\infty} N(x|\mu, \sigma^{2})x^{2} \, dx=\mu^{2}+\sigma^{2} 
$$
Thus, we have:
$$
\begin{align}
\text{var}[x]  & = E[x^{2}]-E[x]^{2} \\
	 & =(\mu^{2}+\sigma^{2})-\mu^{2} \\
	 & = \sigma^{2}
\end{align}
$$
