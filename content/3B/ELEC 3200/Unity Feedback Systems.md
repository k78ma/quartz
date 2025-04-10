---
title: Unity Feedback Systems
tags:
  - elec3200
date: 2025-04-06
aliases:
  - unity feedback systems
---
In a unity feedback system, is a control system where the output is fed back directly to be compared with the input without any additional processing or modification — meaning the feedback transfer function is 1.

Given a plant $P(s)$ and controller $P(s)$, the **closed-loop transfer function** is
$$
T(s)=\frac{C(s)P(s)}{1+C(s)P(s)}
$$
The **closed-loop characteristic polynomial is** the denominator set to zero:
$$
1+C(s)P(s)=0
$$
In the case of a unity feedback system, we have $C(s)=1$.


In this structure, instead of taking the information of the reference and the measurement independently, the controller is driven by the difference between the reference and the measurement. Such a structure is simpler than the 2DOF structure since the controller is a SISO system and is actually a special case of the 2DOF structure by setting
$$
\mathbf{C}\begin{bmatrix}
r \\
-y
\end{bmatrix}=C(r-y)
$$

![[Unity Feedback Systems-20250406194620462.png|534]]

Consider the unity feedback system with 
$$
P(s)=\frac{10}{(s+1)(s+2)}
$$
Let $C(s)$ be a proportional-integral (PI) controller, i.e.,
$$
C(s)=K_{P}+\frac{K_{I}}{s}
$$
Find the ranges of $K_{P}$ and $K_{I}$ so that the closed-loop system is stable.

Since $C(s)$ is proper and $P(s)$ is strictly proper, we only need to check the stability of the closed-loop characteristic polynomial:
$$
d(s)=s^{3}+3s^{2}+(2+10K_{P})s+10K_{I}
$$
Construct the Routh table:

![[Unity Feedback Systems-20250406195033462.png|448]]

By the Routh criterion, we need
$$
\frac{3(2+10K_{P})-10K_{I}}{3}>0, \quad  10K_{I}>0 \quad  \Longleftrightarrow \quad 3+15K_{P}-5K_{I}>0, K_{I}>0
$$
which gives us a stability region:

![[Unity Feedback Systems-20250406195234381.png|368]]


## Unity vs. General Feedback
In general, a closed-loop transfer function has the form
$$
T(s)=\frac{G(s)}{1+G(s)H(s)}
$$
where $G(s)$ is the forward path transfer function and $H(s)$ is the feedback path. We also called $G(s)$ the open-loop transfer function.

In the unity feedback special case, we have $H(s)=1$, leading to
$$
T(s)=\frac{G(s)}{1+G(s)}
$$
In the above, we broke $G(s)$ into two parts,
$$
T(s)=\frac{C(s)P(s)}{1+C(s)P(s)}
$$
where $C(s)$ is the controller and $G(s)$ is the plant.

## Relevant Examples

![[Unity Feedback Systems-20250406223940862.png|539]]



