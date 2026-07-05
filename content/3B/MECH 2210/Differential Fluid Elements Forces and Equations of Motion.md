---
title: Differential Fluid Elements Forces and Equations of Motion
tags:
  - mech2210
date: 2025-05-18
aliases:
  - differential fluid elements forces and equations of motion
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

First, we start with the surface forces in the $x$ direction.

![[Forces Acting on Differential Fluid Elements-20250518110305196.png]]

In total, we have:
$$
\begin{align}
\delta F_{S,x}  & =  (\sigma_{xx} + d\sigma_{xx}) dy \, dz - \sigma_{xx} dy dz  \\
 & + (\tau_{yx} + d\tau_{yx})dxdz - \tau_{yx}dxdz + (\tau_{zx}+d\tau_{zx})dxdy - \tau_{zx}dxdy \\[2ex] 
     & =d \sigma_{xx}dydz + d\tau_{yx} dx dz + d\tau_{zx}dxdy
\end{align}
$$
We can consider the Taylor expansions for these components. For example, 
$$
d\sigma_{x x} = \frac{ \partial \sigma_{xx} }{ \partial x } dx +\cancelto{ 0 }{ \frac{ \partial \sigma_{x x } }{ \partial y } dy  }+ \cancelto{ 0 }{ \frac{ \partial \sigma_{ x x} }{ \partial z } dz }
$$
Similarly, we have
$$
\begin{align}
d\tau_{yx} = \frac{ \partial \tau_{yx} }{ \partial y } dy \\[2ex] 
d\tau_{zx} = \frac{ \partial \tau_{zx} }{ \partial z } dz
\end{align}
$$
Thus, our previous expression for the total $x$ direction forces becomes
$$
\delta F_{S,x} = \frac{\partial \sigma_{xx}}{\partial x} dx \, dy \, dz + \frac{\partial \tau_{yx}}{\partial y} dx \, dy \, dz + \frac{\partial \tau_{zx}}{\partial z} dx \, dy \, dz
$$
And similarly in the $y$ and $z$ directions we have
$$
\begin{align}
\delta F_{S,y} &  = \left(\frac{\partial \tau_{xy}}{\partial x} + \frac{\partial \sigma_{yy}}{\partial y} + \frac{\partial \tau_{zy}}{\partial z}\right) dx \, dy \, dz \\[2ex] 
\delta F_{S,z}  & = \left(\frac{\partial \tau_{xz}}{\partial x} + \frac{\partial \tau_{yz}}{\partial y} + \frac{\partial \sigma_{zz}}{\partial z}\right) dx \, dy \, dz
\end{align}
$$
In vector form we can combine all three to have:
$$
\delta \mathbf{F}_{s} = \delta F_{S,x} \mathbf{i} + \delta F_{S,y}\mathbf{j} + \delta F_{S,z}\mathbf{k}
$$
For body forces we have:
$$
\delta \mathbf{F}_{B} = \delta m \cdot \mathbf{g} = \delta m \cdot g_{x}\mathbf{i} + \delta m\cdot g_{y} \mathbf{j} + \delta m\cdot g_{z}\mathbf{k}
$$
And the total forces are:
$$
\delta \mathbf{F} = \delta \mathbf{F}_{S} + \delta \mathbf{F}_{B} = \delta m \cdot \mathbf{a}= \rho dxdydz \cdot \mathbf{a}
$$
Applying Newton's second law in $x$ direction gives:
$$
\begin{align}
\delta F = \delta F_{S} + \delta F_{B}& = \rho dV \mathbf{ a} \\
\frac{\partial \sigma_{xx}}{\partial x} dx \, dy \, dz + \frac{\partial \tau_{yx}}{\partial y} dx \, dy \, dz + \frac{\partial \tau_{zx}}{\partial z} dx \, dy \, dz +\rho dxdydz \cdot  g_{x}  & = \rho dxdydz \cdot  a_{x}
\end{align}
$$
This can be extended in all three directions to get equations of motion for each direction:
$$
\boxed{
\begin{align}
x: &  \quad \frac{\partial \sigma_{xx}}{\partial x} + \frac{\partial \tau_{yx}}{\partial y} + \frac{\partial \tau_{zx}}{\partial z} + \rho g_x = \rho \left(\frac{\partial u}{\partial t} + u\frac{\partial u}{\partial x} + v\frac{\partial u}{\partial y} + w\frac{\partial u}{\partial z} \right) \\[2ex] 
y: &  \quad  \frac{\partial \tau_{xy}}{\partial x} + \frac{\partial \sigma_{yy}}{\partial y} + \frac{\partial \tau_{zy}}{\partial z} + \rho g_y = \rho \left(\frac{\partial v}{\partial t} + u\frac{\partial v}{\partial x} + v\frac{\partial v}{\partial y} + w\frac{\partial v}{\partial z} \right) \\[2ex]
z: &  \quad  \frac{\partial \tau_{xz}}{\partial x} + \frac{\partial \tau_{yz}}{\partial y} + \frac{\partial \sigma_{zz}}{\partial z} + \rho g_z = \rho \left(\frac{\partial w}{\partial t} + u \frac{\partial w}{\partial x} + v \frac{\partial w}{\partial y} + w \frac{\partial w}{\partial z}\right)
\end{align}
}
$$
