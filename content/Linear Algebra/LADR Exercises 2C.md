---
title: LADR Exercises 2C
tags:
  - lin-alg
date: 2024-12-08
aliases:
  - ladr exercises 2c
---
> [!question] Problem 1
> Show that the subspaces of $\mathbb{R}^{2}$ are precisely $\{ 0 \}$, all lines in $\mathbb{R}^{2}$ containing the origin, and $\mathbb{R}^{2}$.

A subspace of $\mathbb{R}^{3}$ can have a basis of length 0, 1, 2.
- 0: The only basis of length 0 is $\{ 0 \}$.
- 1: Any basis of length 1 contains a single $x \in \mathbb{R}^{n}$. Note that $\text{span}(x)=\{ ax \in \mathbb{R}^{n}\, : \,a\in \mathbb{R} \}$, and hence bases of length $1$ are lines through the origin.
- 2: Any basis of length 2 is simply a basis of $\mathbb{R}^{2}$ and hence generates all $\mathbb{R}^{2}$ with its span.


> [!question] Problem 2
> Show that the subspaces of $\mathbb{R}^{3}$ are precisely $\{ 0 \}$, all lines in $\mathbb{R}^{3}$ containing the origin, all planes in $\mathbb{R}^{3}$ containing the origin, and $\mathbb{R}^{3}$.

A subspace of $\mathbb{R}^{3}$ can have a basis of length 0, 1, 2, 3.
- 0: The only basis of length 0 is $\{ 0 \}$.
- 1: Any basis of length 1 contains a single $x \in \mathbb{R}^{n}$. Note that $\text{span}(x)=\{ ax \in \mathbb{R}^{n}\, : \,a\in \mathbb{R} \}$, and hence bases of length $1$ are lines through the origin.
- 2: Any basis of length 2 contains two linearly independent $x,y\in \mathbb{R}^{n}$. Notice $\text{span}(x,y)=\{ ax+by\in \mathbb{R}^{n}\, : \,x,y\in \mathbb{R} \}$, hence bases of length 2 generate planes through the origin.
- 3: Any basis of length 3 is simply a basis of $\mathbb{R}^{3}$ and hence generates all $\mathbb{R}^{3}$ with its span.


> [!question] Problem 3
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p(6)=0 \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.

(a) The set $U$ consists of polynomials in $\mathcal{P}_4$ such that  $p(6)=0$. This gives a single constraint, so our basis needs 4 elements. A basis would be
$$
\{ x-6, (x-6)x, (x-6)x^{2}, (x-6)x^{3} \}
$$
which are linearly independent. Any linear combination of these would still be a member of $U$. Note that $\dim U=4$.

(b) We can simply add one element $q\notin U$, since we just need $\dim U=5$ ([[Linearly Independent List of the Right Length is a Basis|linearly independent list of the right length is a basis]]). We can add $1$, so that we have
$$
\{1, x-6, (x-6)x, (x-6)x^{2}, (x-6)x^{3} \}
$$

(c) We need $P_{4}(\mathbb{F})=U+W$ and $U\cap W=\{ 0 \}$. Based on (b) above, we can let $W=\{ c\, : \,c\in \mathbb{F} \}$, then $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$ by the previous part.


> [!question] Problem 4
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p''(6)=0 \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.

(a) The set $U$ consists of degree-4 polynomials such that $p''(6)=0$.
$$
\begin{align}
p(x) & =a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4} \\
p'(x) & =a_{1}+2a_{2}x+3x^{2}a_{3}+4x^{3}a_{4} \\
p''(x) & =2a_{2}+6a_{3}x+12a_{4}x^{2} \\
p''(6) & =2a_{2}+36a_{3}+432a_{4}
\end{align}
$$
Since $p''(6)=0$, we can write
$$
\begin{align}
2a_{2}+36a_{3}+432a_{4} =0 \\
a_{2}=-18a_{3}-216a_{4}
\end{align}
$$
This means that any $p \in U$ has the form
$$
\begin{align}
p(x) & = a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4} \\
p(x) & =a_{0}+a_{1}x+(-18a_{3}-216a_{4})x^{2}+a_{3}x^{3}+a_{4}x^{4}
\end{align}
$$
which gives us a basis of
$$
{ 1,x,-18x^{2}+x^{3}, -216x^{2}+x^{4} }
$$

