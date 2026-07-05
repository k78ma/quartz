---
title: Bernoulli Equation
tags:
  - mech2210
date: 2025-03-03
aliases: []
---
The Bernoulli equation is fundamentally:
1. An energy conservation equation
2. A consequence of $F=ma$ along streamlines
$$
p+\frac{1}{2}\rho V^{2}+\gamma z=c
$$
Between any two points, (1) and (2), on a streamline in steady, inviscid, incompressible flow the Bernoulli equation can be applied in the form:
$$
p_{1}+\frac{1}{2}\rho V_{1}^{2}+\gamma z_{1}=p_{2}+\frac{1}{2}\rho V_{2}^{2}+\gamma z_{2}
$$

Bernoulli's Law specifically applies along streamlines. For across streamlines, refer to [[N2L Normal to Streamline]].

## Physical Interpretation
To interpret Bernoulli's equation in terms of work and energy, we can multiply each term by a volume element $L^{3}$:
$$
p \cdot L^{3}+\frac{1}{2}\rho V^{2}\cdot L^{3}+\gamma z\cdot L^{3}=c'
$$
Rearranging:
$$
p\cdot L^{2}\cdot L+\frac{1}{2}\rho L^{3}V^{2}+\gamma z\cdot L^{2}\cdot L=c'
$$
where:
- $p\cdot L^{2}\cdot L$ represents work done by pressure forces
- $\frac{1}{2}\rho L^{3}V^{2}$ represents kinetic energy
- $\gamma z\cdot L^{2}\cdot L$ represents work done by gravity

Thus, Bernoulli's equation is just an energy balance along a streamline. **The work done on a fluid particle by all forces acting on the particle is equal to the change of the kinetic energy of the particle.**

We can also write in terms of energy per unit weight ("head")
$$
\frac{p}{\gamma}+\frac{V^{2}}{2g}+z=c
$$
where:
- $p / \gamma$ is the pressure head – work done by pressure forces
- $V^{2} / 2g$ is the velocity head – kinetic energy per unit weight
- $z$ is the elevation head – potential energy per unit weight

This explains why, for a fluid along a streamline:
- If velocity increases, pressure must decrease
- If elevation increases, pressure decreases

## Static, Stagnation, Dynamic, Total Pressure
In the Bernoulli equation $p+\frac{1}{2}\rho V^{2}+\gamma z=c$, the total pressure is constant along a streamline. We can identify different terms that are part of the equation:
- $p$ is the **static pressure**.
- $\frac{1}{2}\rho V^{2}$ is the **dynamic pressure**. 
- $\gamma z$ is the **hydrostatic pressure.**

We can see the interpretation of the dynamic pressure by considering the pressure at the end of a small tube inserted into the flow and pointing upstream. After the initial transient motion has died out, the liquid will fill the tube to a height of $H$ as shown. The fluid, including at its tip (2), will be stationary. That is, $V_{2}=0$ or point 2 is the **stagnation point**.

![[Bernoulli Equation-1.png]]