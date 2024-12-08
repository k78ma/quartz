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

*Proof.* Suppose $V$ is finite-dimensional. Let $B_{1}$ and $B_{2}$ be two bases of $V$. Then $B_{1}$ is linearly independent in $V$ in $B_{2}$ spans $V$, so the length of $B_{1}$ is at most the length of $B_{2}$ (see [[Linear Dependence Lemma#Length of linearly independent list $ leq$ Length of spanning list|here]]). Interchanging the roles of $B_{1}$ and $B_{2}$, we also see that the length of $B_{2}$ is at most the length of $B_{1}$. Thus, the length of $B_{1}$ equals the length of $B_{2}$, as desired.

## Examples
- $\dim \mathbb{F}^{n} =n$ because the standard basis of $\mathbb{F}^{n}$ has length $n$.
- $\dim \mathcal{P}_{m}(\mathbb{F})=m+1$ because the standard basis $1,z, \dots,z^{m}$ of $\mathcal{P}_m(\mathbb{F})$ has length $m+1$.
- If $U=\{ (x,x,y)\in \mathbb{F}^{3}\, : \,x,y\in \mathbb{F} \}$, then $\dim U=2$ because $(1,1,0),(0,0,1)$ is a basis of $U$.
- If $U=\{ (x,y,z)\in\mathbb{F}^{3}\, : \,x+y+z=0 \}$, then $\dim U=2$ because the list $(1,-1,0), (1,0,-1)$ is a basis of $U$.
