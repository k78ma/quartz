---
title: Energy Transfer by Work
tags: 
date: 2024-05-15
aliases:
  - energy transfer by work
---
Work, $W$, is energy transfer associated with a force acting through a distance.

Sign convention:
- If the system does work, $W(+)$
- If work is done to the system, $W(-)$

$W$ is in units of $[\text{kJ}]$, and $w=\frac{W}{m} \left[\frac{\text{kJ}}{\text{kg}}\right]$. This is a *process*, not a property; it's only quantified across a boundary.

Modes of work transfer:
- Work of compression/expansion  
- Electrical work  
- Shaft work  
- Spring work  
- Magnetic work  
- Electrical polarization work  
- etc.

Power is the rate at which work is done:
$$
\dot{W}=\frac{dW}{dt} \;\;\;\;\left[ \frac{\text{kJ}}{s} \right] = [\text{kW}]
$$
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