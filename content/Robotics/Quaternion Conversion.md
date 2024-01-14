---
title: Quaternion Conversion
tags:
  - robotics
date: 2024-01-13
aliases:
---
How do we convert from quaternions to a [[Rotation Matrix]] or [[Rotation Vectors]]? The key to this is writing quaternion multiplication as a matrix multiplication. 

Let $\mathbf{q} = [s, \mathbf{v}]^{T}$, and we can define $^{+}$ and $^\bigoplus$ as:
$$
\mathbf{q}^{+}= \begin{bmatrix}
s & -\mathbf{v}^{T} \\
\mathbf{v} & s\mathbf{I} + \mathbf{v}^{\wedge}
\end{bmatrix}, 
\quad \mathbf{q}^{\bigoplus} = \begin{bmatrix}
s & -\mathbf{v}^{T} \\
\mathbf{v} & s\mathbf{I} - \mathbf{v}^{\wedge} \end{bmatrix}
$$
These two symbols map the quaternion to a $4\times 4$ matrix. Then, quaternion multiplication can be written in the form of a matrix:
$$
\mathbf{q}_{1}^{+}\mathbf{q}_{2} = \begin{bmatrix}
s_{1} & -\mathbf{v}_{1}^{T} \\
\mathbf{v}_{1}  & s_{1}\mathbf{I} + \mathbf{v}_{1}^{\wedge} 
\end{bmatrix} \begin{bmatrix}
s_{2} \\
\mathbf{v}_{2}
\end{bmatrix}
=
\begin{bmatrix}
-\mathbf{v}_{1}^{T}\mathbf{v}_{2} + s_{1}s_{2} \\
s_{1}\mathbf{v}_{2} + s_{2}\mathbf{v}_{1} + \mathbf{v}_{1}^{\wedge}\mathbf{v}_{2}
\end{bmatrix}
= \mathbf{q}_{1}\mathbf{q}_{2}
$$
The left side is matrix multiplication and the right side is quaternion multiplication. Similarly, for $^{\bigoplus}$, we also get:
$$
\mathbf{q}_{1}\mathbf{q}_{2} = \mathbf{q}_{1}^{+}\mathbf{q}_{2} = \mathbf{q}_{2}^{\bigoplus}\mathbf{q}_{1}
$$
Then, consider the problem of using a quaternion to rotate a spatial point. According to the previous section, we have:
$$
\mathbf{p}' = \mathbf{q}\mathbf{p}\mathbf{q}^{-1} = \mathbf{q}^{+}\mathbf{p}^{+}\mathbf{q}^{-1}
= \mathbf{q^{+}\mathbf{q}^{-1^\bigoplus}\mathbf{p}}
$$
Substituting the matrix corresponding to two symbols, we get:
$$
\mathbf{q}^{+}(\mathbf{q}^{-1})^{\bigoplus} = \begin{bmatrix}
s & -\mathbf{v}^{T} \\
\mathbf{v} & s\mathbf{I} + \mathbf{v}^{\wedge}
\end{bmatrix} \begin{bmatrix}
s & \mathbf{v}^{T} \\
-\mathbf{v} & s\mathbf{I} + \mathbf{v}^{\wedge} \end{bmatrix}
= \begin{bmatrix}
1 & 0 \\
\mathbf{0}^{T} & \mathbf{v}\mathbf{v}^{T} + s^{2}\mathbf{I}+2s\mathbf{v}^{\wedge} +(\mathbf{v}^{\wedge})^{2} 
\end{bmatrix}
$$
Since $\mathbf{p}'$ and $\mathbf{p}$ are both imaginary quaternions, so in fact that the bottom right corner of the matrix gives the transformation formula from quaternion to rotation matrix:
$$
\boxed{
\mathbf{R}=\mathbf{v}\mathbf{v}^{T}+s^{2}\mathbf{I}+2s\mathbf{v}^{\wedge} + (\mathbf{v}^{\wedge})^{2}
}
$$
In order to obtain the conversion formula of the quaternion to the rotation vector, we take the trace on both sides of the above formula:
$$
\begin{align}
\text{tr}(\mathbf{R})  & = \text{tr}(\mathbf{v}\mathbf{v}^{T}) + 3s^{2}+2s \cdot 0 + \text{tr}((\mathbf{v}^{\wedge})^{2}) \\
	 & = v_{1}^{2}+v_{2}^{2}+v_{3}^{2}+3s^{2}-2(v_{1}^{2}+v_{2}^{2}+v_{3}^{2}) \\
	 & = (1-s^{2})+3s^{2}-2(1-s^{2}) \\
	 & = 4s^{2} - 1
\end{align}
$$
Also obtained by the form:
$$
\begin{align}
\theta  & = \arccos\left( \frac{\text{tr}(\mathbf{R})-1}{2} \right) \\
	 & = \arccos(2s^{2}-1)
\end{align}
$$
so:
$$
\begin{align}
\cos \theta  & = 2s^{2}-1 = 2\cos ^{2} \frac{\theta}{2}-1 \\
	\theta & = 2 \arccos s
\end{align}
$$
For the rotation matrix, if we replace $\mathbf{p}$ with the imaginary part of $\mathbf{q}$ in the formula, it' easy to know the imaginary part of $\mathbf{q}$ is not moving when it is rotated; that is, it constitutes exactly the rotation axis. So we get the rotation matrix just by the normalizing $\mathbf{q}$'s imaginary part. In summary, the conversion formula from quaternion to rotation vector can be written as:
$$
\begin{cases}
\theta=2\arccos q_{0} \\
[n_{x}, n_{y}, n_{z}]^{T}=[q_{1},q_{2},q_{3}]^{T} / \sin \frac{\theta}{2}
\end{cases}
$$
To convert from other representations, we just need to reverse the above steps.