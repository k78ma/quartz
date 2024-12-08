---
title: Dimension of a Sum
tags:
  - lin-alg
date: 2024-12-07
aliases:
  - dimension of a sum
---
The next result gives a formula for the dimension of the sum of two subspaces of a two-dimensional vector space.

This is analogous to a familiar counting formula: the number of elements in the union of two finite sets equals the number of elements in the first set, plus the number of elements in the second set, minus the elements in the intersection of the two sets:
$$
n(A\cup B)=n(A)+n(B)-n(A\cap B)
$$

> [!theorem] Dimension of a sum
> If $V_{1}$ and $V_{2}$ are subspaces of a finite-dimensional vector space, then
> $$
> \dim  (V_{1}+V_{2})=\dim  V_{1}+\dim  V_{2}-\dim  (V_{1}\cup V_{2})
> $$

*Proof.*

Let $v_{1},\dots,v_m$ be a basis of $V_{1}\cap V_{2}$. Thus, $\dim (V_{1}\cap V_{2})=m$. Because $v_{1}, \dots,v_{m}$ is a basis of $V_{1}\cap V_{2}$, it is linearly independent in $V_{1}$. Hence, this list can be extended to a basis $v_{1},$

