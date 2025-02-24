---
title: Fluid Pressure at a Point
tags:
  - mech2210
date: 2025-02-24
aliases:
  - fluid pressure at a point
  - Pascal's law
---
Pressure is used to indicate the normal force per unit area at a given point acting on a given plane within the fluid mass of interest. How does the pressure at a point vary with the orientation of the plane passing through the point?

Consider the free-body diagram below, obtained by removing a small triangular wedge of fluid from some arbitrary location within the fluid mass:

![[Fluid Pressure at a Point.png|528]]

Since there are no shearing stresses, the only external forces on the wedge are due to pressure and weight. 
- For simplicity the forces in the x direction are not shown, and the z axis is taken as the vertical axis so the weight acts in the negative z direction. 
- Although we are primarily interested in fluids at rest, to make the analysis as general as possible, we will allow the fluid element to have accelerated motion. 
- The assumption of zero shearing stresses will still be valid so long as the fluid element moves as a rigid body; that is, there is no relative motion between adjacent elements.

Newton's 2nd law in the $y$ and $z$ axes give:
$$
\begin{align}
\sum F_{y} & =p_{y}\,\delta x \, \delta z-p_{s}\,\delta x\,\delta s \sin \theta=\rho \frac{\delta x\,\delta y\,\delta z\,}{2}a_{y} \\[2ex]
\sum F_{z} & =p_{z}\,\delta z\,\delta y-p_{s}\,\delta x\,\delta s\cos \theta-\gamma \frac{\delta x\,\delta y\,\delta z}{2}=\rho \frac{\delta x\,\delta y\,\delta z}{2}a_{z}
\end{align}
$$
where:
- $p_{s}$, $p_{y}$, and $p_{z}$ are the average pressures on the faces
- $\gamma$ and $p$ are the fluid [[Physical Properties of Fluids|specific weight]] and density
- $a_{y}$ and $a_{z}$ are the accelerations

> [!note] Clarifying above equations
> - Essentially we can just think of the terms as forces in the given direction. Since the $\delta x, \delta y, \delta z$ terms are lengths, something like $p_{y}\,\delta x \, \delta z$ is just force in the $y$ direction acting on the $xz$ plane, since pressure = force / area, such that $p_{y}=F_{xz} / A_{xz}$, where $A_{xz}=\delta x \, \delta z$.
> - Similarly, $\rho \frac{\delta x\,\delta y\,\delta z\,}{2}$ gives mass, since mass = volume * density.

The equations of motion can be rewritten as:
$$
\begin{align}
p_{y}-p_{s} & =\rho a_{y} \frac{\delta y}{2} \\[2ex] 
p_{z}-p_{s} & =(pa_{z}+y) \frac{\delta z}{2}
\end{align}
$$
Since we are really interested in what is happening at a point, we take the limit as $\delta x,\delta y,\delta z$ approach zero while maintaining the angle, and it follows that
$$
\begin{align}
p_{y}=p_{s} \\
p_{z}=p_{s}
\end{align}
$$
or just $p_{y}=p_{z}=p_{s}$. The angle was arbitrarily chosen so we can conclude that the ==pressure at a point in a fluid at rest, or in motion, is independent of direction as long as there are no shearing stresses present.== This is known as **Pascal's Law**.