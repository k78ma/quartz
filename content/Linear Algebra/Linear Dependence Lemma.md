---
title: Linear Dependence Lemma
tags:
  - lin-alg
date: 2024-10-28
aliases:
  - linear dependence lemma
---
The linear dependence lemma is a useful tool. It states that given a linearly dependent list of vectors, one of the vectors is in the span of the previous ones. Furthermore, we can throw out that vector without changing the span of the original list.

> [!theorem] Linear Dependence Lemma
> Suppose $v_{1}, \dots,v_{m}$ is a linearly dependent list in $V$. Then there exists $k\in(1,2,\dots,m)$ such that
> $$
> v_{k}\in \text{span}(v_{1},\dots,v_{k-1})
> $$
> Furthermore, if $k$ satisfies the condition above and the $k$-th term is removed from $v_{1},\dots,v_{m}$, then the span of the remaining list equals $\text{span}(v_{1},\dots,v_{m})$.

*Proof.* 
