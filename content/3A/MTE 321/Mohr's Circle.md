---
title: Mohr's Circle
tags:
  - mte321
date: 2024-05-24
aliases:
  - Mohr's circle
---
Mohr's circle provides a graphical description of stress at a single point in a structure; each location on the circle represents the stress state on a specific surface point on the structure.

Conventions:
- If the shear stress tends to rotate the element clockwise, it's plotted as negative on Mohr's circle.
- If the shear stress tends to rotate the element counterclockwise, it's plotted as positive.

We saw that principal stress, average stress, and extreme-value shear stresses can be found with [[Plane Stress Transformation|plane stress transformation]]. Specifically, we had:
$$
\begin{align}
\sigma & =\frac{\sigma_{x}+\sigma_{y}}{2}+\frac{\sigma_{x}-\sigma_{y}}{2}\cos 2\phi+\tau_{xy}\sin 2\phi \\[2ex] 
\tau & =-\frac{\sigma_{x}-\sigma_{y}}{2}\sin 2\phi + \tau_{xy}\cos(2\phi)
\end{align}
$$
Mohr's circle expresses these ideas graphically, with a circle defined by:
$$
\left( \sigma-\frac{\sigma_{x}+\sigma_{y}}{2} \right)^{2}+ \tau^{2} = \left( \frac{\sigma_{x}-\sigma_{y}}{2} \right)^{2}+\tau_{xy}^{2}
$$
The center of the circle is given by:
$$
C = \left[ \frac{\sigma_{x}+\sigma_{y}}{2}, 0 \right]
$$
The radius is given by:
$$
R = \sqrt{ \left[ \frac{(\sigma_{x}-\sigma_{y})^{2}}{2} \right] + \tau_{xy}^{2} }=\tau_{\text{max}}
$$
The [[Plane Stress Transformation|principal stresses]] can then be easily obtained with:
$$
\sigma_{\text{max, min}}=\sigma_{\text{avg}} \pm R
$$

![[Mohr's Circle-2.png|496]]

## Procedure
1. Locate the center $C = \left[ \frac{(\sigma_{x}+\sigma_{y})}{2},0 \right]$.
2. Locate face $A$ at $(\sigma_{x}, -\tau_{xy})$.
3. Locate face $B$ at $(\sigma_{y}, \tau_{xy})$.
4. Connects $A, B, C$ to form the circle diameter and draw the circle around it.
5. Use geometry to compute the [[Plane Stress Transformation|principal stresses]], [[Plane Stress Transformation|extreme-value shear stresses]], principle angles, etc.