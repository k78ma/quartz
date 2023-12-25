---
title: Vector Combinations
tags:
  - lin-alg
date: 2023-08-29
---

We can multiply vectors by scalars, add, and subtract.
Given vectors $\vec{u},\vec{v}, \vec{w}$, we can form the *linear combination* $x_{1}\vec{u}+x_{2}\vec{v}+x_{3}\vec{w} = \vec{b}$.

An example in $\mathbb{R}^3$ would be:
$$
\vec{u}= \begin{bmatrix}
1 \\
-1 \\
0
\end{bmatrix}, 
\vec{v}=\begin{bmatrix}
0 \\
1 \\
-1
\end{bmatrix},
\vec{w}=\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}
$$
- The collection of all multiples of $\vec{u}$ forms a line through the origin. 
- The collection of all multiples of $\vec{v}$ forms another line. 
- The collection of all combinations of $\vec{u}$ and $\vec{v}$ forms a plane.
- Taking all combinations of some vectors creates a *subspace*.