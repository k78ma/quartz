---
title: Radiation
tags:
  - mte309
date: 2024-06-23
aliases:
  - radiation
  - Stefan–Boltzmann law
  - emissivity
  - absorptivity
  - Kirchoff's Law
---
Radiation is the energy emitted by matter in the form of electromagnetic waves (or photons) as a result of the changes in the electronic configurations of the atoms or molecules. Unlike [[Conduction|conduction]] and [[Convection|convection]], the transfer of heat by radiation does not require the presence of an intervening medium. In fact, heat transfer by radiation is fastest (it occurs at the speed of light), and it suffers no attenuation in a vacuum. This is how the energy of the sun reaches the earth.

We are specifically interested in thermal radiation, which is the form of radiation emitted by bodies because of their temperature. It differs from other forms of electromagnetic radiation such as X-rays, gamma rays, microwaves, radio waves, and television waves that are not related to temperature. All bodies at a temperature above absolute zero emit thermal radiation.

## Blackbody Radiation
The maximum rate of radiation that can be emitted from a surface at a thermodynamic temperature $T_{s}$ is given by the **Stefan-Boltzmann law** as
$$
\dot{Q}_{\text{emit, max}}''=\sigma T^{4}
$$
where $\sigma=5.670\times 10^{8} \text{ W} / \text{m}^{2}\cdot \text{K}^{4}$ is the Stefan-Boltzmann `constant`.

The idealized surface that emits radiation at this maximum rate is called a **blackbody**, and the radiation emitted by a blackbody is called **blackbody radiation**.

## Emissivity
The radiation emitted by all real surfaces is less than the radiation emitted by a blackbody at the same temperature and is expressed as
$$
\dot{Q}_{\text{emit}}''=\epsilon\, \sigma\,T_{s}^{4}
$$
where $\epsilon$ is the **emissivity** of the surface. The property emissivity, whose value is in the range $0\leq \epsilon \leq 1$, is a measure of how closely a surface approximates a blackbody for which $\epsilon=1$.

## Absorptivity
Another important radiation property of a surface is its **absorptivity** $\alpha$, which is the fraction of the radiation energy incident on a surface that is absorbed by the surface. Like emissivity, its value is in the range $0 \leq \alpha \leq 1$. A blackbody absorbs all radiation incident on it. That is, a blackbody is a perfect absorber ($\alpha=1$) as well as a perfect emitter.

## Kirchoff's Law
In general, both $\epsilon$ and $\alpha$ of a surface depend on the temperature and the wavelength of the radiation. Kirchoff's law of radiation states that the emissivity and the absorptivity of a surface at a given temperature and wavelength are equal, $\epsilon(\lambda,T)=\alpha(\lambda,T)$, for a body in thermal equilibrium.

Kirchoff's Law is a simplification; we need to be proceed with caution when $T_{s}-T_{\text{surr}}>100 \text{ K}$.

## Net Heat Transfer
Net radiation heat transfer is the difference between the rates of radiation *emitted* by the surface and the radiation *absorbed*. 
- If the rate of radiation absorption is greater than the rate of radiation emission, the surface is said to be gaining energy by radiation. 
- Otherwise, the surface is said to be losing energy by radiation.

In general, the determination of the net rate of heat transfer by radiation between two surfaces is a complicated matter since it depends on the properties of the surfaces, their orientation relative to each other, and the interaction of the medium between the surfaces with radiation.

When a surface of emissivity $\epsilon$ surface area $A_{s}$ at a thermodynamic temperature $T_{s}$ is completely enclosed by a much larger (or black) surface at thermodynamic temperature $T_{\text{surr}}$ separated by a gas (such as air) that does not intervene with radiation, the net rate of radiation heat transfer between these two surfaces is given by:
$$
\begin{align}
\dot{Q}_{\text{net}}'' & =\epsilon\sigma(T_{s}^{4}-T_{\text{surr}}^{4}) \\[2ex]
\dot{Q}_{\text{net}}'' & =h_{\text{rad}}(T_{s}-T_{\text{surr}})
\end{align}
$$
In this special case, the emissivity and the surface area of the surrounding surface do not have any effect on the net radiation heat transfer.

![[Radiation.png|384]]
