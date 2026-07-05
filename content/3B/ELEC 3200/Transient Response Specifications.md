---
title: Transient Response Specifications
tags:
  - elec3200
date: 2025-04-30
aliases:
  - transient response specifications
---
## 1st-order Response
Consider a 1st-order step response with the following transfer function:
$$
H(s)=\frac{a}{s+a}
$$
with $a>0$ (stable pole). This transfer function has a DC gain (steady-state value) of 1.

We can consider its step response in the time domain:
$$
\begin{align}
y & =\mathcal{L}^{-1}\left( \frac{a}{s+a}\cdot \frac{1}{s} \right) \\[2ex]
 & =\mathcal{L}^{-1}\left( \frac{1}{s}-\frac{1}{s+a} \right) \\[2ex] 
     & =1(t)-e^{-at}
\end{align}
$$
![[Transient Response Specifications-20250430141945961.png]]

**Rise time** $t_{r}$ is defined as the time it takes to get from 10% of the steady-state value to 90%.

In this example, it's easy to calculate compute $t_{r}$ analytically:
$$
\begin{align}
1-e^{-at_{0.1}}=0.1  & \quad \longrightarrow \quad e^{-at_{0.1}}=0.9\quad \longrightarrow \quad t_{0.1}=- \frac{\ln 0.9}{a} \\[2ex]
1-e^{-at_{0.9}}=0.9  & \quad \longrightarrow \quad e^{-at_{0.9}}=0.1\quad \longrightarrow \quad t_{0.9}=- \frac{\ln 0.1}{a} \\[2ex] 
t_{r} & = t_{0.9}-t_{0.1}= \frac{2.2}{a}
\end{align}
$$
## 2nd-order Response
Consider a second-order transfer function given by
$$
H(s)=\frac{\omega_{n}^{2}}{s^{2}+2\zeta \omega_{n}s+\omega_{n}^{2}}=\frac{\omega_{n}^{2}}{(s+\sigma)^{2}+\omega_{d}^{2}}
$$
where $\sigma=\zeta \omega_{n}$ and $\omega_{d}=\omega_{n}\sqrt{ 1-\zeta^{2} }$.

The step response to this is:
$$
y(t)=1-e^{-\sigma t}\left( \cos(\omega_{d}t)+\frac{\sigma}{\omega_{d}}\sin(\omega_{d}t) \right)
$$

![[Transient Response Specifications-20250430143000701.png|534]]


Specs:
- **Rise time** $t_{r}$ – time to get from $0.1y(\infty)$ to $0.9y(\infty)$
$$
t_{r}\approx \frac{1.8}{\omega_{n}}
$$
- **Overshoot** $M_{p}$ – difference between peak magnitude and steady-state value
$$
M_{p}= y(t_{p})-1= \exp\left( - \frac{\pi \zeta}{\sqrt{ 1-\zeta^{2} }} \right)
$$
- **Peak time** $t_{p}$ – the time at which the response $y(t)$ reaches its maximum peak value after the initial rise
$$
t_{p}=\frac{\pi}{\omega_{d}}
$$
- **Settling time** $t_{s}$ – first time for transients to decay to within a specified small percentage of $y(\infty)$ and stay in that range – typically we use 5%.
$$
t_{s}\approx \frac{3}{\sigma}
$$

We typically want all of these quantities to be small, but there can be trade-offs among specs; for example, decreasing rise time may result in an increase in $M_{p}$.

### Frequency Domain
We want to visualize time-domain specs in terms of admissible pole locations for the 2nd-order system.

**Rise time:** Suppose we want $t_{r}\leq c$ where $c$ is some desired given value, so that
$$
t_{r}\approx \frac{1.8}{\omega_{n}}\leq c \quad \Longrightarrow \quad \omega_{n}\geq \frac{1.8}{c}
$$
Geometrically, we want the poles to lie in the shaded region:

![[Transient Response Specifications-20250430144046375.png|294]]

(Recall that $\omega_{n}$ is the magnitude of the poles).

**Overshoot**: Suppose we want $M_{p}\leq c$, so that
$$
M_{p}=\exp\left( -\frac{\pi \zeta}{\sqrt{ 1-\zeta^{2} }} \right)\leq c
$$
To do this, we need a large damping ratio. Geometrically, we want the poles to lie in the shaded region:

![[Transient Response Specifications-20250430144240394.png|286]]

$$
\begin{align}
\frac{\zeta}{\sqrt{ 1-\zeta^{2} }} & =\frac{\omega_{n}\zeta}{\omega_{n}\sqrt{ 1-\zeta^{2} }} \\[2ex]
     & = \frac{\sigma}{\omega_{d}} \\[2ex]
     & =\cot \phi
\end{align}
$$
**Settling time:** Suppose we want $t_{s}\leq c$, so that
$$
t_{s} \approx \frac{3}{\sigma}\leq c \quad \Longrightarrow \quad \sigma \geq \frac{3}{c}
$$
This means we want the poles to be sufficiently fast (large enough magnitude of real part):

![[Transient Response Specifications-20250430144523666.png|315]]

- Intuition: poles far to the left means transients decay faster, leading to lower settling time

**Combination:**
If we have specs for any combination of $t_{r}, M_{p}, t_{s}$, we can relate them to allowed pole locations

![[Transient Response Specifications-20250430144713519.png|401]]

- This is not very rigorous and only valid for our prototype 2nd-order system with 2 poles and no zeros!