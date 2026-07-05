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

A more important question: given $A$ and $\vec{b}$, for what vectors $\vec{x}$ does $A\vec{x}=\vec{b}$? In the above example, this would mean solving 3 equations as such:
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
x_{2}-x_{1} \\
x_{3}-x_{2}
\end{bmatrix}
= \begin{bmatrix}
b_{1} \\
b_{2} \\
b_{3}
\end{bmatrix}
$$
This is equivalent to solving
$$
\begin{align}
x_{1}=b_{1} \\
x_{2}-x_{1}=b_{2} \\
x_{3}-x_{2}=b_{3}
\end{align}
$$
Since we have $x_{1}=b_{1}$, we have $x_{2}=b_{1}+b_{2}$, so our solution is
$$
\vec{x}=\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}
=\begin{bmatrix}
b_{1} \\
b_{1}+b_{2} \\
b_{1}+b_{2}+b_{3}
\end{bmatrix}
$$
But this is in fact just
$$
x=\begin{bmatrix}
1 & 0 & 0 \\
1 & 1 & 0 \\
1 & 1 & 1 \\
\end{bmatrix}
\begin{bmatrix}
b_{1} \\
b_{2} \\
b_{3}
\end{bmatrix}
$$
or $\vec{x}=A^{-1}\vec{b}$. If the matrix $A$ is invertible, we can multiply both sides by $A^{-1}$ to find a unique $\vec{x}$ to solve $A\vec{x}=\vec{b}$.

We can say that $A$ represents a transform $\vec{x}\to \vec{b}$ that has an inverse transform $\vec{b} \to \vec{x}$, such that if $\vec{b}=\begin{bmatrix}1 \\  0 \\ 0\end{bmatrix}$ then we also have $\vec{x}=\begin{bmatrix}1 \\  0 \\ 0\end{bmatrix}$.

### A Second Example
Let's keep the same columns $\vec{u}$ and $\vec{v}$ but use a different $\vec{w}$ such that we have:
$$
C = \begin{bmatrix}
1 & 0 & -1 \\
-1 & 1 & 0 \\
0 & -1 & 1
\end{bmatrix}
$$
Then,
$$
C\vec{x}=\begin{bmatrix}
1 & 0 & -1 \\
-1 & 1 & 0 \\
0 & -1 & 1
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}
=\begin{bmatrix}
x_{1}-x_{3} \\
x_{2}-x_{1} \\
x_{3}-x_{2}
\end{bmatrix}
$$
Here, the system of equations is circular. Where before $Ax=0$ implied $x=0$, there are non-zero factors $x$ for which $Cx=0$, as this also happens for or any $\vec{x}$ where $x_{1}=x_{2}=x_{3}$. This is a significant difference, as we can’t just multiply both sides of $C\vec{x}=0$ by an inverse to find a non-zero solution $\vec{x}$.

The systems of equations encoded in $C\vec{x}=\vec{b}$ is:
$$
\begin{align}
x_{1}-x_{3}=b_{1} \\
x_{2}-x_{1}=b_{2} \\
x_{3}-x_{2}=b_{3}
\end{align}
$$
If we add these together we get:
$$
0=b_{1}+b_{2}+b_{3}
$$
This tells us that $C\vec{x}=b$ has a solution $\vec{x}$ only when the components of $\vec{b}$ sum to 0. In a physical system, this might imply that the system is stable as long as forces are balanced.