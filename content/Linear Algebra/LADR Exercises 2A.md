---
title: LADR Exercises 2A
tags:
  - lin-alg
date: 2024-10-30
aliases:
  - ladr exercises 2a
---

> [!question] Problem 1
> Find a list of four distinct vectors in $\mathbb{F}^{3}$ whose span equals
> $$
> \{ (x,y,z)\in \mathbb{F}^{3}\, : \,x+y+z=0 \}
> $$

We can write $z$ as $-x-y$. Then, we just need linearly independent vectors of the form:
$$
(x,y,-x-y)
$$
We actually only need two to span the given set, since there are only two variables (this is a plane in 3D space).

Here are four distinct vectors:
$$
\begin{align}
(1,-1,0) \\
(1,0,-1) \\
(1,1,-2) \\
(-1,1,0)
\end{align}
$$
 Since $x+y+z-0$ is true any of the vectors individually, and any scalar multiplications of the individual vectors, any linear combination of these will always have $x+y+z$ as well.

> [!question] Problem 2
> Prove or give a counterexample: If $v_{1},v_{2}, v_{3}, v_{4}$ spans $V$, then the list
> $$
> v_{1}-v_{2}, v_{2}-v_{3}, v_{3}-v_{4}, v_{4}
> $$
> also spans $V$.

If $v_{1}, v_{2}, v_{3}, v_{4}$ span $V$, that means any $u\in V$ can be expressed as a linear combination of them. Then, we just need to show that we can produce $v_{1}, v_{2}, v_{3}, v_{4}$ with the linear combinations four given vectors; if we are able to produce each of these, we will be able to produce everything in the span as well.
$$
\begin{align}
v_{1} & =(v_{1}-v_{2})+(v_{2}-v_{3})+(v_{3}-v_{4})+v_{4} \\
v_{2} & =(v_{2}-v_{3})+(v_{3}-v_{4})+v_{4} \\
v_{3}  & =(v_{3}-v_{4})+v_{4} \\
v_{4} & =v_{4}
\end{align}
$$

> [!question] Problem 3
> Suppose $v_{1}, \dots, v_{m}$ is a list of vectors in $V$. For $k\in \{ 1,\dots,m \}$, let
> $$
> w_{k}=v_{1}+\dots+v_{k}
> $$
> Show that $\text{span}(v_{1},\dots,v_{m})=\text{span}(w_{1}, \dots, w_{m})$.



> [!question] Problem 4
> - (a) Show that a list of length one in a vector space is linearly independent if and only if the vector in the list is not $0$.
> - (b) Show that a list of length two in a vector space is linearly independent if and only if neither of the two vectors in the list is a scalar multiple of the other.



> [!question] Problem 5
> Find a number $t$ such that
> $$
> (3,1,4), (2,-3,5),(5,9,t)
> $$
> is not linearly independent in $\mathbb{R}^{3}$.



> [!question] Problem 6
> Show that the list $(2,3,1),(1,-1,2),(7,3,c)$ is linearly independent in $\mathbb{F}^{3}$ if and only if $c=8$.



> [!question] Problem 7
> - (a) Show that if we think of $\mathbb{C}$ as a vector space over $\mathbb{R}$, then the list $1+i, 1-i$ is linearly independent.
> - (b) Show that if we think of $\mathbb{C}$ as a vector space over $\mathbb{C}$, then the list $1+i, 1-i$ is linearly dependent.



> [!question] Problem 8
> Suppose $v_{1},v_{2},v_{3},v_{4}$ is linearly independent in $V$. Prove that the list
> $$
> v_{1}-v_{2}, v_{2}-v_{3}, v_{3}-v_{4}, v_{4}
> $$
> is also linearly independent.



> [!question] Problem 9
> Prove or give a counterexample: If $v_{1}, v_{2}, \dots, v_{m}$ is a linearly independent list of vectors in $V$, then
> $$
> 5v_{1}-4v_{2}, v_{2}, v_{3}, \dots, v_{m}
> $$
> is linearly independent.



> [!question] Problem 10
> Prove or give a counterexample: If $v_{1}, v_{2}, \dots, v_{m}$ is a linearly independent list of vectors in $V$ and $\lambda \in \mathbb{F}$, then $\lambda v_{1}, \lambda v_{2}, \dots, \lambda v_{m}$ is linearly independent.



> [!question] Problem 11
> Prove or give a counterexample: If $v_{1}, \dots, v_m$ and $w_{1}, \dots, w_{m}$ are linearly independent lists of vectors in $V$, then the list $v_{1}+w_{1}, \dots, v_{m}+w_{m}$ is linearly independent.



> [!question] Problem 12
> Suppose $v_{1}, \dots, v_{m}$ is linearly independent in $V$ and $w\in V$. Prove that if $v_{1}+w, \dots, v_{m}+w$ is linearly dependent, then $w\in \text{span}(v_{1}, \dots, v_{m})$.



> [!question] Problem 13
> Suppose $v_{1}, \dots, v_{m}$ is linearly independent in $V$ and $w\in V$. Show that
> $$
> v_{1}, \dots, v_{m}, w \text{ is linearly independent} \Longleftrightarrow  w \notin \text{span}(v_{1}, \dots, v_{m})
> $$


> [!question] Problem 14
> Suppose $v_{1}, \dots, v_{m}$ is a list of vectors in $V$. For $k\in \{ 1, \dots, m \}$, let
> $$
> w_{k}=v_{1}+\dots+v_{k}
> $$
> Show that the list $v_{1}, \dots, v_{m}$ is linearly independent if and only if the list $w_{1}, \dots, w_{m}$ is linearly independent.


> [!question] Problem 15
> Explain why there does not exist a list of six polynomials that is linearly independent in $\mathcal{P}_{4}(\mathbb{F})$.


> [!question] Problem 16
> Explain why no list of four polynomials spans $\mathcal{P}_{4}(\mathbb{F})$.


> [!question] Problem 17
> Prove that $V$ is infinite-dimensional if and only if there is a sequence $v_{1}, v_{2}, \dots$ of vectors in $V$ such that $v_{1}, \dots, v_{m}$ is linearly independent for every positive integer $m$.


> [!question] Problem 18
> Prove that $\mathbb{F}^{\infty}$ is infinite-dimensional.


> [!question] Problem 19
> Prove that the real vector space of all continuous real-valued functions on the interval $[0,1]$ is infinite-dimensional.


> [!question] Problem 20
> Suppose $p_{0}, p_{1}, \dots, p_{m}$ are polynomials in $\mathcal{P}_{m}(\mathbb{F})$ such that $p_{k}(2)=0$ for each $k\in \{ 0,\dots,m \}$. Prove that $p_{0}, p_{1}, \dots, p_{m}$ is not linearly independent in $\mathcal{P}_{m}(\mathbb{F})$.
