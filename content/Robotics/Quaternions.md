---
title: Quaternions
tags:
  - robotics
date: 2024-01-12
aliases:
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

## Quaternion Operations
Assume there are $\mathbf{q}_{a}, \mathbf{q}_{b}$, whose vectors are represented as $[s_{a}, \mathbf{v}_{a}]^{T}, [s_{b}, \mathbf{v}_{b}]^{T}$. Their quaternions are then:
$$
\mathbf{q}_{a} = s_{a}+x_{a}i+y_{a}j+z_{a}k, \quad \mathbf{q}_{b}=s_{b}+x_{b}i+y_{b}j+z_{b}k
$$
#### Addition and Subtraction:
The addition and subtraction of the quaternion $\mathbf{q}_{a}, \mathbf{q}_{b}$ is:
$$
\mathbf{q}_{a} \pm \mathbf{q}_{b} = [s_{a} \pm s_{b}, \mathbf{v}_{a} \pm \mathbf{v}_{b}]^{T}
$$
#### Multiplication
Quaternion multiplication is the multiplication of each item of $\mathbf{q}_{a}$ with each item of $\mathbf{q}_{b}$:
$$
\begin{align}
\mathbf{q}_{a}\mathbf{q}_{b} & =s_{a}s_{b}-x_{a}x_{b}-y_{a}y_{b}-z_{a}z_{b} \\
& + (s_{a}x_{b} + x_{a}s_{b}+y_{a}z_{b} - z_{a}y_{b})\,i \\
& + (s_{a}y_{b}-x_{a}z_{b}+y_{a}s_{b}+z_{a}x_{b})\,j \\
& + (s_{a}z_{b}+x_{a}y_{b}-y_{a}x_{b}+z_{a}s_{b})\,k
\end{align}
$$
The vector form is more concise:
$$
\mathbf{q}_{a}\mathbf{q}_{b} = [s_{a}s_{b} - \mathbf{v}_{a}^{T}\mathbf{v}_{b}, \; s_{a}\mathbf{v}_{b}+s_{b}\mathbf{v}_{a} + \mathbf{v}_{a} \times  \mathbf{v}_{b}]^{T}
$$
This means that the product of two real quaternions is still real, which is consistent with real number multiplication. However, due to the last outer product, quaternion multiplication is not commutative unless $\mathbf{v}_{a}$ and $\mathbf{v}_{b}$ at $\mathbb{R}^{3}$ are parallel, which means the outer product term is zero.

#### Length
The length of a quaternion is defined as:
$$
|| \mathbf{q}_{a} || = \sqrt{ s_{a}^{2} + x_{a}^{2} + y_{a}^{2} + z_{a}^{2} }
$$
The length of the product is the product of the lengths, so that the unit quaternion keeps unit length when multiplied by another unit quaternion:
$$
|| \mathbf{q}_{a} \, \mathbf{q}_{b} || = || \mathbf{q}_{a} || \,|| \mathbf{ q}_{b} ||
$$
#### Conjugate
The conjugate of a quaternion is to take the imaginary part as the opposite:
$$
\mathbf{q}_{a}^{*} = s_{a} - x_{a}i - y_{a}j - z_{a}k = [s_{a}, -\mathbf{v}_{a}]^{T}
$$
We get a real quaternion is the quaternion is multiplied by its conjugate. The real part is the square of its length:
$$
\mathbf{q}^{*} \, \mathbf{q}= \mathbf{q}\mathbf{q}^{*}=[s^{2}+\mathbf{v}^{T} \, \mathbf{v}, 0]^{T}
$$
#### Inverse
The inverse of the quaternion is:
$$
\mathbf{q}^{-1} = \mathbf{q}^{*} / || \mathbf{q} ||^{2}
$$
According to this definition, the product of the quaternion and its inverse is the real quaternion $\mathbf{1}$:
$$
\mathbf{q}\mathbf{q}^{-1} = \mathbf{q}^{-1}\mathbf{q}=\mathbf{1}
$$
If $\mathbf{q}$ is a unit quaternion, its inverse and conjugate are the same. So the inverse of the product has properties similar to matrices:
$$
(\mathbf{q}_{a}\mathbf{q}_{b})^{-1} = \mathbf{q}_{b}^{-1}\,\mathbf{q}_{a}^{-1}
$$
#### Scalar Multiplication
Similar to vectors, quaternions can be multiplied by numbers:
$$
k\mathbf{q}=[ks, k\mathbf{v}]^{T}
$$
## Using Quaternions to Represent a Rotation



## Conversion to Other Rotation Representations