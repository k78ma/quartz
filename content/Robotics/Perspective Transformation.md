---
title: Perspective Transformation
tags:
  - robotics
date: 2024-01-27
aliases:
---
Perspective transformation is the most general transformation. Its matrix form is:
$$
\mathbf{T}_{P}=\begin{bmatrix}
\mathbf{A} & \mathbf{t} \\
\mathbf{a}^{T} & v
\end{bmatrix}
$$
- Its upper left corner is an invertible matrix $\mathbf{A}$. 
- The upper right corner is the translation $\mathbf{t}$
- The lower left corner is the scale $\mathbf{a}^{T}$. 

Since the homogeneous coordinates are used, when $v \neq 0$, we can divide the entire matrix by $v$ to get a matrix with a bottom right corner of $1$. Otherwise, we get a matrix with a bottom right corner of $0$. Therefore, the 2D perspective transformation has a total of 8 degrees of freedom, and 3D has a total of 15 degrees of freedom.

The transformation from the real world to a camera photo can be seen as a perspective transformation. The reader can imagine what a square tile would look like in a photo. First, it is no longer square. Second, since the close part is larger than the far-away part, it is not even a parallelogram but an irregular quadrilateral.
