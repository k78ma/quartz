---
title: Linear Forms
tags:
  - lin-alg
date: 2026-10-11
aliases: linear forms
---
Let $n$ be a positive a positive integer. A function
$$
f:\mathbb{R}^{n} \to \mathbb{R}
$$
is a linear form (or linear functional) if there is a row-vector
$$
\mathbf{a} = \begin{bmatrix}
a_{1} & a_{2} & \dots & a_{n}
\end{bmatrix}, \quad  a_{i} \in  \mathbb{R}, \quad i=1,2,\dots n
$$
such that for any column vector $\mathbf{x}=\begin{bmatrix}x_{1} & x_{2} & \dots  & x_{n}\end{bmatrix}^{T} \in \mathbb{R}^{n}$, we have
$$
\begin{align*}
f(\mathbf{x}) &= \mathbf{a}\mathbf{x} \\[2ex] 
&= \begin{bmatrix}
a_{1} & a_{2} & \dots & a_{n}
\end{bmatrix} \begin{bmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{bmatrix} \\[2ex] 
&= a_{1}x_{1}+a_{2}x_{2}+a_{n}x_{n}
\end{align*}
$$

