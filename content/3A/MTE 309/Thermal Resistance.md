---
title: Thermal Resistance
tags:
  - mte309
date: 2024-06-26
aliases:
  - thermal resistance
---
## Conduction Resistance
We showed that [[Steady Heat Conduction in Plane Walls|steady heat conduction in plane walls]] can be written as:
$$
\dot{Q}_{\text{cond}}=-kA \frac{ dT }{ dx } =-kA\left( \frac{T_{2}-T_{1}}{L} \right)
$$
We can re-write this as:
$$
\begin{align}
\dot{Q}_{\text{cond, wall}} & =kA \frac{T_{1}-T_{2}}{L} \\[2ex] 
	 & =\frac{T_{1}-T_{2}}{R_{\text{wall}}}
\end{align}
$$
where we have
$$
R_{\text{wall}}=\frac{L}{kA}
$$
which we call the **thermal resistance** or **conduction resistance** of the wall.

More in general, the thermal resistance can be described as the ratio between the driving potential to the corresponding heat transfer rate, $R=\Delta T / \dot{Q}_{\text{cond}}$.

Some other geometries other than plane walls:

![[Thermal Resistance-3.png|660]]

## Convection Resistance
Consider convection heat transfer from a solid surface of area $A_{s}$ and temperature $T_{s}$ to a fluid whose temperature sufficiently far from the surface is $T_{\infty}$, with a convection heat transfer coefficient $h$. Newton’s law of cooling for convection heat transfer rate $\dot{Q}_{\text{conv}}=hA_{s}(T_{s}-T_{\infty})$ can be rearranged as
$$
\dot{Q}_{\text{conv}}=\frac{T_{s}-T_{\infty}}{R_{\text{conv}}}
$$
where \
$$
R_{\text{conv}}=\frac{1}{hA_{s}}
$$
is the thermal resistance of the surface against heat convection or the **convection resistance**.

## Radiation Resistance
When the wall is surrounded by a gas, the radiation effects, can be significant and may need to be considered. The rate of radiation heat transfer between a surface of emissivity $\epsilon$ and area $A_{s}$ at temperature $T_{s}$ and the surrounding surfaces at some average temperature $T_{\text{surr}}$ can be expressed as:
$$
\dot{Q}_{\text{rad}}=\epsilon\sigma A_{s}(T_{s}^{4}-T^{4}_{\text{surr}})=h_{\text{rad}}A_{s}(T_{s}-T_{\text{surr}})=\frac{T_{s}-T_{\text{surr}}}{R_{\text{rad}}}
$$
where
$$
R_{\text{rad}}=\frac{1}{h_{\text{rad}}A_{s}}
$$
is the thermal resistance of a surface against radiation, or the **radiation resistance**. 

## Electrical Analogy
The above concept of heat transfer with thermal resistance is analogous to electric current flow:
$$
I=\frac{V_{1}-V_{2}}{R_{e}} = \sigma A\frac{(V_{1}-V_{2})}{L}
$$
where:
$$
R_{e}=\frac{L}{\sigma A}
$$
This is very similar to $kA \frac{T_{1}-T_{2}}{L}$.

## Thermal Resistances in Series and Parallel
Like electrical resistors, thermal resistances in series add together.

![[Thermal Resistance-1.png]]

Like electrical resistors, thermal resistances in parallel follow:
$$
\frac{1}{R_{eq}}=\frac{1}{R_{1}}+\frac{1}{R_{2}}
$$
![[Thermal Resistance-2.png|372]]

In the case shown above, we would have:
$$
R_{\text{total}}=\frac{R_{1}R_{2}}{R_{1}+R_{2}}+R_{3}+R_{\text{conv}}
$$

In general:
- Any plane wall normal to the x-axis is isothermal (the temperature varies in the $x$-direction only)
- Any plane parallel to the x-axis is adiabatic (heat transfer occurs in $x$-axis only)