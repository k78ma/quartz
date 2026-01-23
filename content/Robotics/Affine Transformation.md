---
title: Affine Transformation
tags:
  - robotics
  - lin-alg
date: 2024-01-27
aliases:
---
An affine transformation $\mathbf{T}:\mathbb{R}^{n}\to \mathbb{R}^{n}$ is a function that can be expressed in the form
$$
\mathbf{x}=A\mathbf{u}+\mathbf{b}
$$

The matrix form of the affine transformation is:
$$
\mathbf{T}_{A}=\begin{bmatrix}
\mathbf{A}  & \mathbf{t} \\
\mathbf{0}^{T}  & 1
\end{bmatrix}
$$
Unlike the [[Euclidean Transformation]], the affine transformation requires only $\mathbf{A}$ to be an invertible matrix, not necessarily an orthogonal matrix. An affine transformation is also called an orthogonal projection. After the affine transformation, a cube is no longer square, but the faces are still parallelograms.