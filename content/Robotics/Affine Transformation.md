---
title: Affine Transformation
tags:
  - robotics
date: 2024-01-27
aliases:
---
The matrix form of the affine transformation is:
$$
\mathbf{T}_{A}=\begin{bmatrix}
\mathbf{A}  & \mathbf{t} \\
\mathbf{0}^{T}  & 1
\end{bmatrix}
$$
Unlike the [[Euclidean Transformation]], the affine transformation requires only $\mathbf{A}$ to be an invertible matrix, not necessarily an orthogonal matrix. An affine transformation is also called an orthogonal projection. After the affine transformation, a cube is no longer square, but the faces are still parallelograms.