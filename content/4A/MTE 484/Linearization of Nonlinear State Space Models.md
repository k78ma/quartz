---
title: Linearization of Nonlinear State Space Models
tags:
  - mte484
date: 2025-12-03
aliases:
  - linearization of nonlinear state space models
  - region of attraction
---
How do we linearize about $(x_{e}, \overline{u})$, which is an equilibrium point?
$$
\begin{align}
\dot{x} = f(x,u) \\
y = g(x,u)
\end{align}
$$
We can approximate the nonlinear functions using a first-order Taylor expansion:
$$
\begin{align}
f(x,u) \approx f(x^{e}, \overline{u}) + \frac{ \partial f }{ \partial x } \Bigg|_{(x_{e}, \overline{u})} (x-x^{e}) + \frac{ \partial f }{ \partial u }\Bigg|_{(x_{e}, \overline{u})} (u-\overline{u}) \\[2ex]
g(x,u) \approx g(x^{e}, \overline{u}) + \frac{ \partial g }{ \partial x } \Bigg|_{(x_{e}, \overline{u})} (x-x^{e}) + \frac{ \partial g }{ \partial u }\Bigg|_{(x_{e}, \overline{u})} (u-\overline{u})
\end{align}
$$
Then, we can write it as a vector
$$
f(x,u) = \begin{bmatrix}
f_{1}(x,u) \\
\vdots \\
f_{n}(x,u)
\end{bmatrix}, \quad  x = \begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix}
$$
Then, we can write the Jacobians, which are the local slopes of the nonlinear system.
$$
\begin{align}
\frac{ \partial f }{ \partial x }  := \begin{bmatrix}
\frac{ \partial f_{1} }{ \partial x_{1} }  & \dots & \frac{ \partial f_{1} }{ \partial x_{n} }  \\
\vdots  & \ddots & \vdots \\
\frac{ \partial f_{n} }{ \partial x_{1} }  & \dots & \frac{ \partial f_{n} }{ \partial x_{n} }
\end{bmatrix}, \quad  \frac{ \partial f }{ \partial u } := \begin{bmatrix}
\frac{ \partial f_{1} }{ \partial u }  \\
\vdots \\
\frac{ \partial f_{n} }{ \partial u } 
\end{bmatrix} \\[2ex] 
\frac{ \partial g }{ \partial x } := \begin{bmatrix}
\frac{ \partial g }{ \partial x_{1} }  & \dots & \frac{ \partial g }{ \partial x_{n} }
\end{bmatrix}, \quad \frac{ \partial g }{ \partial u } := \frac{ \partial g }{ \partial u } 
\end{align}
$$

Re-visiting the pendulum from [[Nonlinear State Space Models]], where we have $n= \dim x=2$:
$$
\begin{align}
f  & = \begin{bmatrix}
f_{1} \\
f_{2}
\end{bmatrix} = \begin{bmatrix}
x_{2} \\
-\frac{g}{l}\sin x_{1} - \frac{D}{ml}x_{2} + \frac{1}{ml}u
\end{bmatrix} \\[2ex] 
g & = x_{1} \\[2ex] 
\frac{ \partial f }{ \partial x } &  = \begin{bmatrix}
\frac{ \partial f_{1} }{ \partial x_{1} }  & \frac{ \partial f_{1} }{ \partial x_{2} }  \\
\frac{ \partial f_{2} }{ \partial x_{1} }  & \frac{ \partial f_{2} }{ \partial x_{2} } 
\end{bmatrix} = \begin{bmatrix}
0 & 1 \\
-\frac{g}{l}\cos x_{1}   & -\frac{D}{ml}
\end{bmatrix} \\[2ex] 
\frac{ \partial f }{ \partial u }  &= \begin{bmatrix}
\frac{ \partial f_{1} }{ \partial u }   \\
\frac{ \partial f_{2} }{ \partial u } 
\end{bmatrix} = \begin{bmatrix}
0  \\
\frac{1}{ml}
\end{bmatrix} \\[2ex] 
\frac{ \partial g }{ \partial x }  & = \begin{bmatrix}
\frac{ \partial g }{ \partial x_{1} }  & \frac{ \partial g }{ \partial x_{2} } 
\end{bmatrix} = \begin{bmatrix}
1 & 0
\end{bmatrix} \\[2ex] 
\frac{ \partial g }{ \partial u }  & =0
\end{align}
$$
This will then give us
$$
\dot{x} = \cancel{ f(x^{e}, \overline{u}) } + \underbrace{ \begin{bmatrix}
0 & 1 \\
-\frac{g}{l}x^{e}_{1} & -\frac{D}{ml}
\end{bmatrix} }_{ A } \underbrace{ \begin{bmatrix}
x_{1}-x_{1}^{e} \\
x_{2}-x_{2}^{e}
\end{bmatrix} }_{ \Delta x } + \underbrace{ \begin{bmatrix}
0 \\
\frac{1}{ml}
\end{bmatrix} }_{ B } \underbrace{ (u-\overline{u}) }_{ \Delta u }
$$
- The first term is 0 because of the definition of an equilibrium point

