---
title: Least Squares Regression
tags:
  - mte204
date: 2023-10-19
---
Least-squares regression seeks to minimze the residual (or error) between data points and corresponding points on the curve (trend line).

Consider the equation of a straight line:
$$
y = \underbrace{ a_{0} }_{ \text{intercept} } + \underbrace{ a_{1} }_{ \text{slope} }x + \underbrace{ e }_{ \text{error} }
$$
Rearranging, we would have:
$$
e = y- a_{0} - a_{1}x
$$
A common strategy would be to minimize the **sum of squares of the residuals**, such as:
$$
S_{r} = \sum_{i=1}^{n}e^{2}_{i} = \sum_{i=1}^{n}(y_{i, \text{measured}} - y_{i, \text{model}})= \sum_{i=1}^{n}(y_{i} -a_{0}-a_{1}x_{i})^{2}
$$
### Least Squares Regression Formulation
We differentiate the sum of residuals with respect to the coefficients:
$$
\begin{align}
\frac{ \partial S_{r} }{ \partial a_{0} } &= -2\sum(y_{i}-a_{0}-a_{1}x_{i}) \\[3ex] 
\frac{ \partial S_{r} }{ \partial a_{1} } &= -2\sum[(y_{i}-a_{0}-a_{1}x_{i})x_{i}]
\end{align}
$$
Setting the derivatives equal to zero will minimize $S_{r}$:
$$
\begin{align}
0 &  = \sum y_{i} - \sum a_{0} -\sum a_{1}x_{i}\\[3ex] 
0  & = \sum y_{i} - \sum a_{0}x_{i} -\sum a_{1}x_{i}^{2} \\
\end{align}
$$
Since $\sum a_{0} = na_{0}$, where $n$ is the number of data points, we can express the equations as a set of simultaneous linear equations with two unknowns:
$$
\begin{align}
na_{0} + \left( \sum x_{i} \right)a_{1}  & = \sum y_{i} \\[3ex] 
\left( \sum x_{i} \right)a_{0} + \left( \sum x_{i}^{2} \right)a_{1}  & = \sum x_{i}y_{i}
\end{align}
$$

\Thus, we can solve for $a_{0}, a_{1}$:

>[!info] Least Square Regression Equations
>$$
>a_{1} = \frac{n \sum x_{i}y_{i} - \sum x_{i} \sum y_{i}}{n \sum x_{i}^{2} - \left( \sum x_{i} \right)^{2}} \\[3ex] 
>a_{0} = \bar{y} - a_{1}\bar{x}
>$$
>where $\bar{y}, \bar{x}$ are the means of $y, x$
