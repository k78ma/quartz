---
title: Span
tags:
  - lin-alg
date: 2024-10-27
aliases:
  - span
---
> [!definition] Definition: Span
> The set of all [[Linear Combinations|linear combinations]] of a list of vectors $v_{1}, \dots, v_{m}$ in $V$ is called the *span* of $v_{1},\dots,v_{m}$, denoted by $\text{span}(v_{1}, \dots,v_{m})$. In other words,
>$$
>\text{span}(v_{1}, \dots,v_{m})=\{ a_{1}v_{1}+\dots+a_{m}v_{m}\, : \,a_{1},\dots,a_{m}\in \mathbb{F} \} 
>$$
>The span of the empty list $(\,\,)$ is defined to be $\{ 0 \}$.

Following the example from [[Linear Combinations]], we saw that
- $(17, -4,2)$ can be written as $(17,-4,2)=6(2,1,3)+5(1,-2,4)$. Therefore, $(17,-4,2)\in \text{span}\big((2,1,-3), (1,-2,4)\big)$.
- $(17, -4,5)$ cannot be written as any linear combination $(17, -4,5)=a_{1}(2,1,-3)+a_{2}(1,-2,4)$. Therefore, $(17, -4, 5) \notin \text{span}\big((2,1,-3), (1,-2,4)\big)$.

## Span = Smallest Containing Subpace

> [!theorem] Theorem: Span is the smallest containing subspace
> The span of a list of vectors in $V$ is the smallest [[Subspaces|subspace]] of $V$ containing all vectors in the list.

*Proof.* Suppose $v_{1}, \dots,v_{m}$ is a list of vectors in $V$.

First, we show that $\text{span}(v_{1}, \dots,v_{m})$ is a subspace of $V$. The additive identity is in $\text{span}(v_{1},\dots,v_{m})$ because we always have
$$
0=0v_{1}+\dots+0v_{m}
$$
Also, $\text{span}(v_{1},\dots v_{m})$ is closed under addition because
$$
(a_{1}v_{1}+\dots+a_{m}v_{m})+(c_{1}v_{1}+\dots+c_{m}v_{m})=(a_{1}+c_{1})v_{1}+\dots+(a_{m}+c_{m})v_{m}
$$
Furthermore, $\text{span}(v_{1},\dots v_{m})$ is closed under addition because
$$
\lambda(a_{1}v_{1}+\dots+a_{m}v_{m})=\lambda a_{1}v_{1}+\dots+\lambda a_{m}v_{m}
$$
Thus, $\text{span}(v_{1},\dots v_{m})$ is a subspace of $V$.

Each $v_{k}$ can be written as a linear combination of $v_{1},\dots,v_{m}$, as we can set $a_{k}=1$ and let all other $a$'s in $a_{1}v_{1}+\dots+a_{m}v_{m}$ be zero. Thus, $\text{span}(v_{1},\dots v_{m})$ contains each $v_{k}$. 

Because subspaces are closed under scalar multiplication and addition, any subspace of $V$ that contains all $v_{1},\dots,v_{k},\dots, v_{m}$ must also contain every linear combination of these vectors, or $\text{span}(v_{1},\dots v_{m})$. Thus, $\text{span}(v_{1},\dots,v_{m})$ is the smallest subspace of $V$ containing all vectors $v_{1},\dots,v_{m}$, since it's the minimum set that guarantees closure under addition and scalar multiplication.

## Spanning a Subspace

> [!definition] Definition: Spans
> If $\text{span}(v_{1},\dots,v_{m})$ equals $V$, we say that the list $v_{1},\dots,v_{m}$ *spans* $V$.

**Example:** Suppose $n$ is a positive integer. We want to show that
$$
(1,0,\dots,0), (0,1,0,\dots,0), \dots, (0,\dots,0,1)
$$
spans $\mathbb{F}^{n}$. Here, the $k$-th vector in the list above has $1$ in the $k$th slot and $0$ in all other slots.

Suppose $(x_{1},\dots,x_{n})\in \mathbb{F}^{n}$. Then
$$
(x_{1},\dots,x_{n})=x_{1}(1,0,\dots,0)+x_{2}(0,1,0,\dots,0)+\dots+x_{n}(0,\dots,0,1)
$$
Thus $(x_{1},\dots , x_{n})\in \text{span}\big( (1,0,\dots,0), (0,1,0,\dots,0), \dots, (0,\dots,0,1)  \big)$.
