---
title: Variance
tags:
  - stats
date: 2024-03-27
aliases:
---
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
