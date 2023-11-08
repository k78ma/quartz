---
title: Numerical Differentiation for 2nd Derivative
tags:
  - mte204
date: 2023-11-07
aliases:
---
For second derivatives $f''(x)$, calculating the change in slope requires 3 points:
$$
\begin{align}
f(x_{i+2})&=f(x_{i})+f'(x_{i})(2h)+ \frac{f''(x_{i})}{2!}(2h)^{2}+\dots \\
f(x_{{i+1}})&=f(x_i)+f'(x_{i})h + \frac{f''(x_{i})}{2!}h^{2}+ \dots
\end{align}
$$
If we subtract subtract the equations as $(1) - 2(2)$: 
$$
f(x_{i+2}) -2f(x_{i+1})=-f(x_{i})+f''(x_{i})h^{2} + \dots \\[3ex] 
$$
Solving for $f''(x_{i})$ gives:
$$
\begin{align}
\text{Forward:}  & \quad f''(x_{i}) = \frac{f(x_{i+2})-2f(x_{i+1})+f(x_{i})}{h^{2}} + O(h) \\[3ex] 
\text{Backward:}  & \quad f''(x_{i}) = \frac{f(x_{i})-2f(x_{i-1})+f(x_{i})}{h^{2}} + O(h) \\[3ex] 
\text{Centered:}  & \quad f''(x_{i}) = \frac{f(x_{i+1})-2f(x_{i})+f(x_{i-1})}{h^{2}} + O(h) 
\end{align}
$$

### Formulas
![[Numerical Differentiation for 2nd Derivative.png]]

![[Numerical Differentiation for 2nd Derivative-1.png]]

![[Numerical Differentiation for 2nd Derivative-2.png]]