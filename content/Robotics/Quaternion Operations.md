---
title: Quaternion Operations
tags:
  - robotics
date: 2024-01-13
aliases:
---
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