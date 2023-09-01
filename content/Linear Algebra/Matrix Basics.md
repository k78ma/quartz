---
title: Matrix Basics
tags:
  - lin-alg
date: 2023-08-29
---

Let's say we have vectors $\vec{u}, \vec{v}, \vec{w}$ such that
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
We can create a matrix $A$ with the above vectors in its columns:
$$
A = \begin{bmatrix}
1 & 0 & 0 \\
-1 & 1 & 0 \\
0 & -1 & 1
\end{bmatrix}
$$
A linear combination $x_{1}\vec{u}+x_{2}\vec{v}+x_{3}\vec{w} = b$ can be expressed as:
$$
A\vec{x} = \begin{bmatrix}
1 & 0 & 0 \\
-1 & 1 & 0 \\
0 & -1 & 1
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}
= \begin{bmatrix}
x_{1} \\
-x_{1}+x_{2} \\
-x_{2}+x_{3}
\end{bmatrix}
$$
The product of a matrix and a vector is a combination of the columns of the matrix. When we say $x_{1}\vec{u}+x_{2}\vec{v}+x_{3}\vec{w}=b$, we're thinking about multiplying numbers be vectors. When we say $A\vec{x}=\vec{b}$, we're thinking about multiplying a matrix (whose columns are $\vec{u}, \vec{v}, \vec{w}$) by the numbers.
