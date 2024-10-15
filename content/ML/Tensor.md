---
title: Tensor
tags:
  - ml
date: 2024-02-02
aliases:
  - tensor
  - tensors
---
Tensors are algebraic objects describes a multilinear relationship between sets of algebraic objects related to a vector space.

The simple way to think about it is that tensors generalize scalars, vectors, and matrices:
- A scalar is a 0th-order tensor
- A vector is a 1st-order tensor
- A matrix is a 2nd-order tensor

The shape of a tensor is often denoted as
$$
X \sim (s_{1},s_{2},\dots,s_{n})
$$
For $n=0$, we have scalars, for $n=1$ we have vectors, for $n=2$ we have matrices. In practice, a tensor is described by the type of its elements and its shape. Typically the element type is floating-point values, but can also be integers or even strings.

Tensors can be **indexed** to get **slices** (subsets) of their values, and most use [numpy indexing conventions](https://numpy.org/doc/stable/user/basics.indexing.html).

For simple equations we use pedices. For example, for a 3-dimension vector $X \sim (a,b,c)$, we can write $X_{i}$ to denote a slice of size $(b,c)$, or $X_{ijk}$ for a single scalar. We can use commas for more complex expressions, as 