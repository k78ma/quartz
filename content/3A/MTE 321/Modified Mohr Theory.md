---
title: Modified Mohr Theory
tags:
  - mte321
date: 2024-06-16
aliases:
  - modified mohr theory
---
Modified Mohr theory is a modicfication of [[Coulomb-Mohr Theory]] for brittle materials. We will only consider plane stress and not the general 3D case.

## Plane Stress
For plane stress, we have two principal stresses in the plane of analysis, such that $\sigma_{A}\geq \sigma_{B}$. The third principal stress is zero. We have 4 cases:

**Case 1 & 2:**  $[\sigma_{A}\geq \sigma_{B}\geq 0]$ and $[\sigma_{B} / \sigma_{A}]>1$:


**Case 3:** $\sigma_{A}\geq 0\geq \sigma_{B}$ and $| \sigma_{B} / \sigma_{A} |>1$
$$
\frac{(S_{uc}-S_{ut})\sigma_{A}}{S_{uc}S_{ut}}-\frac{\sigma_{B}}{S_{uc}} \geq 1 \\
$$
and
$$
\frac{(S_{uc}-S_{ut})\sigma_{A}}{S_{uc}S_{ut}}-\frac{\sigma_{B}}{S_{uc}} = \frac{1}{n} \\
$$

**Case 4:** $0\geq \sigma_{A}\geq \sigma_{B}$:
$$
\begin{align}
\sigma_{B}\leq-S_{uc} \\[2ex] 
\sigma_{B}=-\frac{S_{uc}}{n}
\end{align}
$$
