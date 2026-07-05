---
title: Navier-Stokes Equations for Incompressible Flows
tags:
  - mech2210
date: 2025-05-18
aliases:
  - navier-stokes equations for incompressible flows
---
Recall the [[Differential Fluid Elements Forces and Equations of Motion|equations of motion]] for a fluid element:
$$
\begin{align}
x: &  \quad \frac{\partial \sigma_{xx}}{\partial x} + \frac{\partial \tau_{yx}}{\partial y} + \frac{\partial \tau_{zx}}{\partial z} + \rho g_x = \rho \left(\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z} \right) \\[2ex] 
y: &  \quad  \frac{\partial \tau_{xy}}{\partial x} + \frac{\partial \sigma_{yy}}{\partial y} + \frac{\partial \tau_{zy}}{\partial z} + \rho g_y = \rho \left(\frac{\partial v}{\partial t} + u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} + w\frac{\partial v}{\partial z} \right) \\[2ex]
z: &  \quad  \frac{\partial \tau_{xz}}{\partial x} + \frac{\partial \tau_{yz}}{\partial y} + \frac{\partial \sigma_{zz}}{\partial z} + \rho g_z = \rho \left(\frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z}\right)
\end{align}
$$

In the case of a **viscous fluid**, internal friction (viscosity) creates normal stresses $\sigma$ and shear stresses $\tau$:
$$
\begin{align}
\sigma_{xx} = -p + 2\mu \frac{\partial u}{\partial x}\\[2ex] 
\sigma_{yy} = -p + 2\mu \frac{\partial v}{\partial y} \\[2ex] 
\sigma_{zz} = -p + 2\mu \frac{\partial w}{\partial z}
\end{align}
$$
$$
\begin{align}
\tau_{xy} = \tau_{yx} = \mu \left(\frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}\right) \\[2ex] 
\tau_{yz} = \tau_{zy} = \mu \left(\frac{\partial v}{\partial z} + \frac{\partial w}{\partial y}\right) \\[2ex] 
\tau_{zx} = \tau_{xz} = \mu \left(\frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}\right)
\end{align}
$$
- $p$ is the pressure
- $\mu$ is the [[Viscosity|dynamic viscosity]] of the fluid
- These terms account for both pressure forces and viscous effects.

Substituting these, we arrive at the Navier-Stokes Equations for incompressible flows:
$$
\begin{align}
\rho \left(\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} + w \frac{\partial u}{\partial z}\right)  & = -\frac{\partial p}{\partial x} + \rho g_x + \mu \left(\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} + \frac{\partial^2 u}{\partial z^2}\right) \\[2ex] 
\rho \left(\frac{\partial v}{\partial t} + u \frac{\partial v}{\partial x} + v \frac{\partial v}{\partial y} + w \frac{\partial v}{\partial z}\right)  & = -\frac{\partial p}{\partial y} + \rho g_y + \mu \left(\frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} + \frac{\partial^2 v}{\partial z^2}\right)\\[2ex] 
\rho \left(\frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z}\right)  & = -\frac{\partial p}{\partial z} + \rho g_z + \mu \left(\frac{\partial^2 w}{\partial x^2} + \frac{\partial^2 w}{\partial y^2} + \frac{\partial^2 w}{\partial z^2}\right)
\end{align}
$$

These are a generalization of [[Euler's Equations of Motion for Inviscid Flows]]; we just set $\mu=0$ for no viscosity for the inviscid case.

There is a fully generalized form of the Navier-Stokes equations that applies to compressible flows as well:
$$
\rho \left(\frac{\partial \mathbf{V}}{\partial t} + (\mathbf{V} \cdot \nabla) \mathbf{V}\right) = -\nabla p + \nabla \cdot \mathbf{T} + \rho \mathbf{g}
$$
where $\mathbf{T}$ is a viscous stress tensor.