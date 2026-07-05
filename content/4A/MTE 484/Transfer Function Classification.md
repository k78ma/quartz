---
title: Transfer Function Classification
tags:
  - mte484
date: 2025-09-10
aliases: transfer function classification
---

> [!definition] Transfer function
>A transfer function $P(s)$ or $G(z)$ is:
>- *Rational* if $P(s) = \frac{N(s)}{D(s)}$ or $G[z]=\frac{N[z]}{D[z]}$ where $N,D$ are polynomials
>- *Real* if in addition the coefficients of $N,D$ are all in $\mathbb{R}$
>- *Proper* if an addition the $\text{deg}(D) \geq \text{deg}(N)$.
>- *Strictly proper* if it is proper and $\text{deg}(D) > \text{deg}(N)$.

Example:
$$
P(s) = \frac{s^{3}+2s+1}{s^{3}+s+2}
$$
- Is rational, real, proper, but not strictly proper. 

Example:
$$
\frac{z^{2}+1}{z^{3}+z-3}
$$
- Is rational, real, proper, and strictly proper.



