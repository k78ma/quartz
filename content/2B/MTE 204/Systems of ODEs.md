---
title: Systems of ODEs
tags:
  - mte204
date: 2023-11-16
aliases:
---
Many practical problems in engineering and  science require the solution of a system of simultaneous ordinary differential equations, such as:
$$
\begin{align}
\frac{dy_{1}}{dx}  & = f_{1}(x, y_{1}, y_{2}, \dots, y_{n}) \\[3ex] 
\frac{dy_{2}}{dx}  & = f_{2}(x, y_{1}, y_{2}, \dots, y_{n}) \\[3ex] 
 & \vdots \\
\frac{dy_{n}}{dx}  & = f_{n}(x, y_{1}, y_{2}, \dots, y_{n})
\end{align}
$$
This requires that $n$ initial conditions be known at the starting value of $x$.  

The one-step methods we have investigated can be applied to solve systems ([[Euler's Method]], [[Heun's Method]], [[Runge-Kutta Method]]). We apply the one-step method for every equation, at each step, before proceeding to the next step.

#### Example
Solve the following set of differential equations using Euler's method, assuming that $x=0, y_{1}=4, y_{2}=6$. Integrate to $x=2$ with a step size of $0.5$.
$$
\frac{dy_{1}}{dx}= -0.5y_{1}, \quad \frac{dy_{2}}{dx}= 4-0.3y_{2}-0.1y_{1}
$$

Recall:
$$
y_{i+1}=y_{i}+f(x_{i}, y_{i})h
$$
Thus, we have:
$$
\begin{align}
y_{1}(0) & = 4 \\
y_{1}(0.5) & =4+[-0.5(4)]0.5=3  \\ \\
y_{2}(0) & = 6 \\
y_{2}(0.5) & =6+[4-0.3(6)-0.1(4)]0.5  = 6.9
\end{align}
$$
Note that $y_{1}(0) = 4$ is used in the second equation rather than $y_{1}(0.5) = 3$ computed with the first equation. We are using consistent values from the current step, to calculate the function values at the next step. 

Continuing the process:

![[Systems of ODEs.png|456]]
