---
title: Coulomb-Mohr Theory
tags:
  - mte321
date: 2024-06-16
aliases:
  - coulomb-mohr theory
---
Coulomb-Mohr theory is for ductile materials where strength in tension does not equal strength in compression. Examples of this include magnesium alloys, gray cast irons.

**Mohr's failure curve** uses three tests for tension, compression and shear. The material undergoes these until it yields. **Coulomb-Mohr** is a variation, where the BCD boundary line is assumed to be straight, so that only tensile and compressive strengths are necessary.

![[Coulomb-Mohr Theory.png|393]]

![[Coulomb-Mohr Theory-1.png|384]]

## General Case
In the general 3D case, we have three principal stresses $\sigma_{1}\geq \sigma_{2}\geq \sigma_{3}$. The yield conditions are:
$$
\frac{\sigma_{1}}{S_{t}}-\frac{\sigma_{3}}{S_{c}}\geq 1
$$
where $S_{t}, S_{c}$ are the ultimate tensile and compressive strengths of a material.

When designing with a factor of safety $n$:
$$
\frac{\sigma_{1}}{S_{t}}-\frac{\sigma_{3}}{S_{c}}=\frac{1}{n}
$$
## Plane Stress
For plane stress, we have two principal stresses in the plane of analysis, such that $\sigma_{A}\geq \sigma_{B}$. The third principal stress is zero. We have 3 cases:

|        | Case 1: $\sigma_{A}\geq \sigma_{B}\geq 0$ | Case 2: $\sigma_{A}\geq 0\geq \sigma_{B}$ | Case 3: $0 \geq \sigma_{A}\geq \sigma_{B}$ |
| ------ | ----------------------------------------- | ----------------------------------------- | ------------------------------------------ |
| Yield  | $\sigma_A \geq S_y$                       | $\sigma_A -\sigma_{B}\geq S_y$            | $\sigma_{B}\leq -S_{y}$                    |
| Design | $\sigma_A = \frac{S_y}{n}$                | $\sigma_A -\sigma_{B}= \frac{S_y}{n}$     | $\sigma_{B} = -\frac{S_{y}}{n}$            |