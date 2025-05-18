---
title: Cylindrical Polar Coordinates for Conservation of Mass
tags:
  - mech2210
date: 2025-05-17
aliases:
  - cylindrical polar coordinates for conservation of mass
---
In fluid dynamics, we often encounter situations where using Cartesian coordinates $(x, y, z)$ is not the most convenient or natural choice. In cases involving rotational symmetry (like flow through pipes or around circular objects), it is advantageous to use cylindrical polar coordinates $(r, \theta, z)$.

Each component is defined as follows:
- $r$: Radial distance from axis (distance from the origin in the plane)
- $\theta$: Angular coordinate (measured counterclockwise from the $x$-axis)
- $z$: Height or axial coordinate (same as in Cartesian)

The velocity components in cylindrical coordinates are:
$$
\mathbf{V} = V_{r}\mathbf{e}_{r} + V_{\theta}\mathbf{e}_{\theta} + V_{z}\mathbf{e}_{z}
$$
The divergence operator in cylindrical coordinates is given by:
$$
\begin{align}
\nabla\cdot \mathbf{V}  & = \frac{ \partial u }{ \partial x } +\frac{ \partial v }{ \partial y } +\frac{ \partial w }{ \partial z }  \\[2ex]
  & = \frac{1}{r} \frac{ \partial (rV_{r}) }{ \partial r } + \frac{1}{r}\frac{ \partial V_{\theta} }{ \partial \theta }  + \frac{ \partial V_{z} }{ \partial z }  
\end{align}
$$
The factor of $\frac{1}{r}$ in the first two terms adjusts for the radial and azimuthal coordinate system.

Recall that the [[Differential Form of Conservation of Mass]] can be simplified to:
$$
\frac{ \partial \rho }{ \partial t }  + \nabla \cdot \rho \mathbf{V}  = 0
$$
In cylindrical polar coordinates, this is now
$$
\frac{ \partial \rho }{ \partial t } +\frac{1}{r} \frac{ \partial  }{ \partial r } (r \rho V_{r}) + \frac{1}{r} \frac{ \partial  }{ \partial \theta } (\rho V_{\theta}) + \frac{ \partial \ }{ \partial z } (\rho V_{z}) =0
$$

