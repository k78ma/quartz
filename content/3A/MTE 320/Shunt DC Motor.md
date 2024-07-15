---
title: Shunt DC Motor
tags:
  - mte320
date: 2024-07-15
aliases:
  - shunt dc motor
---
Below we the schematic diagram of a shunt DC motor and its equivalent circuit diagram.

![[Shunt DC Motor.png|496]]

In shunt DC motors, the field circuit is connected in parallel with the armature circuit, and both circuits are fed from the same DC voltage source. The resistance $R_{f}$ in **(b)** is the combination of the field resistance and an adjustable resistance, which is used for speed control purposes.

The main relations for this type of motor are:
$$
\begin{align}
I_{f} & =\frac{V_{L}}{R_{f}} \\[2ex] 
\phi & =\frac{N_{f}I_{f}}{\mathcal{R}}
\end{align}
$$
where $N_{f}$ is the number of turns of field winding and $\mathcal{R}$ is the [[Magnetic Reluctance|magnetic reluctance]].

Then:
$$
\begin{align}
V_{L} & =I_{a}R_{a}+E_{c}\\[2ex] 
I_{L} & =I_{a}+I_{f}\\[2ex] 
E_{c} & =\frac{ZP}{2\pi a}\phi \omega_{m}=\frac{ZP}{60a}\phi n \\[2ex]
\tau_{m} & =\frac{ZP}{2\pi a}\phi I_{a}
\end{align}
$$
Thus, if $\phi$ is constant, $\tau_{m}\propto I_{a}$.