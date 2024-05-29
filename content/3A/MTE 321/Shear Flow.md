---
title: Shear Flow
tags:
  - mte321
date: 2024-05-25
aliases:
  - shear flow
---
Shear flow is used in analysis of beam cross-sections to determine how shear force is distributed across the area of a beam. It is given by:
$$
q=\frac{VQ}{I}
$$
- $V$ is the shear force acting on the beam, typically at the section where the shear flow is being calculated.
- $Q$ is the first moment of area about the neutral axis for the area above (or below) the point where the shear flow is being calculated. It's calculated as $Q= \int y \, dA=\bar{y}A$.
- $I$ is the second moment of area (or moment of inertia) about the neutral axis of the entire cross-section.