---
title: Method of Finite Differences
tags:
  - mte204
date: 2023-11-16
aliases:
---
Using this example problem: ![[Boundary Value Problems with ODEs#BVP Example|BVP Example]]

The finite difference method uses difference approximation for derivatives to generate a set of equations. For our equation for the example above:
$$
\frac{ d^{2}T }{ dx^{2} } +h'(T_{a}-T)=0
$$
Recall for second derivative, centered difference can be written as:
$$
f''(x_{i})=\frac{f(x_{i+1})-2f(x_{i})+f(x_{i}-1)}{h^{2}}
$$
Consider the finite divided difference approximation for the second derivative:
$$
\frac{d^{2}T}{dx^{2}}=\frac{T_{i+1}-2T_{i}+T_{i-1}}{\Delta x^{2}}
$$
Substituting:
$$
\frac{T_{i+1}-2T_{i}+T_{i-1}}{\Delta x^{2}} - h'(T_{i}-T_{a})=0
$$
And collecting terms:
$$
-T_{i-1}+(2+h'\Delta x^{2})T_{i}-T_{i+1}=h'\Delta x^{2}T_{a}
$$
Now we can solve this. Using a step size of 2, we have:

![[Method of Finite Differences.png|388]]

This gives us 4 interior nodes, such that:
$$
\begin{bmatrix}
2.04 & -1 & 0 & 0 \\
-1 & 2.04 & -1 & 0 \\
0 & -1 & 2.04 & -1 \\
0 & 0 & -1 & 2.04
\end{bmatrix}
\begin{Bmatrix}
T_{2} \\
T_{3} \\
T_{4} \\
T_{5}
\end{Bmatrix}
=
\begin{Bmatrix}
40.8 \\
0.8 \\
0.8 \\
200.8
\end{Bmatrix}
$$
Using a method such as [[Gauss-Seidel]], this solves to:
$$
\begin{align}
T_{2} & =65.9198 \\
T_{3} & =93.7785 \\
T_{4} & =124.5382 \\
T_{5} & =159.4795
\end{align}
$$
#### Discretization Concept
The concept behind FDM is to discretize complex geometries. For example, a fixed grid form:

![[Method of Finite Differences-1.png|444]]

This lets us calculate values at discrete points.

Limitations:
- Challenging to apply FDM to irregular or complex geometries.  
- Difficult to address unusual or complex boundary conditions.  
- Does not easily address different materials in the same analysis.