---
title: Linear Map to Lower-Dimensional Space is Not Injective
tags:
  - lin-alg
date: 2025-01-25
aliases:
  - linear map to lower-dimensional space is not injective
  - "3.22"
---

> [!definition] Linear map to a lower-dimensional space is not injective
> Suppose $V$ and $W$ are finite-dimensional vector spaces such that $\dim V > \dim W$. Then, no linear map from $V$ to $W$ is injective.

*Proof.* Let $T \in \mathcal{L}(V,W)$. Then
$$
\begin{align}
\dim  \text{null }  T & =\dim  V-\dim  \text{range }  T \\
     & \geq \dim  V-\dim  W \\
     & >0
\end{align}
$$
where the first line above comes from the [[Fundamental Theorem of Linear Maps|fundamental theorem of linear maps]] and the second line follows from the fact that $\text{range } T$ is a subspace of $W$ (see [[Dimension of a Subspace|dimension of a subspace]]).

This inequality states that $\dim \text{null } T>0$. This means that $\text{null } T$ contains vectors other than $0$. Thus, $T$ is not injective, as [[Injectivity Implies Null Space is 0 and vice versa|injectivity implies null space is 0 and vice versa]].

For example, let's say we have a linear map $T:\mathbb{F}^{4}\to \mathbb{F}^{3}$ such that
$$
T(z_{1},z_{2},z_{3},z_{4})=(\sqrt{ 7 }z_{1}+\pi z_{2}+z_{4}, 97z_{1}+3z_{2}+2z_{3},z_{2}+6z_{3}+7z_{4})
$$
Because $\dim \mathbb{F}^{4}>\dim \mathbb{F}^{3}$, we can immediately say that $T$ is not injective without any calculations.
