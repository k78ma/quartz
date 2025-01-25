---
title: Fundamental Theorem of Linear Maps
tags:
  - lin-alg
date: 2025-01-22
aliases:
  - fundamental theorem of linear maps
---
> [!theorem] Fundamental theorem of linear maps
> Suppose $V$ is finite-dimensional and $T \in \mathcal{L}(V,W)$. Then $\text{range } T$ is finite-dimensional and
> $$
> \dim  V=\dim  \text{null }  T+\dim  \text{range }  T
> $$

*Proof.* Let $u_{1}, \dots,u_{m}$ be a basis of $\text{null } T$; thus $\dim \text{null } T=m$. The linearly independent list $u_{1}, \dots,u_{m}$ can be extended to a basis
$$
u_{1}, \dots, u_{m}, v_{1}, \dots, v_{n}
$$
of $V$ ([[Every Linearly Independent List Extends to a Basis|every linearly independent list extends to a basis]]). Thus, $\dim V=m+n$.

To complete the proof, we need to show that $\text{range } T$ is finite-dimensional and $\dim \text{range } T=n$. We will do this by proving that $Tv_{1}, \dots,Tv_{n}$ is a basis of $\text{range } T$. 

Let $v \in V$. Because $u_{1}, \dots,u_{m}, v_{1}, \dots,v_{n}$ spans $V$, we can write
$$
v=a_{1}u_{1}+\dots+a_{m}u_{m}+b_{1}v_{1}+\dots+b_{n}v_{n}
$$
