---
title: Stepper Motor Driving
tags:
  - mte322
date: 2024-11-29
aliases:
  - stepper motor driving
---
Stepper motor is operated by pulses:
- Typically runs by two signals: step pulses and direction
- There is a small transient motion at each step

![[Stepper Motor Driving.png]]

Stepper motor is operated in discrete mode:
- The load torque results in some position error

## Stepper Motor Torque-Speed Curve
Totally different from servo motors (DC, BLDC):
- Torque drastically decrease as speed increases
- Typical speed ranges from 100 to 1000 rpm
- Difficult to establish distinct rated torque or speed

![[Stepper Motor Driving-1.png]]

## Example: Stepper Motor Selection

![[Stepper Motor Driving-2.png|604]]

From the velocity profile:
$$
\begin{align}
d & =\frac{1}{2}v_{\text{max}}t \\[2ex]
v_{\text{max}} & =\frac{2d}{t}=\frac{2\times 0.1}{0.2}=1 \text{ m/s}
\end{align}
$$
Max acceleration/deceleration:
$$
\alpha=\frac{v_{\text{max}}}{t / 2}=\frac{1}{0.2 / 2}=10 \text{ m/s}^{2}
$$
Angular acceleration/deceleration:
$$
\alpha=\frac{a}{r}=\frac{10}{0.05}=200 \text{ rad/s} = 191 \text{ rpm}
$$
Require motor torque:
$$
T_{m}=J\alpha=(J_{\ell}+J_{m})\alpha
$$
Note that $J_{m}$ is very small compared to $J_{\ell}$, so it can be ignored. Thus, we have:
$$
T_{m}=J_{\ell}\alpha=0.01\times 200=2  \text{ Nm} = 283 \text{ oz-in}
$$

From the torque-speed curve (pull-out torque):

| Model   | Torque @ $\omega_{\text{max}}$ |
| ------- | ------------------------------ |
| 140 SM  | 142                            |
| 310 SM  | 370                            |
| 1010 SM | 1050                           |

Therefore, the 310 SM will be suitable.

![[Stepper Motor Driving-3.png]]