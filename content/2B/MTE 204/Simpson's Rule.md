---
title: Simpson's Rule
tags:
  - mte204
date: 2023-10-21
---
Simpson's rule aims to improve the approximation of the function in each interval by using higher order polynomials.

Simpson's 1/3 rule connects points using a quadratic function. First, a 2nd order Lagrange polynomial interpolation is done. After some algebraic manipulation (see textbook), the area for each interval is:
$$
\begin{align}
I  & \approx \frac{h}{3} [f(x_{0})+4f(x_{1})+f(x_{2})]  \\[3ex] 
 &  \approx \underbrace{ (b-a) }_{ \text{Width} } \; \underbrace{ \frac{f(x_{0})+4f(x_{1})+f(x_{2})}{6} }_{ \text{Average height} }
\end{align}
$$
(Recall that $h = \frac{b-a}{2}$).

### Composite Simpson's 1/3 Rule

For multiple intervals, Simpson's rule **requires an even number of intervals** or segments:
$$
I \approx (b-a)\frac{f(x_{0})+ 4\sum_{i=1,3,5}^{n-1}f(x_{i}) + 2 \sum_{j=2,4,6}^{n-2}f(x_{j})+f(x_{n})}{3n}
$$
In a more readable form:
$$
I = (b-a)\frac{f(x_{0})+4\sum f(x_{odd})+2\sum f(x_{even})+f(x_{n})}{3n}
$$

### Error/Accuracy

The error is:
$$
E_{a} = -\frac{(b-a)^{5}}{180n^4}\bar{f}^{4}
$$
where $\bar{f}^{4}$ is the average 4th derivative. Note that this is a function of $1 / n^{4}$, so doubling the number of intervals $n$ would reduce the error by a factor of $16$ or $n^{4}$.