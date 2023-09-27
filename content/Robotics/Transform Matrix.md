---
title: Transform Matrix
tags:
  - robotics
date: 2023-09-27
---
### Structure of the Transforms Matrix
- The upper left corner is the rotation matrix
- The right side is the translation vector
- The lower left corner is $0$ vector
- The lower right corner is $1$

This set of transformation matrices forms the special Euclidean group:
$$
\text{SE}(3)=\begin{Bmatrix}
\mathbf{T}= \begin{bmatrix}
\mathbf{R} & t \\
\mathbf{0}^{T} & 1
\end{bmatrix}
\in \mathbb{R}^{4\times{4}} | \mathbf{R} \in \text{SO}(3), \mathbf{t} \in \mathbb{R}^{3}
\end{Bmatrix}
$$
Here, the $\mathbf{R}$ rotation matrix is using the same special orthogonal group definition from [[Rotation Matrix]].

### Inverse
The inverse of the transform matrix also represents an inverse transformation:
$$
\mathbf{T}^{-1}=\begin{bmatrix}
\mathbf{R}^{T} & -\mathbf{R}^{T}\mathbf{t} \\
\mathbf{0}^{T} & 1
\end{bmatrix}
$$
### Notation
- We use $\mathbf{T}_{12}$ to represent the transformation from $2$ to $1$.
- When using $\mathbf{Ta}$, we use homogeneous coordinates.
- When using $\mathbf{Ra}$, we use non-homogeneous coordinates. 
- If they are written in the same equation, it is assumed that the conversion from homogeneous coordinates to normal coordinates is already done

### Why?
The formula $\mathbf{a}'=\mathbf{R}\mathbf{a}+\mathbf{t}$ from [[Euclidean Transforms]] expresses the rotation and translation of Euclidean space, but this form gets messy if you’re doing multiple transforms. For example, two transforms $\mathbf{R}_{1}, \mathbf{t}_{1}$ and $\mathbf{R}_{2}, \mathbf{t}_{2}$ would yield:
$$
\mathbf{b}=\mathbf{R}_{1}\mathbf{a}+\mathbf{t}_{1}, \quad \mathbf{c} = \mathbf{R}_{2}\mathbf{b}+\mathbf{t}_{2}
$$
So the transform from $\mathbf{a}$ to $\mathbf{c}$ would be:
$$
\mathbf{c}= \mathbf{R}_{2}(\mathbf{R}_{1}\mathbf{a}+\mathbf{t}_{1})+\mathbf{t}_{2}
$$
which will get even messier if we use more transformations. Thus, we introduce homogeneous coordinates and transform matrices, rewriting $\mathbf{a}'=\mathbf{R}\mathbf{a}+\mathbf{t}$ to:
$$
\begin{bmatrix}
\mathbf{a}' \\
1
\end{bmatrix}
=
\begin{bmatrix}
\mathbf{R} & \mathbf{t} \\
\mathbf{0}^{T} & 1
\end{bmatrix}
\begin{bmatrix}
\mathbf{a} \\
1
\end{bmatrix}
=\mathbf{T}
\begin{bmatrix}
\mathbf{a} \\
1
\end{bmatrix}
$$
We add $1$ at the end of the 3D vector and turn it into a 4D vector (called homogeneous coordinates). This way, the rotation and translation can be written in one matrix, making the whole thing linear. Matrix $\mathbf{T}$ is called the transform matrix.

If we call $\tilde{\mathbf{a}}$ the homogeneous coordinates of $\mathbf{a}$ such that $\tilde{\mathbf{a}}=[\mathbf{a} \quad 1]^T$, then the combination of the transforms has a nice form:
$$
\begin{align}
\tilde{b}=\mathbf{T}_{1}\tilde{\mathbf{a}}, \tilde{\mathbf{c}}=\mathbf{T}_{2}\tilde{\mathbf{b}} \\
\implies  \tilde{\mathbf{c}}=\mathbf{T}_{1}\mathbf{T_{2}}\tilde{\mathbf{a}}
\end{align}
$$