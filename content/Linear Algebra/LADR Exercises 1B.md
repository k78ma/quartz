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

Suppose that we have $x=\frac{1}{3}(w-v)$. Then we have:
$$

$$