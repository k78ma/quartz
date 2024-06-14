---
title: Transformer Noise
tags:
  - mte320
date: 2024-06-14
aliases:
  - transformer noise
  - hum
---
Transformers make a humming noise, which can be heard from a distance in large power transformers. This noise can be attributed to:

**Magnetostriction:** A phenomenon caused by the expansion and contraction of transformer core in response to varying magnetic flux.

**Internal Forces:** Forces are exerted on the laminations due to the presence of eddy currents and a time-varying magnetic field according to the relation:
$$
\vec{F}=\vec{i}l\times \vec{B}
$$
As a result of multiplying two sinusoidal functions of the same frequency, the force has a constant component and a sinusoidal component at twice the line frequency. The time-varying component is responsible for vibrations in the core at two times the frequency of excitation. For example, a line frequency of $60 \text{ Hz}$ would result in vibrations at $120 \text{ Hz}$, which is in human hearing range.

**Insufficient Clamping:** Even at the presence of the forces explained above, with sufficient clamping, the vibrations (and thus the noise) can be minimized. Insufficient clamping causes excessive vibrations and noise.