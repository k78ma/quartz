---
title: Shunt DC Motor
tags:
  - mte320
date: 2024-07-15
aliases:
  - shunt DC motor
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

## Speed-Torque Characteristics
Consider the equivalent circuit diagram of the shunt DC motor shown below. 

![[Shunt DC Motor-1.png|528]]

We have:
$$
\begin{align}
V_{L} & =I_{a}R_{a}+E_{c} \\[2ex] 
	 & = I_{a}R_{a}+\frac{ZP}{60a}\phi n
\end{align}
$$
Using
$$
\tau_{m}=\frac{ZP}{2\pi a}\phi I_{a}
$$
we have:
$$
I_{a}=\frac{2\pi a}{ZP} \frac{\tau_{m}}{\phi}
$$
Then, we have
$$
V_{L}=\frac{2\pi a}{ZP} \frac{\tau_{m}}{\phi}R_{a}+\frac{ZP}{60a}\phi n
$$
The rotor speed can be found from above as:
$$
\begin{align}
n & = \frac{V_{L}}{\frac{ZP}{60a}\phi}-\frac{\frac{2\pi a}{ZP} \frac{\tau_{m}}{\phi} R_{a}}{\frac{ZP}{60a}\phi} \\[2ex] 
	 & =\frac{V_{L}}{K'\phi}-\frac{R_{a}}{KK'\phi^{2}}\tau_{m}
\end{align}
$$
This means that $n$ plotted as a function of $\tau$ is a straight line, provided that $\phi$ is constant:

![[Shunt DC Motor-2.png|532]]

Thus, the speed of a shunt DC motor drops under load. This drop, however, is limited to below 8% of the rated speed, from no load to full load. Shunt DC motors are well-known for their fairly constant speed under load.

## Example