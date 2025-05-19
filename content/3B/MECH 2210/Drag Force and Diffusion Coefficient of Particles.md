---
title: Drag Force and Diffusion Coefficient of Particles
tags:
  - mech2210
date: 2025-05-19
aliases:
  - drag force and diffusion coefficient of particles
  - Stokes-Einstein Equation
---
To understand the movement of microscopic particles suspended in a fluid (liquid or gas), where their random, jittery motion is influenced by collisions with molecules of the surrounding fluid, we need to understand Brownian motion – the random movement of particles resulting from collisions with fluid molecules. 

![[Drag Force and Diffusion Coefficient of Particles-20250519114657992.png]]

- The blue dots represent molecules of the fluid
- The larger object undergoing random motion is the particle influenced by countless molecular collisions.
- This movement leads to a net displacement over time, creating a diffusive effect

The concentration of particles as a function of height $x$ is represented as
$$
c(x) = c(0) \exp\left(-\frac{mgx}{kT}\right)
$$
where $k$ is the Boltzmann constant.The expression shows an exponential decay in concentration with height. This reflects the fact that gravity pulls the particles downward, causing fewer to be present at higher elevations.The Boltzmann factor $\exp(-\frac{mgx}{kT})$ represents the thermal distribution of particle energy versus gravitational potential energy.

## Fluxes of Particles

### Sedimentation Flux
Particles are pulled down by gravity, creating a flux:
$$
J_1 = Vc(x) = \frac{F_D}{6\pi \mu R} c(x)
$$
where $V$ is the terminal velocity of te particle. This expression represents the downward drift of particles due to gravity.

### Diffusion Flux
There is also a diffusion flux as particles move from regions of high concentration to low concentration:
$$
J_2 = -D \frac{\partial c}{\partial x} = D \frac{mg}{kT} c(x)
$$
$D$ is the diffusion coefficient. This is the upward flux resulting from molecular diffusion counteracting the gravitational pull

## Steady-State Condition
At steady-state, the downward sedimentation flux $J_{1}$ balances the upward diffusion flux $J_{2}$ such that
$$
J_{1}=J_{2}
$$
This results in:
$$
\begin{align}
\frac{F_D}{6\pi \mu R} c(x)  & = D \frac{mg}{kT} c(x) \\[2ex]
\frac{mg}{6\pi \mu R}  & = D \frac{mg}{kT} \\[2ex]
D &  = \frac{kT}{6\pi \mu R}
\end{align}
$$
This is the Stokes-Einstein equation.