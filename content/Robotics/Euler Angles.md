---
title: Euler Angles
tags:
  - robotics
date: 2024-01-11
aliases:
---
Euler angles provide a more interpretable/intuitive way to describe rotation; using three primal axes to decompose a rotation into three rotations around different axes. Euler angles have different definitions, based on the order of rotation ($XYZ$, $ZYX$, $YZX$, etc). 

$ZYX$ is used frequently because it's equivalent to yaw-pitch-roll:

![[Euler Angles-1.png]]

Note that rotation around the $Y$ and the $X$ is after the previous rotations. A 3D vector $[y,p,r]^{T}$ can be used to describe the rotation.

Mathematically, we can think of $ZYX$ Euler angles as:
$$
R(\alpha, \beta, \gamma) = \text{Rot}(\hat{z}, \alpha)\text{Rot}(\hat{y}, \beta) \text{Rot}(\hat{x}, \gamma)
$$
where
$$
\begin{align}
\text{Rot}(\hat{z},\alpha) = \begin{bmatrix}
c_{\alpha} & -s_{\alpha} & 0 \\
s_{\alpha} & c_{\alpha} & 0 \\
0 & 0 & 1
\end{bmatrix} \\[2ex] 
\text{Rot}(\hat{y}, \beta) = \begin{bmatrix}
c_{\beta} & 0 & s_{\beta} \\
0 & 1 & 0 \\
-s_{\beta} & 0 & c_{\beta}
\end{bmatrix} \\[2ex] 
\text{Rot}(\hat{x}, \gamma)= \begin{bmatrix}
1 & 0 & 0 \\
0 & c_{\gamma} & -s_{\gamma} \\
0 & s_{\gamma} & c_{\gamma}
\end{bmatrix}
\end{align}
$$
such that
$$
R(\alpha, \beta, \gamma) = \begin{bmatrix}
c_{\alpha}c_{\beta} & c_{\alpha}s_{\beta}s_{\gamma}-s_{\alpha}c_{\gamma} & c_{\alpha}s_{\beta}s_{\gamma}+s_{\alpha}c_{\gamma} \\
s_{\alpha}c_{\beta} & s_{\alpha}s_{\beta}s_{\gamma}+c_{\alpha}c_{\gamma} & s_{\alpha}s_{\beta}c_{\gamma}-c_{\alpha}s_{\gamma} \\
-s_{\beta} & c_{\beta}s_{\gamma} & c_{\beta}c_{\gamma}
\end{bmatrix}
$$

![[Euler Angles-20251020010948797.png]]

### Gimbal Lock
- https://www.youtube.com/watch?v=zc8b2Jo7mno

Euler angles suffer from the Gimbal lock problem. For example, in the case of $ZYX,$ when the pitch angle is $\pm90\degree$, first rotation and the third rotation will use the same axis, causing the system to lose a degree of freedom (from 3 rotations to 2 rotations).

![[Euler Angles-2.png]]

In fact, as long as we want to use 3 real numbers to express 3D rotation, we will face some sort of singularity problem like this. Thus, Euler angles are only commonly used for human-computer interaction, not to express poses directly in a SLAM, filtering, or optimization.

Why is Gimbal lock a problem? The loss of a degree of freedom means that it's impossible to control rotation around one axis without affecting the others. This can lead to complex and unintuitive control requirements.
