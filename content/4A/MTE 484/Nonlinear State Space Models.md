---
title: Nonlinear State Space Models
tags:
  - mte484
date: 2025-10-24
aliases:
  - nonlinear state space models
  - equilibrium point
---
Take for example a pendulum following Newton's 2nd Law:

![[Nonlinear State Space Models.png|200x253]]

We have:
$$
ml\ddot{\theta} = -mg\sin \theta - D\theta + u
$$
- $u$ is torque applied to pendulum
- $D$ is damping
- $l$ is the length of the rod

Choosing states:
$$
\begin{align}
x_{1} := \theta \\
x_{2} := \dot{\theta}
\end{align}
$$
Then we have:
$$
\begin{align}
\dot{x}  = \begin{bmatrix}
\dot{x}_{1} \\
\dot{x}_{2}
\end{bmatrix}  & = \begin{bmatrix}
\dot{\theta} \\
-\frac{g}{l}\sin \theta - \frac{D}{ml}\dot{\theta} + \frac{1}{ml}u
\end{bmatrix} \\[2ex] 
     & = \begin{bmatrix}
x_{2} \\
-\frac{g}{l}\sin x_{1} - \frac{D}{ml}x_{2} + \frac{1}{ml}u \\
\end{bmatrix} \\[2ex]
     & := f(x,u)
\end{align}
$$
and
$$
\begin{align}
y = \theta &  = x_{1} \\
 & =: g(x,u)
\end{align}
$$
Coming to our **standard non-linear state space representation:**
$$
\boxed{
\begin{align}
\dot{x}  & = f(x,u) \\
y  & = g(x,u)
\end{align}
}
$$
In general, this is **not LTI**!

For an LTI model, we can choose:
$$
\begin{align}
f(x,u)  & = Ax+Bu\\
g(x,u)  & = Cx+Du
\end{align}
$$


> [!definition] (Nonlinear) state space model
> A (nonlinear) state space model is a model of the form
> $$
> \begin{align}
> \dot{x} = f(x,u) \\
> y = g(x,y)
> \end{align} \quad  (\ast  )
> $$
> such that for any initial condition $x(t=0)=x_{0}$ and any input signal $u(t)$, there exists a unique solution to Equation $(\ast )$, and it is equal to the system's output.
> 


> [!definition] Equilibrium Point
> Given a constant control signal $u(t) = \overline{u} \,\, \forall \, \,t \geq 0$ for some $\overline{u}\in \mathbb{R}$, an **equilibrium point** of a state space model is any state $x_{e}$ that satisfies $f(x_{e}, \overline{u})=0$.

If we start at $x=x_{e}$, we have:
$$
\begin{align}
 & \dot{x} = f(x_{e}, \overline{u})=0 \quad \Longrightarrow \quad x(t)=x_{e} \,\, \forall \,  t \geq 0 \\[2ex]
 & \therefore  x(t) \text{ is constant in time} \\[2ex]
& y(t) =g(x(t), u(t)) = g(x_{e}, \overline{u})\\[2ex] 

& \implies y(t) \text{ is also constant } \,\, \forall  \, t \geq 0
\end{align}
$$
LTI example:
$$
\begin{align}
\dot{x}\big|_{(x_{e}, \overline{u})} = f(x_{e}, \overline{u})   & = 0 \\
Ax_{e}+B\overline{u} & =0 \\
 x_{e}  & = -A^{-1}B\overline{u}
\end{align}
$$
- If $\overline{u}=0$, then $x_{e}=0$
- LTI systems only have 1 equilibrium point for fixed $u(t)=\overline{u}\,\, \forall \, t\geq 0$

Pendulum example continued:
- Fix $u(t)=\overline{u} \,\, \forall \,t\geq 0$  for some $\overline{u}\in \mathbb{R}$
- Find all equilibria of the system for $u(t)=\overline{u}\,\, \forall \,t\geq 0$

To do so, we solve $f(x_{e}, \overline{u})=0$ for $x_{e}$.
$$
\begin{align}
 & \implies f(x_{e}, \overline{u}) = \begin{bmatrix}
x_{2}^{e} \\
- \frac{g}{l}\sin x_{1}^{e}-\frac{D}{ml}x_{2}^{e} + \frac{1}{ml}\overline{u}
\end{bmatrix} = 0\\[2ex] 
 & \implies x_{2}^{e} =0 \\[2ex]
& \implies -\frac{g}{l}\sin x_{1}^{e}+\frac{1}{ml}\overline{u} = 0  \quad \quad \quad \quad \quad \quad \quad  [x_{2}^{e}=0] \\[2ex]
& \implies x_{1}^{e} = \sin ^{-1}\left( \frac{\overline{u}}{mg} \right)
\end{align}
$$
So:
$$
x_{e} = \begin{bmatrix}
\sin ^{-1}\left( \frac{\overline{u}}{mg} \right) \\
0
\end{bmatrix}
$$
Recall that $\sin(\pi-\theta)=\sin(\theta)$. Then, we have
$$
\begin{align}
\sin ^{-1}(1) = \frac{\pi}{2} =\theta \\[2ex] 
\pi-\theta = \pi - \frac{\pi}{2} = \frac{\pi}{2}
\end{align}
$$
Note that there are three cases
$$
\begin{align}
\left| \frac{\overline{u}}{mg} \right|  & < 1  \quad \Longrightarrow \quad  \left| \overline{u} \right| \leq mg \quad \Longrightarrow \quad  \text{2 equilibria} \\[2ex] 
\left| \frac{\overline{u}}{mg} \right|  & = 1  \quad \Longrightarrow \quad  \left| \overline{u} \right| = mg \quad \Longrightarrow \quad  \text{1 equilibrium point}\\[2ex] 
\left| \frac{\overline{u}}{mg} \right|  & >1 \quad \Longrightarrow \quad  \text{0 equilibria}
\end{align}
$$


