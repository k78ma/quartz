---
title: Gram-Schmidt Process
tags:
  - lin-alg
date: 2026-10-12
aliases:
  - Gram-Schmidt
  - Gram-Schmidt process
---
The Gram-Schmidt process is an algorithm that constructs an orthogonal basis from a non-orthogonal basis.

For example, consider the basis $\{ a_{1}, a_{2} \}$ for the subspace $V=\text{span}\{ a_{1},a_{2} \}$, where
$$
a_{1} = \begin{bmatrix}
1 \\
-1
\end{bmatrix}, \quad a_{2}=\begin{bmatrix}
4 \\
6
\end{bmatrix}
$$
The Gram-Schmidt process involves 2 steps:
1. Set $v_{1}=a_{1}$
2. Find a vector $v_{2}$ in $V$ that's orthogonal to $v_{1}$. This can be achieved by computing
$$
\begin{align*}
v_{2}&=a_{2}-\text{proj}_{v_{1}}a_{2} \\[2ex] 
&= a_{2} - \frac{a_{2}\cdot v_{1}}{v_{1}\cdot v_{1}}v_{1}
\end{align*}
$$

![[Gram-Schmidt Process-1791859656829.webp]]

Notice that $v_{2}$ is written as a linear combination of $a_{1}(=v_{1})$ and $a_{2}$. This means that $v_{2} \in V$ and $v_{2} \perp v_{1}$. Moreover, $\text{span}\{a_{1}, a_{2}\} = V = \text{span}\{v_{1}, v_{2}\}$. The set $B=\{ v_{1},v_{2} \}$ is then an orthogonal basis for $V$.


