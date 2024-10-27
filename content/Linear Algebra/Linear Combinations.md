---
title: Linear Combinations
tags:
  - lin-alg
date: 2024-10-27
aliases:
  - linear combinations
---
A sum of scalar multiples of vectors in a list is called a linear combination of the list.

> [!definition] Definition: Linear Combination
> A *linear combination* of a list $v_{1}, \dots,v_{m}$ of vectors in $V$ is a vector of the form
> $$
> a_{1}v_{1}+\dots+a_{m}v_{m}
> $$
> where $a_{1},\dots,a_{m}\in \mathbb{F}$.

For example, $(17, -4, 2)$ is a linear combination of $(2,1,-3), (1,-2,4)$, which is a list of length two of vectors in $\mathbb{R}^{3}$, because
$$
(17,-4,2)=6(2,1,3)+5(1,-2,4)
$$
On the other hand, $(17, -4, 5)$ is NOT a linear combination of $(2,1,-3), (1,-2,4)$, because there do not exist numbers $a_{1}, a_{2}\in \mathbb{F}$ such that
$$
(17, -4,5)=a_{1}(2,1,-3)+a_{2}(1,-2,4)
$$
