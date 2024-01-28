---
title: Quaternions
tags:
  - robotics
date: 2024-01-12
aliases:
  - quaternions
---
- Rotation matrix: Describes 3 DOF with 9 quantities
- Euler angles and the rotation vectors: Compact but suffer from the singularity

Quaternions are a way to represent rotations. Conceptually they are similar to complex numbers.

>[!note] Complex Numbers for 2D Rotation
>We use the complex set $\mathbb{C}$ to represent the vector on a 2D complex plane, and the complex multiplication with a unit complex number represents rotation on the 2D plane.
>- Multiplying by the complex $i$ is equivalent to rotating a complex vector counteclockwise by $90\degree$.
>
>For example, when we want to rotate the vector of a complex plane by $\theta$, we can multiply this complex vector by $e^{i\theta}$, which is represented by polar coordinates. It can also be written in the form of the Euler equation:
>$$
>e^{i\theta}=\cos \theta + i \sin \theta 
>$$
>This is a unit-length complex number. Therefore, in two dimensions, the rotation can be described by a unit complex number.

## Definition
Quaternions are basically a 3D version of the idea above. A quaternion $\mathbf{q}$ has a real part and three imaginary parts:
$$
\mathbf{q}=q_{0}+q_{1}i +q_{2}j+q_{3}k
$$
$$
\begin{cases}
i^{2} = j^{2} = k^{2} = 1 \\
ij=k, ji=-k \\
jk=i, kj=-1 \\
ki=j, ik=-j
\end{cases}
$$
If we look at $i,j,k$ as three axes, they look the same as complex numbers when multiplying with themselves, and the same as the outer product when multiplying with the others.

We can also use a scalar and a vector to express quaternions:
$$
\mathbf{q}=[s,\mathbf{v}]^{T}, \quad s = q_{0} \in \mathbb{R}, \quad \mathbf{v}=[q_{1},q_{2},q_{3}]^{T} \in \mathbb{R}^{3}
$$
Here, $s$ is the real part of the quaternion, and $\mathbf{v}$ is its imaginary part. If the imaginary part of a quaternion is 0, it is called real quaternion. Conversely, if its real part is 0, it is called imaginary quaternion.

We can use a unit quaternion to represent any rotation in 3D space, but it's not the same as complex numbers. In the complex, multiplying by $i$ means rotating by $90\degree$. In quaternion form, multiplied by $i$ is rotating around the $i$ axis by $90\degree$? So, does $ij = k$ means, first rotating around the $i$ by $90\degree$, then around $j$ by $90\degree$, is equivalent to rotating around $k$ by $90\degree$? This is not the case. the correct case would be that multiplying $i$ corresponds to rotating $180 \degree$, to guarantee that $ij=k$. Thus, $i^{2}=-1$ means that after rotating $360\degree$ around the $i$ axis, we get the opposite thing. This object has to be rotated by $720 \degree$ to be equal to its original appearance.

## Using Quaternions to Represent a Rotation
We can use a quaternion to express the rotation of a point. Suppose a point in 3D space $\mathbf{p}= [x,y,z]^{T} \in \mathbb{R}$ and rotation is specified by a unit quaternion $\mathbf{q}$. The 3D point is rotated to become $\mathbf{p}'$. If we use a [[Rotation Matrix]], then there is $\mathbf{p}' = \mathbf{Rp}$. And if we use quaternion to describe rotation, how do we operate a 3D vector with a quaternion?

First, we extend the 3D point to an imaginary quaternion:
$$
\mathbf{p}=[0,x,y,z]^{T}=[0, \mathbf{v}]^{T}
$$
We just put the 3 coordinates into the imaginary part and leave the real part to be zero. Then, the rotated point $\mathbf{p}'$ can be expressed as such a a product:
$$
\mathbf{p}' = \mathbf{qpq}^{-1}
$$
The multiplication here is the quaternion multiplication, and the result is also a quaternion. Finally, we take the imaginary part of $\mathbf{p}'$ and get the coordinates of the point after the rotation. It can be easily verified (we leave as an exercise here) that the real part of the calculation is $0$, so it is a pure imaginary quaternion.