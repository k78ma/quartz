---
title: Coordinate Transformation in 2D
tags:
  - mte544
date: 2025-09-09
aliases: coordinate transformation in 2d
---
When thinking about robotics, we typically want to consider the following standard coordinate frames:
- Global (spatial, fixed) frame: A fixed frame of reference attached to the earth.
- Local (body, moving) frame: A frame placed in some key locations within the robot.

Coordinate transformations are a mathematical relation between a point seem from one frame, with the same point seen from another frame. Essentially, they tell us the position and orientation of a coordinate frame with respect to another frame.

## Rotation in 2D
Assuming only rotation (no translation yet) between our global and local frames for now, how do transform a point $p^{b}=(x^{b}, y^{b})$ to $p_{a}=(x^{a}, y^{a})$?

We can do this using a [[Rotation Matrix]]:
$$
\begin{align}
p_{a} = \begin{bmatrix}
x^{a} \\
y^{b}
\end{bmatrix} &  = \begin{bmatrix}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{bmatrix} \begin{bmatrix}
x^{b} \\
y^{b}
\end{bmatrix}\\[2ex] 
 & = R^{a}_{b} \,p^{b}
\end{align}
$$
where $R_{b}^{a}$ is a rotation matrix that transforms a vector from frame $b$ into frame $a$.

For a nice visual derivation on the matrix, see: https://www.youtube.com/watch?v=-HcDl_gyeMs

![[Coordinate Transformation in 2D-20250909211034641.png|474]]

![[Coordinate Transformation in 2D-20250909211123506.png]]

The rotation matrix has some special properties:
- Its inverse is equal to its transpose:
$$
(R_{b}^{a})^{-1} = (R_{b}^{a})^{T}
$$
- Its inverse is also equal to a rotation matrix that goes the other way (from frame $a$ to frame $b$):
$$
(R_{b}^{a})^{T} = R_{a}^{b}
$$
- Multiplying it by its transpose give the identity matrix ([[Orthogonal Matrix|orthogonal matrix]]):
$$
R R^{T} = R^{T}R = I
$$
We say that $R \in SO(2)$ which stands for [[Special Orthogonal Group]] in 2D.