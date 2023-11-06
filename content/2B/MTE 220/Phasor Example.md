---
title: Phasor Example
tags:
  - mte220
date: 2023-10-21
---
Find $Z_{eq}$ "looking into" the two terminals. We're dealing with a particular frequency here ($5 \; \text{[rad/s]}$)

![[Phasor Example.png|572]]

First, we convert inductors and capacitors and capacitors into inductances.

![[Phasor Example-1.png|572]]

We have:
$$
\begin{align}
Z_{C_{1}}  & = \frac{1}{j\omega_{0}C_{1}} = - \frac{j}{5 \cdot 200 \times10^{-3}} = -j(1 \Omega) = 1 \angle -90\degree \; [\Omega] \\[3ex] 
Z_{L}  & = j\omega_{0}L = j \cdot 5 \cdot 2 = j (10 \Omega) = 10 \angle 90\degree \; [\Omega]\\[3ex] 
Z_{C_{2}}  & = \frac{1}{j\omega_{0}C_{2}} = -\frac{j}{5 \cdot 500 \times 10^{-3}} = -j \cdot 0.4 \Omega = 0.4 \angle -90\degree [\Omega]
\end{align}
$$

Doing some resistor simplification, we have:
$$
\begin{align}
Z_{eq}  & =  10 \parallel (Z_{C_{1}} + Z_{L} + [6 \parallel Z_{C_{2}}]) \\
 & = 4.255 + j(4.929) \Omega \\
 & = 6.511 \; \angle 49.2 \degree \quad [\Omega]
\end{align}
$$