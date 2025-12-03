---
title: State Space Models
tags:
  - mte484
date: 2025-10-20
aliases: state space models
---
## Definition
An LTI state space model of a system is a model of the form:
$$
\begin{align}
\dot{x} = Ax + Bu \quad   & / \quad  x^{+}=Ax+Bu \\[2ex] 
y=Cx+Du \quad  &  / \quad  y = Cx+Du
\end{align}
\quad  \quad (\ast  \ast  )
$$
such that for any initial condition $x(t=0)=x_{0}$ and any input signal $u(t)$ / $u[k]$, the system output is equal to the output $y(t)$ / $y[k]$ of the equations $(\ast \ast )$  above.

## Example: Cart
Cart with applied force , mass  and damping due to friction $D\dot{y}$:

![[State Space Models-20251020114609073.png|529]]

Newton's 2nd Law gives
$$
M\ddot{y} = u-D\dot{y}
$$
We will put this in a "standard" form which requires only 1st order derivates of our variables (i.e., a first order *vector* ODE). This standard form has many advantages for stability analysis and control design. It's called a **state space** model or representation.

As our equation is a 2nd order ODE, to write it as a first order ODE we will need 2 variables (known as states).

One way to do this:
$$
\begin{align}
x_{1} := y \\
x_{2}:=\dot{y}
\end{align}
\quad , \quad  x = \begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix}
$$
Then:
$$
\begin{align}
\dot{x_{1}}  & = \dot{y} = x_{2} \\[2ex]
\dot{x_{2}} & = \ddot{y} = \frac{1}{M}(u-D\dot{y})= \frac{1}{M}(u-Dx_{2}) = -\frac{D}{M}x_{2} + \frac{1}{M}u
\end{align}
$$
More compactly:
$$
\dot{x} = \begin{bmatrix}
\dot{x_{1}} \\
\dot{x_{2}}
\end{bmatrix}= \underset{ =:A }{ \begin{bmatrix}
0 & 1 \\
0 & -\frac{D}{M}
\end{bmatrix} }\underset{ =:x }{ \begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix} } + \underset{ =:B }{ \begin{bmatrix}
0 \\
\frac{1}{M}
\end{bmatrix} }u \quad \Longrightarrow \quad  \dot{x}=Ax+Bu
$$
Also,
$$
y=x_{1} \quad \Longrightarrow \quad y=\underset{ =:C }{ \begin{bmatrix}
1 & 0
\end{bmatrix} }\begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix} + \underset{ =:D }{ 0 }u \quad \Longrightarrow \quad y=Cx+Du
$$
Thus, we can arrive at the **standard state space representation** for LTI systems:
$$
\boxed{
\begin{align}
\dot{x} = Ax + Bu \quad   & / \quad  x^{+}=Ax+Bu \\[2ex] 
y=Cx+Du \quad  &  / \quad  y = Cx+Du
\end{align}
}
$$
where $A,B,C,D$ are constant matrices.

Note: State space representations are NOT unique!

For example, we could instead have
$$
\begin{align}
x_{1} & :=2y \\[2ex]
x_{2} & :=3\dot{y}-y \\[2ex]
\implies \dot{x}  & = \begin{bmatrix}
\dot{x_{1}} \\
\dot{x_{2}}
\end{bmatrix} = \begin{bmatrix}
 \frac{1}{3} & \frac{2}{3} \\
-\left( \frac{1}{6}+ \frac{D}{2M} \right) & -\left( \frac{1}{3} +\frac{D}{M}\right)
\end{bmatrix} x + \begin{bmatrix}
0 \\
\frac{3}{M}
\end{bmatrix}u\\[2ex] 
y & = \begin{bmatrix}
\frac{1}{2} & 0
\end{bmatrix}x + 0u
\end{align}
$$

## State Space → Frequency Domain
We have
$$
\begin{align}
\dot{x} = Ax + Bu \\
y = Cx+Du
\end{align}
$$
Taking the Laplace transform gives us
$$
\begin{align}
sX = AX+BU \\
Y = CX+DU
\end{align}
$$
Finding the transfer functions for the first equation:
$$
\begin{align}
(sI-A)X  & = BU \\
X  & = (sI-A)^{-1} BU
\end{align}
$$
Substituting into the equation for $Y$:
$$
\begin{align}
Y  & = C(sI-A)^{-1}BU + DU \\
 & = \underbrace{ [C(sI-A)^{-1}B+D] }_{ T_{uy} }U 
\end{align}
$$
So we can write $Y(s)=T_{uy}(s)U(s)$ where $T_{uy}(s)=[C(sI-A)^{-1}B+D]$, allowing us to convert from state space to frequency domain.

## Frequency Domain → State Space
Let $T_{uy}$ be real, rational, and proper. Then a state space **realization** (or just realization) of that $T_{uy}$ is an LTI state space model of the form
$$
\begin{align}
\dot{x} = Ax+Bu \\
y=Cx+Du
\end{align}
$$
such that $C(sI-A)^{-1}B+D=T_{uy}(s)$.

Note: State space realizations are NOT unique!

