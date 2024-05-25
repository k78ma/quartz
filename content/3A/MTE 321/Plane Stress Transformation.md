---
title: Plane Stress Transformation
tags:
  - mte321
date: 2024-05-24
aliases:
  - plane stress transformation
  - principal stress
  - extreme-value shear stress
---
Taking our 3D stress element, and cutting it with an oblique plane with a normal $n$ at some arbitrary angle $\phi$ counter-clockwise from the $x$-axis produces a 2D stress element:

![[Mohr's Circle.png]]

By summing the forces caused by all the stress components to zero, the stresses $\sigma$ and $\tau$ are found to be:
$$
\begin{align}
\sigma & =\frac{\sigma_{x}+\sigma_{y}}{2}+\frac{\sigma_{x}-\sigma_{y}}{2}\cos 2\phi+\tau_{xy}\sin 2\phi \\[2ex] 
\tau & =-\frac{\sigma_{x}-\sigma_{y}}{2}\sin 2\phi + \tau_{xy}\cos(2\phi)
\end{align}
$$
These are called the plane-stress transformation equations.

## Principle Stresses and Directions
We can maximize $\sigma$ by differentiate the expression for $\sigma$ above and setting this equal to zero. This gives:
$$
\tan 2 \phi_{p}=\frac{2\tau_{xy}}{\sigma_{x}-\sigma_{y}}
$$
This gives the two principal directions associated with two *principal stresses*; one is the maximum normal stress, and one is the minimum. The angle between the principal direction is $90\degree$.

These principal stresses can be found with:
$$
\sigma_{1}, \sigma_{2} = \frac{\sigma_{x}+\sigma_{y}}{2} \pm \sqrt{ \left( \frac{\sigma_{x}-\sigma_{y}}{2} \right)^{2} + \tau^{2}_{xy} }
$$

![[Mohr's Circle-1.png|279]]

## Extreme-Value Shear Stresses
Similarly, the shear plane-stress transformation equation can be differentiated and set to zero to find:
$$
\tan(2\phi_{s})=\frac{\sigma_{x}-\sigma_{y}}{2\tau_{xy}}
$$
This gives us 2 extreme-value shear stresses:
$$
\tau_{1}, \tau_{2} = \pm \sqrt{ \left( \frac{\sigma_{x}-\sigma_{y}}{2} \right)^{2}+\tau_{xy}^{2} }
$$
At extreme-value shear stress configurations, the normal stress $\sigma$ takes on the value of $\sigma_{\text{avg}}=(\sigma_{x}+\sigma_{y}) / 2$.
