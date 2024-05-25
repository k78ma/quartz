---
title: Two-Plane Bending
tags:
  - mte321
date: 2024-05-25
aliases:
  - two-plane bending
---
[[Normal Stresses for Beams in Bending|Normal stresses for beams in bending]] often occur in both the $xy$ and $xz$ planes, such that there are bending moments $M_{z}$ and $M_{y}$ respectively.
- The subscript for $M$ is the axis which the moment is *around*

The bending stress can then be given by:
$$
\sigma_{x}=-\frac{M_{z}y}{I_{z}}+\frac{M_{y}z}{I_{y}}
$$
The maximum occurs when the summation gives the greatest positive stresses (tensile) and negative stresses (compressive).

For solid circular cross sections, the maximum is calculated as:
$$
\sigma_{\text{max}}=\frac{Mc}{I}=\frac{32}{\pi d^{3}}(M^{2}_{y}+M_{z}^{2})^{1/2}
$$