---
title: Orthogonal Matrix
tags:
  - lin-alg
date: 2024-03-07
aliases:
  - orthogonal matrix
---
A square matrix with real numbers or elements is orthogonal if its transpose is equal to its inverse:
$$
A^{T}=A^{-1}
$$
or
$$
AA^{T} = A^{T}A = I
$$

## Geometric Meaning
For any two vectors, $u,v \in \mathbb{R}^{n}$, their dot product after applying an orthogonal matrix $A$ is:
$$
(Au) \cdot  (Av) = u^{T}A^{T}Av = u^{T}v =u\cdot v
$$
So, the dot product is preserved; is is the same whether you apply the matrix or not.