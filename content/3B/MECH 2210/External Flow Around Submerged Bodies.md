---
title: External Flow Around Submerged Bodies
tags:
  - mech2210
date: 2025-05-19
aliases:
  - external flow around submerged bodies
---
Force a submerged object, the force acting on it determines the motion of the body. Two main surface interactions generate forces:
- Normal pressure $p$, which acts perpendicular to the surface. This is a result of the fluid compressing against the surface of the object.
- Shear stress $\tau_{w}$, which acts tangentially along the surface. This arises due to viscous effects as fluid layers slide past each other near the object.

The relative velocity $V_{r}$ is the speed of the fluid with respect to the object's surface. It determines how pressure and shear forces develop as the fluid interacts with the object.

![[External Flow Around Submerged Bodies-20250519100244408.png]]

Integrating pressure and shear stresses over the object surface gives two forces:
- **Drag force** – in line with the relative velocity
$$
F_{D} = \int_{S} (\tau_{w,x} - p_{s,x})  \, dA 
$$
- **Lift force** – perpendicular to the relative velocity
$$
F_{S} = \int_{S} (\tau_{w,y} - p_{s,y})  \, dy 
$$

For ideal fluids (incompressible and inviscid), $F_{D}= F_{L} = 0$.

For viscous fluids, if the object is symmetric and does not rotate, we have $F_{D} \neq 0$ and $F_{L} - 0$.

If the object is asymmetric, then $F_{D}\neq 0$ and $F_{L} \neq 0$. A classic example of this is the airfoil, shown below.

![[External Flow Around Submerged Bodies-20250519100654121.png]]

## Drag and Lift Coefficients
The distribution of pressure and shear stress over a submerged complex can be very complex. For practical analysis, we define dimensionless drag and lift coefficients.

Drag coefficient:
$$
C_{D} = \frac{F_{D}}{\frac{1}{2} \rho V^{2}A}
$$
which in turn lets us write drag force as
$$
F_D = C_D \frac{1}{2} \rho V^2 A
$$

Lift coefficient:
$$
C_L = \frac{F_L}{\frac{1}{2} \rho V^2 A}
$$
which lets us write lift force as
$$
F_L = C_L \frac{1}{2} \rho V^2 A
$$

