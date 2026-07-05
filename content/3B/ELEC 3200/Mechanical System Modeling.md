---
title: Mechanical System Modeling
tags:
  - mech2210
date: 2025-03-06
aliases:
  - mechanical system modeling
---
## Two-Cart System

![[Mechanical System Modeling.png|417]]

Applying Newton's second law to the two carts gives:
$$
M_{1} \frac{d^{2}x_{1}(t)}{dt^{2}}=f(t)-K(x_{1}(t)-x_{2}(t))-F\left( \frac{dx_{1}(t)}{dt}-\frac{dx_{2}(t)}{dt} \right)
$$
and
$$
M_{2} \frac{d^{2}x_{2}(t)}{dt^{2}}=K(x_{1}(t)-x_{2}(t))+F\left( \frac{dx_{1}(t)}{dt}-\frac{dx_{2}(t)}{dt} \right)
$$
In matrix form:
$$
\begin{bmatrix}
M_{1} & 0 \\
0 & M_{2}
\end{bmatrix}\begin{bmatrix}
\ddot{x}_{1} \\
\ddot{x}_{2}
\end{bmatrix}+\begin{bmatrix}
F & -F \\
-F & F
\end{bmatrix}
\begin{bmatrix}
\dot{x}_{1} \\
\dot{x}_{2}
\end{bmatrix}+
\begin{bmatrix}
K & -K \\
-K & K
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix}=
\begin{bmatrix}
1 \\
0
\end{bmatrix}f
$$

In state-space form:
$$
\mathbf{x}=\begin{bmatrix}
x_{1} \\
\dot{x}_{1} \\
x_{2} \\
\dot{x}_{2}
\end{bmatrix}, \quad \mathbf{ u}=f
$$
And:
$$
\begin{align} 
\mathbf{A} & =\begin{bmatrix}
0 & 1 & 0 & 0 \\
-\frac{k}{m_{1}} & -\frac{F}{m_{1}} & \frac{k}{m_{1}} & \frac{F}{m_{1}} \\
0 & 0 & 0 & 1 \\
\frac{k}{M_{2}} & \frac{F}{M_{2}} & -\frac{k}{M_{2}} & -\frac{F}{M_{2}}
\end{bmatrix}
\\[2ex]

\mathbf{B} & =\begin{bmatrix}
0 \\
\frac{1}{M_{1}} \\
0 \\
0
\end{bmatrix} \\[2ex]

\mathbf{C} & = \begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0
\end{bmatrix} \\[2ex]

\mathbf{D} & =[0]
\end{align}
$$
Which then lets us write our system as
$$
\begin{align}
\mathbf{\dot{x}}=\mathbf{Ax}+\mathbf{Bu} \\
\mathbf{y}=\mathbf{Cx}+\mathbf{Du}
\end{align}
$$
