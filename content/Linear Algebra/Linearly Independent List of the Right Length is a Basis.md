---
title: Linearly Independent List of the Right Length is a Basis
tags:
  - lin-alg
date: 2024-12-05
aliases:
  - linearly independent list of the right length is a basis
  - "2.38"
---
To check that a list of vectors in $V$ is a [[Basis|basis]] of $V$, we must show that the list in question satisfies two properties:
1. It must be linearly independent.
2. It must span $V$.

This result and [[Subspace of Full Dimension Equals the Whole Space|this one]] show that if the list in question has the right length, then we only need to check that it satisfies one of the two properties.

> [!definition] Linearly independent list of the right length is a basis
> Suppose $V$ is finite-dimensional. Then, every linearly independent list of vectors in $V$ of length $\dim V$ is a basis of $V$.

*Proof.* Suppose $\dim V=n$ and $v_{1},\dots,v_{n}$ is linearly independent in $V$. The list $v_{1},\dots,v_{n}$ can be extended to a basis of $V$, since [[Every Linearly Independent List Extends to a Basis|every linearly independent list extends to a basis]]. However, every basis of $V$ has length $n$, so in this case the extension is trivial, meaning that no elements are added to $v_{1}, \dots,v_{n}$. Thus, $v_{1},\dots,v_{n}$ is a basis of $V$, as desired.