So, if we define the deviation from the equilibrium point as $\Delta x = x-x^{e}$, we can write
$$
\dot{\Delta x} = \dot{(x-x^{e})} = \dot{x} = A\Delta x + B\Delta u
$$
Similarly, for $y$:
$$
y = g(x,u) \approx g(x_{e},\overline{u}) + \underbrace{ \begin{bmatrix}
1 & 0
\end{bmatrix} }_{ C } \underbrace{ \begin{bmatrix}
x_{1} - x_{1}^{e} \\
x_{2} - x_{2}^{e}
\end{bmatrix} }_{ \Delta x } + \underbrace{ 0 }_{ D } \underbrace{ (u-\overline{u}) }_{ \Delta u }
$$
such that
$$
\Delta y := y-g(x^{e},\overline{u}) = C\Delta x + D\Delta u
$$
Thus, for the entire system:
$$
\begin{align}
\dot{\Delta x}  & = A\Delta x+B\Delta u  \\
\Delta y & =C\Delta x+D\Delta u
\end{align}
$$
Thus, we can see that **linearization about an equilibrium point leads to an LTI system.**

For our pendulum case, consider fixing $\overline{u}=0$. This results in two equilibria:
$$
x^{e,s} = \begin{bmatrix}
0,0
\end{bmatrix}, \quad x^{e,u} = \begin{bmatrix}
0 \\
\pi
\end{bmatrix}
$$
Consider the linearization about $x^{e,u}$:
$$
\begin{align}
\dot{\Delta x}  & = \underbrace{ \begin{bmatrix}
0 &  1 \\
\frac{g}{l} & -\frac{D}{ml}
\end{bmatrix} }_{ A }\Delta x + \underbrace{ \begin{bmatrix}
0 \\
\frac{1}{ml}
\end{bmatrix} }_{ B }\Delta u \\[2ex]
\Delta y  & = \underbrace{ \begin{bmatrix}
1 & 0
\end{bmatrix} }_{ C }\Delta x
\end{align}
$$
Assume $\Delta u = 0 \,\, \forall \,t\geq 0$. Then, we would have
$$
\dot{\Delta x} = \begin{bmatrix}
0 & 1 \\
\frac{g}{l} & -\frac{D}{ml}
\end{bmatrix}\Delta x
$$
where $A$ has one stable eigenvalue $\lambda^{s}$ with eigenvector $v^{s}$ and 1 unstable eigenvalue $\lambda^{u}$ with eigenvector $v^{u}$. The state space is shown below.

![[Linearization of Nonlinear State Space Models.png]]

- Blue line is $\text{span}(v^{s})$ and red line is $\text{span}(v^{u})$.

> [!definition] Definition: Stable equilibrium point
> An equilibrium point $x^{e}$ is **stable** if all of the eigenvalues of the linearization at $x^{e}$ ($A=\frac{ \partial f }{ \partial x } \big|_{(x^{e},\overline{u})}$) are stable (in $\mathbb{C}^{-}$).

Note that $x^{e,u}$ is an unstable equilibrium point because it has an unstable eigenvalue $\lambda^{u}$.

Consider the linearization about $x^{e,s}$:
$$
\begin{align}
\dot{\Delta x}  & = \underbrace{ \begin{bmatrix}
0 &  1 \\
-\frac{g}{l} & -\frac{D}{ml}
\end{bmatrix} }_{ A }\Delta x + \underbrace{ \begin{bmatrix}
0 \\
\frac{1}{ml}
\end{bmatrix} }_{ B }\Delta u \\[2ex]
\Delta y  & = \underbrace{ \begin{bmatrix}
1 & 0
\end{bmatrix} }_{ C }\Delta x
\end{align}
$$
- The difference is $\frac{g}{l}$ is negative here.

Assume $\Delta u = 0 \,\, \forall \,t\geq 0$. Then, we would once again have:
$$
\dot{\Delta x} = A\Delta x
$$
where $A$ has 2 stable eigenvalues:
- Eigenvalue $\lambda^{s}=\text{Re}(\lambda^{s})+j \text{Im}(\lambda^{s})$ with eigenvector $v^{s}$
- Eigenvalue $\overline{\lambda^{s}}$ with eigenvector $\overline{v^{s}}$

Thus, $x^{e,s}$ is a stable equilibrium point. The state space is shown below.

![[Linearization of Nonlinear State Space Models-1.png|339]]


If we have $\overline{u}\in (0, mg)$, we will have 2 equilibria. The nonlinear state space is shown below:

![[Linearization of Nonlinear State Space Models-1764817248277.png]]

$x^{e,s}$ represents a desired operating point. The region inside the dashed line is the **region of attraction** of $x^{e,s}$, which represents a safe operating region.

> [!definition] Definition: Region of Attraction
> The region of attraction of $x^{e,s}$ is the set of initial conditions $x_{0}$ such that $x(t=0)=x_{0}$ implies that $\lim_{ t \to \infty }x(t)=x^{e,s}$.

The unstable trajectory from the above state space looks like this:

![[Linearization of Nonlinear State Space Models-1764817424518.webp]]
