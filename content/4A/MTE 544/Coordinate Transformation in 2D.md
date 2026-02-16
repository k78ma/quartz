---
title: Coordinate Transformation in 2D
tags:
  - mte544
date: 2025-09-09
aliases: coordinate transformation in 2d
---
When thinking about robotics, we typically want to consider the following standard coordinate frames:
- Global (spatial, fixed) frame: A fixed frame of reference attached to the earth.
- Local (body, moving) frame: A frame placed in some key locations within the robot.

Coordinate transformations are a mathematical relation between a point seem from one frame, with the same point seen from another frame. Essentially, they tell us the position and orientation of a coordinate frame with respect to another frame.

## Rotation in 2D
Assuming only rotation (no translation yet) between our global and local frames for now, how do transform a point $p^{b}=(x^{b}, y^{b})$ to $p_{a}=(x^{a}, y^{a})$?

We can do this using a [[Rotation Matrix]]:
$$
\begin{align}
p_{a} = \begin{bmatrix}
x^{b} \\
y^{b}
\end{bmatrix} &  = \begin{bmatrix}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{bmatrix} \begin{bmatrix}
x^{b} \\
y^{b}
\end{bmatrix}\\[2ex] 
 & = R^{a}_{b} \,p^{b}
\end{align}
$$
where $R_{b}^{a}$ is a rotation matrix that transforms a vector from frame $b$ into frame $a$.

