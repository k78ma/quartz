---
title: Boundary Value Problems with ODEs
tags:
  - mte204
date: 2023-11-16
aliases:
  - BVP
---
Previously, we examined IVPs, where all the initial conditions are specified at the same $x$ value and used to determine the constant of integration. For an $n$-th order equation, $n$ initial conditions are required.

Boundary value problems have conditions specified at different values of the independent variable. The values are often specified at extreme points or boundaries of the system (therefore called BVP). 

There are two general solutions
- [[Shooting Method]]
- [[Method of Finite Differences]]
#### BVP Example
Heat transfer from an uninsulated rod to ambient, with two thermal boundary conditions (one at each end of the rod):
$$
\frac{ d^{2}T }{ dx^{2} } +h'(T_{a}-T)=0
$$
With conditions:
$$
\begin{align}
T(0)=T_{1} \\
T(L)=T_{2}
\end{align}
$$
For $0\leq x \leq L$, $L=10 \text{ m}$:
- $T_{a}=20$
- $T_{1}=40$
- $T_{2}=200$
- $h'=0.01$ (Heat coefficient, not step size)

![[Boundary Value Problems with ODEs.png|424]]