(b) We just need to find an element of $\mathcal{P}_{4}(\mathbb{F})$ to $U$ that is not in $U$ already, because we already have $\dim U=4$. We can simply add $x^{2}$, since $\frac{d^{2}}{dx}(x^{2})=2\neq 6$. This gives us
$$
\{ x^{2},1,x,-18x^{2}+x^{3}, -216x^{2}+x^{4} \}
$$

(c) We can use $W=\text{span}(x^{2})$.

> [!question] Problem 5
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p(2)=p(5) \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.

(a) We can write $p(2)$ and $p(5)$ and equate them to each other:
$$
\begin{align}
a_{0}+2a_{1}+4a_{2}+8a_{3}+16a_{4} & =a_{0}+5a_{1}+25a_{2}+125a_{3}+625a^{4} \\
0 & =3a_{1}+21a_{2}+117a_{3}+609a_{4}
\end{align}
$$
This gives a constraint on the coefficients. We can solve the constraint explicitly for one variable:
$$
a_{1}=-7a_{2}-39a_{3}-203a_{4}
$$
Then we can re-write the original polynomial as:
$$
\begin{align}
p(x)  & = a_{0}+a_{1}x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4} \\
p(x) & = a_{0}+(-7a_{2}-39a_{3}-203a_{4})x+a_{2}x^{2}+a_{3}x^{3}+a_{4}x^{4}
\end{align}
$$
which means that any $p \in U$ has the form
$$
p(x) =a_{0}+a_{2}(x^{2}-7x)+a_{3}(x^{3}-39x)+a_{4}(x^{4}-203x)
$$
This results in a basis of:
$$
\{ 1,x^{2}-7x, x^{3}-39x , x^{4}-203x\}
$$
(b) We can add $x$
$$
\{ 1,x,x^{2}-7x, x^{3}-39x, x^{4}-203x \}
$$
(c) We can have $W=\text{span}(x)$.


> [!question] Problem 6
> - (a) Let $U=\{ p \in \mathcal{P}_{4}(\mathbb{F})\, : \,p(2)=p(5)=p(6)=0 \}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.




> [!question] Problem 7
> - (a) Let $U=\left\{  p \in \mathcal{P}_{4}(\mathbb{F})\, : \, \int_{-1}^{1} p =0  \right\}$. Find a basis of $U$.
> - (b) Extend the basis in (a) to a basis of $\mathcal{P}_{4}(\mathbb{F})$.
> - (c) Find the subspace $W$ of $\mathcal{P}_{4}(\mathbb{F})$ such that $\mathcal{P}_{4}(\mathbb{F})=U\oplus W$.



> [!question] Problem 8
> Suppose $v_{1}, \dots,v_{m}$ is linearly independent in $V$ and $w\in V$. Prove that
> $$
> \dim  \text{span}(v_{1}+w, \dots, v_{m}+w)\geq m-1
> $$



> [!question] Problem 9
> Suppose $m$ is a positive integer and $p_{0},p_{1}, \dots,p_{m}\in \mathcal{P}(\mathbb{F})$ are such that each $p_{k}$ has degree $k$. Prove that $p_{0}, p_{1}, \dots,p_{m}$ is a basis of $\mathcal{P}_{m}(\mathbb{F})$.



> [!question] Problem 10
> Suppose $m$ is a positive integer. For $0\leq k\leq m$, let
> $$
> p_{k}(x)=x^{k}(1-x)^{m-k}
> $$
> Show that $p_{0}, \dots,p_{m}$ is a basis of $\mathcal{P}_{m}(\mathbb{F})$.

