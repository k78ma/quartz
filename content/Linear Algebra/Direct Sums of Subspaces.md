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

## Basic Examples

### Example: Direct sum of two subspaces
Suppose $U$ is the subspace of $\mathbb{F}^{3}$ of vectors whose last coordinate equals $0$, and $W$ is the subspace of $\mathbb{F}^{3}$ of vectors whose first two coordinates equal $0$:
$$
\begin{align}
U & =\{ (x,y,0)\in \mathbb{F}^{3} \, : \, x,y\in \mathbb{F} \} \\
W & =\{ (0,0,z)\in \mathbb{F}^{3} \, : \, z\in \mathbb{F} \}
\end{align}
$$
Then, $\mathbb{F}^{3}=U\oplus W$.

### Example: A non-direct sum
Suppose
$$
\begin{align}
V_{1} & =\{ (x,y,0)\in \mathbb{F}^{3}\, : \,x,y \in \mathbb{F} \}, \\
V_{2} & =\{ (0,0,z)\in \mathbb{F}^{3}\, : \,z \in \mathbb{F}  \}, \\
V_{3} & =\{ (0,y,y)\in \mathbb{F}^{3}\, : \,y \in \mathbb{F}  \}
\end{align}
$$
Then $\mathbb{F}^{3}=V_{1}+V_{2}+V_{3}$ because every vector $(x,y,z)\in \mathbb{F}^{3}$ can be written as
$$
(x,y,z)=(x,y,0)+(0,0,z)+(0,0,0)
$$
where the first vector on the right side is in $V_{1}$, the second vector is in $V_{2}$, and the third vector is in $V_{3}$.

However, $\mathbb{F}^{3}$ is not a direct sum of $V_{1},V_{2}, V_{3}$, because the vector $(0,0,0)$ can be written in more than one way as a sum $v_{1}+v_{2}+v_{3}$, with each $v_{k}\in V_{k}$. Specifically, we have:
$$
(0,0,0)=(0,1,0)+(0,0,1)+(0,-1,-1)
$$
and
$$
(0,0,0)=(0,0,0)+(0,0,0)+(0,0,0)
$$
where the first vector is in $V_{1}$, the second vector is in $V_{2}$, and the third vector is in $V_{3}$.

Thus, the sum $V_{1}+V_{2}+V_{3}$ is not a direct sum.

## Condition for Direct Sums
The definition of direct sum requires every vector in the sum to have a unique representation as an appropriate sum. The next result shows that when deciding whether a sum of subspaces is a direct sum, we only need to consider whether $0$ can be uniquely written as an appropriate sum.

