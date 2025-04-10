---
title: Stability Analysis Examples
tags:
  - elec3200
date: 2025-04-06
aliases:
  - stability analysis examples
---
**Example:** Determine the stability of $G(s)=\frac{1}{s+\gamma}$. We let the input $u(t)$ be the unit step function $\sigma(t)$ to analyze the system.

Let $u(t)=\sigma(t)$. Then, we have have:
$$
Y(s)=G(s)U(s)=\frac{1}{s+\gamma}\cdot \frac{1}{s}=\frac{1}{s(s+\gamma)}
$$
For $\gamma<0$, we have:
$$
\begin{align}
y(t) & =\mathcal{L}^{-1}\left[ \frac{1}{s(s+\gamma)} \right] \\
     & = \frac{1}{\gamma}(1-e^{-\gamma t})u(t)
\end{align}
$$
When $t\to \infty$, $y(t)\to \infty$, so the system is unstable.

For $\gamma=0$. we have
$$
y(t)=\mathcal{L}^{-1}\left[ \frac{1}{s^{2}} \right]=t\sigma(t)
$$
When $t\to \infty, y(t)\to \infty$, so the system is unstable.

For $\gamma>0$, the impulse response of $G(s)$ is $g(t)=e^{-\gamma t}\sigma(t)$. Then,
$$
| y(t) |=\left| \int_{0}^{t} g(\tau)u(t-\tau) \, d\tau  \right|\leq \int_{0}^{t} | g(\tau) || u(t-\tau) | \, d\tau 
$$
If $| u(t)\leq M |$ for all $t \in [0, \infty)$, then
$$
| y(t) |\leq M \int_{0}^{\infty} | g(\tau) | \, d\tau=M \int_{0}^{\infty} e^{-\gamma \tau} \, d\tau = \frac{M}{\gamma}  
$$
As long as $u(t)$ is bounded by $M$, then $y(t)$ is bounded by $\frac{M}{\gamma}$. This is stable.
