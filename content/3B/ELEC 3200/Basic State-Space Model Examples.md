---
title: Basic State-Space Model Examples
tags:
  - elec3200
date: 2025-02-13
aliases:
  - basic state-space model examples
---
## Basic Example
Find the state-space model for:
$$
\dddot{x}+a_{1}\ddot{x}+a_{2}\dot{x}+a_{3}x=u
$$
Since the highest order is $\dddot{x}$, we use $x, \dot{x}, \ddot{x}$ as state variables in a vector:
$$
\bar{x}=\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix}
$$
We can then write the derivative of $\bar{x}$ in terms of the state variables, which gives us a three equation system including the original equation we wanted to model:
$$
\dot{\bar{x}}=\begin{bmatrix}
\dot{x} \\
\ddot{x} \\
\dddot{x}
\end{bmatrix}=\begin{bmatrix}
0 & 1 & 0  \\
0 & 0 & 1 \\
-a_{3}  & -a_{2} & -a_{1}
\end{bmatrix}
\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix}+\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}u
$$
The first row gives:
$$
\dot{x}=\begin{bmatrix}
0 & 1 & 0
\end{bmatrix}
\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix} +0u = \dot{x}
$$
The second row gives:
$$
\ddot{x}=\begin{bmatrix}
0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix} +0u= \ddot{x}
$$
The third row gives:
$$
\dddot{x}=\begin{bmatrix}
-a_{3} & -a_{2} & -a_{1}
\end{bmatrix}\begin{bmatrix}
x \\
\dot{x} \\
\ddot{x}
\end{bmatrix} +1u
=-a_{3}x-a_{2}\dot{x}-a_{1}\ddot{x}+u
$$
## Mass-Spring-Damper
An example is the typical [[Dampened Spring Systems|mass-spring-damper system]]:
$$
\begin{align} \\
m \ddot{x}+c\dot{x}+kx & =f\\[2ex] 
\ddot{x}+\frac{c}{m}\dot{x}+\frac{k}{m}x & =\frac{f}{m} \\
\end{align}
$$
We define:
$$
\begin{align}
x_{1} & =x \\
x_{2} & =\dot{x}_{1}=\dot{x} \\
x_{3} & =\dot{x_{2}}=\ddot{x}
\end{align}
$$
Then, we can re-write the original equation as:
$$
\begin{align}
\dot{x}_{2}+\frac{c}{m}x_{2}+\frac{k}{m}x_{1} & =\frac{f}{m}\\[2ex] 
\dot{x}_{2} & =\frac{f}{m}-\frac{c}{m}x_{2}-\frac{k}{m}x_{1}
\end{align}
$$
Thus, we've reduced our original 2nd-order equation to two first-order equations:
$$
\begin{cases}
\dot{x}_{2} =\frac{f}{m}-\frac{c}{m}x_{2}-\frac{k}{m}x_{1}\\[2ex] 
\dot{x}_{1}=x_{2}
\end{cases}
$$
This is our state-variable model. The variables $x_{1}$ and $x_{2}$ are the *state variables*.

## 3rd Order System
A third order system:
$$
a_{3}\dddot{y}(t)+a_{2}\ddot{y}(t)+a_{1}\dot{y}(t)+a_{0}y(t)=f(t)
$$
Re-arrange so that highest order variable is isolated:
$$
\dddot{y}(t)=\frac{1}{a_{3}}[f(t)-a_{2}\ddot{y}(t)-a_{1}\dot{y}(t)-a_{0}y(t)]
$$
Since this is 3rd order, we expect three 1st-order ODEs to describe the system. 

We define
$$
\begin{align}
x_{1}(t) & =y(t) \\
x_{2}(t) & =\dot{x}_{1}(t) = \dot{y}(t) \\
x_{3}(t) & =\dot{x}_{2}(t)=\ddot{y}(t) \\
\dot{x}_{3}(t) & =\dddot{y}(t)
\end{align}
$$
Now, our state-variable model is::
$$
\begin{align} 
\dot{x}_{1}(t) & =x_{2}(t)\\[2ex]
\dot{x}_{2}(t) & =x_{3}(t)\\[2ex] 
\dot{x}_{3}(t) & =\frac{f(t)}{a_{3}}-\frac{a_{2}}{a_{3}}x_{3}(t)-\frac{a_{1}}{a_{3}}x_{2}(t)-\frac{a_{0}}{a_{3}}x_{1}(t)
\end{align}
$$
In **vector-matrix form**, we can write:
$$
\begin{bmatrix}
\dot{x}_{1} \\
\dot{x}_{2} \\
\dot{x}_{3}
\end{bmatrix}
=
\begin{bmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
-\frac{a_{0}}{a_{3}} & -\frac{a_{1}}{a_{3}} & -\frac{a_{2}}{a_{3}}
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}
+
\begin{bmatrix}
0 \\
0 \\
\frac{1}{a_{3}}
\end{bmatrix}
f(t)
$$
The output $y(t)=x_{1}(t)$ can also be described in matrix form:
$$
y(t)=\begin{bmatrix}
1  & 0 & 0
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}
+
\begin{bmatrix}
0
\end{bmatrix}
f(t)
$$
