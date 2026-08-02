---
title: Vector Norm
tags:
  - dl
date: 2026-08-01
aliases: vector norm
---
For a vector $\mathbf{z}$, the $\ell_{p}$ norm is defined as:
$$
|| \mathbf{z} ||_{p} = \left( \sum_{d=1}^{D} \left| z_{d} \right| ^{p} \right)^{1/p}
$$
for real-valued $p\geq1$. 

- When $p=2$, this returns the length of the vector, and this is known as the Euclidean norm.
- When $p=\infty$, the operator returns the maximum absolute value in the vector ([[Infinity Norm|infinity norm]])