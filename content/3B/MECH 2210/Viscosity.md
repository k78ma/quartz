---
title: Viscosity
tags:
  - mech2210
date: 2025-02-10
aliases:
  - viscosity
---
Viscosity is an additional property, aside from density and mass, that describes the “fluidity” of the fluid.

## Two-Plate Experiment
Consider a hypothetical experiment in which a material is placed between two wide parallel plates. The bottom plate is rigidly fixed, but the upper plate is free to move.

![[Viscosity-1.png|483]]

If a solid, such as steel, were placed between two plates and loaded with force $P$ as shown:
- The top plate would be displaced through some small distance, $\delta a$ (assuming the solid was mechanically attached to the plates). 
- The vertical line $AB$ would be rotated through the small angle, $\delta B$, to the new position $AB'$. 
- Note that to resist the applied force, $P$, a shearing stress, $\tau$, would be developed at the plate-material interface, and for equilibrium to occur, $P=\tau A$ where $A$ is the effective upper plate area.

What happens if the solid is replaced with a fluid such as water? We would immediately notice a major difference. When the force $P$ is applied to the upper plate, it will move continuously with a velocity $U$ as illustrated below.

![[Viscosity-2.png|368]]

This behavior is the consistent with the definition of a [[Fluid|fluid]] – that is, if a shearing stress is applied to a fluid it will deform continuously. A closer inspection of the fluid motion between the plates would reveal that the fluid in contact with the upper plate moves with the plate velocity, $U$, and the fluid in contact with the bottom fixed plate has zero velocity.

The fluid between the two plates moves with velocity $u=u(y)$ that varies linearly with $u=Uy/b$, as illustrated above. Thus, a **velocity gradient**, $du/dy$, is developed in the fluid between the plates. In this particular case, the velocity gradient is constant since $du / dy = U/ b$.

### No-Slip Condition
The experimental observation that fluid "sticks" to solid boundaries is a very important one in fluid mechanics and is called the **no-slip condition**. All fluids satisfy this condition.

## Viscosity Derivation
In a small time increment, $\delta t$, an imaginary vertical line $AB$ in the fluid would rotate through an angle, $\delta B$, so that
$$
\tan\delta b\approx\delta B=\frac{\delta a}{b}
$$
