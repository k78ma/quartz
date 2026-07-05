---
title: Worms and Worm Gears
tags:
  - mte322
date: 2024-10-01
aliases:
  - worms and worm gears
---
Worms and worm gears are a basic gear type. The worm resembles a screw. The direction of rotation of the worm gear (also called worm wheel) depends on the direction of rotation of the worm and upon whether the worm teeth are cut right-hand or left-hand. 

Worm gearsets are also made so that the teeth of one or both wrap partly around the other. Such sets are called single-enveloping and double-enveloping worm gearsets. Worm gearsets are mostly used when the speed ratios of the two shafts are quite high (3 or more).

Key points:
- Non-intersecting orthogonal axes  
- Can design them to prevent “backdriving”  
- Poor efficiency (40 - 85%)  
- High ratios obtainable in single stage  
- High torque capacity

![[Worm and Wheel.png|222]]

## Nomenclature and Handedness
- Worm is not really a gear (more like a screw), so its pitch diameter $d_{W}$ is not related to gear ratio ($\frac{N_{G}}{N_{W}}\neq \frac{d_{G}}{d_{W}}$). Instead, we have $L=N_{W}\cdot p_{x}$, where $N_{W}$ is the number of worm teeth (or start number).
- The axial pitch $p_{x}$ is the same as the circular pitch of the gear, such that $p_{x}=p_{G}$
- One of the important parameters for [[Worm Gear Load Analysis]] is the **lead angle** $\lambda$, or its tangent value given as $\tan \lambda=\frac{L}{\pi d_{W}}$.

![[Worm and Wheel-1.png|580]]

- A RH worm is mated with a RH worm wheel (in contrast to [[Helical Gears|helical gears]])

![[Worm and Wheel-2.png|580]]

## Example

![[MTE 322 ex 8.pdf]]