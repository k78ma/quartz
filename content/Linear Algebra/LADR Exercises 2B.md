---
title: LADR Exercises 2B
tags:
  - lin-alg
date: 2024-11-16
aliases:
  - ladr exercises 2b
---

> [!question] Problem 1
> Find all vector spaces that have exactly one basis

The only one is $\{ 0 \}$. If there is some nonzero vector $v$ in the basis, we can get a new basis by changing $v$ to $2v$.

> [!question] Problem 2
> Verify all of the assertions in 2.27.

Omitted – easy but tedious.

> [!question] Problem 3
> - **(a)** Find the basis of $U$, where $U$ is the subspace of $\mathbb{R}^{5}$ defined by
>  $$
> U=\{ (x_{1},x_{2},x_{3},x_{4},x_{5})\in \mathbb{R}^{5}\, : \,x_{1}=3x_{2} \text{ and } x_{3}=7x_{4} \} 
> $$
> - **(b)** Extend the basis in (a) to a basis of $\mathbb{R}^{5}$.
> - **(c)** Find a subspace $W$ of $\mathbb{R}^{5}$ such that $\mathbb{R}^{5}=U\oplus W$.

(a) We can parametrize the set as:
$$
(3x_{2},x_{2},7x_{4}, x_{4}, x_{5})
$$
which leads to choosing 
$$
(3,1,0,0,0), (0,0,7,1,0), (0,0,0,0,1)
$$
as a a basis; it is linearly independent and spans the space.

(b) We can extend by adding basis vectors for that place nonzero entries that are currently "missed" by our basis vectors.
$$
(1,0,0,0,0), (0,0,1,0,0)
$$
(c) $W=\text{span}((1,0,0,0,0), (0,0,1,0,0))$ by (b). We can show that $U\cap W=\{ 0 \}$ by considering $u\in U\cap W$ such that
$$
\begin{align}
a_{1}v_{1}+a_{2}v_{2}+a_{3}v_{3}=b_{1}v_{4}+b_{2}v_{5} \\
a_{1}v_{1}+a_{2}v_{2}+a_{3}v_{3}-b_{1}v_{4}-b_{2}v_{5}=0
\end{align}
$$
Since $v_{1},\dots,v_{5}$ are linearly independent, the only solution is where $a$'s and $b$'s are all zero, and so we have $U\cap W=\{ 0 \}$.


> [!question] Problem 4
> - **(a)** Find the basis of $U$, where $U$ is the subspace of $\mathbb{C}^{5}$ defined by
> $$
> U=\{ (z_{1},z_{2},z_{3},z_{4},z_{5}) \in \mathbb{C}^{5}\, : \,6z_{1}=z_{2} \text{ and } z_{3}+2z_{4}+3z_{5}=0 \}
> $$
> - (b) Extend the basis in (a) to a basis of $\mathbb{C}^{5}$ .
> - **(c)** Extend the basis $W$ of $\mathbb{C}^{5}$ such that $\mathbb{C}^{5}=U\oplus W$

(a) We can parametrize by writing $z_{1}=a$, which gives $z_{2}=6a$. We can also make $z_{4}=b$ and $z_{5}=c$ so $z_{3}=-2b-3c$. This gives:
$$
\begin{align}
(z_{1},z_{2},z_{3},z_{4},z_{5}) & =(a,6a,-2b-3c,b,c) \\
	 & =a(1,6,0,0,0)+b(0,0,-2,1,0)+c(0,0,-3,0,1)
\end{align}
$$
Thus the vectors corresponding forming our basis are
$$
v_{1}=(1,6,0,0,0), v_{2}=(0,0,-2,1,0), v_{3}=(0,0,-3,0,1)
$$
(b) We need vectors that are independent from the current basis (not in span of $U$). We can choose a vector where $z_{2}\neq 6z_{1}$ and a vector where $z_{3}\neq-2z_{4}-3z_{5}$. Thus, we can extend to $\mathbb{C}^{5}$ by adding
$$
(0,1,0,0,0), (0,0,1,0,0)
$$
(c) $W=\text{span}((0,1,0,0,0), (0,0,1,0,0))$.

> [!question] Problem 5
> Suppose $V$ is finite-dimensional and $U,W$ are subspaces of $V$ such that $V=U+W$. Prove that there exists a basis of $V$ consisting of vectors in $U\cup W$.


> [!question] Problem 6
> Prove or give a counterexample: If $p_{0}, p_{1}, p_{2}, p_{3}$ is a list in $\mathcal{P}_{3}(\mathbb{F})$ such that none of the polynomials $p_{0}, p_{1}, p_{2}, p_{3}$ has degree 2, then $p_{0}, p_{1}, p_{2}, p_{3}$ is not a basis of $\mathcal{P}_{3}(\mathbb{F})$.


> [!question] Problem 7
> Suppose that $v_{1},v_{2},v_{3},v_{4}$ is a basis of $V$. Prove that
> $$
> v_{1}+v_{2}, v_{2}+v_{3}, v_{3}+v_{4}, v_{4}
> $$
> is also a basis of $V$.


> [!question] Problem 8
> Prove or give a counterexample: If $v_{1},v_{2},v_{3},v_{4}$ is a basis of $V$ and $U$ is a subspace of $V$ such that $v_{1},v_{2}\in U$ and $v_{3} \notin U$ and $v_{4} \notin U$, then $v_{1},v_{2}$ is a basis of $U$.


> [!question] Problem 9
> Suppose $v_{1},\dots,v_{m}$ is a list of vectors in $V$. For $k\in \{ 1,\dots,m \}$, let
> $$
> w_{k}=v_{1}+\dots+v_{k}
>$$
> Show that $v_{1},\dots,v_{m}$ is a basis of $V$ if and only if $w_{1},\dots,w_{m}$ is a basis of $V$.



> [!question] Problem 10
> Suppose $U$ and $W$ are subspaces of $V$ such that $V=U\oplus W$. Suppose also that $u_{1},\dots,u_{m}$ is a basis of $U$ and $w_{1}, \dots, w_{n}$ is a basis of $W$. Prove that
>$$
> u_{1}, \dots, u_{m}, w_{1}, \dots, w_{n}
>$$
>is a basis of $V$.



> [!question] Problem 11
> Suppose $V$ is a real vector space. Show that if $v_{1}, \dots, v_{n}$ is a basis of $V$ (as a real vector space), then $v_{1},\dots, v_{n}$ is also a basis of the complexification $V_{\mathbb{C}}$ (as a complex vector space). 
> - See [[LADR Exercises 1B]] for the definition of complexification.