---
title: Basic State-Space Model Examples
tags:
  - elec3200
date: 2025-02-13
aliases:
  - basic state-space model examples
---
## Example 1
Find the state-space model for:
$$
\dddot{x}+a_{1}\ddot{x}+a_{2}\dot{x}+a_{3}x=u
$$
Since the highest order is $\dddot{x}$, we use $x, \dot{x}, \ddot{x}$ as state variables in a vector:
$$
\bar{x}=\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix}
$$
We can then write the derivative of $\bar{x}$ in terms of the state variables, which gives us a three equation system including the original equation we wanted to model:
$$
\dot{\bar{x}}=\begin{bmatrix}
\dot{x} \\
\ddot{x} \\
\dddot{x}
\end{bmatrix}=\begin{bmatrix}
0 & 1 & 0  \\
0 & 0 & 1 \\
-a_{3}  & -a_{2} & -a_{1}
\end{bmatrix}
\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix}+\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}u
$$
The first row gives:
$$
\dot{x}=\begin{bmatrix}
0 & 1 & 0
\end{bmatrix}
\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix} +0u = \dot{x}
$$
The second row gives:
$$
\ddot{x}=\begin{bmatrix}
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix} +0u= \ddot{x}
$$
The third row gives:
$$
\dddot{x}=\begin{bmatrix}
-a_{3} & -a_{2} & -a_{1}
\end{bmatrix}\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix} +1u
=-a_{3}x-a_{2}\dot{x}-a_{1}\ddot{x}+u
$$
## Example 2
