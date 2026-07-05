---
title: Dimension of a Sum
tags:
  - lin-alg
date: 2024-12-07
aliases:
  - dimension of a sum
---
The next result gives a formula for the dimension of the sum of two subspaces of a two-dimensional vector space.

This is analogous to a familiar counting formula: the number of elements in the union of two finite sets equals the number of elements in the first set, plus the number of elements in the second set, minus the elements in the intersection of the two sets:
$$
n(A\cup B)=n(A)+n(B)-n(A\cap B)
$$

> [!theorem] Dimension of a sum
> If $V_{1}$ and $V_{2}$ are subspaces of a finite-dimensional vector space, then
> $$
> \dim  (V_{1}+V_{2})=\dim  V_{1}+\dim  V_{2}-\dim  (V_{1}\cap V_{2})
> $$

*Proof.*

Let $v_{1},\dots,v_m$ be a basis of $V_{1}\cap V_{2}$. Thus, $\dim (V_{1}\cap V_{2})=m$. Because $v_{1}, \dots,v_{m}$ is a basis of $V_{1}\cap V_{2}$, it is linearly independent in $V_{1}$. Hence, this list can extend to a basis $v_{1}, \dots,v_{m}, u_{1}, \dots,u_{j}$ of $V_{1}$ ([[Every Linearly Independent List Extends to a Basis|every linearly independent list extends to a basis]]). Thus, $\dim V_{1}=m+j$. Similarly, we can extend $v_{1}, \dots,v_{m}$ to a basis $v_{1}, \dots,v_{m}, w_{1}, \dots,w_{k}$ of $V_{2}$. Thus, $\dim V_{2}=m+k$.

We will show that
$$
v_{1}, \dots, v_{m}, u_{1}, \dots, u_{j}, w_{1}, \dots, w_{k}
$$
is a basis of $V_{1}+V_{2}$. This will complete the proof, because then we will have
$$
\begin{align}
\dim  (V_{1}+V_{2}) & =m+j+k \\
	 & =(m+j)+(m+k)-m \\
	 & =\dim V_{1}+\dim  V_{2}-\dim  (V_{1}\cap V_{2})
\end{align}
$$
The list $v_{1}, \dots, v_{m}, u_{1}, \dots, u_{j}, w_{1}, \dots, w_{k}$ is contained in $V_{1}\cup V_{2}$, and thus is contained in $V_{1}+V_{2}$. The span of this list contains $V_{1}$ and $V_{2}$ and hence is equal to $V_{1}+V_{2}$. Thus, to show that the list is a basis of $V_{1}+V_{2}$, we only need to show that it is linearly independent.

To prove that the list is linearly independent, suppose:
$$
a_{1}v_{1}+\dots+a_{m}v_{m}+b_{1}u_{1}+\dots+b_{j}u_{j}+c_{1}w_{1}+\dots+c_{k}w_{k}=0
$$
where all $a$'s, $b$'s, and $c$'s are scalars. We need to prove that all the $a$'s, $b$'s and $c$'s equal $0$. The equation above can be rewritten as
$$
c_{1}w_{1}+\dots+c_{k}w_{k}=-a_{1}v_{1}-\dots-a_{m}v_{m}-b_{1}u_{1}-\dots-b_{j}u_{j}
$$
which shows that $c_{1}w_{1}+\dots+c_{k}w_{k}\in V_{1}$. All the $w$'s are in $V_{2}$, so this implies that $c_{1}w_{1}+\dots+c_{k}w_{k}\in V_{1}\cap V_{2}$. 

Because $v_{1}, \dots,v_{m}$ is a basis of $V_{1}\cap V_{2}$, we have
$$
c_{1}w_{1}+\dots+c_{k}w_{k}=d_{1}v_{1}+\dots+d_{m}v_{m}
$$
for some scalars $d_{1},\dots,d_{m}$. But $v_{1},\dots,v_{m}, w_{1},\dots,w_{k}$ is linearly independent (we constructed it to be a basis), so the last equation implies that all the $c$'s (and $d$'s) equal $0$.

Thus $c_{1}w_{1}+\dots+c_{k}w_{k}=-a_{1}v_{1}-\dots-a_{m}v_{m}-b_{1}u_{1}-\dots-b_{j}u_{j}$ simply becomes
$$
a_{1}v_{1}+\dots+a_{m}v_{m}+b_{1}u_{1}+\dots+b_{j}u_{j}=0
$$
And, because the list $v_{1}, \dots,v_{m}, u_{1}, \dots,u_{j}$ is linearly independent, this equation implies that all the $a$'s and $b$'s are $0$, completing the proof.