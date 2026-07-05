---
title: Stress-Life Method
tags:
  - mte321
date: 2024-06-17
aliases:
  - stress-life method
  - S-N diagram
---
The stress-life method relies on test specimens subjected to controlled cycling between two stress levels, known as *constant amplitude loading*.
- Based on empirical data as opposed to theory
- Least accurate
- Traditional, easy to implement for wide range of design applications
- Adequately assess high-cycle fatigue applications

## Constant Amplitude Loading
The constant amplitude stress situation is characterized by the following:
- $\sigma_{\text{min}}$ is minimum stress
- $\sigma_{\text{max}}$ is maximum stress
- $\sigma_{m}$ is mean stress, or midrange stress
- $\sigma_{a}$ is alternating stress, or stress amplitude
- $\sigma_{r}$ is stress range

The following relations are evident:
$$
\begin{align}
\sigma_{a}=\bigg| \frac{\sigma_{\text{max}}-\sigma_{\text{min}}}{2} \bigg|\\[2ex] 
\sigma_{m}=\frac{\sigma_{\text{max}}+\sigma_{\text{min}}}{2}
\end{align}
$$
![[Stress-Life Method.png|415]]

### Repeated Stress
Repeated stress is a special case of constant amplitude loading, where the minimum stress is zero.

![[Stress-Life Method-1.png|399]]

### Completely Reversed Stress
Completely reversed stress is a special case of constant amplitude loading, where the mean stress is zero. Stress cycles between equal magnitudes of tension and compression. In this case, the alternating stress is denoted as $\sigma_{\text{ar}}$.

![[Stress-Life Method-2.png|395]]

## S-N Diagram
Also known as a Wöhler curve, or stress-life diagram, this is based on the *rotating-beam test*, where each revolution of the specimen causes a stress element on the surface to cycle between equal magnitudes of tension and compression, thus achieving completely reversed stress conditions. The plot of the completely reversed alternating stress verus life in cycles to failure is made on a semi-log or log-log scale.

![[Stress-Life Method-3.png]]

### Endurance Limit
The fatigue strength corresponding to the knee is called the endurance limit $S_{e}$, or the fatigue limit. This represents the maximum cyclic stress amplitude that a material can withstand for an infinite number of cycles without failing due to fatigue. Many materials, particularly nonferrous metals and plastics, do not exhibit an endurance limit. For materials without an endurance limit, the fatigue strength $S_{f}$ is reported at a specific number of cycles, commonly $N=5\times 10^{8}$.
