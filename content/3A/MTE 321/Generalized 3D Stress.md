---
title: Generalized 3D Stress
tags:
  - mte321
date: 2024-05-25
aliases:
  - generalized 3d stress
  - 3D stress
---
In 3D stress instead of [[Plane Stress]], we have to deal with 3 principal directions and 3 principal stresses. This involves finding the roots of the cubic equation:
$$
\begin{align}
 & \sigma^{3}-(\sigma_{x}+\sigma_{y}+\sigma_{z})\sigma^{2} \\
 & +(\sigma_{x}\sigma_{y}+\sigma_{x}\sigma_{z}+\sigma_{y}\sigma_{z}-\tau^{2}_{xy}-\tau^{2}_{yz}-\tau^{2}_{zx})\sigma \\
 & -(\sigma_{x}\sigma_{y}\sigma_{z}+2\tau_{xy}\tau_{yz}\tau_{zx}-\sigma_{x}\tau_{yz}^{2}-\sigma_{y}\tau^{2}_{zx}-\sigma_{z}\tau^{2}_{xy})=0
\end{align}
$$
There are also three principal shears:
$$
\tau_{1 / 2}=\frac{\sigma_{1}-\sigma_{2}}{2}, \quad \tau_{2 / 3}=\frac{\sigma_{2}-\sigma_{3}}{2},\quad \tau_{1 / 3}=\frac{\sigma_{1}-\sigma_{3}}{2}
$$
- For [[Plane Stress|plane stress]], the stress-free surface will have one of the principal stresses equal zero.