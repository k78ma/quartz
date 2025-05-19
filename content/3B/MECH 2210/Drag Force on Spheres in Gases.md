---
title: Drag Force on Spheres in Gases
tags:
  - mech2210
date: 2025-05-19
aliases:
  - drag force on spheres in gases
---
## Large Particles
"Creeping flow" occurs when the Reynolds number $\text{Re}\ll{1}$. This is characteristic of very slow-moving particles, high-viscosity fluids, or small particles in a viscous medium.

In this regime, Stokes' Law describes the drag force
$$
F_{D} = 6\pi \mu RV
$$
where $F_{D}$ is the drag force, $\mu$ is the dynamic viscosity of the gas, $R$ is the radius of the particle, and $V$ is the relative velocity of the particle. This is primarily valid for macroparticles.

## Small Particles
When particles approach the scale of the mean free path of gas molecules, assumptions of Stokes’ Law break down.
- Mean free path – average distance a molecule travels before colliding with another

For these small particles, we instead have some function $h$
$$
F_{D} = h(R,V, \text{ fluid properties})
$$
which adjusts for molecular effects.

The behavior of $h$ is influenced by the Knudsen number $\text{Kn}$, which is defined as
$$
\text{Kn} = \frac{\lambda}{R}
$$
where $\lambda$ is the mean free path of the gas molecules and $R$ is the radius of the particle.


Interpretation of $\text{Kn}$:
- $\text{Kn} \ll 1$ – Continuum regime; the particle is much larger than the mean free path, the fluid behaves like a continuous medium. Stokes' Law is valid
- $\text{Kn} \sim 1$ – Transition regime; The particle size is comparable to the mean free path. Molecular slip starts to become important. Stokes' Law needs correction
- $\text{Kn} \gg 1$ – Free molecule regime; The particle is smaller than the mean free path. Molecules do not collide much with each other; they mostly interact with the particle. The drag force is dominated by direct molecular impacts.

Evolution of drag force models as particles become smaller and enter different flow regimes:

![[Drag Force on Spheres in Gases-20250519113719907.png]]