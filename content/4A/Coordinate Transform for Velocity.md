---
title: Coordinate Transform for Velocity
tags:
  - mte544
date: 2025-09-18
aliases: coordinate transform for velocity
---
Suppose we have a 1-link robot is moving with linear velocity $v$ and angular velocity $\omega$ about $q$:

![[Coordinate Transform for Velocity-20250918140522534.png|286]]

What is $\dot{p}^{a}(t)$, the velocity of $p$ in $\{ a \}$?

**Velocity due to angular rotation:** Note that $|| v_{w} ||$, the magnitude of the velocity contribution due to angular velocity, can be written as
$$
|| v_{\omega} || = \omega || p^{a} - q ||
$$
with similar triangles, we have
$$
v_{\omega} = \begin{bmatrix}
y_{q} - y_{p}  \\
x_{p} - x_{q}
\end{bmatrix} \omega = \begin{bmatrix}
0 & -\omega \\
\omega & 0
\end{bmatrix} (p^{a}-q) =: \hat{\omega}(p^{a}-q)
$$
The total velocity $\dot{p}^{a}(t)$ is the summation of two velocity vectors $v$ and $v_{w}$.
- Note that $v=\dot{q}$ (movement of the base)

$$
\begin{align}
\dot{p}^{a}(t)  & = v+v_{\omega}  \\[2ex]
     & = v+ \begin{bmatrix}
0 & -\omega \\
\omega & 0
\end{bmatrix} (p^{a}-q) \\[2ex] 
     & = v + \hat{\omega}(p^{a}-q) \\[2ex] 
     & = \boxed{\hat{\omega}p^{a} + (v-\hat{\omega}q)} \\[2ex]
     & = \hat{\omega}(R_{b}^{a}p^{b}+q) + (v-\hat{\omega}q) \\[2ex] 
     & = \hat{\omega}R_{b}^{a}p^{b} + v
\end{align}
$$

This is the same idea as [[Coordinate Transformation in 2D#Rotation + Translation in 2D|rotation + translation]], where the first term is the term rotated, and then we add a velocity vector.

## Homogeneous Coordinates
To generalize to homogeneous coordinates, consider:
$$
\begin{align}
\frac{d}{dt}\overline{p}^{a}(t)  & = \frac{d}{dt}\begin{bmatrix}
p^{a}(t) \\
1
\end{bmatrix} = \begin{bmatrix}
\dot{p}^{{a}}(t) \\
0
\end{bmatrix} \\[2ex]
 & = \begin{bmatrix}
\hat{\omega} & v-\hat{\omega}q  \\
0 & 0
\end{bmatrix} \begin{bmatrix}
p^{a}(t) \\
1
\end{bmatrix} \\[2ex]
 & =  \begin{bmatrix}
\hat{\omega}R_{b}^{a} & v \\
0 &  0
\end{bmatrix}\begin{bmatrix}
p^{b} \\
1
\end{bmatrix}
\end{align}
$$
Thus, we have:
$$
\begin{align}
\dot{ \overline{p}}^{a}(t)  & = \begin{bmatrix}
\dot{p}^{a}(t) \\
0
\end{bmatrix} = \begin{bmatrix}
\hat{\omega}  & v-\hat{\omega}q \\
0 & 0
\end{bmatrix} \begin{bmatrix}
p^{a}(t) \\
1
\end{bmatrix} \\[2ex] 
     & = \begin{bmatrix}
\hat{\omega} & \dot{q}-\hat{\omega}q \\
0 & 0
\end{bmatrix} \overline{p}^{a}(t) \\[2ex] 
     & = \begin{bmatrix}
\hat{\omega}R_{b}^{a}  & v \\
0 & 0
\end{bmatrix} \overline{p}^{b}
\end{align}
$$

## Homogeneous Transformation
Recall that a point in frame $\{ a \}$ can be expressed in terms of frame $\{ b \}$ as:
$$
\overline{p}^{a}(t) = \mathcal{G}_{b}^{a}(t) \overline{p}^{b}
$$
Then:
$$
\dot{\overline{p}}^{a}(t)   = \dot{\mathcal{G}}_{b}^{a} (t) \, \overline{p}^{b} \\[2ex]
$$
where
$$
\mathcal{G}_{b}^{a}(t) = \begin{bmatrix}
R_{b}^{a}(t) & q(t) \\
0 & 1
\end{bmatrix} \quad \Longrightarrow \quad  \dot{\mathcal{G}}_{b}^{a} = \begin{bmatrix}
\dot{R}_{b}^{a}(t) & \dot{q}(t) \\
0 & 0
\end{bmatrix}
$$
- $\dot{R}_{b}^{a}(t) = \hat{\omega} R_{b}^{a}$ (see [[Coordinate Transformation in 2D#Time derivative of rotation matrix|time derivative of rotation matrix]])
- $\dot{q}(t)=v$

Since we can write $\overline{p}^{b} = (\mathcal{G}_{b}^{a}(t))^{-1}\overline{p}^{a}(t)$, we can write
$$
\dot{\overline{p}}^{a}(t)   = \dot{\mathcal{G}}_{b}^{a} (t) \, \overline{p}^{b}  = \dot{\mathcal{G}}_{b}^{a} (t) \,(\mathcal{G}_{b}^{a}(t))^{-1}\overline{p}^{a}(t)  \\[2ex]
$$
Let's consider the $\dot{\mathcal{G}}_{b}^{a} (t) \,(\mathcal{G}_{b}^{a}(t))^{-1}$ term. This is called the **twist matrix**:
$$
\begin{align}
\hat{\xi} = \dot{\mathcal{G}}\mathcal{G}^{-1}  & = \begin{bmatrix}
\dot{R}  & \dot{q} \\
0 & 0
\end{bmatrix} \begin{bmatrix}
R^{T} & -R^{T}q \\
0 & 1
\end{bmatrix} \\[2ex] 
 & = \begin{bmatrix}
\dot{R}R^{T} & \dot{q}-\dot{R}R^{T}q \\
0 & 0
\end{bmatrix} \\[2ex]
& = \begin{bmatrix}
\hat{\omega} & \dot{q}-\hat{\omega}q \\
0 & 0
\end{bmatrix} \\[2ex] 
& = \begin{bmatrix}
\hat{\omega} & \kappa \\
0 & 0
\end{bmatrix}
\end{align}
$$
We can represent this as a simple vector (**twisted**) as
$$
\xi = \begin{bmatrix}
\kappa \\
\omega
\end{bmatrix} \in  \mathbb{R}^{3}
$$
- $\kappa = \dot{q} - \hat{\omega}q \in \mathbb{R}^{2}$ that encodes the translational velocity contribution.

The instantaneous center of rotation is given by $-\hat{\omega}^{-1}$.