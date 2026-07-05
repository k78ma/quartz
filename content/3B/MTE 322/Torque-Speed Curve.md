---
title: Torque-Speed Curve
tags:
  - mte322
date: 2024-10-18
aliases:
  - torque-speed curve
---
We can model permanent magnet (PM) DC motors as:
$$
\begin{align}
V & =E+iR \\[2ex]
	 & =k_{e}\omega+iR \\[2ex]
	 & =k_{e}\omega+\frac{T}{k_{t}}R
\end{align}
$$
where $V$ is the supply voltage, $E$ is the back EMF, $i$ is the current through the armature, $R$ is the armature resistance, $T$ is the generated torque, and $\omega$ is the angular velocity.

The torque-speed of the motor can be derived as:
$$
\begin{align}
T & =-\frac{k_{t}k_{e}}{R}\omega+\frac{k_{t}}{R}V \\[2ex]
	 & = \frac{k_{t}}{R}(V-k_{e}\omega)
\end{align}
$$
This equation shows that torque decreases linearly with increasing speed for a constant supply $V$. The negative slope $-\frac{k_{t}k_{e}}{R}$ indicates that torque decreases as speed increases.

![[Torque-Speed Curve.png]]

## Example

![[MTE 322 motors ex 4.pdf]]