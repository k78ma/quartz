---
title: Pressure Prism
tags:
  - mech2210
date: 2025-02-26
aliases:
  - pressure prism
---
Consider the pressure distribution along a vertical wall of a tank of constant width $b$, which contains a liquid having a specific weight $\gamma$. Since the pressure must vary linearly with depth, we can represent the variation as is shown in part (a) of the figure below, where the pressure is equal to zero at the upper surface and equal to $\gamma h$ at the bottom.

![[Pressure Prism-2.png|620]]

It is apparent from this diagram that the average pressure occurs at the depth $h / 2$ and therefore the resultant force acting on the rectangular area $A=bh$ is
$$
F_{R}=p_{\text{av}}A=\gamma\left( \frac{h}{2} \right)A
$$
which is the same result as obtained when we derived the [[Hydrostatic Force on a Plane Surface|hydrostatic force on a plane surface]].

The pressure distribution shown in Fig. 2.19a applies across the vertical surface, so we can draw the three-dimensional representation of the pressure distribution as shown in Fig. 2.19b. The base of this “volume” in pressure-area space is the plane surface of interest, and its altitude at each point is the pressure. This volume is called the ==pressure prism==, and it is clear that:
$$
\begin{align}
\text{Magnitude of } F_{R} & =\text{Volume of pressure prism} \\[2ex]
     & = \frac{1}{2}(\gamma h)(bh)=\gamma\left( \frac{h}{2} \right)A
\end{align}
$$
The resultant force must pass through the centroid of the pressure prism. For the volume under consideration the centroid is located along the vertical axis of symmetry of the surface, and at a distance of $h /3$ above the base (since the centroid of a triangle is located at $h /3$ above its base).

The same approach can be used for plane rectangular surfaces that do not extend up to the fluid surface, as shown below in 2.20a. 

![[Pressure Prism.png|663]]

In this instance, the cross section of the pressure prism is trapezoidal. However, the resultant force is still equal in magnitude to the volume of the pressure prism, and it passes through the centroid of the volume. Specific values can be obtained by decomposing the pressure prism into a rectangle and a triangle, ABDE and BCD, as shown in Fig. 2.20b. Thus,
$$
F_{R}=F_{1}+F_{2}
$$
where the components are can readily be determined by inspection for rectangular surfaces. The location of $F_{R}$ can be determined by summing moments about some convenient axis, such as one passing through A. In this instance
$$
F_{R}y_{A}=F_{1}y_{1}+F_{2}y_{2}
$$
where
$$
\begin{align}
F_{1} & =\gamma h_{1}A \\[2ex] 
F_{2} & =\frac{1}{2}(h_{2}-h_{1})\gamma A
\end{align}
$$
