---
title: Holonomic Mobile Robots
tags:
  - mte544
date: 2025-09-30
aliases:
  - holonomic mobile robots
  - Mecanum
  - omniwheel
---
A holonomic drive system refers to a drive system that allows a robot or vehicle to move in any direction, independent of its orientation. 

For mobile robots, this involves omnidirectional (mecanum, swedish) wheels. These wheels are augmented with free spinning rollers on the circumference, which are arranged in a few different angles with respect to the wheel axle. The omni-wheel allows the robot to move sideways without using a steering mechanism.

## Typical Configurations

### 3-omniwheel configuration
A typical configuration involves 3 omniwheels.
- Force can only be applied perpendicular to the wheel axle.
- At least 3 wheels (i.e. 3 motors) are required to achieve omnidirectional maneuvering.

![[Holonomic Mobile Robots-20250930162138572.png]]

### 4-omniwheel configuration
Another typical configuration involved 4 omniwheels (there is some redundancy).
- Force can only be applied perpendicular to (when seen from the top) the roller axis at the point of contact with the floor.

![[Holonomic Mobile Robots-20250930162402170.png]]

## Kinematics of a Single Wheel
Our goal is to relate the body's twist $\dot{q}=[\dot{x},\dot{y},\omega ]^{T}$  or $(v,\omega)$ to the velocity of wheel $i$ expressed in the vehicles own frame $(v_{x}^{i}, v_{y}^{i}) =: (v^{i})^{w_{i}}$.

![[Holonomic Mobile Robots-20250930164016987.png|329]]


There are three coordinates involved:
- $\{ s \}$: spatial/inertial frame
- $\{ r \}$: robot body frame (origin at the robot geometric center, $q$, heading $\theta$)
- $\{ w_{i} \}$: wheel $i$ frame, obtained by rotating $r$ by mounting angle $\beta_{i}$

From the [[Coordinate Transform for Velocity|coordinate transform for velocity]], we have:
$$
(v^{i})^{s} = \hat{\omega}(p^{s}-q) + v = \hat{\omega}R_{r}^{s}p^{r}+v
$$

From the relation between $(v^{i})^{w_{i}}$ and $(v^{i})^{s}$:
$$
(v^{i})^{s} = R_{r}^{s}R_{w_{i}}^{r} (v^{i})^{w_{i}}
$$
where:
$$
R_{r}^{s} = \begin{bmatrix}
\cos \theta  & -\sin \theta \\
\sin \theta & \cos \theta
\end{bmatrix}, \quad R_{w_{i}}^{r} = \begin{bmatrix}
\cos \beta_{i} & -\sin \beta_{i} \\
\sin \beta_{i} & \cos \beta_{i}
\end{bmatrix}
$$
Combining the above, we have:
$$
\begin{align}
(v^{i})^{w_{i}} & = (R_{w_{i}}^{r})^{T}(R_{r}^{s})^{T}(v^{i})^{s} \\[2ex]
     & = (R_{w_{i}}^{r})^{T} (R_{r}^{s})^{T} (\hat{\omega}R_{r}^{s}p^{r}+v) \\[2ex] 
     & = \begin{bmatrix}
\omega(x_{i}\sin\beta_{i}-y_{i}\cos \beta_{i})+ \dot{x}\cos(\theta+\beta_{i})+\dot{y}\sin(\theta+\beta i) \\
\omega(x_{i}\sin\beta_{i}+y_{i}\cos \beta_{i})- \dot{x}\sin(\theta+\beta_{i})+\dot{y}\cos(\theta+\beta i)
\end{bmatrix}
\end{align}
$$

For convenience, we can collect this as a matrix mapping from the robot twist to the wheel-frame velocity:
$$
(v^{i})^{w_{i}} = g_{i}(\theta)\dot{q}
$$
where
$$
g_{i}(\theta) = \begin{bmatrix}
\cos(\theta+\beta_{i})  & \sin(\theta+\beta_{i})  &  x_{i}\sin\beta_{i}-y_{i}\cos\beta_{i}  \\
-\sin(\theta+\beta_{i})  & \cos(\theta+\beta_{i})  & x_{i}\cos\beta_{i} + y_{i}\sin\beta_{i}
\end{bmatrix}
$$

For an omni/Swedish wheel, the driven direction $\{ w_{i} \}$ is not purely $x$; it's tilted by the roller angle $\gamma_{i}$. Projecting the wheel-center velocity onto the drive direction gives the rim speed $v_{\text{drive}}^{i}$. We can re-write this with respect to the motor angular speed $u_{i}$ as:
$$
\begin{align}
u_{i}  & = \frac{v_{\text{drive}}^{i}}{r_{i}}  \\[2ex]
 & = \frac{1}{r_{i}}(v_{x}^{i}+v_{y}^{i}\tan \gamma_{i})  \\[2ex]
 & = \frac{1}{r_{i}}\begin{bmatrix}
1 & \tan \gamma_{i}
\end{bmatrix} \,\, g_{i}(\theta)\,\dot{q}
\end{align}
$$
## Example

![[MTE 544 ex1-5.pdf]]