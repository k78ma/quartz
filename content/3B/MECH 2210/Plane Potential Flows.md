---
title: Plane Potential Flows
tags:
  - mech2210
date: 2025-05-18
aliases:
  - plane potential flows
---
A 2D (plane) potential flow is inviscid, irrotational, incompressible, and steady. Recall that potential flows are solutions to [[Velocity Potential|Laplace's Equation]].

Recall that based on the [[Stream Function|stream function]] and the [[Velocity Potential|velocity potential]], we have:
$$
\begin{align}
u  & = \frac{ \partial \phi }{ \partial x }  = \frac{ \partial \psi }{ \partial y } \\[2ex] 
v  & = \frac{ \partial \phi }{ \partial y }  = -\frac{ \partial \psi }{ \partial x } 
\end{align}
$$
Alternatively, in cylindrical coordinates:
$$
\begin{align}
V_{r}  & = \frac{ \partial \phi }{ \partial r } = \frac{1}{r} \frac{ \partial \psi }{ \partial \theta } \\[2ex] 
V_{\theta}  & = \frac{1}{r} \frac{ \partial \phi }{ \partial \theta } = - \frac{ \partial \psi }{ \partial r } 
\end{align}
$$
Since the row is irrotational, the curl of the velocity must be zero:
$$
\frac{\partial v}{\partial x} = \frac{\partial u}{\partial y}
$$
Substituting the expressions for $u$ and $v$:
$$
\frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} = 0
$$
This is [[Velocity Potential|Laplace's Equation]], which is also satisfied by the velocity potential:
$$
\nabla^2 \phi = 0 \quad \text{and} \quad \nabla^2 \psi = 0
$$
- Both the stream function and velocity potential satisfy Laplace’s equation in potential flow, enabling us to solve them independently.

Types of plane potential flows:
- [[Uniform Flows]]
