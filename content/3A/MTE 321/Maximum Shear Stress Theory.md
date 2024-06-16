---
title: Maximum Shear Stress Theory
tags:
  - mte321
date: 2024-06-16
aliases:
  - maximum shear stress theory
  - MSS theory
  - Tresca theory
  - Guest theory
---
Maximum-shear-stress theory predicts that yielding begins whenever the maximum shear stress in any element equals or exceeds the maximum shear stress in a tension-test specimen of the same material when that specimen begins to yield.

In general, MSS is a conservative predictor of failure; the predicted yield strength in shear is about 15% lower than actuality.

>[!note] 3D Stress
>Recall that for [[Generalized 3D Stress|3D stress]] we have 3 principal stresses $\sigma_{1}, \sigma_{2}, \sigma_{3}$:
>$$
>\begin{align}
>& \sigma^{3}-(\sigma_{x}+\sigma_{y}+\sigma_{z})\sigma^{2} \\
> & +(\sigma_{x}\sigma_{y}+\sigma_{x}\sigma_{z}+\sigma_{y}\sigma_{z}-\tau^{2}_{xy}-\tau^{2}_{yz}-\tau^{2}_{zx})\sigma \\
 >& -(\sigma_{x}\sigma_{y}\sigma_{z}+2\tau_{xy}\tau_{yz}\tau_{zx}-\sigma_{x}\tau_{yz}^{2}-\sigma_{y}\tau^{2}_{zx}-\sigma_{z}\tau^{2}_{xy})=0
>\end{align}
>$$
>and 3 principal shears:
>$$
>\tau_{1 / 2}=\frac{\sigma_{1}-\sigma_{2}}{2}, \quad \tau_{2 / 3}=\frac{\sigma_{2}-\sigma_{3}}{2},\quad \tau_{1 / 3}=\frac{\sigma_{1}-\sigma_{3}}{2}
>$$
>For [[Plane Stress|plane stress]], the stress-free surface will have one of the principal stresses equal zero.

## General Case
For a general state of stress, MSS predicts yielding when
$$
\tau_{max}=\frac{\sigma_{1}-\sigma_{3}}{2}\geq \frac{S_{y}}{2} \quad \text{or} \quad \sigma_{1}-\sigma_{3}\geq S_{y}
$$
where $S_{y}$ is the yield strength, which is the stress at which a material begins to deform plastically. Naturally, this means that the yield strength in shear is given by:
$$
S_{xy}=0.5S_{y}
$$
which is about 15% lower than in actuality, as mentioned above.

We can also incorporate a factor of safety $n$:
$$
\tau_{max}=\frac{\sigma_{1}-\sigma_{3}}{2}=\frac{S_{y}}{2n} \quad \text{or} \quad \sigma_{1}-\sigma_{3}=\frac{S_{y}}{n}
$$
## Plane Stress
In plane stress, we have two principal stresses in the plane stress, $\sigma_{A}\geq \sigma_{B}$. The third principal stress is zero. Thus, there are 3 cases to consider:

|        | Case 1: $\sigma_{A}\geq \sigma_{B}\geq 0$ | Case 2: $\sigma_{A}\geq 0\geq \sigma_{B}$ | Case 3: $0 \geq \sigma_{A}\geq \sigma_{B}$ |
| ------ | ----------------------------------------- | ----------------------------------------- | ------------------------------------------ |
| Yield  | $\sigma_A \geq S_y$                       | $\sigma_A -\sigma_{B}\geq S_y$            | $\sigma_{B}\leq -S_{y}$                    |
| Design | $\sigma_A = \frac{S_y}{n}$                | $\sigma_A -\sigma_{B}= \frac{S_y}{n}$     | $\sigma_{B} = -\frac{S_{y}}{n}$            |

![[Maximum Shear Stress Theory.png]]