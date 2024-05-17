---
title: Work
tags:
  - mte309
date: 2024-05-17
aliases:
  - work
---
## Mechanical Work
Mechanical work is given by a force applied over a distance:
$$
W_{1-2}=\int_{1}^{2} F \, dx  \quad [\text{kJ}]
$$
For example, a spring is governed by $F=kx$, where $x$ is displacement from an undisturbed position. Then, we have:
$$
W_{1-2}=\int_{1}^{2} kx \, dx= \frac{1}{2}k(x_{2}^{2}-x_{1}^{2})
$$
## Shaft Work
Shaft work is given by:
$$
\begin{align}
W_{\text{sh}} & =\left( \frac{T}{r} \right)(2\pi r)n \\[2ex]
	 & = 2\pi nT \quad[\text{kJ}]
\end{align}
$$
- Here, $T/r$ is the force (recall that torque is given by $T=Fr$), 
- $2\pi r$ is the circumference
- $n$ is the number of rotations

![[Work.png|352]]

Shaft power is then given by:
$$
\dot{W}_{\text{sh}}=2\pi \dot{n}T
$$
- $\dot{n}$ is revolutions/time, such as RPM.
## Work of Compression/Expansion
Work done by compression/expansion is given by:
$$
W_{1-2}=\int_{1}^{2} PA \, dx 
$$
- $PA$ is the force, since pressure is defined to be $P = F/A$.

Alternatively, we can use:
$$
W_{1-2}=\int_{1}^{2} P(V) \, dV 
$$
In general, the amount of work depends on the process path.

![[Work-1.png|316]]

## Electrical Work
Electrical work is given by:
$$
\begin{align}
W_{e} & =\int_{1}^{2} VI \, dt \quad [\text{kJ}]  \\[2ex]
	 & = VI\Delta t
\end{align}
$$
Electrical power is then given by $\dot{W}_{e}=VI \;\;[\text{kJ}]$.

A system does work on the surroundings if the sole effect could be equivalent to raising a weight; if a motor and pulley are 100% efficient, sole effect would be raising a weight. Therefore, electrical work = work.