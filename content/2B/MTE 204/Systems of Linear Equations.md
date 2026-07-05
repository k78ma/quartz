---
title: Systems of Linear Equations
tags:
  - mte204
date: 2023-10-11
---
We seek values $x_{1}, x_{2}, \dots, x_{n}$ that satisfy multiple linear equations.
Linear equations have no powers (exponents) on $x$, no products on $x$.

We need the same number of equations and unknowns ($n \times n$ matrix for $[A]$).

General form:
$$
\begin{align}
a_{11}x_{1}+a_{12}x_{2} + \dots + a_{1n}x_{n}=b_{1} \\
a_{21}x_{1}+a_{22}x_{2} + \dots + a_{2n}x_{n}=b_{2} \\
\dots \\
a_{n1}x_{1}+a_{n2}x_{2} + \dots + a_{nn}x_{n}=b_{n}
\end{align}
$$
where
$$
\begin{align}
a_{i}, b_{i} &= \text{constants} \\
x_{i} &= \text{unknowns} \\
n &= \text{\# of equations, \# of unknowns}
\end{align}
$$
In matrix form:
$$
[A]_{n\times n}\{X\}_{n\times_{1}} = \{B\}_{n\times_{1}}
$$
where $\{\}$ is used to denote a column vector.