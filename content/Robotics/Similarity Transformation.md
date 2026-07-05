---
title: Similarity Transformation
tags:
  - ml
date: 2024-01-27
aliases:
---
The similarity transformation has one more degree of freedom than the [[Euclidean Transformation]], which allows the object to be uniformly scaled, and its matrix is expressed as:
$$
\mathbf{T}_{S}=\begin{bmatrix}
s\mathbf{R} & t \\
\mathbf{0}^{T} & 1
\end{bmatrix}
$$
Note that that the rotation part has an extra scaling factor $s$, which means that we can evenly scale the three coordinates of $x$, $y$, and $z$ of a vector after it is rotated. 

Due to the scaling, a similarity transformation no longer keeps the volume of the transformed boy unchanged. You can imagine a cube with a side length of 1 transforming into a side with a length of 10 (but still being a cube). The set of three-dimensional similarity transform is also called similarity transform group, which is denoted as $\text{Sim}(3)$.