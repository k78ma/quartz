---
title: Source and Sink Flows
tags:
  - mech2210
date: 2025-05-18
aliases:
  - source and sink flows
---
A source is a point where fluid originates and spreads out radially in all directions. A sink is the opposite; fluid converges towards a point and is absorbed or removed from the flow.

![[Source and Sink Flows-20250518134448924.png|292]]


$m$ is the volumetric flow rate per unit length perpendicular to the $x$-$y$ plane. Qualitatively, it is the **strength** of the source/sink.
$$
m = 2\pi r \cdot  V_{r}
$$
- For a source, $m>0$ (fluid is added)
- For a sink, $m<0$ (fluid is removed)

We can consider source and sink flows in terms of their radial and tangential velocity components, leveraging cylindrical coordinates.

Radial velocity component $V_{r}$:
$$
V_{r} = \frac{m}{2\pi r}
$$
- $V_{r}$ decreases inversely with the radius $r$; the further we move from the source, the slower the speed.

Tangential component $V_{\theta}$:
$$
V_{\theta}=0
$$
- There is no tangential velocity; the motion is purely radial.

The velocity components are gradients of the [[Velocity Potential|velocity potential]] and the [[Stream Function|stream function]] (see [[Plane Potential Flows|plane potential flows]])
$$
V_{r} = \frac{ \partial \phi }{ \partial r } = \frac{1}{r} \frac{ \partial \psi }{ \partial \theta } 
$$
which in turn gives us the velocity potential as
$$
\phi = \frac{m}{2\pi}\ln r
$$
- This tells us that equipotential lines ($\phi=\text{const}$) are concentric circles.

The stream function $\psi$ can be solved to be
$$
\psi = \frac{m}{2\pi} \theta
$$
- This tells us that streamlines $\psi = \text{const}$ are radial lines emerging from the source or converging to the sink, as expected.