---
title: Bilinear Forms
tags:
  - lin-alg
date: 2026-10-11
aliases:
  - bilinear forms
---
Let $n$ be a positive integer. A function $B: \mathbb{R}^{n}\times \mathbb{R}^{n}\to \mathbb{R}$ is said to be a bilinear form if there is an $n\times n$ matrix $A$ such that
$$
B(\mathbf{x}, \mathbf{y}) = \mathbf{x}^{T}A\mathbf{y}, \quad \quad  \mathbf{x},\mathbf{y} \in  \mathbb{R}^{n}
$$

The function $B$ is linear in argument separately, which is why we call them bilinear.

For $\mathbf{y}$ fixed, all $\mathbf{u}, \mathbf{v}\in \mathbb{R}^{n}$ , and any real constant $c$, linearity in the first argument means the following:
$$
\begin{align*}
B(\mathbf{u}+\mathbf{v}, \mathbf{y}) &= B(\mathbf{u}, \mathbf{y}) + B(\mathbf{v}, \mathbf{y}) \\[2ex] 
B(c \mathbf{u}, \mathbf{y}) &= cB(\mathbf{u}, \mathbf{y})
\end{align*}
$$

For $\mathbf{x}$ fixed, all $\mathbf{w}, \mathbf{z} \in \mathbb{R}^{n}$, and any real constant $c$, linearity in the second argument means the following:
$$
\begin{align*}
B(\mathbf{x}, \mathbf{w}+\mathbf{z}) &= B(\mathbf{x}, \mathbf{w}) + B(\mathbf{x}, \mathbf{z})  \\[2ex] 
B(\mathbf{x}, c \mathbf{w}) &= cB(\mathbf{x}, \mathbf{w})
\end{align*}
$$
