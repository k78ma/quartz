---
title: Gauss-Seidel
tags:
  - mte204
date: 2023-10-12
---
Gauss-Seidel is an iterative method for solving [[Systems of Linear Equations]] – use initial guesses and then converge on a solution. This is better for large numbers of equation. Furthermore, the effects of round-off error are reduced as it is only associated with the current iteration and does not accumulate over the solutions steps.

### Method
Let's use the $3\times 3$ system:
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
1. Initial values
	- Guess initial values for the unknowns ($x_{i}$), such as:
$$
\begin{align}
x_{1}=0.0 \\
x_{2}=0.0 \\
x_{3}=0.0
\end{align}
$$

2. Solve for $x$ values
	- Express equations in an explicit form by isolating each variable.
$$
\begin{align}
\text{Row \#1:} & \quad x_{1} = \frac{1}{a_{11}}[b_{1}-a_{12}x_{2}-a_{13}x_{3}] \\[3ex]
\text{Row \#2:} & \quad x_{2} = \frac{1}{a_{22}}[b_{2}-a_{21}x_{1}-a_{23}x_{3}] \\[3ex]
\text{Row \#2:} & \quad x_{3} = \frac{1}{a_{33}}[b_{3}-a_{31}x_{2}-a_{32}x_{2}]
\end{align}
$$
3. Solve for new $x_{n}$ values using values from the previous steps.

4. Repeat until the convergence criterion is met. this is basically just $x_{new}-x_{old} / x_{new}$.
$$
|\epsilon_{a,i}| = \left| \frac{x_{i}^{j} - x_{i}^{j-1}}{x_{i}^{j}} \right| \times 100\% < \epsilon_{s}
$$

### Notes
- Diagonal terms must not be $0$ to avoid division by zero
	- Apply pivoting if required to move equations and avoid division by zero
- Convergence is not guaranteed in all cases.

### Example
Let's say we have the system:
$$
\begin{align}
2x_{1}+x_{2}+x_{3}&=3 \\
x_{1}+2x_{2}-x_{3}&=6 \\
x_{1}-x_{2}+3x_{3} &= -4
\end{align}
$$
Guess initial values:
$$
\begin{align}
x_{1}^{0}=1.0 \\
x_{2}^{0}=1.0 \\
x_{3}^{0}=1.0
\end{align}
$$
Rearranging (refer to equations (6), (7), (8)) to get:
$$
\begin{align}
x_{1}&=\frac{1}{2}[3-x_{2}-x_{3}] \\[3ex]
x_{2}&=\frac{1}{2}[6-x_{1}+x_{3}] \\[3ex]
x_{3}&=\frac{1}{3}[-4-x_{1}+x_{2}]
\end{align}
$$
Then, the first iteration is:
$$
\begin{align}
x_{1}^{1}&=\frac{1}{2}[3-1-1]=0.5 \\[3ex] 
x_{2}^{1}&=\frac{1}{2}[6-0.5+1]=3.25 \\[3ex]
x_{3}^{1}&=\frac{1}{3}[-4-0.5+3.25]=-0.41\bar{6}
\end{align}
$$
Note here that $x_{2}^{1}$ is immediately using the $x_{1}^{1}$ calculated value, not using the old value of $x_{1}$.

Full iterations:
![[iterations.png]]

