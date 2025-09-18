---
title: Proportional Feedback
tags:
  - elec3200
date: 2025-04-27
aliases:
  - proportional feedback
---
In feedback control systems, proportional feedback is a simple method to correct the error between a reference input and system output.

![[Proportional Feedback-20250427212223368.png|547]]

- $R$ is the reference input
- $E$ is the error, calculated as $E=R-Y$
- $K_{P}$ is the proportional gain
- $U$ is the control input to the plant, given by $U=K_{P}E$
- The plant (system to be controlled) has a transfer function $\frac{1}{s^{2}-1}$
- $Y$ is the system output.

We want to find a value of $K_{P}$ is that stabilizes the closed-loop system. The closed-loop transfer function $\frac{Y}{R}$ is defined as:
$$
\frac{Y}{R}=\frac{K_{P}\cdot \frac{1}{s^{2}-1}}{1+K_{P}\cdot \frac{1}{s^{2}-1}}=\frac{K_{P}}{s^{2}-1+K_{P}}
$$
To check the system's stability, we can examine the characteristic polynomial in the denominator:
$$
s^{2}+(K_{P}-1)=0
$$
Note that we have a coefficient of zero for the $s$ term. For a system to be stable, a necessary condition (but not sufficient) is that all power of $s$ must have nonzero positive coefficients. Hence, the system cannot be stabilized by adjusting $K_{P}$; the system is not stable for any value of $K_{P}$.


black and blue are a pair
red and green are a pair