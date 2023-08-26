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
