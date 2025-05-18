---
title: Euler's Equations of Motion for Inviscid Flows
tags:
  - mech2210
date: 2025-05-18
aliases:
  - euler's equations of motion for inviscid flows
---
In inviscid flows, viscous shearing stresses are neglected. This results in Euler's Equation of Motion.

Thus, the shear terms in our previously derived [[Differential Fluid Elements Forces and Equations of Motion|differential fluid element equations of motion]] are cancelled
$$
\begin{align}
x: &  \quad \frac{\partial \sigma_{xx}}{\partial x} + \cancelto{ 0 }{ \frac{\partial \tau_{yx}}{\partial y} } + \cancelto{ 0 }{ \frac{\partial \tau_{zx}}{\partial z} } + \rho g_x = \rho \left(\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z} \right) \\[2ex] 
y: &  \quad  \cancelto{ 0 }{ \frac{\partial \tau_{xy}}{\partial x} } + \frac{\partial \sigma_{yy}}{\partial y} + \cancelto{ 0 }{ \frac{\partial \tau_{zy}}{\partial z} } + \rho g_y = \rho \left(\frac{\partial v}{\partial t} + u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} + w\frac{\partial v}{\partial z} \right) \\[2ex]
z: &  \quad  \cancelto{ 0 }{ \frac{\partial \tau_{xz}}{\partial x} } + \cancelto{ 0 }{ \frac{\partial \tau_{yz}}{\partial y} } + \frac{\partial \sigma_{zz}}{\partial z} + \rho g_z = \rho \left(\frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z}\right)
\end{align}
$$

Next, we can note that the normal stresses are purely pressure forces $\sigma_{x x }= \sigma_{yy} = \sigma_{zz} = -p$, which further simplifies our momentum equations to:
$$
\begin{align}
x: \quad  & \rho g_x - \frac{\partial p}{\partial x} = \rho \left(\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z}\right) \\[2ex] 
y: \quad   & \rho g_y - \frac{\partial p}{\partial y} = \rho \left(\frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z}\right) \\[2ex] 
z: \quad   & \rho g_z - \frac{\partial p}{\partial z} = \rho \left(\frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z}\right)
\end{align}
$$
which are the **Euler Equations of Motion for inviscid flow**.

In a compact vector notation, we can write
$$
\rho \mathbf{g} - \nabla p = \rho \left[ \frac{\partial \mathbf{V}}{\partial t} + (\mathbf{V} \cdot \nabla) \mathbf{V} \right]
$$
where
- $\mathbf{g}$ is the gravitational acceleration.
- $\nabla p$ is the pressure gradient.
- $\mathbf{V}$ is the velocity vector.
- $(\mathbf{V} \cdot \nabla) \mathbf{V}$ is the convective acceleration.

