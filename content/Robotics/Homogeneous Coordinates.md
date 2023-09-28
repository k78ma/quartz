---
title: Homogeneous Coordinates
tags:
  - robotics
date: 2023-09-27
---
The formula $\mathbf{a}'=\mathbf{R}\mathbf{a}+\mathbf{t}$ from [[Euclidean Transforms]] expresses the rotation and translation of Euclidean space, but this form gets messy if you’re doing multiple transforms. For example, two transforms $\mathbf{R}_{1}, \mathbf{t}_{1}$ and $\mathbf{R}_{2}, \mathbf{t}_{2}$ would yield:
$$
\mathbf{b}=\mathbf{R}_{1}\mathbf{a}+\mathbf{t}_{1}, \quad \mathbf{c} = \mathbf{R}_{2}\mathbf{b}+\mathbf{t}_{2}
$$
So the transform from $\mathbf{a}$ to $\mathbf{c}$ would be:
$$
\mathbf{c}= \mathbf{R}_{2}(\mathbf{R}_{1}\mathbf{a}+\mathbf{t}_{1})+\mathbf{t}_{2}
$$
which will get even messier if we use more transformations. Thus, we introduce homogeneous coordinates and the [[Transform Matrix]], rewriting $\mathbf{a}'=\mathbf{R}\mathbf{a}+\mathbf{t}$ to:
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