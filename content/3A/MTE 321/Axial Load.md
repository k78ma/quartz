---
title: Axial Load
tags:
  - mte321
date: 2024-05-24
aliases:
  - axial load
---
Let's say we have a uniaxial stress in the $x$-direction (the figure below is an uniaxial load). 
- Under a direct axial tensile load, member will stretch and lengthen  
- Under a direct axial compressive load, member will compress and shorten

This is often called *pure tension* or *pure compression* or "simple tension/compression" to indicate there are no other effects. Some assumptions:
- Bar is straight and made of homogeneous material
- Line of action of force contains centroid
- Section is not taken at: the ends, a discontinuity, or abrupt change in cross section

![[Axial Load.png]]

The normal stress is:
$$
\sigma=\frac{F}{A}
$$
The strain is:
$$
\epsilon=\frac{l-l_{0}}{l_{0}}=\frac{\delta}{l_{0}}
$$
Stress and strain can be expressed with Hooke's law:
$$
\sigma=E\epsilon
$$
where $E$ is the material-dependent Young's Modulus (aka modulus of elasticity).

The displacement $\delta$ can be written as:
$$
\delta=l-l_{0}=\frac{Fl_{0}}{EA}=\frac{\sigma l_{0}}{E}
$$
where $A$ is the cross-sectional area.