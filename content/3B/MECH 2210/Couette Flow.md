---
title: Couette Flow
tags:
  - mech2210
date: 2025-05-21
aliases: []
---
Couette flow involves steady, incompressible flow between two parallel plates, where the flow is induced by the motion of the upper plate.

![[Couette Flow-20250521112414080.png|307]]

- Two infinite plates are placed at $y = 0$ and $y = b$
- The bottom plate is stationary, while the top plate moves with velocity $u=U$ in the x-direction
- Fluid is sheared due to the motion of the upper plate

The [[Differential Form of Conservation of Mass|continuity equation for incompressible fluids]] gives us
$$
\begin{align}
\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z}  & = 0 \\[2ex] 
\frac{\partial u}{\partial x}  & = 0  \\[2ex]
\therefore  u  & = u(y)
\end{align}
$$
The Navier-Stokes Equations give us

![[Couette Flow-20250521112622275.png]]

Solving the ODE from the $x$-component by integrating:
$$
\begin{align}
\frac{d^2 u}{dy^2}  & = \frac{1}{\mu} \frac{dp}{dx}\\[2ex] 
\frac{du}{dy}  & = \frac{1}{\mu} \frac{dp}{dx} y + C_1\\[2ex] 
u(y)  & = \frac{1}{2\mu} \frac{dp}{dx} y^2 + C_1 y + C_2
\end{align}
$$
We can solve for the constants by applying the stick/no-slip boundary conditions.

At $y=0, u=0$:
$$
u(0) = 0 \quad \Longrightarrow \quad  C_2 = 0
$$
At $y=b, u=U$:
$$
U = \frac{1}{2\mu} \frac{dp}{dx} b^2 + C_1 b \quad \Longrightarrow \quad  C_1 = \frac{U}{b} - \frac{1}{2\mu} \frac{dp}{dx} b
$$

Thus, we finally get:
$$
u(y) = \frac{U}{b} y + \frac{1}{2\mu} \frac{dp}{dx} (y^2 - b y)
$$
Alternatively we can write
$$
\frac{u}{U} = \frac{y}{b} + P \cdot \frac{y}{b} \left( 1 - \frac{y}{b} \right) \quad \text{where} \quad P = -\frac{b^2}{2\mu U} \frac{dp}{dx}
$$
This is a superposition of:
- A linear shear profile due to the moving plate
- A parabolic pressure-driven profile (like in plane [[Poiseuille Flow]])

![[Couette Flow-20250521113109293.png|413]]

## Example: Gravity-Driven Film Flow on a Vertical Wall
This example focuses on a thin fluid film flowing down a vertical wall under gravity. It’s a viscous, incompressible, laminar flow and assumes steady-state conditions. Our goal is to find the average velocity $\overline{V}$.

![[Couette Flow-20250521113437570.png|234]]

We also know that since $u=0, v=v, w=0$, the [[Differential Form of Conservation of Mass|continuity equation for incompressible fluids]] gives:
$$
\frac{ \partial u }{ \partial x } + \frac{ \partial v }{ \partial y } + \frac{ \partial w }{ \partial z } = 0 \quad \Longrightarrow \quad \frac{ \partial v }{ \partial y }   =0 \quad \Longrightarrow \quad v=v(x)
$$

Also, the pressure is constant across the free surface $p=p(y)$:

![[Couette Flow-20250521114020245.png]]


The Navier-Stokes equations give:

![[Couette Flow-20250521113715051.png]]


Integrating the $y$-component to find the velocity profile:
$$
\begin{align}
0  & = -\rho g + \mu \frac{d^2 v}{dx^2} \\[2ex] 
\frac{d^{2}v}{dx^{2}} &  = \frac{\gamma}{\mu} \\[2ex] 
v(x)  & = \frac{\gamma}{2\mu} x^2 + C_1 x + C_2
\end{align}
$$
We can use boundary conditions to solve for the constants.
- At the wall $x=0$, we have the no-slip condition such that $v=V_{0}$:
$$
v = V_{0} \quad \Longrightarrow \quad  C_2 = V_0
$$
- At the free surface $x=h$, we have $v=0$:
$$
\frac{dv}{dx} = 0 \quad \Longrightarrow \quad  C_1 = -\frac{\gamma h}{\mu}
$$
Thus, the final velocity profile is:
$$
v   = \frac{\gamma}{2\mu}^{2} - \frac{\gamma h}{\mu}x + V_{0}
$$
The volumetric flow rate:
$$
\begin{align}
q  & = \int_0^h v(x) \, dx = V_0 h - \frac{\gamma h^3}{3\mu} =\overline{V}h\\[2ex] 
\bar{v}  & = \frac{q}{h} = V_0 - \frac{\gamma h^2}{3\mu}
\end{align}
$$