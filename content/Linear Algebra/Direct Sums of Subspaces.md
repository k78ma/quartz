---
title: Direct Sums of Subspaces
tags:
  - lin-alg
date: 2024-09-07
aliases:
  - direct sums of subspaces
---
Suppose $V_{1},\dots,V_{m}$ are subspaces of $V$. Every element of the [[Sums of Subspaces|sums of subspaces]] $V_{1}+\dots+V_{m}$ can be written in the form
$$
v_{1}+\dots+v_{m}
$$
where each element $v_{k}\in V_{k}$. 

The sum $V_{1}+\dots+V_{m}$ is called the **direct sum** if each element on $V_{1}+\dots+V_{m}$ can be written in only one way as a sum $v_{1}+\dots+v_{m}$, where each $v_{k}\in V_{k}$.

If $V_{1}+\dots+V_{m}$ is a direct sum, then $V_{1}\oplus\dots\oplus V_{m}$ denotes $V_{1}+\dots+V_{m}$, with the $\oplus$ notation serving as an indication that this is a direct sum.

## Examples

### Example: Direct sum of Two Subspaces
Suppose $U$ is the subspace of $\mathbb{F}^{3}$ of vectors whose last coordinate equals $0$, and $W$ is the subspace of $\mathbb{F}^{3}$ of vectors whose first two coordinates equal $0$:
$$
\begin{align}
U & =\{ (x,y,0)\in \mathbb{F}^{3} \, : \, x,y\in \mathbb{F} \} \\
W & =\{ (0,0,z)\in \mathbb{F}^{3} \, : \, z\in \mathbb{F} \}
\end{align}
$$
Then, $\mathbb{F}^{3}=U\oplus W$.