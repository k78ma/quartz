---
title: Maximum Normal Stress Theory
tags:
  - mte321
date: 2024-06-16
aliases:
  - maximum normal stress theory
  - MNS theory
  - MNS
---
The maximum-normal-stress (MNS) theory for brittle materials states that failure occurs whenever one of the three principal stresses equals or exceeds the strength.

## General Case
In the general 3D case, we have three principal stresses $\sigma_{1}\geq \sigma_{2}\geq \sigma_{3}$. Fracture occurs when:
$$
\sigma_{1} \geq S_{ut} \quad \text{or} \quad \sigma_{3}\leq-S_{uc}
$$
For design purposes with a factor of safety $n$, we use:
$$
\sigma_{1}=\frac{S_{ut}}{n} \quad \text{or} \quad \sigma_{3}=-\frac{S_{uc}}{n}
$$

## Plane Stress
For plane stress, we have two principal stresses in the plane of analysis, such that $\sigma_{A}\geq \sigma_{B}$. The third principal stress is zero. Fracture occurs when:
$$
\sigma_{A} \geq S_{ut} \quad \text{or} \quad \sigma_{B}\leq-S_{uc}
$$
When designing with a factor of safety, we write:
$$
\sigma_{A}=\frac{S_{ut}}{n} \quad \text{or} \quad -\frac{S_{uc}}{n}
$$