---
title: Shear Stresses for Beams in Bending
tags:
  - mte321
date: 2024-05-25
aliases:
  - shear stresses for beams in bending
  - transverse shear stress
---
Let's say we have a beam segment of constant cross section, subjected to a shear force $V$ and a bending moment $M$ at $x$.

![[Shear Stresses for Beams in Bending.png|546]]

Because of external loading and $V$, the shear force and bending moment change with respect to $x$. At $x+dx$, the shear force and bending moment are $V+dV$ and $M+dM$ respectively. 

This results in a stress distribution $\sigma_{x}$ due to bending moments (considering forces in $x$ direction only).

![[Shear Stresses for Beams in Bending-1.png]]

- If $dM$ is positive, with the bending moment increasing, for a given $y$, the stresses on the right face are larger than those on the left face

If we isolate the element further by taking a space at $y=y_{1}$, the net force $F$ in the $x$ direction will be directed to the left with a value of
$$
F = \int_{y_{1}}^{c} \frac{(dM)y}{I} \, dA 
$$
![[Shear Stresses for Beams in Bending-2.png|401]]

This shear force $F$ gives rise to a shear stress $\tau$, where we have:
$$
\begin{align}
\text{Shear force}  & = \text{Shear stress} \times  \text{Area}\\[2ex] 
\int_{y_{1}}^{c} \frac{(dM)y}{I} \, dA  & = \tau b \; dx
\end{align}
$$
The term $dM / I$ can be removed from within the integral and $b \;dx$ can be replaced by noting that $V = dM / dx$, so that we have:
$$
\tau= \frac{V}{Ib} \int_{y_{1}}^{c} y \, dA 
$$
This integral is the first moment of area $A'$ with respect to the neutral axis, called $Q$, defined as:
$$
Q=\int_{y_{1}}^{c} y \, dA = \bar{y}'A' 
$$
where, for the isolated area $y_{1}$ to $c$, $\bar{y}'$ is the distance in the $y$ direction from the neutral plane to the centroid of area $A'$. 

Thus, we can finally write the shear stress $\tau$ as:
$$
\boxed{
\tau = \frac{VQ}{Ib}
}
$$
- $V$ is shear force
- $I$ is the second moment of area of the entire section about the neutral axis
- $b$ is the width of the section at $y=y_{1}$
- $y'$ is the distance in the $y$ direction from the neutral plane to the centroid of $A'$

This is known as the *transverse shear stress*. It is always accompanied with [[Normal Stresses for Beams in Bending|bending stress]].

![[Shear Stresses for Beams in Bending-3.png]]

- Observe that the transverse shear stress in each of these common cross sections is maximum on the neutral axis, and zero on the outer surfaces.
	- This is the opposite of bending stress!