---
title: Gauss-Seidel with Relaxation
tags:
  - mte204
date: 2023-10-12
---
#### Definition
This is a method of changing the convergence rate of [[Gauss-Seidel]] by including a relaxation parameter $\omega$. In general, you do:
$$
x_{n}^{new} = \omega x_{n}^{\text{GS}} + (1-\omega)x_{n}^{\text{old}}
$$
or:
$$
x_{n}^{i'} = \omega x_{n}^{i} + (1-\omega)x_{n}^{i-1}
$$
where $n$ is the variable number and $i$ is the iteration number.

Let's look at Row 1 for Gauss-Seidel:
$$
\begin{align}
x_{1}^{0}&=1.0 \quad (\text{Initial guess}) \\[3ex]
x_{1}^{1}&=\frac{1}{a_{11}}[b_{1}-a_{12}x_{2}^{0}-a_{13}x_{3}^{0}]
\end{align}
$$
Adding the relaxation parameter ($\omega$) to weight the previous and current values of $x_{1}$:
$$
x_{1}^{1'} = \omega x_{1}^{1} + (1-\omega)x_{1}^{0}
$$
So the previous row equations can also be written as:
$$
\begin{align}
\text{Row \#1:} & \quad x_{1}^{\text{new}} = \frac{\omega}{a_{11}}[b_{1}-a_{12}x_{2}-a_{13}x_{3}] + (1-\omega)x_{1} \\[3ex]
\text{Row \#2:} & \quad x_{2}^{\text{new}} = \frac{\omega}{a_{22}}[b_{2}-a_{21}x_{1}-a_{23}x_{3}] + (1-\omega)x_{2} \\[3ex]
\text{Row \#2:} & \quad x_{3}^{\text{new}} = \frac{\omega}{a_{33}}[b_{3}-a_{31}x_{2}-a_{32}x_{2}] + (1-\omega)x_{3}
\end{align}
$$
#### Parameter Settings
There are some cases for parameter settings:

- $\omega = 1.0$ - This is Gauss-Seidel, no relaxation
- $\omega < 1.0$ - Under-relaxation, slows convergence and controls divergence
- $\omega > 1.0$ - Over-relaxation, speeds convergence
	- Can become divergent when $\omega  > 2$ or close to $2$

The idea is that the new value is found by moving in the direction of $x$. The relaxation parameter controls the step that you take toward this.
![[Gauss-Seidel with Relaxation.png|296]]

Example with different parameter settings:
![[example.png]]