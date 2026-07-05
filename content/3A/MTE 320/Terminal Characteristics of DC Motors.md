---
title: Terminal Characteristics of DC Motors
tags:
  - mte320
date: 2024-07-13
aliases:
  - terminal characteristics of DC motors
  - speed regulation
---
DC motors are known for their ease of speed control, quick start-up, quick stopping, and quick reversal of direction of rotation. The disadvantages are mainly in the [[Commutator Brush Issues|commutator brush issues]], which makes DC machines more costly to maintain, more likely to develop fire due to sparking, and more sensitive to operating environment, when compared with other types of electric machines.

To study the terminal characteristic or torque-speed characteristic of a general DC motor, consider the equivalent circuit below.

![[Terminal Characteristics of DC Motors.png]]

The main relations governing the operation of the DC motor above are:
$$
\begin{align}
V_{a} & =R_{a}I_{a}+E_{c} \\[2ex]
E_{c} & =\frac{ZP}{2\pi a}\phi \omega_{m}=\frac{ZP}{60a}\phi n \\[2ex] 
\tau_{m} & =\frac{ZP}{2\pi a}\phi I_{a}
\end{align}
$$
Sometimes $\tau_{d}$ is used instead for "developed" torque.

At no load, when $\tau_{L}=0$, $\tau_{m}$ will be at its lowest value – just enough to rotate the rotor and overcome no-load losses (mechanical + core losses). The armature current will thus be at its lowest value, which means that the [[Counter Torque and EMF|counter emf]] given by:
$$
E_{c}=V_{a}-R_{a}I_{a}
$$
will be at its highest value. From equation $(2)$, since the counter emf is at maximum value, the motor speed $\omega_{m}$ will be at its highest value as well. Thus, **no-load = highest speed**.

As the motor is loaded, $\tau_{L}$ increases, leading to an increase in $\tau_{m}$, increase in $I_{a}$, and decrease in $E_{c}$, thus resulting in lower speed. Thus, **the motor slows down under load**.

## Speed Regulation
The drop in motor speed from no-load to full-load is called speed regulation, given by:
$$
\begin{align}
\text{Speed regulation (SR)} & = \frac{\omega_{\text{NL}}-\omega_{\text{FL}}}{\omega_{\text{FL}}}\times 100\% \\[2ex]
 & =\frac{n_{\text{NL}}-n_{\text{FL}}}{n_{\text{FL}}}\times 100\%
\end{align}
$$
where NL stands for no-load and FL stands for full-load.

## Torque and Motor Speed Relations
How do torque and motor speed work together? The equation of motion for a rotating object is given by:
$$
\tau_{m}-\tau_{\text{L}}=J \frac{d\omega_{m}}{dt}
$$
where $\tau_{m}$ and $\tau_{L}$ are the developed and load torques, and $J$ and $\omega_{m}$ are the moment of inertia and angular speed of the rotating parts.

At steady-state, $\omega_{m}$ is constant and $\tau_{m}=\tau_{L}$. To increase the speed, $\tau_{m}$ should be increased with respect to $\tau_{L}$; to decrease the speed, $\tau_{m}$ should be decreased with respect to $\tau_{L}$.

In DC motors, $\tau_{m}$ is controlled to adjust the speed of the motor. In real-life situation, there are mechanical losses that work against the motion. In that case, $\tau_{m}$ should be large enough to overcome the counter torques exerted on the shaft due to mechanical losses, and supply enough torque to the load to rotate it at the desired speed and deliver the required mechanical power ($P_{L}= \omega_{m}\tau_{L}$) to the load. 
- If the load on the motor is increased (i.e. $\tau_{L}$ is increased), the motor will slow down. 
- If the load on the motor is decreased (i.e., $\tau_{L}$ is decreased), the motor will speed up.
- $\tau_{m}$ should be adjusted accordingly to restore the desired speed and avoid shaft underspeed or overspeed.