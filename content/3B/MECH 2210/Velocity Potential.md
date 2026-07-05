---
title: Velocity Potential
tags:
  - mech2210
date: 2025-05-18
aliases:
  - velocity potential
  - Laplace's Equation
---
We can elegantly define a **velocity potential** $\phi(x,y,z)$ function that represents the velocity field as its gradient:
$$
\mathbf{V} = \nabla \phi
$$
In component form:
$$
\begin{align}
u= \frac{ \partial \phi }{ \partial x }  \\[2ex]
v= \frac{ \partial \phi }{ \partial y }  \\[2ex]
w = \frac{ \partial \phi }{ \partial z } 
\end{align}
$$
For a flow to be irrotational, the curl of the velocity vector must be zero:
$$
\nabla \times \mathbf{V} = 0
$$
If $\mathbf{V} = \nabla \phi$, then
$$
\nabla \times (\nabla \phi) = 0
$$
This is always true, because the curl of a gradient is always zero. This is why $\phi$ is a valid representation of velocity for irrotational flows.

## Laplace's Equation for Potential Flows
For an incompressible flow:
$$
\nabla \cdot \mathbf{V} = 0
$$
Substituting the velocity potential representation:
$$
\nabla \cdot (\nabla \phi) = \nabla^2 \phi = 0
$$
This is **Laplace’s Equation:**
$$
\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} + \frac{\partial^2 \phi}{\partial z^2} = 0
$$
Flows that satisfy this equation are known as **potential flows**. The beauty of this is that solving Laplace’s Equation, which is linear, gives us the entire velocity field.

## Stream Function vs. Velocity Potential
How does the [[Stream Function]] compare to the Velocity Potential?

Stream function:
- Valid for 2D flows only
- Represents streamlines
- Consequence of mass conservation for incompressible flows
- Satisfies $\nabla^2 \psi = 0$

Velocity potential:
- Valid for 2D and 3D flows
- Represents equipotential lines (lines of constant velocity potential)
- Guaranteed by irrotationality
- Satisfies $\nabla^2 \phi = 0$

A constant value of the stream function $\psi$ represents a **streamline**, describing the slope of the path traced by fluid particles
$$
\psi = \text{const} \quad \Longrightarrow \quad  \frac{dy}{dx} = \frac{v}{u}
$$
A constant value of $\phi$ represents an **equipotential line**, describing lines of constant velocity potential
$$
\phi = \text{const} \quad \Longrightarrow \quad  u \, dx + v \, dy = 0
$$
Lines of constant $\phi$ (equipotentials) are always orthogonal to lines of constant $\psi$ (streamlines).

![[Velocity Potential-20250518122321162.png]]

Mathematically, we can derive the orthogonality condition from the dot product of the gradients:
$$
\nabla \phi \cdot \nabla \psi = \frac{\partial \phi}{\partial x} \frac{\partial \psi}{\partial x} + \frac{\partial \phi}{\partial y} \frac{\partial \psi}{\partial y} = -uv + uv = 0
$$