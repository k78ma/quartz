---
title: Rotation Vectors
tags:
  - robotics
date: 2024-01-10
aliases:
---
Rotation vectors are a more compact way to describe rotation than the [[Rotation Matrix]].
- $\text{SO}(3)$ rotation matrices have 9 quantities, but a 3D rotation only has 3 DOFs. Similarly, the [[Transform Matrix]] expresses a 6DOF transformation with 16 quantities.
- The rotation matrix and transformation matrix are very constrained by the fact that they must be an orthogonal matrix with determinant 1, making optimization/solution more difficult.

A rotation vector expresses rotation with only 3 quantities; its direction parallel with the axis of rotation, and the length is equal to the angle of rotation.

Consider a rotation represented by rotation matrix $\mathbf{R}$. If described by a rotation vector, assuming that the rotation axis is a unit-length vector $\mathbf{n}$ and the angle is $\theta$, then the vector $\theta \, \mathbf{n}$can also describe this rotation. The conversion is given by the formula:
$$
\mathbf{R}=\cos \theta \, \mathbf{I} + (1-\cos \theta)\mathbf{n}\mathbf{n}^{T}+\sin \theta \mathbf{n}^\wedge
$$
(Recall that the $^\wedge$ symbol denotes a [[Points, Vectors, Coordinate Systems|skew-symmetric matrix]]).

The conversion from rotation matrix to a rotation vector can also be found. The angle $\theta$ can be found by taking the *trace* of both sides:
$$
\begin{align}
\text{tr}(\mathbf{R}) & =\cos \theta \; \text{tr}(\mathbf{I}) + (1-\cos \theta) \; \text{tr}(\mathbf{nn}^{T})+\sin \theta \; \text{tr}(\mathbf{n}^\wedge) \\
	 & =3\cos \theta + (1-\cos \theta) \\
	 & = 1+ 2\cos \theta \\[2ex]
\therefore \theta &  = \arctan\left( \frac{\text{tr}(\text{R})-1}{2} \right)
\end{align}
$$
For the axis $\mathbf{n}$, since the rotation axis does not change after the rotation, we have:
$$
\mathbf{Rn}=\mathbf{n}
$$
Therefore, the axis $\mathbf{n}$ is the eigenvector corresponding to the matrix $\mathbf{R}$'s eigenvalue $1$. Solving this equation and normalizing it gives the axis of rotation.