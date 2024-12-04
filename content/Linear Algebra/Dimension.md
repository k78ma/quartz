---
title: Dimension
tags:
  - lin-alg
date: 2024-12-02
aliases:
  - dimension
---
We've been discussing [[Finite-Dimensional Vector Space|finite-dimensional vector spaces]], but we have not defined the dimension of such an object. A reasonable definition of dimension would have the dimension of $\mathbb{F}^{n}$ be equal to $n$. 

Notice that the standard basis
$$
(1,0,\dots,0), (0,1,0,\dots,0), \dots, (0,\dots,0,1)
$$
of $\mathbb{F}^{n}$ has length of $n$. Thus, it's tempting to define the dimension as the length of the basis. Fortunately, this works out because all bases in a given vector space have the same length.

Thus, we can define dimension as below.

> [!definition]  Definition: Dimension, $\dim V$
> - The *dimension* of a finite-dimensional vector space is the length of any basis of the vector space.
> - The dimension of a finite-dimensional vector space $V$ is denoted by $\dim V$.

This relies on the following theorem:

> [!theorem] Basis length does not depend on basis
> Any two bases of a finite-dimensional vector space have the same length.

*Proof.*