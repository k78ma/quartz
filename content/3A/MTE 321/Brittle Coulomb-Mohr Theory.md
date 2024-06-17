---
title: Brittle Coulomb-Mohr Theory
tags:
  - mte321
date: 2024-06-16
aliases:
  - brittle coulomb-mohr theory
---
Brittle Coulomb-Mohr theory is a modicfication of [[Coulomb-Mohr Theory]] for brittle materials. We will only consider plane stress and not the general 3D case.

![[Brittle Coulomb-Mohr Theory.png]]
## Plane Stress
For plane stress, we have two principal stresses in the plane of analysis, such that $\sigma_{A}\geq \sigma_{B}$. The third principal stress is zero. We have 3 cases:

|          | Case 1: $\sigma_{A}\geq \sigma_{B}\geq 0$  | Case 2: $\sigma_{A}\geq 0\geq \sigma_{B}$                         | Case 3: $0 \geq \sigma_{A}\geq \sigma_{B}$ |
| -------- | ------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------ |
| Stresses | $\sigma_{1}=\sigma_{A}$ and $\sigma_{3}=0$ | $\sigma_{1}=\sigma_{A}$ and $\sigma_{3}=\sigma_{B}$               | $\sigma_{1}=0$ and $\sigma_{3}=\sigma_{B}$ |
| Yield    | $\sigma_A \geq S_ut$                       | $\frac{\sigma_{A}}{S_{ut}}-\frac{\sigma_{B}}{S_{uc}}\geq 1$       | $\sigma_{B}\leq -S_{uc}$                   |
| Design   | $\sigma_A = \frac{S_{ut}}{n}$              | $\frac{\sigma_A}{S_{ut}} -\frac{\sigma_{B}}{S_{uc}}= \frac{1}{n}$ | $\sigma_{B} = -\frac{S_{uc}}{n}$           |
