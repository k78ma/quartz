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


> [!note] Mathematical tool: Inverse of a diagonal matrix
> Recall that the inverse of a diagonal matrix is given by:
> $$
> \begin{bmatrix}
> a & 0 \\
> 0 & b
> \end{bmatrix} ^{-1} = \begin{bmatrix}
> \frac{1}{a} & 0 \\
> 0 & \frac{1}{b}
> \end{bmatrix}
> $$

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
& = C(sI-A)^{-1}B + D
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
|  & |  &  & | \\
v_{1} & v_{2} & \dots & v_{n} \\
| & | &  & |
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
Note that the dynamics become decoupled and are trivial to solve.

Let $z=V^{-1}x$ such that $x=Vz$. Then:
$$
\dot{z} = V^{-1}x = V^{-1}Ax = V^{-1}V \Lambda V^{-1}x = \Lambda V^{-1}x = \Lambda z
$$
Then:
$$
\dot{z} = \Lambda z
$$
such that
$$
\begin{align}
\dot{z}_{1}  & = \lambda_{1}z_{1} \quad \Longrightarrow \quad z_{1}(t) = e^{\lambda_{1}t}z_{1}(0) \\
\dot{z}_{2}  & = \lambda_{2}z_{2} \quad \Longrightarrow \quad z_{2}(t) = e^{\lambda_{2}t}z_{2}(0) \\
 & \quad   \vdots \\
\dot{z}_{n}  & = \lambda_{n}z_{n} \quad \Longrightarrow \quad z_{n}(t) = e^{\lambda_{n}t}z_{n}(0)
\end{align}
$$
Then:
$$
\begin{align}
x(t) = Vz(t)  & = \begin{bmatrix}
| &  & | \\
v_{1} & \dots & v_{n} \\
| &  & |
\end{bmatrix} \begin{bmatrix}
z_{1}(t) \\
\vdots \\
z_{n}(t)
\end{bmatrix} \\[2ex] 
     & = \sum_{i=1}^{n}z_{i}(t)v_{i}\\[2ex] 
 & = \sum_{i=1}^{n} e^{\lambda_{i}(t)}z_{i}(0) v_{i}
\end{align}
$$
## Eigenvalue Stability

> [!definition] Eigenvalue stability
> An eigenvalue $\lambda$ of $A$ is stable if $\lambda \in \mathbb{C}^{-}$ and unstable if $\lambda \notin \mathbb{C}^{-}$.

Example:
$$
\dot{x} = \frac{1}{3}\begin{bmatrix}
4 & 5 \\
10 & -1
\end{bmatrix}x
$$
Then:
$$
\begin{align}
\lambda_{1}  & = -2, v_{1} = \begin{bmatrix}
-1 \\
2
\end{bmatrix} \\
\lambda_{2}  & =3 , v_{2} = \begin{bmatrix}
1 \\
1
\end{bmatrix}
\end{align} \quad \Longrightarrow \quad  x(t) = e^{\lambda_{1}(t)}z_{1}(0)v_{1}+e^{\lambda_{2}t}z_{2}(0)v_{2}
$$
and $x(0)=z_{1}(0)v_{1}+z_{2}(0)v_{2}$.

Let's look at some possible initial conditions:
- Case 1:
$$
\begin{align}
 & z_{2}(0)=0, z_{1}(0)\neq 0 \quad \Longrightarrow \quad x(0)=z_{1}(0)v_{1}  \\
  \implies &  x(t) = e^{\lambda_{1}t}z_{1}(0)v_{1} \\
 \implies & x(t) \text{ never escapes } \text{span}(v_{1}) \\
\implies & \lim_{ t \to \infty } x(t) = 0 \text{ because } \lambda_{1} \text{ is stable}
\end{align}
$$
- Case 2:
$$
\begin{align}
 & z_{1}(0)=0, z_{2}(0)\neq 0 \quad \Longrightarrow \quad x(0)=z_{2}(0)v_{2}  \\
  \implies &  x(t) = e^{\lambda_{2}t}z_{2}(0)v_{2} \\
 \implies & x(t) \text{ never escapes } \text{span}(v_{2}) \\
\implies & \lim_{ t \to \infty } x(t) = \infty \text{ because } \lambda_{2} \text{ is stable}
\end{align}
$$
- Case 3:
$$
\begin{align}
 & z_{1}(0)\neq0, z_{2}(0)\neq 0 \quad \Longrightarrow \quad x(0)=z_{1}(0)v_{1}+z_{2}(0)v_{2}  \\
  \implies &  x(t) = e^{\lambda_{1}t}z_{1}(0)v_{1}+e^{\lambda_{2}t}z_{2}(0)v_{2} \\
 \implies & x(t) \text{ goes to 0 along } \text{span}(\lambda_{1}) \text{ and } \infty \text{ along } \text{span}(\lambda_{2})  \\
\end{align}
$$

Essentially, we've decomposed some state space $x$ into its eigenvector components, which allows each of them to be decoupled/independent. $z$ is just $x$ expressed in eigenvector coordinates, where each $z_{i}$ is the strength of motion along eigenvector $v_{i}$. The stability of the system depends on if the eigenvectors $\lambda_{i} \in \mathbb{C}$ .