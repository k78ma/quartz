---
title: Null Space is a Subspace
tags:
  - lin-alg
date: 2025-01-20
aliases:
  - null space is a subspace
  - "3.13"
---

> [!theorem] The null space is a subspace.
> Suppose $T \in \mathcal{L}(V,W)$. Then the [[Null Space|null space]] of $T$,  $\text{null } T$, is a subspace of $V$.

*Proof.* Because $T$ is a linear map, $T(0)=0$ ([[Linear Maps Take 0 to 0]]). Thus $0 \in \text{null } T$.

Suppose $u,v \in \text{null } T$. Then
$$
T(u+v)=Tu+Tv=0+0=0
$$
Hence $u+v \in \text{null } T$. Thus, $\text{null } T$ is closed under addition.

Suppose $u \in  \text{null } T$ and $\lambda \in \mathbb{F}$. Then
$$
T(\lambda u)=\lambda Tu=\lambda 0 = 0
$$
Hence, $\lambda u \in \text{null } T$. Thus, $\text{null } T$ is closed under scalar multiplication.

We have shown that $\text{null } T$ is closed under scalar multiplication.