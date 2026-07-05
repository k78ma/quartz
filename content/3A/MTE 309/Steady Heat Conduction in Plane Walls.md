---
title: Steady Heat Conduction in Plane Walls
tags:
  - mte309
date: 2024-06-26
aliases:
  - steady heat conduction in plane walls
---
Consider steady heat conduction through the walls of a house during a winter day. We know that heat is continuously lost to the outdoors through the wall. Heat transfer through the wall is in the normal direction to the wall surface, and no significant heat transfer takes place in the wall in other directions.

![[Conduction.png|340]]

Recall that heat transfer in a certain direction is driven by the *temperature gradient* in that direction. There is no heat transfer in a direction in which there is no change in temperature. Temperature measurements at several locations on the inner or outer wall surface will confirm that a wall surface is nearly isothermal. That is, the temperatures at the top and bottom of a wall surface as well as at the right and left ends are almost the same. Therefore, there is no heat transfer through the wall from the top to the bottom, or from left to right, but there is considerable temperature difference between the inner and the outer surfaces of the wall, and thus significant heat transfer in the direction from the inner surface to the outer one.

In this case:
- One direction only
- No energy generated/consumed
- Steady-state – temperature does not change with time

Thus, we have:
- $\frac{d^{2}T}{dx^{2}}=0$
- $Q''_{\text{cond}}=-k \frac{dT}{dx}$ (see [[Conduction|Fourier's Law]])

We can say:
$$
\begin{align}
\dot{Q}''_{\text{cond}} & =-k \,\frac{ dT }{ dx } \\[2ex] 
& = -k\, \frac{T_{2}-T_{1}}{L}
\end{align}
$$
and
$$
\dot{Q}_{\text{cond}}=-kA \frac{ dT }{ dx } =-kA\left( \frac{T_{2}-T_{1}}{L} \right)
$$
Derivation:

![[MTE 309 L19.pdf]]