---
title: Rotation Matrix
tags:
  - robotics
date: 2023-09-23
aliases:
  - rotation matrices
---
The rotation matrix $\mathbf{R}$ between two coordinate systems is defined as:
$$
\mathbf{R} = 
\begin{bmatrix}
{\mathbf{e}_1^T\mathbf{e}_1'} & {\mathbf{e}_1^T\mathbf{e}_2'} & {\mathbf{e}_1^T\mathbf{e}_3'}\\
{\mathbf{e}_2^T\mathbf{e}_1'} & {\mathbf{e}_2^T\mathbf{e}_2'} & {\mathbf{e}_2^T\mathbf{e}_3'}\\
{\mathbf{e}_3^T\mathbf{e}_1'} & {\mathbf{e}_3^T\mathbf{e}_2'} & {\mathbf{e}_3^T\mathbf{e}_3'}
\end{bmatrix}
$$
It consists of an inner product between the two sets of bases, describing the same vector’s coordinate relationship before and after the rotation. Since the base vector’s length is $1$, it is actually the cosine of the angle between the base vectors, so it’s also called the directional cosine matrix.
### Properties
Some properties of the rotation matrix:
- It is an orthogonal matrix – its inverse is its transpose
- Its determinant is $1$ – this is artificially defined as it’s actually $\pm 1$ but $-1$ is an improper rotation

As such, any orthogonal matrix with a determinant of $1$ is a rotation matrix, so you can define a set of $n$ dimensional rotational matrices as follows:
$$
\text{SO}(n)=\begin{Bmatrix}
\mathbf{R} \in \mathbb{R}^{n\times n} | \mathbf{R}\mathbf{R}^{T}= \mathbf{I}, \det(\mathbf{R}) = 1
\end{Bmatrix}
$$
$\text{SO}(n)$ refers to a special orthogonal group. This set consists of a rotation matrix of n dimensional space; in particular, $\text{SO}(3)$ refers to the rotation of the three-dimensional space. In this way, we can talk directly about the rotation transformation between the two coordinate systems without having to start from the bases.

Since the rotation matrix is orthogonal, its inverse (i.e. transpose) describes an opposite rotation, such that:
$$
\mathbf{a}' = \mathbf{R}^{-1}\mathbf{a}=\mathbf{R}^{T}\mathbf{a}
$$
where $\mathbf{R}^T$ represents an opposite rotation.