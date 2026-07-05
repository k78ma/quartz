---
title: Lagrange Multipliers
tags:
  - mte203
date: 2023-10-29
aliases:
---
Given some function $f(x,y,z)$ subject to some constraints
$$
g_{1}(x,y,z) = 0, \quad \dots \quad g_{n}(x,y,z)= 0
$$
the extrema of $f$ subject to the constraints satisfy the system 
$$
\nabla L =0
$$
where
$$
L(x,y,z, \lambda_{1}, \dots, \lambda_{n}) = f(x,y,z) + \lambda_{1}g_{1}(x,y,z) + \dots + \lambda_{n}g_{n}(x,y,z)
$$
This function is called the **Lagrangian** of the problem and the variables $\lambda_{i}$ for $i \in \{ 1,2, \dots, n \}$ are called Lagrange Multipliers.