---
title: Shear Force and Bending Moment
tags:
  - mte321
date: 2024-05-20
aliases:
  - shear force and bending moment
---
If a beam is loaded with some forces, an internal shear forces $V$ and bending moments $M$ develop to ensure equilibrium.

- The shear force is obtained by summing the forces on the isolated system. 
	- Sign convention: Positive shear causes a clockwise rotation of the beam – pushes left-facing cross-section upward and a right-facing cross-section downward.

![[Shear Force.png|340]]

- The bending moment is the sum of the moments of the forces to the left of the section taken about an axis through the isolated section. 
	- Sign convention: Positive bending moment causes compression in the top fibers of the segment (CW on left-facing section, CCW on a right-facing cross-section)

![[Shear Force-1.png|342]]

In general, sagging is positive and hogging is negative.

![[Shear Force and Bending Moment-1.png|368]]

- When doing equilibrium calculations at the beginning of a beam bending question, use the hand rule.
- When doing equilibrium calculations for a cut section's **internal moments**, use sagging/hogging convention.
## Mathematical Foundations
Shear force and bending moment are related by the equation:
$$
V=\frac{dM}{dx}
$$
Sometimes, bending is caused by a distributed load $q(x)$. 

![[Shear Force and Bending Moment.png|332]]

This $q(x)$ is called the load intensity with units of force per unit length, and is positive in the positive $y$ direction. Differentiating the equation above gives
$$
\begin{align}
\frac{ dV }{ dx }  & =q = -w \\[2ex] 
\frac{ dM }{ dx }   & =V  
\end{align}
$$
Normally, this applied distributed load is directed downward and labeled $w$, such that $w=-q$.

If we integrate between two points $x_{A}$ and $x_{B}$, we obtain
$$
\begin{align}
\int_{V_{A}}^{V_{B}}  \, dV =V_{B}-V_{A}=\int_{x_{A}}^{x_{B}} q \, dx \\[2ex] 
\Delta V=-\int_{x_{A}}^{x_{B}} w \, dx
\end{align}
$$
which tells us that
$$
\text{Change in shear force from A to B } = \text{Area of the load curve between } x_{A} \text{ and } x_{B}
$$
Furthermore, we have
$$
\begin{align}
\int_{V_{A}}^{V_{B}}  \, dM =M_{B}-M_{A}=\int_{x_{A}}^{x_{B}} V \, dx \\[2ex] 
\Delta M=\int_{x_{A}}^{x_{B}} V \, dx
\end{align}
$$
and
$$
\text{Change in moment from A to B } = \text{Area of the shear curve between } x_{A} \text{ and } x_{B}
$$
