---
title: Horizontal and Inclined Pipe Fluid Element Analysis
tags:
  - mech2210
date: 2025-05-19
aliases:
  - horizontal and inclined pipe fluid element analysis
---
## Horizontal
In a horizontal pipe, the fluid element analysis assumes no gravitational influence in the flow direction

![[Horizontal Pipe Fluid Element Analysis-20250519175613954.png]]

The force balance simplifies to
$$
\Delta p\pi r^{2} = \tau\cdot 2\pi r \ell
$$
where $\Delta p$ is the pressure difference across the pipe length $\ell$, $\tau$ is the shear stress, $r$ is the radius of the fluid element, and $\ell$ is the length of the fluid element

The velocity profile for fully developed laminar flow remains parabolic, as derived when we did [[Laminar Flow Fluid Element Analysis|laminar flow fluid element analysis]]:
$$
u = \frac{\Delta p D^2}{16 \mu \ell} \left[1 - \left(\frac{r}{R}\right)^2\right]
$$
## Inclined
For a pipe inclined at an angle $\theta$, the gravitational component along the pipe’s axis introduces an additional force term.

![[Horizontal and Inclined Pipe Fluid Element Analysis-20250519175911563.png]]

In this case, the force balance equation becomes
$$
\Delta p \pi r^2 - \gamma \pi r^2 \ell \sin(\theta) = \tau \cdot 2 \pi r \ell
$$
We now can find the effective pressure drop considering gravity as:
$$
\Delta p’ = \Delta p - \gamma \ell \sin(\theta)
$$
so that we can simplify the expression to $\Delta p'\pi r = \tau \cdot 2\pi rl$. We can also write:
$$
u = \frac{\Delta p’ D^2}{16 \mu \ell} \left[1 - \left(\frac{r}{R}\right)^2 \right]
$$
## Velocity Volumetric Mass Flow Rate
The average velocity ($\overline{V}$) in both cases is calculated by integrating the velocity profile over the pipe’s cross-sectional area:
$$
\overline{V} = \frac{\Delta p’ D^2}{32 \mu \ell}
$$
Using the regular $p$ for the inclined case:
$$
\overline{V} = \frac{(\Delta p - \gamma \ell \sin(\theta)) D^2}{32 \mu \ell}
$$
The volumetric flow rate is the product of average velocity and the cross-sectional area of the pipe:
$$
\begin{align}
Q  & = \pi R^2 \overline{V}\\[2ex] 
 & = \frac{\pi D^4}{128 \mu \ell} \Delta p’ \\[2ex] \\
     & = \frac{\pi D^4}{128 \mu \ell} (\Delta p - \gamma \ell \sin(\theta))
\end{align}
$$
