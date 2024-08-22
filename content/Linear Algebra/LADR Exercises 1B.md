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

> [!question] Problem 6
> Let $\infty$ and $-\infty$ denote two distinct objects, neither of which is in $\mathbb{R}$. Define an addition and scalar multiplication on $\mathbb{R} \cup \{ \infty,-\infty \}$ as you could guess from the notation. Specifically, the sum and product of two real numbers is as usual, and for $t\in \mathbb{R}$ define
> $$
> t\infty=
> \begin{cases}
>-\infty & \text{ if } t<0 \\
>0 & \text{ if } t=0 \\
>\infty & \text{ if }t>0
>\end{cases}
> \quad \text{and} \quad t(-\infty)=
> \begin{cases}
>\infty & \text{ if } t<0 \\
>0 & \text{ if } t=0 \\
>-\infty & \text{ if }t>0
>\end{cases}
> $$
> and
> $$
> \begin{align}
>t+\infty & =\infty+t=\infty+\infty=\infty \\
>t+(-\infty) & =(-\infty)+t=(-\infty)+(-\infty)=-\infty \\
>\infty+(-\infty) & =(-\infty)+(\infty)=0
>\end{align}
> $$
> With these operations of addition and scalar multiplication, is $\mathbb{R} \cup \{ \infty,-\infty \}$ a vector space over $\mathbb{R}$? Explain.

$\mathbb{R} \cup \{ \infty,-\infty \}$ is not a vector space over $\mathbb{R}$. If it were a vector space over $\mathbb{R}$, the distributive property would give us:
$$
\begin{align}
\infty & =(2+(-1))\infty \\
	 & =2\infty+(-1)\infty \\
	 & =\infty+(-\infty) \\
	 & =0
\end{align}
$$
$\infty=0$ is a contradiction because $\infty$ and $0$ are distinct elements by definition, since the zero vector must be unique.

> [!question] Problem 7
> Suppose $S$ is a non-empty set. Let $V^{S}$ denote the set of functions from $S$ to $V$. Define a natural addition and scalar multiplication on $V^{S}$, and show that $V^{S}$ is a vector space with these definitions.





> [!question] Problem 8
> Suppose $V$ is a real vector space.
> - The *complexification* of $V$, defined by $V_{\mathbb{C}}$, equals $V\times V$. An element of $V_{\mathbb{C}}$ is an ordered pair $(u,v)$, where $u,v\in V$, but we write this as $u+iv$.
> - Addition on $V_{\mathbb{C}}$ is defined by
>$$
>(u_{1}+iv_{1})+(u_{2}+iv_{2})=(u_{1}+u_{2})+i(v_{1}+v_{2}) 
>$$
> for all $u_{1},v_{1},u_{2},v_{2}\in V$.
> - Complex scalar multiplication on $V$ is defined by
>$$
>(a+bi)(u+iv)=(au-bv)+i(av+bu)
>$$
>for all $a,b\in \mathbb{R}$ and all $u,v \in V$.
>  
>Prove that with the definitions of addition and scalar multiplication as above, $V_{\mathbb{C}}$ is a complex vector space.
> 
>*Think of $V$ as a subset of $V_{\mathbb{C}}$ by identifying $u\in V$ with $u+i0$. The construction of $V_{\mathbb{C}}$ from $V$ can then be thought of as generalizing the construction of $\mathbb{C}^{n}$ from $\mathbb{R}^{n}$ .*

