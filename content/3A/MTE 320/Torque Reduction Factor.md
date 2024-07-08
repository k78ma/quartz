---
title: Torque Reduction Factor
tags:
  - mte320
date: 2024-07-08
aliases:
  - torque reduction factor
---
In a [[DC Motor]], at any given moment of time, a number of the armature conductors will not be under the pole faces, their contributions to the development of the torque will be zero. To take this effect into account, the torque given
$$
\tau  =K\phi I_{a}
$$
is multiplied by a **torque reduction factor**, $k$, which depends on the structure of the machine. Therefore:
$$
\tau=kK\phi I_{a}, \quad K=\frac{ZP}{2\pi a}
$$
As an example, if, on average, 95% of the conductors are always under the pole faces, then $k = 0.95$.