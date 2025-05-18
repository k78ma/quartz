---
title: Bernoulli Equation for Irrotational Flows
tags:
  - mech2210
date: 2025-05-18
aliases:
  - bernoulli equation for irrotational flows
---
Recall that the angular velocity can be defined in terms of [[Fluid Element Kinematics#Vorticity|vorticity]]:
$$
\omega = \frac{1}{2}\zeta = \frac{1}{2} \nabla \times \mathbf{V}
$$
An irrotational flow is a special case of inviscid flow where
$$
\mathbf{\omega} = \vec{0} \, : \quad  \,\omega_{x} = \omega_{y} = \omega_{z} = 0
$$
This happens obviously when vorticity is zero.

Recall the [[Euler's Equations of Motion for Inviscid Flows]]:
$$
\rho \mathbf{g} - \nabla p = \rho \left[\frac{\partial \mathbf{V}}{\partial t} + (\mathbf{V} \cdot \nabla)\mathbf{V}\right]
$$
For a steady flow (no changes with respect to time), the time derivative disappears:
$$
\rho \mathbf{g} - \nabla p = \rho (\mathbf{V} \cdot \nabla) \mathbf{V}
$$
The acceleration term simplifies:
$$
(\mathbf{V} \cdot \nabla) \mathbf{V} = \frac{1}{2} \nabla (V^2) - \mathbf{V} \times (\nabla \times \mathbf{V})
$$
and the gravitational force can be expressed as a gradient:
$$
\mathbf{g} = -g \mathbf{k} = -\nabla (gz)
$$
Thus Euler's Equation becomes:
$$
-\nabla p - \rho \nabla (gz) = \rho \left[\frac{1}{2} \nabla (V^2) - \mathbf{V} \times (\nabla \times \mathbf{V})\right]
$$
Re-arranging:
$$
\nabla p + \frac{1}{2} \rho \nabla (V^2) + \rho \nabla (gz) = \rho \mathbf{V} \times (\nabla \times \mathbf{V})
$$
Dividing through with $\rho$:
$$
\frac{\nabla p}{\rho} + \frac{1}{2} \nabla (V^2) + \nabla (gz) = \mathbf{V} \times (\nabla \times \mathbf{V})
$$
To derive Bernoulli's equation, we integrate this expression along a streamline. Recall that a streamline is represented by a path vector $ds$:
$$
d\mathbf{s} = dx \, \mathbf{i} + dy \, \mathbf{j} + dz \, \mathbf{k}
$$
Dotting our previous expression with $ds$:
$$
\frac{1}{\rho} \nabla p \cdot d\mathbf{s} + \frac{1}{2} \nabla (V^2) \cdot d\mathbf{s} + \nabla (gz) \cdot d\mathbf{s} = (\mathbf{V} \times (\nabla \times \mathbf{V})) \cdot d\mathbf{s}
$$
which simplifies to
$$
\frac{1}{\rho} dp + \frac{1}{2} d(V^2) + g \, dz = (\mathbf{V} \times (\nabla \times \mathbf{V})) \cdot d\mathbf{s}
$$
If the flow is irrotational, the right-hand side is zero, since $\nabla  \times \mathbf{V} = 0$:
$$
\begin{align}
(\mathbf{V} \times (\nabla \times \mathbf{V})) \cdot d\mathbf{s} = 0 \\[2ex]
\therefore \frac{1}{\rho} dp + \frac{1}{2} d(V^2) + g \, dz = 0
\end{align}
$$
Now we integrate:
$$
\begin{align}
\int_{1}^{2} \frac{1}{\rho} dp + \int_{1}^{2} d\left(\frac{1}{2} V^2\right) + \int_{1}^{2} g \, dz  & = 0\\[2ex] 
\frac{p}{\rho} + \frac{1}{2}V^{2}   + g z    & = c
\end{align}
$$
If the fluid is incompressible, the equation applies across different streamlines:
$$
p_1 + \frac{1}{2} \rho V_1^2 + \rho g z_1 = p_2 + \frac{1}{2} \rho V_2^2 + \rho g z_2
$$
Under what conditions is $(\mathbf{V} \times (\nabla \times \mathbf{V})) \cdot d\mathbf{s} = 0$?
- Along a streamline:
$$
\mathbf{V} \parallel d\mathbf{s} \quad \Longrightarrow \quad  (\mathbf{V} \times (\nabla \times \mathbf{V})) \perp \mathbf{V} \quad \Longrightarrow \quad  (\mathbf{V} \times (\nabla \times \mathbf{V}))  \perp d\mathbf{S}
$$
- Irrotational flows:
$$
\nabla \times \mathbf{V} = \mathbf{0}
$$
For irrotational flows, Bernoulli Equation can be applied between any two points in the flow field.