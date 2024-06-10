---
title: Mass Moment of Inertia
tags:
  - syde351
date: 2024-06-10
aliases:
  - mass moment of inertia
---
The mass moment of inertia $I$ about a specified reference axis is defined as:
$$
I=\int r^{2} \, dm 
$$
where $r$ is the distance from the reference axis to the mass element $dm$. 

![[Mass Moment of Inertia.png|396]]

## Parallel-Axis Theorem
If the [[Rigid-body Rotational Motion|rotation axis of a rigid body]] does not coincide with the body's axis of symmetry, but is parallel to it at a distance $d$, then the mass moment of inertia about the given rotation axis is given by:
$$
I=I_{s}+md^{2}
$$
where $I_{s}$ is the inertia about the symmetry axis.

