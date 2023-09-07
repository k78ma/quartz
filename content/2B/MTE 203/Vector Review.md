---
title: Vector Review
tags:
  - mte203
date: 2023-09-07
---
A vector $\vec{v}$ is a directed line segment that has length and direction.

- Vector equality: Two vectors are equal when they have same length and direction

>[!info] Definition: Standard basis in $\mathbb{R}^3$
>Standard basis vectors for $\mathbb{R}^{3}$ are
>$$
>\vec{i}=\langle 1,0,0 \rangle, \vec{j}=\langle 0,1,0 \rangle, \vec{k}=\langle 0,0,1 \rangle 
>$$
>All vectors in $\mathbb{R}^{3}$ can be written in terms of $\vec{i}, \vec{j}, \vec{k}$.

Unit vector: Vectors with length 1
Normalization of vectors: To find a unit vector going in the direction of a given vector, take
$$
\vec{v}=\frac{\vec{v}}{\mid \mid \vec{v} \mid \mid}
$$

## Inner Product (dot product)
The standard dot product of two vectors $\vec{u}=\langle u_{1},u_{2},u_{3} \rangle$ and $\vec{v}=\langle v_{1},v_{2},v_{3} \rangle$ is:
$$
\vec{u} \cdot \vec{v}=u_{1}v_{1}+u_{2}v_{2}+u_{3}v_{3}
$$
The angle between two vectors can be found with:
$$
\vec{u} \cdot \vec{v}=\mid \mid \vec{u} \mid \mid  \, \mid \mid \vec{v} \mid \mid \cos \theta
$$
The two vectors $\vec{u}$ and $\vec{v}$ are perpendicular iff $\vec{u}  \cdot \vec{v}=0$.

## Cross Product
$$
\vec{u}\times \vec{v}=
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
u_{1} & u_{2} & u_{3} \\
v_{1} & v_{2} & v_{3}
\end{vmatrix}
=(u_{2}v_{3}-u_{3}v_{2})\vec{i}-(u_{1}v_{3}-u_{3}v_{1})\vec{j}+(u_{1}v_{2}-u_{2}v_{1})\vec{k}
$$
The cross-product is anti-communicative, such that:
$$
\vec{u}\times \vec{v}=-\vec{v}\times \vec{u}
$$
It is also distributive, such that:
$$
\vec{u}\times(a\vec{v}+b\vec{w})=a(\vec{u}\times \vec{v})+b(\vec{u}\times \vec{w})
$$
The angle between two vectors can be found with:
$$
\mid \mid \vec{u}\times \vec{v} \mid \mid = \mid \mid \vec{u} \mid \mid \; \mid \mid \vec{v} \mid \mid \sin \theta
$$
