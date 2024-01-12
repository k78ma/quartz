---
title: Euler Angles
tags:
  - robotics
date: 2024-01-11
aliases:
---
Euler angles provide a more interpretable/intuitive way to describe rotation; using three primal axes to decompose a rotation into three rotations around different axes. Euler angles have different definitions, based on the order of rotation ($XYZ$, $ZYX$, $YZX$, etc). 

$ZYX$ is used frequently because it's equivalent to yaw-pitch-roll:

![[Euler Angles-1.png|656]]

Note that rotation around the $Y$ and the $X$ is after the previous rotations. A 3D vector $[y,p,r]^{T}$ can be used to describe the rotation.

### Gimbal Lock
Euler angles suffer from the Gimbal lock problem. For example, in the case of $ZYX,$ when the pitch angle is $\pm90\degree$, first rotation and the third rotation will use the same axis, causing the system to lose a degree of freedom (from 3 rotations to 2 rotations).

![[Euler Angles-2.png]]

In fact, as long as we want to use 3 real numbers to express 3D rotation, we will face some sort of singularity problem like this. Thus, Euler angles are only commonly used for human-computer interaction, not to express poses directly in a SLAM, filtering, or optimization.