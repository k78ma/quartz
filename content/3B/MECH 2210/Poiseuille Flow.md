---
title: Poiseuille Flow
tags:
  - mech2210
date: 2025-05-21
aliases:
  - poiseuille flow
---
In Poiseuille flow, we have steady, axisymmetric flow of a viscous, incompressible fluid through a long, straight pipe of circular cross-section (radius $R$).

![[Poiseuille Flow-20250521115052725.png]]

In this case, we use cylindrical coordinates. We assume:
$$
V_{r} = 0, V_{\theta}=0, V_{z}=V_{z}
$$
The [[Cylindrical Polar Coordinates for Conservation of Mass|continuity equation for incompressible fluids]] in cylindrical coordinates reduces to:
$$
\frac{1}{r} \frac{\partial}{\partial r}(r V_r) + \frac{1}{r} \frac{\partial V_\theta}{\partial \theta} + \frac{\partial V_z}{\partial z} = 0
$$
Given our assumptions, this becomes
$$
\frac{\partial V_z}{\partial z} = 0 \Rightarrow V_z = V_z(r)
$$

Applying the Navier-Stokes in cylindrical coordinates:

![[Poiseuille Flow-20250521115321136.png]]

The $x$-direction gives:
$$
 p = -\rho g r \sin \theta + f_1(\theta, z)
$$
The $y$-direction gives:
$$
\begin{align}
p  & = -\rho g r \sin \theta + f_{2(r, z)} \\[2ex] 
\end{align}
$$
Thus, in general we have
$$
     p = -\rho gr\sin\theta + f(z)
$$
The $z$-direction (axial) gives:
$$
0 = -\frac{\partial p}{\partial z} + \mu \left[ \frac{1}{r} \frac{d}{dr} \left( r \frac{dV_z}{dr} \right) \right]
$$
Solving the axial momentum equation gives:
$$
V_z(r) = \frac{1}{4\mu} \frac{dp}{dz} r^2 + C_1 \ln r + C_2
$$
Boundary conditions:
- No-slip at the wall: $V_z = 0$ at $r = R$ gives $C_2 = -\frac{1}{4\mu} \frac{dp}{dz} R^2$
- Velocity finite at centerline: $V_z$ finite as $r \to 0$ gives $C_{1}=0$

Thus, we have:
$$
V_z(r) = \frac{1}{4\mu} \frac{dp}{dz} (r^2 - R^2) = V_{\text{max}} \left( 1 - \frac{r^2}{R^2} \right)
$$

Volumetric flow rate:
$$
Q = \int_0^R V_z(r) \cdot 2\pi r \, dr = \frac{\pi R^4}{8\mu} \left( -\frac{dp}{dz} \right)
$$

If the pressure drop over length $l$ is $\Delta p$, then
$$
\frac{ \partial p }{ \partial z }  = -\frac{\Delta p}{l}
$$
Substituting into the equation for $Q$:
$$
Q = \frac{\pi R^4 \Delta p}{8\mu l}
$$
which is called **Poiseuille's Law**.