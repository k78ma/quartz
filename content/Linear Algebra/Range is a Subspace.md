---
title: Range is a Subspace
tags:
  - lin-alg
date: 2025-01-21
aliases:
  - range is a subspace
---

> [!theorem] The [[Range|range]] is a subspace
> If $T\in \mathcal{L}(V,W)$, then range $T$ is a subspace of $W$.

*Proof.* Suppose $T \in \mathcal{L}(V,W)$. Then $T(0)=0$ because [[Linear Maps Take 0 to 0|linear maps take 0 to 0]], which implies that $0 \in \text{range } T$.

If $w_{1},w_{2} \in \text{range } T$, then there exist $v_{1},v_{2} \in V$ such that $Tv_{1}=w_{1}$ and $Tv_{2}=w_{2}$. Thus
$$
T(v_{1}+v_{2})=Tv_{1}+Tv_{2}=w_{1}+w_{2}
$$
Hence, $w_{1}+w_{1} \in \text{range } T$. Thus, range $T$ is closed under addition.

If $w \in \text{range } T$ and $\lambda \in \mathbb{R}$, then there exists $v \in V$ such that $Tv=w$. Thus
$$
T(\lambda v)=\lambda Tv=\lambda w
$$
Hence, $\lambda w\in \text{range } T$. Thus $\text{range } T$ is closed under scalar multiplication.

We have shown that $\text{range } T$ contains $0$, is closed under addition, and is closed under scalar multiplication. Thus, $\text{range } T$ is a subspace of $W$.