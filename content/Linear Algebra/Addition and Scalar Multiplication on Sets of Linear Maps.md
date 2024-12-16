---
title: Addition and Scalar Multiplication on Sets of Linear Maps
tags:
  - lin-alg
date: 2024-12-15
aliases:
  - algebraic operations on sets of linear maps
  - a set of linear maps is a vector space
---
> [!definition] Addition and scalar multiplication on $\mathcal{L}(V,W)$
> Suppose $S,T\in \mathcal{L}(V,W)$ and $\lambda \in \mathbb{F}$. The sum $S+T$ and product $\lambda T$ are the linear maps from $V$ to $W$ defined by
> $$
> (S+T)v=Sv+Tv \quad \text{and} \quad (\lambda T)(v)=\lambda(Tv)
> $$
> for all $v\in V$.

We can verify $S+T$ and $\lambda T$ as defined above are linear maps. In other words, if $S,T\in \mathcal{L}(V,W)$ and $\lambda \in \mathbb{F}$, then $S+T\in \mathcal{L}(V,W)$ and $\lambda T\in \mathcal{L}(V,W)$.

The above addition and scalar multiplication leads us to this result:

> [!theorem] $\mathcal{L}(V,W)$ is a vector space
> With the operations of addition and scalar multiplication defined above, $\mathcal{L}(V,W)$ is a vector space.
