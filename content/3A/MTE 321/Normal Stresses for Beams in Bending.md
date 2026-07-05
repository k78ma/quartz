---
title: Normal Stresses for Beams in Bending
tags: 
date: 2024-05-25
aliases:
  - normal stresses for beams in bending
  - bending stress
---
For a straight beam that is being acted upon by a positive bending moment in one axis:

![[Normal Stresses for Beams in Bending.png|349]]

- Top is in compression
- Bottom is in tension
- $x$ is neutral axis
	- Not in tension or compression, strain is zero
	- Coincides with centroidal axis
- $xz$ is neutral plane – contains neutral axes for all cross-sections

Bending stress varies linearly with distance from neutral axis – further away from neutral axis means more stress. Graphically:

![[Normal Stresses for Beams in Bending-1.png|515]]

Mathematically, this is given by:
$$
\sigma_{x}=-\frac{M_{z}y}{I_{z}}
$$
where $y$ is the distance from the neutral axis. Note that the negative sign makes it so that positive $y$ is compression, and negative $y$ is tension, just like we want. 
- If the beam is bending downward, don't use the negative!

$I$ is the *moment of inertia* or second moment of area about the $z$-axis:
$$
I=\int y^{2} \, dA 
$$
Obviously, the maximum magnitude of bending stress then occurs where $y$ has the greatest magnitude, such that:
$$
\sigma_{\text{max}}=\frac{Mc}{I}
$$
where $c$ is the maximum magnitude of $y$.

The above is sometimes written as:
$$
\sigma_{\text{max}}=\frac{M}{Z}
$$
where $Z = I / c$ is called the section modulus. For rectangular beams, $Z = I / c = \frac{1}{12}bd^{3} / \frac{d}{2}=\frac{1}{6}bd^{3}$.

## Bending due to Axial Loading
Normal stress can occur due to axial loading *and* loading, such that:
$$
\sigma_{\text{total}}=\pm \frac{F}{A} \pm \frac{My}{I}
$$
where $M$ is the bending moment.

$F$ is the axial loading, and it is:
- Positive if force is tensile
- Negative if force is compressive