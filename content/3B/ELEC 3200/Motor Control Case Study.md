---
title: Motor Control Case Study
tags:
  - elec3200
date: 2025-04-24
aliases:
  - motor control case study
---
Consider a DC motor system as described below.

Inputs:
- $v_{a}$ – input voltage
- $\tau_{e}$ – load/disturbance torque

Outputs:
- $\omega_{m}$ – angular speed of the motor

Transfer function:
$$
\Omega_{m}=\frac{A}{\tau s+1}V_{a}+\frac{B}{\tau s+1}T_{e}
$$
where $\tau$ is a time constant and $A,B$ are system gains.

![[Motor Control Case Study-20250424165156572.png|413]]

Our objective is to have $\Omega_{m}$ approach and track a given reference $\Omega_{\text{ref}}$ in spite of disturbance $T_{e}$.

## Open-loop Control
Let's first attempt to use open-loop control to achieve **disturbance rejection**; we want to maintain $\omega_{m}=\omega_{\text{ref}}$ in steady state in the presence of *constant* disturbance.

![[Motor Control Case Study-20250424165323398.png|489]]

The open-loop controller receives no information about the disturbance $\tau_{e}$ (the only input is $\omega_{\text{ref}}$, no feedback signal from anywhere else). So, let's attempt to design for no disturbance (i.e. $\tau_{e}=0$), then see how the system works in general.

Assuming zero disturbance, we have the following system diagram:

![[Motor Control Case Study-20250424165610407.png|618]]

The transfer function is:
$$
\frac{A}{\tau s+1}
$$
with a stable pole at $s=-\frac{1}{\tau}$. We 