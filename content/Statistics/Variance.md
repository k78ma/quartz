---
title: Variance
tags:
  - stats
date: 2024-03-27
aliases:
  - variance
---
In intuitive terms, variance is a measure of the spreading of the data set from its mean. The variance of a data set can be found with:
$$
\sigma^{2}=\frac{1}{N}\sum_{n=1}^{N}(x_{n}-\mu)^{2}
$$
The [[Standard Deviation]] is the square root of the mean.

The variance of $f(x)$ is defined by
$$
\text{var}[f] = E\left[(f(x)-E[f(x)])^{2}\right]
$$
and provides a measure of how much $f(x)$ varies around its mean value $E[f(x)].$ 

Expanding out the square, we see that the variance can also be written in terms of the expectations of $f(x)$ and $f(x)^{2}$:
$$
\text{var}[f]=E[f(x^{2})] - E[f(x)]^{2}
$$
In particular, we can consider the variance of the variable itself, which is given by:
$$
\text{var}[x]=E[x^{2}]-E[x]^{2}
$$

#cards/stats
Variance simplified formula::$\text{var}[x]=E[x^{2}]-E[x]^{2}$
<!--SR:!fsrs,2026-11-17T04:59:24.570Z,26,26.42951346,1,2,3,0,0,2026-10-22T04:59:24.570Z-->

Variance definition
?
- Expected value of the squared difference between $X$ and the expected value of $X$.
$$
\text{Var[X]}=E[(X-E[X])^{2}]
$$
- Characterizes how far the values of $X$ are from $E[X]$, on average. (Kind of like a mean squared loss)
<!--SR:!fsrs,2026-11-11T04:59:45.041Z,20,19.90574281,2.1043314,2,3,0,0,2026-10-22T04:59:45.041Z-->
+++

