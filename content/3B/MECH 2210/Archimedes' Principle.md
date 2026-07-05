---
title: Archimedes' Principle
tags:
  - mech2210
date: 2025-02-27
aliases:
  - buoyant force
---
When a stationary body is completely submerged in a fluid, or floating so that it is only partially submerged, the resultant fluid force acting on the body is called the buoyant force. A net upward vertical force results because pressure increases with depth and the pressure forces acting from below are larger than the pressure forces acting from above. This force can be determined through an approach similar to what we did for [[Hydrostatic Force on a Curved Surface|hydrostatic force on a curved surface]].

- Consider a body of arbitrary shape, with volume $\forall$, that is immersed in a fluid as shown below in 2.24a. 
- We enclose the body in a parallelepiped with the body removed as shown below in 2.24b.
- Note that the forces $F_{1},F_{2},F_{3},F_{4}$ are simply the forces exerted on the plane surfaces of the parallelepiped
- $W$ is the weight of the shaded fluid volume (parallelepiped minus body)
- $F_{B}$ is the force the body is exerted on the fluid

![[Archimedes' Principle.png|591]]

The forces on the vertical surfaces, such as $F_{3}$ and $F_{4}$, are all equal and cancel:
$$
F_{3}=F_{4}
$$
Then, the equilibrium equation of interest is in the $z$-direction and can be written as
$$
F_{B}=F_{2}-F_{1}-W
$$If the specific weight of the fluid is constant , then:
$$
F_{2}-F_{1}=\gamma(h_{2}-h_{1})A
$$
where $A$ is the horizontal area of the upper (or lower) surface of the parallelepiped, and the equation above can be written as
$$
F_{B}=\gamma(h_{2}-h_{1})A-\gamma[(h_{2}-h_{1})A-\forall ]
$$
Simplifying, we arrive at the desired expression for the buoyant force:
$$
F_{B}=\gamma \forall 
$$
where $\gamma$ is the specific weight of the fluid and $\forall$ is the volume of the body. The direction of the buoyant force, which is the force of the fluid on the body, is opposite to that shown on the freebody diagram. Therefore, the buoyant force:
- Has magnitude equal to the weight of the fluid displaced by the body
- Passes through the centroid of the volume
- Directed vertically upward. 

This result is commonly referred to as Archimedes’ principle.

The location of the line of action of the buoyant force can be determined by summing moments of the forces on the FBD with respect to some convenient axis. For example, summing moments about an axis perpendicular to the paper through point $D$ we have:
$$
F_{B}y_{c}=(F_{2}-F_{1})y_{1}-Wy_{2}
$$
Substituting the various quantities in for the surfaces:
$$
y=\frac{\forall _{T}y_{1}-\forall _{f}y_{2}}{\forall _{o}}
$$