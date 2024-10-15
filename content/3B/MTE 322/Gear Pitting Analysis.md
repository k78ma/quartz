---
title: Gear Pitting Analysis
tags: 
date: 2024-10-14
aliases:
  - gear pitting analysis
---
Pitting is one of the [[Failure Modes of Gears|failure modes of gears]].

The surface durability of a gear is given by the Hertz contact equation:
$$
\sigma_{c}=-C_{p}\left[ \frac{K_{v}W_{t}}{F\cos \phi}\left( \frac{1}{r_{1}}+\frac{1}{r_{2}} \right) \right]^{1/2}
$$
where $C_{p}$ is called the **elastic coefficient** and is defined by
$$
C_{p}=\left[ \frac{1}{\pi\left( \frac{1-v^{2}_{P}}{E_{P}}+\frac{1-v_{G}^{2}}{E_{G}} \right)} \right]
$$
and $r_{1}$ and $r_{2}$ are defined by
$$
r_{1}=\frac{d_{P}\sin \phi}{2}, \quad r_{2}=\frac{d_{G}\sin \phi}{2}
$$
This $\sigma_{C}$ is compared against $S_{c}$ (**surface strength**), which is often parametrized by $H_{B}$ (Brinell hardness), e.g.
$$
S_{c}=2.76H_{B}-70 \text{ MPa} \quad \text{or} \quad 0.4H_{B}-10\text{ kpsi}
$$
for steel at $10^{8}$ cycles.

## Example

![[MTE 322 ex 11.pdf]]