---
title: Sigmoid
tags:
  - ml
date: 2023-10-29
aliases:
  - sigmoid
---
The sigmoid function is defined as:
$$
\sigma(z) = \frac{1}{1+e^{-z}}
$$
Its output for any value of $z$ is in $(0,1)$, such that:
- $\sigma(0) = 0.5$
- $0 < \sigma(z) < 0.5$ for negative values of $z$
- $0.5 < \sigma(z) < 1$ for positive values of $z$

Its output can be interpreted as a probability or confidence.

This can be plotted as:
![[Pasted image 20231029131826.png|480]]

