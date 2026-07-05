---
title: Drag Force
tags:
  - mech2210
date: 2025-05-19
aliases:
  - drag force
---
When fluid flows around a submerged object, it generates a drag force that resist against the motion of the object. This results from two main effects: pressure distribution $p$ from the surface and shear stress distribution due to fluid viscosity (see [[External Flow Around Submerged Bodies]]).

![[Drag Force-20250519102811399.png|532]]


The total drag force is the sum of two distinct contributions:
$$
F_{D} = F_{Dp} + F_{Df}
$$
where $F_{Dp}$ is the pressure drag and $F_{Df}$ is the friction drag.

- Pressure drag arises from pressure differences over the surface of the object; as fluid moves around the object, the pressure varies, creating regions of high and low pressure
- Friction drag results from shear stress ($\tau_w$) as layers of fluid slide over each other near the surface.

The total drag force is expressed using the drag coefficient:
$$
F_D = C_D \frac{1}{2} \rho V^2 A
$$
where $C_{D}$ is the drag coefficient, $\rho$ is the density of the fluid, $V$ is the relative velocity of the fluid with respect to the object, and $A$ is the reference area (cross-sectional or surface area depending on application).

The drag coefficient can be written as:
$$
C_{D} = C_{D} \left( \text{Re},\, \frac{\epsilon}{L},\,\, \text{shape} \right)
$$
This tells us that drag coefficient depends on:
- Reynolds Number $\text{Re}$ – characterizes the flow regime (laminar or turbulent)
- Surface roughness $\epsilon$ – measures how smooth or rough the surface is
- Characteristic length $L$ – The dimension that significantly influences drag (e.g., diameter for a cylinder, chord length for an airfoil).
- Shape

For a blunt cylinder:
- The flow separates easily, creating a large **wake** (low-pressure region
- This results in a relatively high drag coefficient: $C_D = 1.2$

![[Drag Force-20250519103335160.png]]

For a streamlined body:
- The flow stays attached longer, minimizing separation and the wake
- This reduces drag substantially, resulting in a much lower drag coefficient: $C_D = 0.12$

![[Drag Force-20250519111127597.png|403]]