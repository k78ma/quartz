---
title: Forces Acting on Differential Fluid Elements
tags:
  - mech2210
date: 2025-05-18
aliases:
  - forces acting on differential fluid elements
---
[[Fluid Conservation of Momentum]] is fundamentally linked to understanding the forces acting on differential fluid elements. There are two types of forces we need to consider: **body forces** and **surface forces**.

## Body Forces
Body force act throughout the volume of the fluid element. The main one is gravitational force – the weight of the fluid element due to gravity, given by
$$
\delta \mathbf{F}_{B} = \delta m \cdot  g
$$
where $\delta m = \rho \,dV$ is the mass of the element and $g$ is the gravitational acceleration.

Other examples include magnetic and electrostatic forces.

## Surface Forces
Surface forces act on the surface of the fluid element. They are distributed over differential surface areas and include:
- Normal stresses $\sigma$ – Forces perpendicular to the surface
- Shearing stresses $\tau$ – Forces parallel to the surface

![[Forces Acting on Differential Fluid Elements-20250518105544348.png]]

In the above diagram we see a surface force with a normal component $\delta F_{n}$ and shear force components $\delta F_{1}$ and $\delta F_{2}$.

As the differential area $\delta A$ approaches zero, the force per unit area defines the stresses.

Normal stress:
$$
\sigma_{n} = \lim_{ \delta A \to 0 } \frac{\delta F_{n}}{\delta A}
$$
- Intensity of the normal force distributed over the surface area; perpendicular to the surface.

Shear stresses:
$$
\tau_{1}= \lim_{ \delta A \to 0 } \frac{\delta F_{1}}{\delta A}, \quad  \tau_{2}= \lim_{ \delta A \to 0 }  \frac{\delta F_{2}}{\delta A}
$$
- Intensity of the parallel tangential forces; act to distort or shear the fluid element

We use double subscripts to specify the plane on which the stress acts and the direction of the stress. For example:
- $\sigma_{xx}$ → Normal stress on the x-plane in the x-direction.
- $\tau_{xy}$ → Shear stress on the x-plane in the y-direction.

![[Forces Acting on Differential Fluid Elements-20250518105940045.png]]


## Equations of Motion
We can use the forces derived above to derive the equations of motion through control volume analysis. We consider a differential fluid element cube with dimensions $dx, dy, dz$.

First, we start with the forces in the $x$ direction.


![[Forces Acting on Differential Fluid Elements-20250518110305196.png]]
