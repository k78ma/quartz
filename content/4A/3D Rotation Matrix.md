---
title: 3D Rotation Matrices
tags:
  - mte544
date: 2025-10-19
aliases:
  - 3D rotation matrices
  - 3D rotation matrix
---
The orientation of a rigid body in 3D can be described by a $3\times 3$ rotation matrix which has these properties:
$$
\begin{align}
R^{T}R = I \\
\det R = 1
\end{align}
$$
$R \in  \mathbb{R}^{3\times 3}$ is said to be in the [[Special Orthogonal Group|special orthogonal group]] $SO(3)$.

The parameterization of $SO(3)$ is tricky.
- A general $3\times 3$ matrix requires 9 parameters (with constraints) for 3 DOF motion
- [[Euler Angles]] need only 3 angles but suffers from singularities (gimbal lock)
