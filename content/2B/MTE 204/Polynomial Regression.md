---
title: Polynomial Regression
tags:
  - mte204
date: 2023-10-19
---
We extend least squares criterion to fit polynomials with higher orders.

For example, a second order polynomial:
$$
y = a_{0} + a_{1}x + a_{2}x^{2} + e
$$
In this case, the sum of squares of residuals would be:
$$
S_{r} = \sum_{i=1}^{n}(y_{i} -a_{0}-a_{1}x_{i}-a_{2}x_{i}^{2})^{2}
$$
Taking the derivative with respect to the coefficients:
$$
\begin{align}
\frac{ \partial S_{r} }{ \partial a_{0} } &= -2\sum(y_{i}-a_{0}-a_{1}x_{i} - a_{2}x_{i}^{2}) \\[3ex] 
\frac{ \partial S_{r} }{ \partial a_{1} } &= -2\sum x_{i}(y_{i}-a_{0}-a_{1}x_{i} - a_{2}x_{i}^{2}) \\[3ex] 
\frac{ \partial S_{r} }{ \partial a_{1} } &= -2\sum x_{i}^{2}(y_{i}-a_{0}-a_{1}x_{i} - a_{2}x_{i}^{2})
\end{align}
$$
Setting these equal to $0$ and rearranging gives:
$$
\begin{align}
na_{0} + \left( \sum x_{i} \right)a_{1}  + \left( \sum x_{i}^{2} \right)a_{2}& = \sum y_{i} \\[3ex] 
\left( \sum x_{i} \right)a_{0} + \left( \sum x_{i}^{2} \right)a_{1}  +  \left( \sum x_{i}^{3} \right)a_{2} & = \sum x_{i}y_{i} \\[3ex] 
\left( \sum x_{i} \right)a_{0} + \left( \sum x_{i}^{3} \right)a_{1}  +  \left( \sum x_{i}^{4} \right)a_{2} & = \sum x_{i}^{2}y_{i}
\end{align}
$$

We can rewrite this into form:
$$
[A] 
\begin{Bmatrix}
a_{0} \\
a_{1} \\
a_{2}
\end{Bmatrix}
=
\begin{Bmatrix}
b
\end{Bmatrix}
$$
which we can then solve with a method like [[Gauss-Seidel]] or [[Gaussian Elimination]].

Note that this extends to polynomials of any order $m$ as long as the $m$ is less than the number of data points $n$.

So, the steps are:
1. Calculate the $[A]$ matrix and $\{b\}$ vectors
2. Solve the linear equations for coefficients $a_{0}, a_{1}, a_{2}$
3. Calculate the coefficient of determination, $r^{2}$
4. Plot the fitted function with experimental data to verify curve fit.