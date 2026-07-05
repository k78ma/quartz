---
title: Rechargeable Batteries
tags:
  - mte220
date: 2023-11-12
aliases:
---
A battery can be recharged by pushing current into it at a controlled rate, $I_{r}$.

Higher amount of current $I_{r}$ gives faster charging but can cause batteries to:
- Overheat
- Become permanently damaged
- Significantly reduce capacity

Recharging currents are specified in terms of the [[Battery Capacity]]:
$$
I_{r} = P  \times C_{total}
$$
$P$ is a factor (units of $[\text{h}^{-1}]$) that depends on the chemistry of the battery. 

For example NiMH batteries have $P = 0.1$. If $C_{total}= 2.1 \text{ Ah}$, determine $I_{r}$:
$$
I_{r} = P \cdot C_{total} = 0.1 \times 2.1 = 0.21 \text{ A} = 210 \text{ mA}
$$
Higher $I_{r}$ is possible with voltage, current, and temperature sensing. Usually, we can simply drop $I_{r}$ as SoC approaches 1. 

"Trickle charging" maintains SoC, e.g. P = 0.01.
