---
title: Structure from Motion
tags:
  - mte544
date: 2025-10-31
aliases:
  - structure from motion
  - SfM
---
Structure from Motion algorithms allows us to reconstruct a 3D image from a set of 2 or more distinct images whose relative pose is unknown. This is the main technique for visual odometry.

![[Structure from Motion-20251031192218339.png]]

## Two-View SfM
For a given 3D feature $P^{w}$, the relative pose of the camera between two views, $[R_{1}^{2} \, t_{1}^{2}]$ may not be known. We can use the [[Stereo Cameras|stereo vision]] process to find $[R_{1}^{2} \, t_{1}^{2}]$ and well $P^{w}$. For example, the relative pose may come from the movement of the camera between two time instances, $\tau_{1}$ and $\tau_{2}$. This is called Two-View SfM.

Assume the camera pose at time $t_{1}$ is a reference (i.e.) world frame, the image taken at $t_{1}$ would be given by
$$
\lambda_{1}\overline{p}^{1} = K [I|0] \overline{P}^{w} = KP^{w}
$$
and the image taken at at $t_{2}$ would be
$$
\lambda_{2}\overline{p}^{2} = K [R_{1}^{2} \,|\, t_{1}^{2}]\overline{P}^{w} = KR_{1}^{2}P^{w} + Kt_{1}^{2}
$$
where because image points are projective, each comes with an unknown positive depth/scale $\lambda_{i}$.

Working in normalized (calibrated) image coordinates:
$$
\overline{x}^{1} = K^{-1}\overline{p}^{2},\,\,\, \overline{x}^{2}:=K^{-1}\overline{p}^{2}
$$
Because the world frame is the first camera, the 3D points coordinates in camera 1 are simply $\lambda_{1}\overline{x}_{1}$.

In these coordinates the intrinsics, and the geometry is purely Euclidean:
$$
\lambda_{2}=\overline{x}^{2} R_{1}^{2}\lambda_{1}\overline{x}_{1} + t_{1}^{2}
$$
Taking the cross product of both sides of the above equation with $t_{1}^{2}$:
$$
\begin{align}
t_{1}^{2} \times \lambda_{2}\overline{x}^{2}  & = t_{1}^{2} \times R_{1}^{2}\lambda_{1}\overline{x}^{1} + \cancel{ t_{1}^{2}\times t_{1}^{2} } \\[2ex] 
\implies \lambda \hat{t}_{1}^{2}\overline{x}^{2}  & = \lambda_{1} \hat{t}_{1}^{2}R_{1}^{2}\overline{x}^{1}
\end{align}
$$
Finally, taking the dot product with $\overline{x}_{2}$ on both sides:
$$
\begin{align}
\cancel{ \lambda(\overline{x}_{2})^{T}(t_{1}^{2}\times \overline{x}^{2}) } = \lambda_{1}(\overline{x}^{2})^{T}\hat{t}_{1}^{2}R_{1}^{2}\overline{x}^{1} \\[2ex] 
\implies (\overline{x}^{2})^{T}(\hat{t}_{1}^{2}R_{1}^{2})(\overline{x}^{1})=0
\end{align}
$$
where:
- $\hat{t}_{1}^{2}$ is the skew-symmetric matrix that implements the cross product with $t_{1}^{2}$
- $E=(\hat{t}_{1}^{2}R_{1}^{2})$ is called the **essential matrix**
- $(\overline{x}^{2})^{T}E(\overline{x}^{1})=0$ is called the **epipolar constraint**

## SfM Procedure
In general, the SfM procedure involves:
1. Computing the essential matrix
2. Extracting $R$ and $t$
3. Triangulating to retrieve 3D coordinates

### Triangulation
Once the relative camera poses are known, each pair of corresponding rays $\bar{x}^1_i$ and $\bar{x}^2_i$ can be intersected to recover the 3D point $P_i$.

Conceptually:
- Each image point defines a ray in space.
- The 3D point is the intersection (or best intersection) of these rays.

This process is called triangulation.

Mathematically, we solve for the depths $\lambda_1, \lambda_2$ that best satisfy:
$$
\lambda_2\,\bar{x}^2 = R \lambda_1\,\bar{x}^1 + t
$$
In practice, triangulation is done using least-squares linear or nonlinear optimization.