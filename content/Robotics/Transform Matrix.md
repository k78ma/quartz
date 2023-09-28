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
- When using $\mathbf{Ta}$, we use [[homogeneous coordinates]].
- When using $\mathbf{Ra}$, we use non-homogeneous coordinates. 
- If they are written in the same equation, it is assumed that the conversion from homogeneous coordinates to normal coordinates is already done
