---
title: Vector Space
tags:
  - lin-alg
date: 2024-08-15
aliases:
  - vector space
---
A vector space is a set $V$ along with an addition on $V$ and a scalar multiplication on $V$ such that the following properties hold.
- **Commutativity:** $u+v=v+u$ for all $u,v\in V$.
- **Associativity:** $(u+v)+w=u+(v+w)$ and $(ab)v=a(bv)$ for all $u,v,w \in V$ and for all $a,b \in \mathbb{F}$.
- **Additive Identity:** There exists an element $0\in V$ such that $v+0=v$ for $v\in V$.
- **Additive Inverse:** For every $v\in V$, there exists $w\in V$ such that $v+w=0$.
- **Multiplicative Identity:** $1v=v$ for all $v\in V$.
- **Distributive Properties:** $a(u+v)=au+av$ and $(a+b)v=av+bv$ for all $a,b\in \mathbb{F}$ and all $u,v\in V$.

> [!definition] Definitions: Addition, Scalar Multiplication
> - An addition on a set $V$ is a function that assigns an element $u+v\in V$ to each pair of elements $u,v\in V$.
> - A scalar multiplication on a set $V$ is a function that assigns an element $\lambda v\in V$ to each $\lambda \in \mathbb{F}$ and each $v\in V$.
> 

We can use some geometric language to aid our intuition by saying that elements of a vector space are called *vectors* or *points*.

The scalar multiplication in a vector space depends on $\mathbb{F}$. Thus when we need to be precise, we will say that $V$ is a vector space over $\mathbb{F}$ instead of saying simply that $V$ is a vector space. For example, $\mathbb{R}^{n}$ is a vector space over $\mathbb{R}$, and $\mathbb{C}$ is a vector space over $\mathbb{C}^{n}$.

Usually the choice of $\mathbb{F}$ is either clear from the context or irrelevant. Thus we often assume that $\mathbb{F}$ is lurking in the background without specifically mentioning it. With the usual operations of addition and scalar multiplication, $\mathbb{F^{n}}$ is a vector space over $\mathbb{F}$, as you should verify. The example of $\mathbb{F}^{n}$ ([[n-dimensional Spaces|see here]]) motivated our definition of vector space.

Our next example of a vector space involves a set of functions.

> [!definition] $\mathbb{F}^{S}$
> - If $S$ is a set, then $\mathbb{F}^{S}$ denotes the set of functions from $S$ to $\mathbb{F}$.
> - For $f,g\in \mathbb{F}^{S}$, the sum $f+g\in \mathbb{F}^{S}$ is the function defined by
>$$
>(f+g)(x)=f(x)+g(x)
>$$
>- For all $\lambda \in \mathbb{F}$ and $f\in \mathbb{F}^{S}$, the product $\lambda \mathbb{F}\in \mathbb{F}^{S}$ is the function defined by
>$$
>(\lambda f)(x)=\lambda f(x)
>$$
>for all $x \in S$.

