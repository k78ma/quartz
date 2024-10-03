---
title: LADR Exercises 1C
tags:
  - lin-alg
date: 2024-09-11
aliases:
  - ladr exercises 1c
---
>[!question] Problem 1
>For each of the following subsets $S$ of $\mathbb{F}^{3}$, determine whether it is a subspace of $\mathbb{F}^{3}$.
>- (a) $\{ (x_{1},x_{2},x_{3}) \}\in \mathbb{F}^{3}\, : \,x_{1}+2x_{2}+3x_{3}=0$
>- (b) $\{ (x_{1},x_{2},x_{3}) \}\in \mathbb{F}^{3}\, : \,x_{1}+2x_{2}+3x_{3}=4$
>- (c) $\{ (x_{1},x_{2},x_{3}) \}\in \mathbb{F}^{3}\, : \,x_{1}x_{2}x_{3}=0$
>- (d) $\{ (x_{1},x_{2},x_{3}) \}\in \mathbb{F}^{3}\, : \,x_{1}=5x_{3}$

**1(a)**
The zero vector in $\mathbb{F}^{3}$ is $(0,0,0)$. Since we have
$$
0+2(0)+3(0)=0,
$$
this zero vector also exists in the subset.

For addition, suppose we have $u,v\in S$ such that $u=(u_{1},u_{2},u_{3})$ and $v=(v_{1},v_{2},v_{3})$. Then, let's say we have:
$$
\begin{align}
w & =u+v \\
(w_{1},w_{2},w_{3}) & =(u_{1}+v_{1}, u_{2}+v_{2}, u_{3}+v_{3})
\end{align}
$$
For closure under addition, we need to have $w\in S$. So we check:
$$
\begin{align}
w_{1}+2w_{2}+3w_{3} & = (u_{1}+v_{1})+2(u_{2}+v_{2})+3(u_{3}+v_{3}) \\
	 & = (u_{1}+2u_{2}+3u_{3})+(v_{1}+2v_{2}+3v_{3}) \\
	 & =0+0 \\
	 & =0
\end{align}
$$
Thus, $w=u+v$ satisfies the condition for belonging in $S$, so we have closure under addition.

For scalar multiplication, let's say we have $\lambda \in \mathbb{F}$ and $u\in S$ such that:
$$
\lambda u=(\lambda u_{1}, \lambda u_{2}, \lambda u_{3})
$$
To check whether $\lambda u \in S$ for closure of scalar multiplication, we check
$$
(\lambda u_{1})+2(\lambda u_{2})+3(\lambda u_{3})=\lambda(u_{1}+2u_{2}+3u_{3})=\lambda(0)=0
$$
Thus, $\lambda u$ satisfies the condition for belonging in $S$, so we have closure under scalar multiplication as well. 

**1(b)**
This subset is not a subspace because the zero vector of $\mathbb{F}^{4}$ is not in it:
$$
0+2(0)+3(0)\neq 4
$$
**1(c)**
The zero vector exists in the subspace, since $(0,0,0)$ has $0\cdot 0 \cdot 0 =0$. However, the additive identity is not valid since for some $u, v\in S$, we do not always have
$$
(u_{1}+v_{1})(u_{2}+v_{2})(u_{3}+v_{3})=0
$$
For example, $(1,1,0)$ and $(0,1,1)$ both belong in the subset, but their sum $(1,2,1)$ does not.

**1(d)**
The zero vector/additive identity for $\mathbb{F}^{3}$ exists in the subspace, since $(0,0,0)$ satisfies $x_{1}=5x_{3}$ with $0=5(0)$.

Closure under addition holds. For some $u, v \in S$ we have
$$
\begin{align}
w & =u+v \\
(w_{1}, w_{2}, w_{3}) & =(u_{1}+v_{1}, u_{2}+v_{2}, u_{3}+v_{3})
\end{align}
$$
then, $w \in S$ if $w_{1}=5w_{3}$, which we can show with
$$
\begin{align}
w_{1} & =5w_{3} \\
u_{1}+v_{1} & =5(u_{3}+v_{3}) \\
u_{1}+v_{1} & =5u_{3}+5v_{3}
\end{align}
$$
For scalar multiplication, we have
$$
\lambda u=(\lambda u_{1}, \lambda u_{2}, \lambda u_{3})
$$
which satisfies the closure property because
$$
\begin{align}
\lambda u_{1}=5(\lambda u_{3}) \\
\lambda u_{1} = \lambda(5u_{3})
\end{align}
$$


>[!question] Problem 2
>Verify all assertions about subspaces in Example 1.35.

This is done in [[Subspaces#Examples]].


>[!question] Problem 3
>Show that the set of differentiable real-valued functions $f$ on the interval $(−4, 4)$ such that $f'(-1)=3f(2)$ is a subspace of $\mathbb{R}^{(-4,4)}$.

 $\mathbb{R}^{(-4, 4)}$  is the set of functions from $(0,3)$ to $\mathbb{R}$. The zero function in $\mathbb{R}^{(-4,4)}$ is $f(x)=0$, which is differentiable on $(0,3)$. We also have:
$$
\begin{align}
f'(-1) & =0 \\
3f(2) & =3(0)=0
\end{align}
$$
Thus, the zero function in $\mathbb{R}^{(-4,4)}$ is contained in $V$.

Next, for addition, if $f,g\in V$, then $f$ and $g$ are differentiable real-valued functions. So, $f+g$ must also be differentiable. Then:
$$
(f+g)'(-1)=f'(-1)+g'(-1)=3f(2)+3g(2)=3(f(2)+g(2))=3(f+g)(2)
$$
from which we can conclude that $V$ is closed under addition.

For scalar multiplication, if $f\in V$ for any $\lambda \in \mathbb{R}$, then $f$ is differentiable real-valued functions. So, $\lambda f$ is differentiable too. Moreover,
$$
(\lambda f)'(-1)=\lambda f'(-1)=\lambda(3f)(2)=3(\lambda f)(2)
$$
This shows $V$ is closed under scalar multiplication.

Thus, we've shown that $V$ shares the same zero function/additive identity, is closed under addition, and is closed under scalar multiplication.


> [!question] Problem 4
> Suppose $b\in \mathbb{R}$. Show that the set of continuous real-valued functions $f$ on the interval $[0, 1]$ such that $\int_{0}^{1}f  =b$ is a subspace of $\mathbb{R}^{[0,1]}$ if and only if $b=0$.

If the set $V$ is a subspace of $\mathbb{R}^{[0,1]}$, then for any $f\in V$, we have $\int_{0}^{1} f \,=b$. For $V$ to be a subspace, any $kf$, where $k\in \mathbb{R}$, must also be in $V$. Hence
$$
\begin{align}
b & =\int_{0}^{1}(kf)   \\[2ex]
 & = k \int_{0}^{1} f \\[2ex] 
	 & =kb
\end{align}
$$
which only happens if $b=0$.

If $b=0$, then for any $f,g\in V$ and $\lambda \in \mathbb{R}$, we have
$$
\int_{0}^{1} (f+g) \,= \int_{1}^{0} f +\int_{1}^{0} g=0+0=0
$$
which satisfies closure under addition, $f+g\in V$. Note that $f+g$ is a continuous real-valued function since $f$ and $g$ are.

Similarly,
