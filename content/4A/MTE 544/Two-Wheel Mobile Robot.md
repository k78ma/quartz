---
title: Two-Wheel Mobile Robot
tags:
  - mte544
date: 2025-09-27
aliases: two-wheel mobile robot
---
A 2-wheeled robot typically has the following form:

![[Two-Wheel Mobile Robot-20250927145908857.png|427]]


- Center of wheels $P$

The forward velocity $v$ is tangent to the path:
$$
\begin{align}
\dot{x} &  = v\cos \theta \\
\dot{y} &  = v\sin \theta \\
\dot{\theta} & = \omega
\end{align}
$$
Or:
$$
\begin{bmatrix}
\dot{x} \\
\dot{y} \\
\dot{\theta}
\end{bmatrix} = \begin{bmatrix}
\cos \theta & 0 \\
\sin \theta & 0 \\
0 & 1
\end{bmatrix} \begin{bmatrix}
v \\
\omega
\end{bmatrix}
$$
- Usually, $(v,\omega)$ are treated as "inputs" and $(x,y, \theta)$ are treated as "state variables"
- The above constraint is an example of so **non-holonomic** constraints

## Kinematics for wheel control

![[Two-Wheel Mobile Robot-20250927151738540.png|337]]


What are the wheel speeds $(u_{r}, u_{l})$ to move the robot's center point with $v$ and $\omega$?
$$
\begin{align}
R & = \frac{v}{\omega}, \\[2ex]
v_{r}^{w}  & = \omega\left( R+\frac{T}{2} \right) = v+\frac{T\omega}{2} \\[2ex] 
v_{\ell}^{w} & = \omega\left( R-\frac{T}{2} \right) = v-\frac{T\omega}{2}
\end{align}
$$
- $R$ is the instantaneous center of velocity
- $T$ is the track width
- $v_{r}^{w}, v_{l}^{w}$ are the tangential linear speeds at the wheel rims (ground speed at contact points with no slip)
- In a left turn ($\omega>0$), the right wheel traces a large arc and must spin faster and vice versa

Converting to wheel angular speeds:
$$
\begin{align}
u_{r} = \frac{1}{r}v_{r}^{w} = \frac{1}{r}\left( v+\frac{T\omega}{2} \right) \\[2ex] 
u_{\ell} = \frac{1}{r}v_{\ell}^{w} = \frac{1}{r}\left( v-\frac{T\omega}{2} \right)
\end{align}
$$
- $r$ is the wheel radius

Working backward, we can then find $v$ and $\omega$ based on our wheel speeds:
$$
\begin{align}
v = r \frac{u_{r}+u_{\ell}}{2} \\[2ex]
\omega= r \frac{u_{r}-u_{\ell}}{T}
\end{align}
$$
and in turn:
$$
\begin{align}
\dot{x}  & = r \frac{u_{r}+u_{l}}{2} \cos \theta \\[2ex]
\dot{y}  & = r \frac{u_{r}+u_{l}}{2} \sin \theta \\[2ex] 
\dot{\theta}  & = r \frac{u_{r}-u_{\ell}}{T}
\end{align}
$$

## Example

![[MTE 544 ex1-3 1.pdf]]