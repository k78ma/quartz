---
title: Distortion Energy Theory
tags:
  - mte321
date: 2024-06-16
aliases:
  - distortion energy theory
  - von Mises theory
  - Mises-Hencky theory
---
The distortion-energy theory predicts that yielding occurs when the distortion strain energy per unit volume reaches or exceeds the distortion strain energy per unit volume for yield in simple tension or compression of the same material. 

The distortion-energy (DE) theory originated from the observation that ductile materials stressed hydrostatically (equal principal stresses) exhibited yield strengths greatly in excess of the values given by the simple tension test. 

The formula for $\sigma_{\text{av}}$ is simply:
$$
\sigma_{\text{av}}=\frac{\sigma_{1}+\sigma_{2}+\sigma_{2}}{3}
$$

![[Distortion Energy Theory.png]]

The basic process is to:
- Find equation for strain energy per unit volume ($u$) for a stress element with tri-axial stresses
- Find equation for strain energy per unit volume due to *hydrostatic component* of tri-axial stresses only ($u_{v}$)
- Find strain energy per unit volume due to *distortion component* of tri-axial stresses only by solving for $u-u_{v}$
- Derive von Mises Stress

## General Case
von Mises Stress and yield conditions are given as:
$$
\sigma'=\left[ \frac{(\sigma_{1}-\sigma_{2})^{2}+(\sigma_{2}-\sigma_{3})^{2}+(\sigma_{3}-\sigma_{1})^{2}}{2} \right]^{1 / 2} \geq S_{y}
$$
When designing with a factor of safety $n$:
$$
\sigma'=\frac{S_{y}}{n}
$$
## Plane Stress
For plane stress, we have two principal stresses in the plane of analysis, such that $\sigma_{A}\geq \sigma_{B}$. The third principal stress is zero. The von Mises stress can be written as:
$$
\sigma'=(\sigma_{A}^{2}-\sigma_{A}\sigma_{B}+\sigma_{B}^{2})^{1 / 2}
$$
which is just the general case equation but with one of the stresses as zero.

This can be visualized as a rotated ellipse on the $\sigma_{A}, \sigma_{B}$ plane:

![[Distortion Energy Theory-1.png]]

- As can be seen from the graph, DE is less conservative than MSS
	- DE theory: $S_{sy}=0.577S_{y}$
	- MSS theory: $S_{sy}=0.5S_{y}$

For shear stress (pure shear, $\sigma_{x}=\sigma_{y}-0$), we have yield conditions such that:
$$
\begin{align}
\sigma'  & = (3\tau_{xy}^{2})^{1 / 2}\geq S_{y} \\[2ex] 
\tau_{xy} & \geq \frac{S_{y}}{\sqrt{ 3 }}=0.577 S_{y}
\end{align}
$$
For design:
$$
\sigma'=\tau_{xy}\sqrt{ 3 }=\frac{S_{y}}{n}
$$
## Equations in terms of $xyz$
General case/3D:
$$
\sigma'=\frac{1}{\sqrt{ 2 }}(\sigma_{x}^{2}-\sigma_{x}\sigma_{y}+\sigma_{y}^{2}+3\tau_{xy}^{2})^{1 / 2}
$$
The yield condition is unchanged:
$$
\sigma' \geq S_{y}
$$
Design is also unchanged:
$$
\sigma'=\frac{S_{y}}{n}
$$