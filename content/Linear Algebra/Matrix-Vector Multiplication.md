---
title: "Matrix-Vector Multiplication"
tag: lin-alg
date: 2023-08-20
draft:
---

How do we multiply matrix $A$ by $x$?
$$
\begin{bmatrix}
2 & 5 \\
1 & 3 \\
\end{bmatrix}
\begin{bmatrix}
1 \\
2
\end{bmatrix}
= \; ?
$$

### Method 1: Coefficients of a Linear Combination
Think about the entries of $x$ as coefficients for a linear combination of the column vectors of $A$, such that:
$$
\begin{bmatrix}
2 & 5 \\
1 & 3 \\
\end{bmatrix}
\begin{bmatrix}
1 \\
2
\end{bmatrix}
= 1\begin{bmatrix}
2 \\
1
\end{bmatrix}
+2\begin{bmatrix}
5 \\
3
\end{bmatrix}
= \begin{bmatrix}
12 \\
7
\end{bmatrix}
$$

### Method 2: Dot Product of Rows
Take the dot product of each row of $A$ with a vector $x$:
$$
\begin{bmatrix}
2 & 5 \\
1 & 3 \\
\end{bmatrix}
\begin{bmatrix}
1 \\
2
\end{bmatrix}
=
\begin{bmatrix}
2\cdot{1} + 5\cdot{2} \\
1\cdot 1 + 3 \cdot 2
\end{bmatrix}
=
\begin{bmatrix}
12 \\
7
\end{bmatrix}
$$
