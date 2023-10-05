---
title: Project 1 - Robot Kinematics
tags:
  - mte203
date: 2023-10-04
---
## Part 1: Trajectory Analysis

### Plotting and Curve Fitting
Preliminary plotting shows us that $x(t), y(t), z(t)$ are all approximately sinusoidal:

![[Pasted image 20231003223759.png|500]]

#### Curve fitting x(t)
Using the curve fitting tool in MATLAB, we get:
![[Pasted image 20231003223942.png|592]]

There doesn’t seem to be a better fit for this (adding more terms did very little), so we just use:
$$
x(t) = 249.8671 + 38.1467\cos(1.9766\times 10^{-4} t) + 28.1165\sin(1.9766\times 10^{-4} t) 
$$
This has:
- Maximum error: 34.9412
- Minimum error: 0.0001
- RMSE: 11.2820 

#### Curve fitting y(t)
Similarly for $y(t)$:
![[Pasted image 20231003225321.png]]

This gives:
$$
y(t) = 0.0040 + -27.8914\cos(0.0002 t) + 38.3082\sin(0.0002 t) 
$$
This has:
- Maximum error: 34.9783
- Minimum error: 0.0041
- RMSE: 11.2840

#### Curve fitting z(t)
Once again, MATLAB Fourier curve fitting gives:
![[Pasted image 20231003230117.png]]

So the function is:
$$
z(t) = -0.1167 + -6.2782\cos(3.9530 \times 10^-5t) + 49.4770\sin(3.9530 \times 10^-5t) 
$$
This has:
- Maximum error: 6.7818
- Minimum error: 0.0003
- RMSE: 2.3335

### Constraint Checking
- Acceleration never exceeds $25 mm / s^{2}$ in any direction
- Magnitude of acceleration never exceeds $50 mm / s^{2}$
- Trajectory is infinitely differentiable
## Part 2: Robot Kinematics

### Forward Kinematics
First, let us summarize the given information/parameters:
- Joint $J_{1}$ controls yaw (rotation around the $z$-axis).
- Joints $J_{2}$ and $J_{3}$ control pitch (rotation around the $y$-axis).
- Link $L_{2}$ connects $J_{2}$ to $J_{3}$ and has a length of $135 \text{mm}$.
- Link $L_{3}$ connects $J_{3}$ to the end-effector and has a length of $147 \text{mm}$
- A constant offset $O$ of $59.7 \text{mm}$ in the end-effector’s local frame in the positive $x$ direction.  

Note that $J_{2}$ is defined to be the origin so we define the position of $J_{2}$ to be:
$$
P_{J_{2}}= (0,0,0)
$$
Based on this, the position of $J_{3}$ is easy to define:
$$
\begin{align}
x_{J_{3}} &= L_{2} \cdot \cos(J_{2}) \\
y_{J_{3}} &= 0 \\
z_{J_{3}} &= L_{2} \cdot \sin(J_{2})
\end{align}
$$
*($J_{3}$ position diagram)*  
![[position_J3.png|Check out this amazing picture|316]]

Note here that $y_{J_{3}}$ has no change because the joint only controls pitch.

We can then create a preliminary definition for the position of the end-effector, ignoring $J_{1}$ for now:
$$
\begin{align}
x_{EE} &= x_{J_{3}} + L_{3} \cdot \cos(J_{2} + J_{3}) \\
y_{EE} &= 0 \\
z_{EE} &= z_{J_{3}} + L_{3} \cdot \sin (J_{2} + J_{3})
\end{align}
$$

(Preliminary EE position diagram)

Now, accounting for $J_{1}$ rotation at $J_{3}$:
$$
\begin{align}
x'_{J_{3}} &= x_{J_{3}} \cdot \cos(J_{1}) - y_{J_{3}} \cdot \sin(J_{1}) \\
y'_{J_{3}} &= x_{J_{3}} \cdot \sin(J_{1}) - y_{J_{3}} \cdot \cos(J_{1}) \\
z'_{J_{3}} &= z_{J_{3}}
\end{align}
$$
Propagating this rotation to the previously determined end-effector position:
$$
\begin{align}
x'_{EE} &= x_{EE} \cdot \cos (J_{1}) - y_{EE} \cdot \sin(J_{1}) \\
y'_{EE} &= x_{EE} \cdot \sin (J_{1}) - y_{EE} \cdot \cos(J_{1}) \\
z'_{EE} &= z_{EE}
\end{align}
$$
Expanding this, we have:
$$
\begin{align}
x(J_{1}, J_{2}, J_{3}) &= (L_{2} \cdot \cos(J_{2}) + L_{3} \cdot \cos(J_{2}+J_{3})) \cdot \cos(J_{1}) \\
y(J_{1}, J_{2}, J_{3}) &= (L_{2} \cdot \cos(J_{2}) + L_{3} \cdot \cos(J_{2}+J_{3})) \cdot \sin(J_{1}) \\
z(J_{1}, J_{2}, J_{3}) &= L_{2} \cdot \sin(J_{2}) + L_{3} \cdot \sin(J_{2} + J_{3})
\end{align}
$$
We still need to account for the offset $O = 59.7 \text{mm}$, which is locally defined as:
$$
(O_{x}, O_{y}, O_{z}) = (O, 0,0)
$$
We need to rotate this offset in the global frame to find its components when $J_{1}$ is rotated:
$$
\begin{align}
O'_{x} &= O_{x} \cdot \cos(J_{1}) - O_{y} \sin(J_{1}) = O \cdot \cos(J_{1}) \\
O'_{y} &= O_{x} \cdot \sin(J_{1}) - O_{y} \cos(J_{1}) = O \cdot \sin(J_{1}) \\
O'_{z} &= O_{z} = 0
\end{align}
$$
Adding these offsets to our position functions:
$$
\begin{align}
x(J_{1}, J_{2}, J_{3}) &= (L_{2} \cdot \cos(J_{2}) + L_{3} \cdot \cos(J_{2}+J_{3})) \cdot \cos(J_{1}) + O \cdot \cos J_{1} \\
y(J_{1}, J_{2}, J_{3}) &= (L_{2} \cdot \cos(J_{2}) + L_{3} \cdot \cos(J_{2}+J_{3})) \cdot \sin(J_{1}) + O \cdot \sin J_{1}\\
z(J_{1}, J_{2}, J_{3}) &= L_{2} \cdot \sin(J_{2}) + L_{3} \cdot \sin(J_{2} + J_{3})
\end{align}
$$
As a single expression of the form $(x,y,z) = f(J_{1}, J_{2}, J_{3}):$
$$
\begin{align}
(x, y, z) = (\;(&L_{2} \cdot \cos(J_{2}) + L_{3} \cdot \cos(J_{2}+J_{3})) \cdot \cos(J_{1}) + O \cdot \cos J_{1},  \\
(&L_{2} \cdot \cos(J_{2}) + L_{3} \cdot \cos(J_{2}+J_{3})) \cdot \sin(J_{1}) + O \cdot \sin J_{1}, \\
&L_{2} \cdot \sin(J_{2}) + L_{3} \cdot \sin(J_{2} + J_{3})\;)
\end{align}
$$
