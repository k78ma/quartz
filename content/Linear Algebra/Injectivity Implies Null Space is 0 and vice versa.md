---
title: Injectivity Implies Null Space is 0 and vice versa
tags:
  - lin-alg
date: 2025-01-20
aliases:
  - injectivity implies null space is 0 and vice versa
---

> [!definition] Injective $\Longleftrightarrow$ Null space is $\{ 0 \}$
> Let $T$ in $\mathcal{L}(V,W)$. $T$ is injective if and only if $\text{null } T=\{ 0 \}$.

*Proof.* Suppose $T$ is injective. We want to prove that $\text{null } T=\{ 0 \}$. We already know that $\{ 0 \} \subseteq \text{null } T$ (since [[Linear Maps Take 0 to 0|linear maps take 0 to 0]]). To prove the inclusion in the other direction, suppose $v \in \text{null } T$. Then
$$
T(v)=0=T(0)
$$
Because $T$ is injective, the equation above implies that $v=0$. Thus we can conclude that $\text{null } T=\{ 0 \}$, as desired.

To prove the implication in the other direction, now suppose $\text{null } T=\{ 0 \}$. We want to prove that $T$ is injective. To do this, suppose $u,v\in V$ and $Tu=Tv$. Then
$$
0=Tu-Tv=T(u-v)
$$
Thus, $u-v$ is in $\text{null } T$, which equals $\{ 0 \}$. This means $u-v=0$ or $u=v$. Hence, $T$ is injective, as desired.
