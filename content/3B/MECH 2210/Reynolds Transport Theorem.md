---
title: Reynolds Transport Theorem
tags:
  - mech2210
date: 2025-03-20
aliases: []
---
The Reynolds Transport Theorem lets us convert system-based property changes into [[Control Volume and System|control-volume]] based property changes.

Let $B$ represent any of these (or other) fluid parameters and $b$ represent the amount of that parameter per unit mass. That is,
$$
B=mb
$$
- $b$ is mass-independent
- $B$ is an extensive property
- $b$ is an intensive property

This means that
$$
\begin{align}
b=1 \quad &  \longrightarrow \quad B=m \\[2ex] 
b=V \quad  & \longrightarrow \quad B=mV \\[2ex] 
b=\frac{1}{2}V^{2} \quad  & \longrightarrow \quad B=\frac{1}{2}mV^{2}
\end{align}
$$
Now, for each infinitesimal fluid particle in the system with mass $\rho\delta \forall$ and size $\delta \forall$ we can determine $B$ as
$$
B_{i}=\delta m_{i}\cdot b_{i}=\rho_{i}\delta \forall \cdot b_{i}
$$
For the system, we can then sum over the individual particles:
$$
B_{\text{sys}}=\sum B_{i}=\sum \rho_{i}b_{i}\delta \forall _{i} = \int _{\text{sys}} \rho bd \, d\forall  
$$
Similarly,
$$
B_{\text{C.V.}}=\int _{\text{C.V.}} \rho bd \, d\forall  
$$
The Reynold transport theorem states:
$$
\frac{DB_{\text{sys}}}{Dt}=\frac{ \partial }{ \partial t } \int _{\text{C.V.}} \rho bd \, d\forall +\int _{\text{C.S.}}b\rho \mathbf{V}\cdot \mathbf{n} \, dA  
$$