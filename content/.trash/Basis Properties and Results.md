---
title: Basis Properties and Results
tags:
  - lin-alg
date: 2024-11-16
aliases:
  - basis properties and results
---




## Every linearly independent list extends to a basis

> [!theorem] Every linearly independent list extends to a basis
> Every linearly independent list of vectors in a finite-dimensional vector space can be extended to a basis of the vector space.

*Proof.* Suppose $u_{1},\dots,u_{m}$ is linearly independent in a finite-dimensional vector space $V$. Let $w_{1},\dots,w_{n}$ be a list of vectors in $V$ that spans $V$. Thus the list
$$
u_{1},\dots,u_{m}, \,w_{1},\dots,w_{n}
$$
spans $V$. Applying the procedure from the above result [[Basis#Every spanning list contains a basis|every spanning list contains a basis]] to reduce this list to a basis of $V$ produces a basis consisting of the vectors $u_{1},\dots,u_{m}$ and some $w$'s. (None of the $u$'s get deleted in this procedure since $u_{1},\dots,u_m$ is linearly dependent).

As an example in $\mathbb{F}^{3}$, suppose we start with the linearly independent list $(2,3,4), (9,6,8)$. If we take $w_{1},w_{2},w_{3}$ to be the standard basis of $\mathbb{F}^{3}$, then applying the produces in the proof above produces the list
$$
(2,3,4), (9,6,8), (0,1,0)
$$
which is a basis of $\mathbb{F}^{3}$.

## Every Subspace of $V$ is a part of a direct sum equal to $V$
As an application of the result above, we now show that every subspace of a finite-dimensional vector space can be paired with another subspace to form a direct sum of the whole space.

> [!theorem] Every subspace of $V$ is part of a new direct sum equal to $V$
> Suppose $V$ is finite-dimensional and $U$ is a subspace of $V$. Then, there is a subspace $W$ of $V$ such that $V=U\oplus W$.

*Proof.* Because $V$ is finite-dimensional, so is $U$. Thus there is a basis $u_{1},\dots,u_{m}$ of $U$. Of course $u_{1},\dots,u_{m}$ is a linearly independent list of vectors in $V$. Hence this list can be extended to a basis $u_{1},\dots,u_{m},w_{1},\dots,w_{n}$ of $V$. Let $W=\text{span}(w_{1},\dots,w_{n})$.

To prove that $V=U\oplus W$, by [[Direct Sums of Subspaces#Condition for Direct Sum of Two Subspaces|the condition for direct sum of two subspaces]],we only need to show that
$$
V=U+W \quad \text{and} \quad U \cap W=\{ 0 \}
$$
To prove the first equation, suppose $v\in V$. Then, because the list $u_{1},\dots u_{m}, w_{1},\dots,w_{n}$ spans $V$, there exist $a_{1},\dots,a_{m}, b_{1},\dots,b_{n}\in \mathbb{F}$ such that
$$
v=\underbrace{ a_{1}u_{1}+\dots+a_{m}u_{m} }_{ u }+\underbrace{ b_{1}w_{1}+\dots+b_{n}w_{n} }_{ w }
$$
We have $v=u+w$, where $u\in U$ and $w\in W$ are defined as above. Thus $v\in U+W$, completing the proof that $V=U+W$.

To show that $U\cap W=\{ 0 \}$, suppose $v\in U\cap W$. Then there exist scalars $a_{1},\dots,a_{m}, b_{1},\dots,b_{m}\in \mathbb{F}$ such that
$$
\begin{align}
v & =a_{1}u_{1}+\dots+a_{m}u_{m}\\
v & =b_{1}w_{1}+\dots+b_{n}w_{n}
\end{align}
$$
Subtracting the two equations from each other:
$$
a_{1}u_{1}+\dots+a_{m}u_{m}-b_{1}w_{1}-\dots-b_{n}w_{n}=0
$$
Because the list $u_{1},\dots,u_{m}, w_{1},\dots,w_{n}$ is linearly independent, this implies that
$$
a_{1}=\dots=a_{m}=b_{1}=\dots=b_{n}=0
$$
Thus $v=0$, completing the proof that $U\cap W=\{ 0 \}$.