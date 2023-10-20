---
title: Newton's Divided Difference
tags:
  - mte204
date: 2023-10-19
---
### Linear Interpolation

The simplest form of interpolation is linear – connect two data points with a straight line.

We can use slope/similar triangles to solve this. For some $x_{0} < x < x_{1}$
$$
\frac{f_{1}(x)-f(x_{0})}{x-x_{0}} = \frac{f(x_{1})-f(x_{0})}{x_{1}-x_{0}}
$$
Rearranging:
$$
f_{1}(x) = f(x_{0})+ \frac{f(x_{1})-f(x_{0})}{x_{1}-x_{0}}(x-x_{0})
$$
*The 1 in $f_{1}(x)$ refers to first-order.

![[Newton's Divided-Difference.png|328]]


### Quadratic Interpolation
If there are 3 data points, we instead use a 2nd order fit:
$$
\begin{align}
f_{2}(x) &= b_{0} + b_{1}(x-x_{0})+b_{2}(x-x_{0})(x-x_{1})
\end{align}
$$
Here, we basically have:
$$
\begin{align}
a_{0}  & = b_{0} - b_{1}x_{0}+b_{2}x_{0}x_{1} \\
a_{1}  & = b_{1} - b_{2}x_{0} - b_{2}x_{1} \\
a_{2}  & = b_{2} \\[3ex] 

f(x) &= a_{0}+a_{1}x+a_{2}x^{2}
\end{align}
$$
To determine the values of the coefficients, we use:
$$
\begin{align}
b_{0}  & = f(x_{0})\\[3ex] 
b_{1}  & = \frac{f(x_{1})-f(x_{0})}{x_{1}-x_{0}} \\[3ex] 
b_{2}  & = \frac{\frac{f(x_{2})-f(x_{1})}{x_{2}-x_{1}}-\frac{f(x_{1})-f(x_{0}) }{x_{1}-x_{0}}}{x_{2}-x_{0}}
\end{align}
$$
![[Newton's Divided-Difference-1.png]]


