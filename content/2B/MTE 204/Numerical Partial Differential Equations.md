---
title: Numerical Partial Differential Equations
tags:
  - mte204
date: 2023-12-06
aliases:
---
For a function $u$ that depends on $x$ and $y$, the partial derivative of $u$ with respect to $x$ at some point $(x,y)$ is:
$$
\frac{ \partial u }{ \partial x } =\lim_{ \Delta x \to 0 } \frac{u(x+\Delta x, y)-u(x,y)}{\Delta x}
$$
And the partial derivative with respect to $y$ is:
$$
\frac{ \partial u }{ \partial y } = \lim_{ \Delta y \to 0 } \frac{u(x,y+\Delta y)-u(x,y)}{\Delta y}
$$

For ODEs, integration yields a constant of integration ($C_{1}, C_{2}$, etc). For PDEs, integration yields functions.
$$
\begin{align}
\frac{ \partial z(x,t) }{ \partial t } & =3t^{2} \\[3ex] 
z(x,t) & =t^{3}+f(x)
\end{align}
$$
It is possible to find a solution to a PDE, but often challenging to find the solution that satisfies boundary conditions. MTE 204 focuses on 2nd order linear PDEs. Linear means the dependent variable and all partial derivatives occur linearly in a PDE. This is written as:
$$
A\frac{ \partial^{2}u }{ \partial x^{2} } + B\frac{ \partial^{2}u }{ \partial xy } + C\frac{ \partial^{2}u }{ \partial y^{2} } +D=0
$$
where $A, B$ and $C$ are functions of $x$ and $y$. $D$ is a function of $x, y, u, \partial u / \partial x$ and $\partial u / \partial y$.

2nd order linear PDEs in two variables can be classified as:
- [[Elliptic Equations]]
- [[Parabolic Equations]]
- [[Hyperbolic Equations]]

These equations are common to many engineering analyses, such as heat transfer and fluid mechanics, vibrations and acoustics, mechanics, electro-magnetics, and quantum mechanics.

