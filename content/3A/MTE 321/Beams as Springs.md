---
title: Beams as Springs
tags:
  - mte321
date: 2024-06-15
aliases:
  - beams as springs
  - spring rate
---
Elasticity is the properties of a material that enables it to regain its original configuration after having been deformed. A spring is a mechanical element that exerts a force when deformed.

![[Beams as Springs.png]]

- A: The simply supported straight beam has deflection $y$ that is linearly related to the force, shown in the graph (as long as the elastic of the limit of the material is not exceeded). This beam can be described as a *linear spring*.
- B: The straight beam supported by two cylinders means that the length between supports decreases as the beam is deflected by the force. A larger force is required to deflect a short beam than a long one; thus, the more this beam is deflected, the stiffer it becomes. This is a *non-linear stiffening spring*.
- C: This shows an edge-view of a dish-shaped round disk. The force necessary to flatten the disk decreases as the disk approaches a flat configuration. This is a *non-linear softening spring*.

If we express the force and deflection by the equation $F=F(y)$, the spring rate is defined as:
$$
k(y)=\lim_{ \Delta y \to 0 } \frac{\Delta F}{\Delta y}=\frac{dF}{dy}
$$
For linear cases, $k$ is the spring constant from [[Spring Elements|Hooke's Law]]:
$$
k=\frac{F}{y}
$$