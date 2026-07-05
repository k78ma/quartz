---
title: Multivariable State Vector
tags:
  - mte322
date: 2024-10-21
aliases:
  - multivariable state vector
---
In many dynamic processes, the state has to be described with multiple variables. For example, the state vector that describes airplane position and velocity is 6-dimensional:
$$
\begin{bmatrix}
x \\
y \\
z \\
\dot{x} \\
\dot{y} \\
\dot{z}
\end{bmatrix}
$$
Including velocity requires a 9-dimensional vector:
$$
\begin{bmatrix}
x \\
y \\
z \\
\dot{x} \\
\dot{y} \\
\dot{z} \\
\ddot{x} \\
\ddot{y} \\
\ddot{z}
\end{bmatrix}
$$
Assuming a constant acceleration dynamic model, we can describe the airplane state at time $n$ by motion equations:
$$
\begin{cases}
x_{n} = x_{n-1}+\dot{x}_{n-1}\Delta t+\frac{1}{2}\ddot{x}_{n-1}\Delta t^{2} \\[2ex] 
y_{n} = y_{n-1}+\dot{y}_{n-1}\Delta t+\frac{1}{2}\ddot{y}_{n-1}\Delta t^{2}\\[2ex] 
z_{n} =z_{n-1}+\dot{z}_{n-1}\Delta t+\frac{1}{2}\ddot{z}_{n-1}\Delta t^{2}\\[2ex] 
\dot{x}_{n} =\dot{x}_{n-1}+\ddot{x}_{n-1}\Delta t \\[2ex]
\dot{y}_{n}=\dot{y}_{n-1}+\ddot{y}_{n-1}\Delta t \\[2ex] 
\dot{z}_{n}=\dot{z}_{n-1}+\ddot{z}_{n-1}\Delta t \\[2ex] 
\ddot{x}_{n}=\ddot{x}_{n-1}\\[2ex] 
\ddot{y}_{n}=\ddot{y}_{n-1}\\[2ex] 
\ddot{z}_{n}=\ddot{z}_{n-1}
\end{cases}
$$
It is common practice to describe a multidimensional process with a single equation in matrix form. Represent them in matrix notation is much shorter and more elegant.