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

#### 1(a)
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
$$For closure under addition, we need to have $w\in S$. So we check:
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

#### 1(b)
This subset is not a subspace because the zero vector of $\mathbb{F}^{4}$ is not in it:
$$
0+2(0)+3(0)\neq 4
$$
#### 1(c)



>[!question] Problem 2
>Verify all assertions about subspaces in Example 1.35.

This is done in [[Subspaces#Examples]].

>[!question] Problem 3
>Show that the set of differentiable real-valued functions $f$ on the interval $(−4, 4)$ such that $f'(-1)=3f(2)$ is a subspace of $\mathbb{R}^{(-4,4)}$.

