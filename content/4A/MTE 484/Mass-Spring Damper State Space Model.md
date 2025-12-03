---
title: Mass-Spring Damper State Space Model
tags:
  - mte484
date: 2025-10-20
aliases: mass-spring damper state space model
---
Suppose we have the following system:

![[State Space Models.png]]

where $y$ is the displacement of the spring from its natural rest length.

Newton's 2nd Law states that
$$
M\ddot{y} = u - ky-b\dot{y}
$$
Choosing states:
$$
\begin{align}
x_{1} := y \\
x_{2} := \dot{y}
\end{align}
$$
This then gives us:
$$
\begin{align}
\dot{x}_{1}&=\dot{y}=x_{2} \\[2ex]
\dot{x}_{2}&= \ddot{y} = \frac{1}{M}(u-kx_{1}-bx_{2}) \\[2ex] 
\implies y & = x_{1}
\end{align}
$$
Thus:
$$
\begin{align}
\dot{x} &  = \underbrace{ \begin{bmatrix}
0 & 1 \\
-\frac{k}{M}  & -\frac{b}{M}
\end{bmatrix} }_{ A }x + \underbrace{ \begin{bmatrix}
0 \\
\frac{1}{M}
\end{bmatrix} }_{ B }u \\[2ex] 
y  & = \underbrace{ \begin{bmatrix}
1 & 0
\end{bmatrix} }_{ C }x + \underbrace{ 0 }_{ D } u
\end{align}
$$
### Sub-xample: Extra State
What if we were to add an unnecessary extra state $x_{3}$?
$$
\dot{x}_{3} = 2x_{2}
$$
- Note that $x_{3}(t) = e^{2t}x_{3}(0)$ has unstable dynamics!
$$
\begin{align}
\dot{x} &  = \begin{bmatrix}
0 & 1 & 0 \\
-\frac{k}{M} & -\frac{b}{M} & 0 \\
0 & 0 & 2
\end{bmatrix} \begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix} + \begin{bmatrix}
0 \\
\frac{1}{M} \\
0
\end{bmatrix} u \\[2ex] 
y  & = \begin{bmatrix}
1 & 0 & 0
\end{bmatrix}x + 0u
\end{align}
$$

Thus, the dimension (number of states) of the state space model is not unique either!