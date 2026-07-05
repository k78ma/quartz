---
title: Spanning List of the Right Length is a Basis
tags:
  - lin-alg
date: 2024-12-06
aliases:
  - spanning list of the right length is a basis
  - "2.42"
---

> [!theorem] Spanning list of the right length is a basis
> Suppose $V$ is finite-dimensional. Then every spanning list of vectors in $V$ of length $\dim V$ is a basis of $V$.
> 

Suppose $\dim V=n$ and $v_{1}, \dots,v_{n}$ spans $V$. The list $v_{1}, \dots,v_{n}$ can be reduced to a basis of $V$ ([[Every Spanning List Contains a Basis|every spanning list contains a basis]]). However, every basis of $V$ has length $n$, so in this case the reduction is the trivial one, meaning that no elements are deleted from $v_{1}, \dots,v_{n}$. Thus $v_{1}, \dots,v_{n}$ is a basis of $V$, as desired.
