---
title: Pathological Sampling Time
tags:
  - mte484
date: 2025-11-10
aliases: pathological sampling time
---
For a plant $P(s)$, a sampling time $T>0$ is **pathological** if the number of poles of $G[z]$ is less than the number of poles of $P(s)$.

Example:
$$
P(s)= \frac{1}{s-1+j} + \frac{1}{s-1-j} \quad  \text{(2 poles)}
$$
Then:
$$
\begin{align}
G[z] = \frac{1}{j-1} \frac{1-e^{(1-j)T}}{z-e^{(1-j)T}} + \frac{1}{-j-1}\frac{1-e^{(1+j)T}}{z-e^{(1+j)T}}  \\
\end{align}
$$
where we are using $-\frac{1}{\lambda} \frac{1-e^{\lambda T}}{z-e^{\lambda T}}$.

If we choose $T=2\pi$ we will have
$$
\begin{align}
G[z]  & = \frac{1}{j-1} \frac{1-e^{2\pi}}{z-e^{2\pi}} + \frac{1}{-j-1} \frac{1-e^{2\pi}}{z-e^{2\pi}}  \\[2ex]
 & = \frac{2(e^{2\pi}-1)}{z-e^{2\pi}} \quad  \text{(1 pole!)}
\end{align}
$$

Note: for almost all $T>0$, $T$ is non-pathological.


> [!theorem] 
> For the sampled-data system, is $T>0$ is non-pathological, then the SD system is closed-loop stable if and only if its associated discrete-time system is itself closed-loop stable.
