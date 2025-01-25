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

To complete the proof, we need to show that $\text{range } T$ is finite-dimensional and $\dim \text{range } T=n$. We will do this by proving that $Tv_{1}, \dots,Tv_{n}$ is a basis of $\text{range } T$, for which we need to show that it spans $\text{range } T$ and it is linearly independent.

First, we show that $Tv_{1}, \dots,Tv_{n}$ spans $\text{range } T$. Let $v \in V$. Because $u_{1}, \dots,u_{m}, v_{1}, \dots,v_{n}$ spans $V$, we can write
$$
v=a_{1}u_{1}+\dots+a_{m}u_{m}+b_{1}v_{1}+\dots+b_{n}v_{n},
$$
where the $a$'s and $b$'s are in $\mathbb{F}$. Applying $T$ to both sides of this equation, we get
$$
Tv=b_{1}Tv_{1}+\dots+b_{n}Tv_{n}
$$
where terms of the form $Tu_{k}$ disappeared; because $u_{k}$ is in $\text{null } T$, any $Tu_{k}=0$. The last equation implies that the list $Tv_{1}, \dots,Tv_{n}$ spans $\text{range } T$. In particular, $\text{range } T$ is finite-dimensional.

Finally, we show  $Tv_{1}, \dots,Tv_{n}$ is linearly independent. Suppose $c_{1}, \dots,c_{n}\in \mathbb{F}$ and
$$
c_{1}Tv_{1}+\dots+c_{n}Tv_{n}=0
$$
Then
$$
T(c_{1}v_{1}+\dots+c_{n}v_{n})=0
$$
Hence:
$$
c_{1}v_{1}+\dots+c_{n}v_{n} \in  \text{null }  T
$$
Because $u_{1}, \dots,u_{m}$ spans $\text{null } T$, we can write
$$
c_{1}v_{1}+\dots+c_{n}v_{n}=d_{1}u_{1}+\dots+d_{m}u_{m}
$$
where the $d$'s are in $\mathbb{F}$. This equation implies that all the $c$'s and $d$'s are $0$, because $u_{1}, \dots,u_{m}, v_{1}, \dots,v_{n}$ is linearly independent. Thus, $Tv_{1}, \dots,Tv_{n}$ is linearly independent and hence is a basis of $\text{range } T$, as desired.