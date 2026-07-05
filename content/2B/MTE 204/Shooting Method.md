---
title: Shooting Method
tags:
  - mte204
date: 2023-11-16
aliases:
---
The shooting method treats a BVP problem as an initial condition problem. Reduce 2nd-order ODE to two 1st-order ODEs.

Recall our thermal rod example: ![[Boundary Value Problems with ODEs#BVP Example|BVP Example]]

We use the substitution method covered in [[2nd-order ODEs]] to convert
$$
\frac{ d^{2}T }{ dx^{2} } +h'(T_{a}-T)=0
$$
into two first-order ODEs:
$$
\begin{align}
\frac{ dT }{ dx }  & =z \\[3ex] 
\frac{ dz }{ dx }  & =h'(T-T_{a})
\end{align}
$$
To solve these, we require an initial value for $z$. In this case, we just guess a value, and say $z(0)=10$. 

Then, we can solve these equations using a normal method such as [[Runge-Kutta Method]]. Using a 4th-order RK method with $h=2$, we get $T(10)=168.3797$.

This doesn't match the boundary condition of $T(10)=200$, so we guess $z(0)=20$, which gives us $T(10)=285.8980$.

We can interpolate between these to find the right $z(0)$, such that:
$$
z(0)=10+\frac{20-10}{285.8980-168.3797}(200-168.3797)=12.6907
$$
This value can then be used to determine the correct solution.

![[Pasted image 20231116221822.png|560]]

