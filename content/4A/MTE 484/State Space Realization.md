---
title: State Space Realization
tags:
  - mte484
date: 2025-10-22
aliases: state space realization
---
Let $T_{uy}$ be real, rational, and proper. Then a state space **realization** (or just realization) of that $T_{uy}$ is an LTI state space model of the form
$$
\begin{align}
\dot{x} = Ax+Bu \\
y=Cx+Du
\end{align}
$$
such that $C(sI-A)^{-1}B+D=T_{uy}(s)$.

Note: State space realizations are NOT unique!
### Example
Suppose we have a transfer function
$$
\begin{align}
T_{uy}(s)  & = \frac{9s^{2}+34s+29}{(s+1)(s+2)(s+3)} = \frac{2}{s+1} + \frac{3}{s+2} + \frac{4}{s+3} \\[2ex] 
     & = \begin{bmatrix}
\frac{1}{s+1} & \frac{1}{s+2} & \frac{1}{2+3}
\end{bmatrix}\begin{bmatrix}
2 \\
3 \\
4
\end{bmatrix} \\[2ex] 
     & =\begin{bmatrix}
1 & 1 & 1
\end{bmatrix} \begin{bmatrix}
\frac{1}{s+1} & 0 & 0  \\
 0&  \frac{1}{s+2}  & 0 \\
 0&0  & \frac{1}{s+3}
\end{bmatrix}\begin{bmatrix}
2 \\
3 \\
4
\end{bmatrix} \\[2ex] 
& = \begin{bmatrix}
1 & 1 & 1
\end{bmatrix} \begin{bmatrix}
s+1 & 0 & 0 \\
0 & s+2 & 0 \\
0 & 0 & s+3
\end{bmatrix}^{-1} \begin{bmatrix}
2 \\
3 \\
4
\end{bmatrix} \\[2ex] 
& = \underset{ C }{ \begin{bmatrix}
1 & 1 & 1
\end{bmatrix} }\left(\underset{ sI }{ \begin{bmatrix}
s & 0 & 0 \\
0 & s & 0 \\
0 & 0 & s
\end{bmatrix} }- \underset{ A }{ \begin{bmatrix}
-1 & 0 & 0 \\
0 & -2 & 0 \\
0 & 0 & -3
\end{bmatrix} } \right)^{-1} \underset{ B }{ \begin{bmatrix}
2 \\
3 \\
4
\end{bmatrix} } + \underset{ D }{ 0 }  \\[2ex] 
& = C(sI-A)B + D
\end{align}
$$

Then, we can write
$$
\begin{align}
\dot{x} &  = \begin{bmatrix}
-1 & 0 & 0 \\
 0& -2 & 0   \\
 0&0  & -3
\end{bmatrix}x +\begin{bmatrix}
2 \\
3 \\
4
\end{bmatrix}u \\[2ex] 
    y & = \begin{bmatrix}
 1 & 1 & 1
\end{bmatrix}x
\end{align}
$$

## General Approach
This approach works for any transfer function $T_{uy}(s)$ with only simple poles.

Assume $u(t)=0 \,\, \forall t \geq 0$, such that $\dot{x}=Ax$. We're just looking at the dynamics of the system without any control input. 

Assume $A$ is diagonalizable (sufficient condition: all eigenvalues of $A$ are distinct).

Let $\lambda_{1},\dots, \lambda_{n}$ be the eigenvalues of $A$.

Let $v_{1},\dots,v_{n}$ be their associated eigenvectors:
$$
\Lambda = \begin{bmatrix}
\lambda_{1} &  &  \\
 & \ddots  &  \\
 &  & \lambda_{n}
\end{bmatrix}, V = \begin{bmatrix}
1  & 1  &  & 1 \\
v_{1} & v_{2} & \dots & v_{n} \\
1 & 1 &  & 1
\end{bmatrix}
$$
Then:
$$
\begin{align}
A & =V \Lambda V^{-1} \quad  \text{[def. of diagonalizable]} \\
\Lambda  & = V^{-1}AV
\end{align}
$$
Suppose:
$$
\begin{align}
\dot{x}  = \begin{bmatrix}
\dot{x}_{1} \\
\vdots \\
x_{n}
\end{bmatrix}  & = \begin{bmatrix}
\lambda_{1} &  &  \\
 & \ddots  &  \\
 &  & \lambda_{n}
\end{bmatrix}\begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix} \\[2ex]
\dot{x}  & = \Lambda x
\end{align}
$$
Then:
$$
\begin{align}
\dot{x}_{1}  & = \lambda_{1}x_{1} \quad \Longrightarrow \quad x_{1}(t) = e^{\lambda_{1}t}x_{1}(0) \\
\dot{x}_{2}  & = \lambda_{2}x_{2} \quad \Longrightarrow \quad x_{2}(t) = e^{\lambda_{2}t}x_{2}(0) \\
 & \quad   \vdots \\
\dot{x}_{n}  & = \lambda_{n}x_{n} \quad \Longrightarrow \quad x_{n}(t) = e^{\lambda_{n}t}x_{n}(0)
\end{align}
$$
