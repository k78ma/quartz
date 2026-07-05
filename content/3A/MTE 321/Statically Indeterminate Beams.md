---
title: Statically Indeterminate Beams
tags:
  - mte321
date: 2024-06-15
aliases:
  - statically indeterminate beams
---
Consider a beam with a fixed support at $A$ and roller support at $B$, with a uniformly distributed load.

![[Statically Indeterminate Beams.png]]

From the FBD, there are four unknown equations, but we only have three equations for static equilibrium ($\sum F_{x}=0, \sum F_{y}=0, \sum M_{A}=0$).

The beam is statically indeterminate. Also, the beam deflection equation:
$$
EIy=\int_{0}^{x}  \, dx\int_{0}^{x} M(x) \, dx+C_{1}x+C_{2}  
$$
has two unknowns but provides three additional equations from the boundary conditions:
- At $x=0$, we have $\theta=0$ and $y=0$
- At $x=L$, $y=0$

![[Statically Indeterminate Beams-1.png]]