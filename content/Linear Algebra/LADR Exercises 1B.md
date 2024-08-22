---
title: LADR Exercises 1B
tags:
  - lin-alg
date: 2024-08-17
aliases:
---
>[!question] Problem 1
>Prove that $-(-v)=v$ for every $v \in V$.

*Proof*. We wish to show that $v$ is the additive inverse of $(-v)$. Thus, we need to show that $(-v)+v=0$. We have:
$$
\begin{align}
(-v)+v =(-1)v+1v=(-1+1)v=0v=0
\end{align}
$$
as desired.

>[!question] Problem 2
>Suppose $a\in \mathbb{F}, v\in V$, and $av=0$. Prove that $a=0$ or $v=0$.

*Proof*.

Case 1: Suppose $a=0$. By the property of scalar multiplication in a vector space, we have $av=0\cdot v=0$.

Case 2: Suppose $a\neq 0$. Since $a\in\mathbb{F}$, $a$ will have a multiplicative inverse such that $a^{-1}a=1$. Then we have:
$$
\begin{align}
av & =0 \\
a^{-1}(av) & =a^{-1}\cdot 0 \\
(a^{-1}a)v & =0 \\
1v & =0 \\
v & =0
\end{align}
$$
Therefore, in the case that $a\neq 0$, we must have $v=0$.

>[!question] Problem 3
>Suppose $v,w \in V$. Explain why there exists a unique $x \in V$ such that $v+3x=w$.

*Proof.* Suppose that we have $x=\frac{1}{3}(w-v)$. Then we have:
$$
\begin{align}
v+3x & =v+3\left( \frac{1}{3}(w-v) \right) \\[2ex]
	 & =v+3\left( \frac{1}{3} \right)\cdot (w-v) \\[2ex]
	 & = v+(w-v) \\[2ex]
	 & =w
\end{align}
$$
which proves existence. To show uniqueness, suppose that there is some $y\in V$ such that $v+3y=w$. Then
$$
\begin{align}
v+3y & =v+3x \\
3y & =3x \\
y & =x
\end{align}
$$
proving uniqueness.


> [!question] Problem 5
> The empty set is not a vector space. The empty set fails to satisfy only one of the requirements listed in the definition of a vector space. Which one?

The empty set fails because it does not have an additive identity; there is no element $0\in V$ such that $v+0=v$ for $v\in V$.

Why does the multiplicative identity not fail? There are technically no counterexamples for which $1v=v$ fails, so the property is satisfied vacuously. However, the additive identity requires a specific zero element in the set.