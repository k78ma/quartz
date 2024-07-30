---
title: Separately-Excited DC Motor
tags:
  - mte320
date: 2024-07-15
aliases:
  - separately-excited dc motor
---
Below we have the schematic diagram of a separately-excited DC motor and its equivalent circuit diagram.

![[Separately-Excited DC Motor.png|524]]

In this type of motor, the field and armature circuits are separately excited, resulting in a high degree of controllability. Due to the need for two separate voltage sources, unless the extra cost is justified and/or the offered control flexibility is important, this type of motor is not commonly used. 

The resistance $R_{f}$ in **(b)**, is the combination of the field resistance and an adjustable resistance, which is used for speed control purposes.

The operation of this motor can be expressed as:
$$
\begin{align}
I_{f} & =\frac{V_{f}}{R_{f}} \\[2ex]
\phi & =\frac{N_{f}I_{f}}{\mathcal{R}}
\end{align}
$$
where $N_{f}$ is the number of turns of field winding and $\mathcal{R}$ is the [[Magnetic Reluctance|magnetic reluctance]].

Then:
$$
\begin{align}
V_{a} & =I_{a} R_{a}+E_{c} \\[2ex] 
E_{c} & =\frac{ZP}{2\pi a}\phi \omega_{m}=\frac{ZP}{60a}\phi n \\[2ex] 
\tau_{m} & =\frac{ZP}{2\pi a}\phi I_{a}
\end{align}
$$
