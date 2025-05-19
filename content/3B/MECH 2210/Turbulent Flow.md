---
title: "<%tp.file.title%>"
tags: 
date: "<%tp.date.now()%>"
aliases: "<%tp.file.title.toLowerCase()%>"
---
Turbulent flow generally occurs when $\text{Re} \gg 1$ (around 4000) indicating that inertial forces greatly overpower viscous forces.

## Velocity

![[Turbulent Flow-20250519183010107.png|443]]

In turbulent flow, velocity at a point fluctuates constantly over time. Thus, we introduce the concept of **time-averaged velocity**:
$$
\overline{u} = \frac{1}{T} \int_{t}^{t + T} u(x, y, z, t) \, dt = \langle u \rangle 
$$
In turbulent analysis, the instantaneous velocity is decomposed into two components:
$$
u = \overline{u}+u'
$$
where $\overline{u}$ is the mean (time-averaged) velocity and $u'$ is the fluctuating velocity component. This decomposition allows us to separate the predictable average motion from the random, chaotic fluctuations.

An important property is that the time-average of the velocity fluctuations is zero:
$$
\langle u \rangle = \langle \overline{u} \rangle + \langle u’ \rangle \implies \langle u’ \rangle = 0
$$
This means that over a sufficiently long time, the positive and negative fluctuations cancel out, leaving only the mean velocity.

## Velocity Profile Comparison

![[Turbulent Flow-20250519183448497.png]]

The velocity profile for turbulent flow is significantly different from that of laminar flow:
- In laminar flow, the profile is parabolic, with maximum velocity at the center and zero at the walls.
- In turbulent flow, the profile is much flatter in the center and only drops sharply near the walls. This is due to the strong momentum transfer caused by turbulent eddies.

## Eddy Viscosity and Mixing Length
In laminar flow, viscosity ($\mu$) is a property of the fluid. In turbulent flow, we introduce the concept of eddy viscosity ($\eta$), which represents the momentum transfer caused by turbulent eddies. This is not a physical property of the fluid but rather a model to account for the enhanced momentum mixing.

![[Turbulent Flow-20250519183528552.png|336]]

The expression for eddy viscosity is given by:
$$
\eta = \rho \ell_m^2 \left|\frac{d\overline{u}}{dy}\right|
$$
where:
- $\eta$ = Eddy viscosity
- $\rho$ = Fluid density
- $\ell_m$ = Mixing length (a measure of the average size of turbulent eddies)
- $\frac{d\overline{u}}{dy}$ = Velocity gradient perpendicular to the flow

Eddy viscosity is much larger than molecular viscosity in turbulent flows, indicating far stronger momentum transfer. The term mixing length ($\ell_m$) represents the scale over which fluid elements mix chaotically, contributing to the energy dissipation and flattening of the velocity profile.

**Momentum transfer in turbulent flows is very strong!**
- The chaotic motion of eddies enhances the mixing of fluid layers.
- Momentum is transferred across streamlines more aggressively than in laminar flow.
- This increased momentum exchange is what leads to the flatter velocity profile and greater energy losses in turbulent conditions.