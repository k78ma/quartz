---
title: Convection
tags:
  - mte309
date: 2024-06-23
aliases:
  - convection
  - Newton's law of cooling
---
Convection is the mode of energy transfer between a solid surface and the adjacent liquid or gas that is in motion. The faster the fluid motion, the greater the convection heat transfer. In the absence of any bulk fluid motion, heat transfer between a solid surface and the adjacent fluid is by pure conduction.

Convection is governed by **Newton's Law of cooling**, which states:
$$
\dot{Q}''_{\text{conv}}=\bar{h}(T_{s}-T_{\infty})
$$
where:
- $\bar{h}$ is the average heat transfer coefficient $[\text{W} / \text{m}^{2}\cdot \text{K}]$
- $T_{s}$ is the surface temperature
- $T_{\infty}$ is the temperature of the fluid sufficiently far from the surface. 
	- Note that at the surface, the fluid temperature equals the surface temperature of the solid.

The convection heat transfer coefficient $h$ is not a property of the fluid. It is an experimentally determined parameter whose value depends on all the variables influencing convection such as the surface geometry, the nature of fluid motion, the properties of the fluid, and the bulk fluid velocity.

Thus, the coefficient $h$ is highly dependent on various conditions. 

![[Convection.png]]

## Forced and Natural Convection
In terms of heat transfer for convection, there's both diffusion of heat (thermal [[Conduction|conduction]]) and the movement of the fluid itself involved. In the case of **forced convection**, this fluid motion driven by external means such as a pump or fan, causing fluid motion and enhancing heat transfer. In the case of **natural convection**, this is driven by buoyancy forces due to density differences caused by temperature variations in the fluid.

![[Convection-2.png]]

![[Convection-3.png]]

In convective heat transfer, the flow profile of the fluid is crucial. **Momentum diffusion** determines the velocity distribution within the fluid, which in turn affects how efficiently heat is carried away from or towards a surface. Momentum diffusion is the process by which momentum is transferred within a fluid due to the molecular motion and interactions between fluid particles. This is analogous to the concept of thermal diffusion, where heat is transferred due to temperature gradients.
- In fluids, the molecules interact with each other and transfer momentum from one layer to another, leading to the diffusion of momentum. This is especially significant in the presence of velocity gradients.
- The **viscosity** of the fluid that measures its resistance to deformation or the extent to which it diffuses momentum. Higher viscosity means slower momentum diffusion.

### No-Slip Condition
Fluid flow is often confined by solid surfaces, and it is important to understand how the presence of solid surfaces affects fluid flow. Consider the flow of a fluid in a stationary pipe or over a solid surface that is nonporous (i.e., impermeable to the fluid). All experimental observations indicate that a fluid in motion comes to a complete stop at the surface and assumes a zero velocity relative to the surface. That is, a fluid in direct contact with a solid “sticks” to the surface due to viscous effects, and there is no slip. This is known as the no-slip condition.

![[Convection-1.png|360]]

