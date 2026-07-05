---
title: Induction Motor Torque-Speed Characteristics
tags:
  - mte322
date: 2024-10-19
aliases:
  - induction motor torque-speed characteristics
---
![[Induction Motor Torque-Speed Characteristics.png]]

- **Locked-rotor torque** (starting torque): This is the torque generated at zero speed when the rotor is stationary (locked). It is critical for starting the motor, especially in machines with heavy initial loads.
- **Pull-up torque**: The minimum torque produced by the motor during the acceleration phase, before it reaches synchronous speed.
- **Break-down torque**: Maximum torque available during acceleration period before the motor reaches its full-load (nominal) torque
- **Full-load torque**: The torque required to produce the rated power at full-load speed.
- **Service factor (S.F.)** The percentage multiplier of rated power (or load) that the motor can operate for a short time without overheating.

## Examples

> [!question] Induction Motor Spec Example Question
> For the motor shown below:
> - What would the pole number likely be?
> - What would be the approximate rated slip value?
> - What would be the approximate rated torque?
>   
>  ![[Induction Motor Torque-Speed Characteristics-1.png]]


We can get the pole number from the synchronous speed of 1800.
$$
\frac{120f}{P}=1800, \quad f=60 \quad \implies \quad P=4
$$
We can get the slip value by noting that $\omega=\omega_{r}=1720$:
$$
\omega_{s}=1800 \implies s=\frac{\omega_{s}-\omega}{\omega_{s}}=\frac{1800-1720}{1800}=0.044 = 4.4\%
$$
And for torque:
$$
T_{r}=\frac{P_{r}}{\omega_{r}}=\frac{0.5 \text{ A}\times 550\text{ V}}{1720\times \frac{2\pi}{60}} = 1.53 \text{ lbf} \cdot \text{ft}
$$


> [!question] Induction Motor Example Question
> Induction motor draws 25 A for a slip of 1%, and the corresponding torque is 2 Nm. 
> - Estimate the torque when the load is increased so that the motor slip is 3%. 
> - If the synchronous speed is 3600 rpm, how much does the speed decrease by changing the slip from 1% to 3%?

We can use the fact that torque-speed characteristics are approximately linear around rated speed and synchronous speed.
$$
T_{3\%}=3\times T_{1\%}=3\times 2=6\text{ Nm}
$$
The speed will be reduced by the corresponding slip change (i.e. 2%).
$$
\begin{align}
\Delta \omega & =\omega-\omega' \\
 & =(1-s)\omega_{s} -(1-s')\omega_{s}\\
	 & =(s'-s)\omega_{s} \\
	 & =(0.03-0.01)\times 3600 \\
	 & =0.02\times 3600 \\
	 & =72 \text{ rpm}
\end{align}
$$