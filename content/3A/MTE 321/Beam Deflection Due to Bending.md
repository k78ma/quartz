---
title: Beam Deflection Due to Bending
tags:
  - mte321
date: 2024-06-15
aliases:
  - beam deflection due to bending
---
The curvature of a beam subjected to a bending moment $M$ is given by:
$$
\frac{1}{\rho}=\frac{M}{EI}
$$
where $\rho$ is the radius of curvature and $I$ is the [[Second Moment of Area|second moment of area]] of the beam cross-section. This is relevant for cases where the beam is under transverse loading.

## Beam Examples
### Cantilever Beam
For example, a cantilever beam subjected to a concentrated load $P$ at the free end would have:
$$
\frac{1}{\rho}=-\frac{Px}{EI}
$$
![[Beam Deflection Due to Bending.png]]

The curvature varies linearly with $x$. At the free end $A$, we have:
$$
\frac{1}{\rho_{A}}=0, \rho_{A}=\infty
$$
At the support $B$, we have:
$$
\frac{1}{\rho_{B}}\neq 0, | p_{b} | = \frac{EI}{PL}
$$

### Overhanging Beam

![[Beam Deflection Due to Bending-1.png]]

For an overhanging beam, we can examine the equation $\frac{1}{\rho}=\frac{M}{EI}$.

To analyze, we can draw the bending moment diagram. 
- The curvature is zero where the bending moment is zero. Thus, the curvature is zero at the ends and at point $E$.
- If the bending moment is positive ($M+$), the deformation is concave upwards. If the bending moment is negative ($M-$), the deformation is concave down.

![[Beam Deflection Due to Bending-2.png]]
