---
title: Cramer's Rule
tags:
  - mte203
date: 2023-10-11
---
Cramer's rule is a formula for the solution of a set of linear equations. It's mostly used for a small systems ($n = 2, n=3$), as higher numbers becomes computationally expensive/complex to implement.

The system is formulated in matrix form:

$$
\begin{align}
[A]\{x\} &= \{b\} \\[3ex]
\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}
\begin{Bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{Bmatrix}
&=
\begin{Bmatrix}
b_{1} \\
b_{2} \\
b_{3}
\end{Bmatrix}
\end{align}
$$
Cramer's rule then states:
$$
x_{1} = \frac{\begin{vmatrix}
b_{1} & a_{12} & a_{13} \\
b_{2} & a_{22} & a_{23} \\
b_{3} & a_{32} & a_{33}
\end{vmatrix}}{D}
$$
where $D$ is the [[Determinant]] of $[A]$.

Basically, you replace column 1 values of $A$ with $\begin{Bmatrix}B\end{Bmatrix}$, calculate the determinant of the top and use the determinant of $A$ on the bottom.

- For $x_{2}$, you would replace column 2 of $A$ with $\{B\}$
- For $x_{3}$, you would replace column 3 of $A$ with $\{B\}$