---
title: Unit Quaternion
tags:
  - mte544
date: 2025-10-20
aliases: unit quaternion
---
Define $q \in \mathbb{R}^{4}$ according to
$$
q=\begin{bmatrix}
q_{1} \\
q_{2} \\
q_{3} \\
q_{r}
\end{bmatrix} = \begin{bmatrix}
\phi \sin \frac{\theta}{2} \\
\cos \frac{\theta}{2}
\end{bmatrix}
$$
where $\phi$ is the rotational axis (unit vector) and $\theta \in [0,\pi]$ is the angle.

Properties:
- $|| q ||=1$
- $q_{r}= \frac{1}{2}\sqrt{1+ r_{11} +r_{22} + r_{33}}$, where the $r$'s are the diagonal entries of the $3\times 3$ rotation matrix $R$ corresponding to $q$

Note that we can also write
$$
\begin{bmatrix}
q_{1} \\
q_{2} \\
q_{3}
\end{bmatrix} = \frac{1}{4q_{r}}\begin{bmatrix}
r_{32}-r_{23} \\
r_{13}-r_{31} \\
r_{21}-r_{12}
\end{bmatrix}
$$
for $q_{r}\neq 0$.

Note that we can write
$$
R = \begin{bmatrix}
q_{r}^{2} + q_{1}^{2}-q_{2}^{2}-q_{3}^{2}  & 2(q_{1}q_{2}-q_{r}q_{3}) & 2(q_{r}q_{2}+q_{1}q_{3}) \\
2(q_{r}q_{3}+q_{1}q_{2}) & q_{r}^{2}-q_{1}^{2}+q_{2}^{2}-q_{3}^{2} & 2(q_{2}q_{3}-q_{r}q_{1}) \\
2(q_{1}q_{3}-q_{r}q_{2}) & 2(q_{r}q_{1}+q_{2}q_{3})  & q_{r}^{2}-q_{1}^{2}-q_{2}^{2}+q_{3}^{2}
\end{bmatrix}
$$

ROS uses a unit quaternion which is denoted by a 4-tuple $[x,y,z,w]$.

## Example

![[MTE 544 modeling ex 6.pdf]]