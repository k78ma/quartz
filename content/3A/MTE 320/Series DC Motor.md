---
title: Series DC Motor
tags:
  - mte320
date: 2024-07-15
aliases:
  - series dc motor
---
Below we have the schematic diagram of a series DC motor and its equivalent circuit diagram.

![[Series DC Motor.png|436]]

In series DC motors, the field circuit is connected in series with the armature circuit. The main relations for series DC motor are:
$$
\begin{align}
I_{L} & =I_{f}=I_{a} \\[2ex]
\phi & =\frac{N_{f}I_{f}}{\mathcal{R}}
\end{align}
$$
where $N_{f}$ is the number of turns of field winding and $\mathcal{R}$ is the [[Magnetic Reluctance|magnetic reluctance]].

Then:
$$
\begin{align}
V_{L} & =I_{a}(R_{a}+R_{f})+E_{c} \\[2ex] 
E_{c} & =\frac{ZP}{2\pi a}\phi \omega_{m}=\frac{ZP}{60a}\phi n\\[2ex] 
\tau_{m} & =\frac{ZP}{2\pi a}\phi I_{a}\\[2ex] 
\end{align}
$$
Thus, we have $\phi \propto I_{a}$, and $\tau_{m}\propto I_{a}^{2}$.