---
title: Pressure Variation in a Fluid with Rigid Motion
tags:
  - mech2210
date: 2025-02-27
aliases:
  - pressure variation in a fluid with rigid motion
---
The equation of motion
$$
-\nabla p-\gamma \mathbf{k}=\rho \mathbf{a}
$$
was developed for both fluids at rest and fluids in motion, with the only stipulation being that there was no shearing stress present. In component form, this can be expressed as:
$$
\begin{align}
-\frac{ \partial p }{ \partial x }  & =pa_{x} \\[2ex] 
-\frac{ \partial p }{ \partial y }   & =pa_{y} \\[2ex] 
-\frac{ \partial p }{ \partial z }  & =\gamma+\rho a_{z}
\end{align}
$$
A general class of problems involving fluid motion in which there are no shearing stresses occurs when a mass of fluid undergoes rigid-body motion. For example, if a container of fluid accelerates along a straight path, the fluid will move as a rigid mass (after the initial sloshing motion has died out) with each particle having the same acceleration. Since there is no deformation, there will be no shearing stresses, so the equations above apply.

## Linear Motion
For example, for an open container of liquid translating along a straight path with constant acceleration $\mathbf{a}$. Since $a_{x}=0$, we just have:
$$
\begin{align}
\frac{ \partial p }{ \partial y }   & =-pa_{y} \\[2ex] 
\frac{ \partial p }{ \partial z }  & =-\rho(g+a_{z})
\end{align}
$$
The change in pressure between two closely spaced points located at $y,z$ and $y+dy$, $z+dz$ can be expressed as
$$
dp=\frac{ \partial p }{ \partial y } dy+\frac{ \partial p }{ \partial z } dz
$$
or:
$$
dp=-\rho a_{y}dy-\rho(g+a_{z}dz)
$$
### Constant Pressure Line
Along a constant pressure line line of pressure $dp=0$ exists, and it follows that the slope of this line is given by:
$$
\frac{dz}{dy}=-\frac{a_{y}}{g+a_{z}}=-c
$$
Or
$$
\begin{align}
dz & =-cdy \\
z & =-cy+c_{0}
\end{align}
$$

![[Pressure Variation in a Fluid with Rigid Motion-1.png|363]]

### Vertical Acceleration
For the special circumstance where $a_{x}=a_{y}=0$ and $a_{z}\neq 0$, where the mass accelerates in the vertical direction, we have:
$$
\begin{align}
\frac{dp}{dz} & =-\rho(g+a_{z}) \\[2ex]
dp & =-\rho(g+a_{z})dz
\end{align}
$$
### Free Surface
At the free surface $p=\text{const}$, we have
$$
\begin{align}
p_{1} & =\rho(g+a_{z})h \\
p_{1} & =\gamma'h
\end{align}
$$

![[Pressure Variation in a Fluid with Rigid Motion-2.png|286]]
