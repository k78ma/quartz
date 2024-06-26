---
title: Conduction
tags:
  - mte309
date: 2024-06-23
aliases:
  - conduction
  - Fourier's Law
---
Conduction is the transfer of energy from the more energetic particles of a substance to the adjacent less energetic ones as a result of interactions between the particles. 

Conduction can take place in solids, liquids, or gases. In gases and liquids, conduction is due to the collisions and diffusion of the molecules during their random motion. In solids, it is due to the combination of vibrations of the molecules in a lattice and the energy transport by free electrons. A cold canned drink in a warm room eventually warms up to the room temperature as a result of heat transfer from the room to the drink through the aluminum can by conduction.

Conduction is governed by **Fourier's Law**, in any direction $\hat{n}$:
$$
\begin{align}
\dot{Q}_{n}'' & =-k \frac{ \partial T }{ \partial n }  \\[2ex] 
\dot{Q}_{x} & =-k \frac{ dT }{ dx } 
\end{align}
$$
where:
- $\dot{Q}''_{n}$ is **heat flux** in $[\text{W} / \text{m}^{2}]$. Just $\dot{Q}$ is the heat transfer rate, the double prime $''$ indicates that this is heat transfer rate per unit area.
- $k$ is the **thermal conductivity** of the material in $[\text{W} / \text{m}\cdot \text{K}]$. This iis a measure of the ability of a material to conduct heat
- $\frac{ \partial T }{ \partial n }$ is the temperature gradient, which is the slope of the temperature curve on a T-x diagram (the rate of change of $N$ with $n$), at location $n$.

Heat is conducted in the direction of decreasing temperature, and the temperature gradient becomes negative when temperature decreases with increasing $n$. The negative sign in Eq. 16–2 ensures that heat transfer in the positive $n$-direction is a positive quantity.

For example, for a plane wall at steady-state, we have:
$$
\begin{align}
\dot{Q}''_{\text{cond}} & =-k \,\frac{ dT }{ dx } \\[2ex] 
& = -k\, \frac{T_{2}-T_{1}}{L}
\end{align}
$$

![[Conduction.png|456]]

The heat transfer area A is always normal to the direction of heat transfer. For heat loss through a 5-m-long, 3-m-high, and 25-cm-thick wall, for example, the heat transfer area is $A=15 \text{m}^{2}$ .

![[Conduction-1.png|456]]
