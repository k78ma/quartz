---
title: "Multivariable & Partial Chain Rule"
tag:
date: 2023-08-19
draft:
---

Standard chain rule for $y=f(x)$ and $x=g(t)$:
$$
\frac{ dy }{ dt } = \frac{ dy }{ dx } \frac{ dx }{ dt } 
$$
For a function with two variable, $z=f(x,y)$, there are two cases

### Case 1:
Compute $\frac{ dz }{ dt }$ for $z = f(x,y), x=g(t), y=h(t)$.

This is analogous to the standard chain rule; we are going to compute an ordinary derivative since $z$ would be a function of $t$ is we substitute in for $x$ and $y$. The chain rule is:
$$
\frac{ dz }{ dt } = \frac{ \partial f }{ \partial x } \frac{ dx }{ dt } + \frac{ \partial f }{ \partial y } \frac{ dy }{ dt } 
$$
Basically, we differentiate $f$ with respect to each variable in it and then multiply each of these by the derivative of that variable with respect to $t$, then add.

Special sub-case of Case 1:
$$
z=f(x,y), \quad y=g(x)
$$
In this case the chain rule for $\frac{ dz }{ dt }$ becomes:
$$
\begin{align}
\frac{ dz }{ dx } &= \frac{ \partial f }{ \partial x } \frac{dx}{dx}+\frac{ \partial f }{ \partial y } \frac{dy}{dx} \\
&= \frac{ \partial f }{ \partial x } + \frac{ \partial f }{ \partial y } \frac{dy}{dx}
\end{align}
$$
### Case 2:
Compute $\frac{ \partial z }{ \partial s }$ and $\frac{ \partial z }{ \partial t }$ for $z=f(x,y)$, $x=g(s,t)$, $y=h(s,t)$.

In this case if we were to substitute in for $x$ and $y$, we would get $z$ as a function of $s$ and $t$; this is why we have to compute partial derivatives here and that there are two of them.

Thus, we have:
$$
\begin{align}
\frac{ \partial z }{ \partial s } &= \frac{ \partial f }{ \partial x } \frac{ \partial x }{ \partial s } + \frac{ \partial f }{ \partial y } \frac{ \partial y }{ \partial s }   \\
\frac{ \partial z }{ \partial t } &= \frac{ \partial f }{ \partial x } \frac{ \partial x }{ \partial t } + \frac{ \partial f }{ \partial y }\frac{ \partial y }{ \partial t }   
\end{align}
$$
Test test