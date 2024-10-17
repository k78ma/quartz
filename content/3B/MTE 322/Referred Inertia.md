---
title: Referred Inertia
tags:
  - mte322
date: 2024-10-17
aliases:
  - referred inertia
---
When a motor is used with a gear system, the inertia of a load (denoted as $J_{\ell}$) is felt by the motor through a system of gears. Gears act to scale the effect of the load inertia as seen by the motor, essentially changing the "effective" inertia the motor experiences.

![[Referred Inertia.png|628]]

Above, the system consists of a motor with inertia $J_{m}$ driving a load with inertia $J_{\ell}$ through a gear mechanism. The gears have radii $r_{1}$ on the motor side and $r_{2}$ on the load side, and gear ratio $N= \frac{r_{2}}{r_{1}}$.

Torque $\tau_{m}$ is applied by the motor to the gear system. The torque on the load side is $\tau_{2}$, while the torque on the motor side is $\tau_{1}$. We can use Newton's law to relate the torque and angular velocity:
- $J_{m}\ddot{\theta}_{m}=\tau_{m}-\tau_{1}$ for the motor
- $J_{\ell}\ddot{\theta}_{\ell}=\tau_{2}$ for the load

We can then factor in the gear teeth. The force at the gear teeth, $F$, is the same for both sides of the gear. This force creates the torque $\tau$ on each side of the system. The torque on the motor side, $\tau_{1}$, and the torque on the load size, $\tau_{2}$, are related by the gear ratio:
$$
N\tau_{1}=\tau_{2}
$$
Similarly, for angular velocities and accelerations:
$$
\begin{align}
N\dot{\theta}_{\ell} & =\dot{\theta}_{m} \\
N\ddot{\theta}_{\ell} & =\ddot{\theta}_{m}
\end{align}
$$
which in turn gives
$$
\tau_{2}=J_{l}\ddot{\theta}_{\ell}=J_{\ell} \frac{\ddot{\theta}_{m}}{N}
$$

We can then re-write our Newton's Law expressions as:
$$
\begin{align}
J_{m} \ddot{\theta}_{m} & =\tau_{m}-\tau_{1} \\[2ex]
	 & =\tau_{m}-\frac{\tau_{2}}{N} \\[2ex] 
	 & =\tau_{m}-\frac{J_{\ell}\ddot{\theta}_{m}}{N^{2}}
\end{align}
$$
or
$$
\begin{align}
\tau_{m} & =J_{m}\ddot{\theta}_{m}+\frac{J_{\ell}\ddot{\theta}_{m}}{N^{2}} \\[2ex]
	 & =\left( J_{m}+\frac{J_{\ell}}{N^{2}} \right)\ddot{\theta}_{m}
\end{align}
$$
We can re-write this with an effective inertia term:
$$
J_{\text{eff}}=J_{m}+\frac{J_{\ell}}{N^{2}}
$$
## Example

![[MTE 322 motors ex 3.pdf]]
