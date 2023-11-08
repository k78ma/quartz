---
title: Numerical Differentiation
tags:
  - mte204
date: 2023-11-07
aliases:
---
Recall that any smooth function can be approximated by a Taylor series polynomial:
$$
f(x) = f(a) + f'(a)(x-a)+ \frac{f''(a)}{2!}(x-a)^{2} + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^{n} + R_{n}
$$

### Forward Difference
We can use the same concept as [[Newton's Divided-Difference]] with the Taylor series. For example, the forward Taylor series expansion can be written as:
$$
f(x_{i+1}) = f(x_{i})+f'(x_{i})h + \frac{f''(x_{i})}{2}h^{2} + \dots
$$
which can be solved for:
$$
f'(x_{i}) = \frac{f(x_{i+1})-f(x_{i})}{h} + \underbrace{ \frac{h}{2}f''(x_{i})+\frac{h^{2}}{3!}f^{3}(x_{i})+\dots }_{ \text{Higher order terms} }
$$
Since $h$ is very small ($h\ll 1$), we can neglect the higher order terms. The error is then:
$$
E \propto h = O(h)
$$
making this a first-order approximation of order $h$.

### Backward Difference
We can instead use a Taylor series for $i-1$ term:
$$
f(x_{i-1}) = f(x_{i})-f'(x_{i})h + \frac{f''(x_{i})}{2!} - \dots
$$
Solving gives
$$
f'(x_{i}) = \frac{f(x_{i})-f(x_{i-1})}{h} = \frac{\nabla f_{i}}{h}
$$
where the error is $O(h)$ and $\nabla f_{i}$ is referred to as the first backward difference.

### Centered Difference
Here, we use two Taylor Series for the $i+1$ and $i-1$ terms:
$$
\begin{align}
f(x_{i+1})  & = f(x_{i})+f'(x_{i})h + \frac{f''(x_{i})}{2}h^{2} + \dots \\
f(x_{i-1})  & = f(x_{i})-f'(x_{i})h + \frac{f''(x_{i})}{2!} - \dots
\end{align}
$$
If we subtract, we have:
$$
f(x_{i+1}) = f(x_{i-1}) + 2f'(x_{i})h+ \frac{2f^{(3)}(x_{i})}{3!}h^{3} + \dots
$$
Solving for the first derivative:
$$
f'(x_{i}) = \frac{f(x_{i+1})-f(x_{i-1})}{2h} - \frac{f^{(3)}(x_{i})}{6!}h^{2} - \dots
$$
or:
$$
f'(x_{i}) = \frac{f(x_{i+1})-f(x_{i})}{2h} - O(h^{2})
$$
This is a second order method! Less error!