For a nice visual derivation on the matrix, see [here](https://www.youtube.com/watch?v=-HcDl_gyeMs). (Note that the derived matrix here is the inverse of what we wrote above, but this is fine because it's just going in the other direction.)

![[Coordinate Transformation in 2D-20250909211034641.png|474]]

![[Coordinate Transformation in 2D-20250909211123506.png]]

The rotation matrix has some special properties:
- Its inverse is equal to its transpose:
$$
(R_{b}^{a})^{-1} = (R_{b}^{a})^{T}
$$
- Its inverse is also equal to a rotation matrix that goes the other way (from frame $a$ to frame $b$):
$$
(R_{b}^{a})^{T} = R_{a}^{b}
$$
- Multiplying it by its transpose give the identity matrix ([[Orthogonal Matrix|orthogonal matrix]]):
$$
R R^{T} = R^{T}R = I
$$
We say that $R \in SO(2)$ which stands for [[Special Orthogonal Group]] in 2D.

### Time derivative of rotation matrix
If the angle $\theta$ changes with time, then we can take the time derivative of the rotation matrix:
$$
\dot{R} = \begin{bmatrix}
-\sin \theta & -\cos \theta \\
\cos \theta & -\sin \theta
\end{bmatrix} \dot{\theta}
$$
Recall that $\dot{\theta}=\omega$ is the angular velocity.

We can factor the above derivative into a nice form:
$$
\begin{align}
\dot{R} &  = \begin{bmatrix}
0 & -\omega \\
\omega & 0
\end{bmatrix}R \\[2ex]
     & = \hat{\omega}R
\end{align}
$$
This is the matrix representation of angular velocity in 2D. Note that we can also write
$$
\dot{R}R^{T} = \begin{bmatrix}
-\sin \theta & -\cos \theta \\
\cos \theta & -\sin \theta
\end{bmatrix} \omega \begin{bmatrix}
\cos \theta & \sin \theta \\
-\sin \theta & \cos \theta
\end{bmatrix} = \omega
$$

Note that this matrix is [[skew-symmetric]] such that $\hat{\omega}^{T}=-\hat{\omega}$. 

For a point $p^{a}$, we can find its time derivative using the above as
$$
\dot{p}^{a} = \dot{R}_{b}^{a} \, p^{b} = \hat{\omega}R_{b}^{a} \,p^{b}
$$
Alternatively, we can write
$$
\dot{p}^{a}=\dot{R}_{b}^{a}(R_{b}^{a})^{T}p^{a} = \hat{\omega}p^{a}
$$
## Rotation + Translation in 2D
What if we rotate but also have a translation between the coordinate frames? How do transform a point $p^{b}=(x^{b}, y^{b})$ to $p_{a}=(x^{a}, y^{a})$?

![[Coordinate Transformation in 2D-20250909215555032.png]]

This can be done in two steps.

First, we rotate frame $b$ by $\theta$ using the rotation matrix:
$$
\begin{align}
\begin{bmatrix}
x^{b} \\
y^{b}
\end{bmatrix} \quad \longrightarrow \quad  \begin{bmatrix}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{bmatrix} \begin{bmatrix}
x^{b} \\
y^{b}
\end{bmatrix} 
 = R^{a}_{b} \,p^{b}
\end{align}
$$
Then, we translate $R^{a}_{b} \,p^{b}$ by $q$:
$$
R^{a}_{b} \,p^{b} \quad \longrightarrow \quad R^{a}_{b} \,p^{b}+q
$$
Thus, $p^{a}= R^{a}_{b} \,p^{b} + q$. Note that this means $q$ is in frame $a$.

## Homogeneous Representation
We can represent this rotation + translation as one matrix using [[Homogeneous Coordinates]].

Let
$$
\begin{align}
\mathcal{G}_{b}^{a}  & = \begin{bmatrix}
R_{b}^{a} &  q \\
0 &  1
\end{bmatrix} \in  \mathbb{R}^{3\times 3} \\[2ex]
\overline{p}^{a}   & := \begin{bmatrix}
p^{a} \\
1
\end{bmatrix}, \,\,\, \overline{p}^{b}   := \begin{bmatrix}
p^{b} \\
1
\end{bmatrix} \in  \mathbb{R}^{3}
\end{align}
$$
Then, we write the rotation + translation as
$$
\overline{p}^{a} = \mathcal{G}_{b}^{a} \overline{p}^{b}
$$
We denote $\mathcal{G}_{b}^{a} \in \text{SE}(2)$  which is the [[Special Euclidean Group]] for 2D.

### Properties
Composition:
$$
\mathcal{G}_{b}^{a}\mathcal{G}_{c}^{b} = \mathcal{G}_{c}^{a} \quad \Longrightarrow \quad  \mathcal{G}_{b}^{a}\mathcal{G}_{c}^{b} \,\overline{p}^{c} = \mathcal{G}_{b}^{a}\overline{p}^{b} = \overline{p}^{a}
$$
Inverse:
$$
\begin{align}
\mathcal{G}_{b}^{a}  & = \begin{bmatrix}
R_{b}^{a} &  q \\
0 &  1
\end{bmatrix} \\[2ex] 
\mathcal{G}_{b}^{a}  & = (\mathcal{G}_{a}^{b})^{-1} = \begin{bmatrix}
(R_{b}^{a})^{-1} & -(R_{b}^{a})^{-1}q \\
0 & 1
\end{bmatrix} \\[2ex] 
\mathcal{G}_{a}^{c}  & = (\mathcal{G}_{c}^{a})^{-1} = (\mathcal{G}_{b}^{a}\mathcal{G}_{c}^{b})^{-1} = (\mathcal{G}_{c}^{b})^{-1} (\mathcal{G}_{b}^{a})^{-1} = \mathcal{G}_{b}^{c} \mathcal{G}_{a}^{b}
\end{align}
$$
$\text{SE}(2)$ can be generalized to $\text{SE}(3)$ in the same way with $3\times 3$ rotation matrices.
- 3D rotation matrices are tricky to handle, so we often use other parameterizations such as [[Euler Angles]], [[Quaternions|quaternions]], etc.

### Example

![[Coordinate Transformation in 2D-20250918123620982.png]]

- If an object seen from the camera is located at $(1,1)$ w.r.t to the $c$ frame, then we can find its location in $s$ frame using $\mathcal{G}_{c}^{s}$.