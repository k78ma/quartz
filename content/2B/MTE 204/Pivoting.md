---
title: Pivoting
tags:
  - mte204
date: 2023-10-11
---
Pivoting refers to rearranging the order of equations to avoid division by zero.
- Partial pivoting – moving rows so the largest coefficients are in the pivot (diagonal) positions
- Full pivoting – moving both rows and columns (not common, complicated to implement)

$$
\begin{bmatrix}
0 & 1 & 2 \\
0.01 & 3 & 3 \\
-10 & 7 & 1
\end{bmatrix}
\begin{Bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{Bmatrix}
=
\begin{Bmatrix}
1 \\
2 \\
5
\end{Bmatrix}
$$
Partial pivoting would interchange row 1 with row that has the largest coefficient value, then row 2, then row 3 to get:
$$
\begin{bmatrix}
-10 & 7 & 1 \\
0.01 & 3 & 3 \\
0 & 1 & 2
\end{bmatrix}
\begin{Bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{Bmatrix}
= \begin{Bmatrix}
5 \\
2 \\
1
\end{Bmatrix}
$$
Remember to pivot $B$ but not $x$ !

Partial pivoting helps avoid division by zero problems and round-off errors caused by small but non-zero pivot element values. Note that round‐off errors can be cumulative in Gaussian elimination since each result depends on previous results (error accumulates). This is an important issue for large numbers of equations.
