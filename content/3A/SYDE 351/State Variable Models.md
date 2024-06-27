---
title: State Variable Models
tags:
  - syde351
date: 2024-06-27
aliases:
  - state variable models
---
State-variable models are made of first-order differential equations, allowing linear algebra to be used to solve problems. They are formed by defining higher-order derivatives as a cascade of first-order derivatives.

Generally, we have various time derivatives of some function $x$:
$$
x(t), \dot{x}(t), \ddot{x}(t), \dddot{x}(t)
$$
We then use:
$$
\begin{align}
x_{1}(t) & =x(t) \\
x_{2}(t) & =\dot{x}_{1}(t) = \dot{x}(t) \\
x_{3}(t) & =\dot{x}_{2}(t)=\ddot{x}(t) \\
x_{4}(t) & =\dot{x}_{3}(t)=\dddot{x}(t)
\end{align}
$$
## Example: Mass-Spring-Damper
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

## Example: 3rd Order System
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