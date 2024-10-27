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

Sums of subspaces are analogous to unions of subsets. Similarly, direct sums of subspaces are analogous to disjoint unions of subsets. No two subspaces of a vector space can be disjoint, because both contain $0$. So disjointness is replaced, at least in the case of two subspaces, with the requirement that the intersection equal $\{ 0 \}$.

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

> [!theorem] Condition for Direct Sums
> Suppose $V_{1}, \dots, V_{m}$ are subspaces of $V$. Then, $V_{1}+\dots+V_{m}$ is a direct sum if and only if the only way to write $0$ as a sum $v_{1}+\dots+v_{m}$, where each $v_{k}\in V_{k}$, is by taking each $v_{k}$ equal to $0$.

*Proof*. 

First, we show necessity: assuming that $V_{1}+\dots+V_{m}$ is a direct sum, the only unique way to write the zero vector is if each $v_{k}=0$.

Suppose $V_{1}+\dots+V_{m}$ is a direct sum. All of the subspaces $V_{1},\dots,V_{m}$ are subspaces of $V$, which means all of these subspaces share the same additive identity $0$. Clearly, adding all of these additive identities $0_{1}+\dots+0_{m}$, where each $0_{k}\in V_{k}$, is equal to $0$. Then, the definition of direct sum implies that this is the **only** way to write $0$, since this $0$ must unique.

Thus, the definition of direct sum implies that the only way to write $0$ as a sum $v_{1}+\dots+v_{m}$, where each $v_{k}\in V_{k}$, is by taking each $v_{k}$ equal to $0$.

Second, we show sufficiency: assuming that the only way to express the zero vectors is by having all $v_{k}=0$, this implies that $V_{1}+\dots+V_{m}$ is a direct sum.

Suppose that the only way to write $0$ as a sum $v_{1}+\dots+v_{k}$, where $v_{k}\in V_{k}$, is by taking each $v_{k}$ equal to $0$. 

To show that $V_{1}+\dots+V_{m}$ is a direct sum, let some $v\in V_{1}+\dots+V_{k}$. We can write
$$
v=v_{1}+\dots+v_{m}
$$
for some $v_{1}\in V_{1},\dots,v_{m}\in V_{m}$. To show that this representation is unique, suppose we also have
$$
v=u_{1}+\dots+u_{m},
$$
where $u_{1}\in V_{1},\dots,u_{m}\in V_{m}$. Subtracting these two equations, we have:
$$
0=(v_{1}-u_{1})+\dots+(v_{m}-u_{m}).
$$
Because $v_{1}-u_{1}\in V_{1},\dots,v_{m}-u_{m}\in V_{m}$, the equation above implies that each $v_{k}-u_{k}$ equals $0$. This shows that any two representations of the same vector must be equal, so every vector actually only has one unique representation.

## Condition for Direct Sum of Two Subspaces
The next result gives a simple condition for testing whether a sum of two subspaces is a direct sum.

> [!theorem] Direct sum of two subspaces
> Suppose $U$ and $W$ are subspaces of $V$. Then
> $$
> U+W \text{ is a direct sum} \quad \Longleftrightarrow  \quad U \cap V = \{ 0 \}
> $$
> The symbol $\Longleftrightarrow$ means “if and only if ”; this symbol could also be read to mean “is equivalent to”. 

*Proof.*

First, we show that if we assume $U+W$ is a direct sum, we must have $U \cap W = \{ 0 \}$. 

Suppose $U+W$ is a direct sum. Suppose some element $v$ is in both $U$ and $V$, or $v\in U\cap W$. Then, we can write the zero vector as $0=v+(-v)$, where $v\in U$ and $-v\in W$. Since $U+W$ is a direct sum, the only way for us express $0$ as a sum of vectors from $U$ and $W$ is if both vectors are $0$. Thus, we have $v=0$. Thus, $U \cap W = \{ 0 \}$, completing the proof in one direction.

Now we want to prove the other direction; assuming that $U\cap W=\{ 0 \}$, we want to show that $U+W$ is a direct sum. 

Suppose $u\in U, w\in W$, and
$$
0=u+w.
$$
To complete the proof, we only need to show that $u=w=0$, which we showed above for the condition for direct sums. The equation above implies that $u=-w$. Since we are dealing with subspaces that are closed under scalar multiplication, $u=-w \in W$ means that $u\in W$ as well, which in turn means $u\in U\cap W$. Since our beginning assumption was $U\in W=\{ 0 \}$, we must have $u=0$, which by the equation above implies that $w=0$, completing the proof.

The result above deals only with the case of two subspaces. When asking about a possible direct sum with more than two subspaces, it is not enough to test that each pair of the subspaces intersect only at $\{ 0 \}$. To see this, consider the [[Direct Sums of Subspaces#Example A non-direct sum|the non-direct sum example]] above. In that non-example of a direct sum, we have $V_{1}\cap V_{2}=V_{1}\cap V_{3}=V_{2}\cap V_{3}=\{ 0 \}$.
