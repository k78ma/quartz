---
title: Quadratic Form
tags:
  - lin-alg
date: 2026-10-11
aliases: quadratic form
---
Given a [[Bilinear Forms|bilinear form]] $B(x,y)$ such that
$$
B:\mathbb{R}^{n} \times \mathbb{R}^{n} \to \mathbb{R}
$$
and the corresponding $n\times n$ matrix is symmetric, we define the so-called quadratic form by substituting $y=x$ as follows:
$$
Q(x) = B(x,x)
$$
Thus, a quadratic form is a function
$$
Q:\mathbb{R}^{n} \to \mathbb{R}
$$
In matrix form, a quadratic form can be given as
$$
Q(x)=x^{T}Ax
$$
where $A$ is a symmetric matrix.

## Equivalent quadratic forms
Two quadratic forms $Q_{1}$ and $Q_{2}$ are said to be the equivalent if they can be obtained from each other through a change of variable. That is, two quadratic forms with matrices $A$ and $B$ are equivalent if and only if there exists an invertible matrix $P$ such that
$$
B=P^{T}AP
$$
Thus, the two quadratic forms represent the same function from $\mathbb{R}^{n}$ to $\mathbb{R}$.