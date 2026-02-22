---
title: Blend Crossover
tags:
  - ece457a
date: 2026-02-22
aliases: blend crossover
---
BLX-$\alpha$ crossover constructs a uniform sampling interval from the parents based on the distance between them and a parameter $\alpha$.

We first compute a parent distance:
$$
d= \left| x_{i}^{(1)}-x_{i}^{(2)} \right| 
$$
Then the lower and upper ends of the sampling interval are constructed by:
$$
\begin{align}
L  & = \min(x_{i}^{(1)}, x_{i}^{(2)})-\alpha d \\
U  & = \max(x_{i}^{(1)}, x_{i}^{(2)})+\alpha d
\end{align}
$$
We then sample from this range:
$$
x_{i}^{(c)} \sim \mathcal{U}[L, U]
$$

![[Variation Operators in Real-Valued Genetic Algorithms-1771790348479.webp]]

Note that this is done with individual genes. Below is a 4-gene example:

![[Variation Operators in Real-Valued Genetic Algorithms-1771790543743.webp]]
