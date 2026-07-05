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
with a stable pole at $s=-\frac{1}{\tau}$. We want a [[DC Gain]] of $1$.

We have:
$$
\Omega_{m}=\frac{A}{\tau s+1}V_{a}=\frac{K_{\text{ol}}A}{\tau s+1}\Omega_{\text{ref}}
$$
Using a constant gain of $K_{\text{ol}}=1 / A$ gives us
$$
\omega_{m}(\infty)=\frac{1}{A}\cdot A\cdot \omega_{\text{ref}}=\omega_{\text{ref}}
$$
What happens if we have nonzero disturbance $T_{e}$?

$$
\Omega_{m} =\underbrace{ \frac{A}{\tau s+1} \frac{1}{A} }_{ \text{DC gain = 1} } \Omega_{\text{ref}}+\underbrace{ \frac{B}{\tau s+1} }_{ \text{DC gain }= B }T_{e} \\[2ex]
$$
which in turn gives
$$
\omega_{m}(\infty) =\omega_{\text{ref}}+B \tau_{e}
$$
**Conclusion:** In the absence of disturbances, reference tracking is good, but disturbance rejection is poor. Steady-state error is determined by $B$, which we have no control over. In fact, we cannot change this through any choice of controller $K_{\text{ol}}$, no matter how clever.

![[Motor Control Case Study-20250424171939413.png|528]]

## Feedback Control
Now consider disturbance rejection with the feedback system below:

![[Motor Control Case Study-20250424172501352.png|571]]

We have
$$
V_{a}=K_{\text{cl}}(\Omega_{\text{ref}}-\Omega_{m})
$$
and
$$
\Omega_{m}=\frac{A}{\tau s+1}K_{\text{cl}}(\Omega_{\text{ref}}-\Omega_{m})+\frac{B}{\tau s+1}T_{e}
$$
Solving for $\Omega_{m}$:
$$
\begin{align}
(\tau s+1)\Omega_{m} & =AK_{\text{cl}}(\Omega_{\text{ref}}-\Omega_{m})+BT_{e} \\[2ex]
(\tau s+1+AK_{\text{cl}})\Omega_{m} & =AK_{\text{cl}}\Omega_{\text{ref}}+BT_{e} \\[2ex]
\Omega_{m} & =\frac{AK_{\text{cl}}}{\tau s+1+AK_{\text{cl}}}\Omega_{\text{ref}}+\frac{B}{\tau s+1+AK_{\text{cl}}}T_{e}
\end{align}
$$

The first term has a DC gain of $\frac{AK_{\text{cl}}}{1+AK_{\text{cl}}}$, and the second term has a DC gain of $\frac{B}{1+AK_{\text{cl}}}$. (Recall that DC gain is computed by taking the limit as $s$ approaches zero).

Assuming that the reference $\omega_{\text{ref}}$ and disturbance $\tau_{e}$ are constant, applying the [[Final Value Theorem]] gives
$$
\omega_{m}(\infty)=\frac{AK_{\text{cl}}}{1+AK_{\text{cl}}}\omega_{\text{ref}}+\frac{B}{1+AK_{\text{cl}}}\tau_{e}
$$
**Conclusions:**
- $\frac{AK_{\text{cl}}}{1+AK_{\text{cl}}} \neq 1$, but can be brought arbitrarily close to $1$ as $K_{\text{cl}}\to \infty$. Thus, steady-state tracking is good with high gain, but never quite as good as in the open-loop case.
- $\frac{B}{1+AK_{\text{cl}}}$ is small (arbitrarily close to $0$) for large $K_{\text{cl}}$. Thus, we have much better disturbance rejection than with open-loop control.