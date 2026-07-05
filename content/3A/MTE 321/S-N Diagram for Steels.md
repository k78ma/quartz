---
title: S-N Diagram for Steels
tags:
  - mte321
date: 2024-06-17
aliases:
  - s-n diagram for steels
---
We commonly used an idealized [[Stress-Life Method|S-N diagram]] for steels, in which the median failure curve is used.

![[Stress-Life Method-4.png]]

Key points:
- $S_{ut}$, which is the ultimate yield strength (one cycle)
- In the low cycle region ($N<1000$), the line has a low slope and runs between $S_{ut}$ to some $fS_{ut}$, where $0.8\leq f\leq 0.9$.
- Between $10^{3}$ and $10^{6}$ cycles, a line of steeper slope represents the failure curve, which is called *Basquin's Equation*, $S_{f}=aN^{b}$.
- After $10^{6}$ cycles, the endurance limit is reached, and the failure curve becomes horizontal.


Thus, to create an idealized S-N diagram, we generally need to determine $fS_{ut}$ at $10^{3}$ cycles and $S_{e}$ at $10^{6}$ cycles.

## Estimating the Endurance Limit
For steels, generally we have:
$$
S_{e}'=\begin{cases}
0.5S_{ut} & S_{ut}\leq 200 \text{ kpsi } (1400 \text{Mpa}) \\
100 \text{ kpsi} & S_{ut}>200 \text{ kpsi} \\
700 \text{ MPa} & S_{ut}>1400 \text{ MPa}
\end{cases}
$$
where $S_{ut}$ is the minimum tensile strength.

## Estimating Fatigue Strength
We want to estimate the fatigue strength $fS_{ut}$ at $10^{3}$ cycles. This can be done with the equations:
$$
\begin{align}
f & =1.06-2.8(10^{-3})S_{ut}+6.9(10^{-6})S_{ut}^{2} \quad \text{for} \quad 70 < S_{ut}<200 \text{ kpsi}\\
f & =1.06-4.1(10^{-4})S_{ut}+1.5(10^{-7})S_{ut}^{2} \quad \text{for} \quad 500 < S_{ut}<1400 \text{ MPa}
\end{align}
$$
In general:
- If $S_{ut}$ is lower than $70 \text{ kpsi}$ or $500 \text{ MPa}$, use $f=0.9$
- If $S_{ut}$ is greater than $200 \text{ kpsi}$ or $1400 \text{ MPa}$, use $f=0.77$

![[Stress-Life Method-5.png]]

## Low-Cycle S-N Line
The low cycle line between $1$ and $10^{3}$ cycles is given by Basquin's equation:
$$
\begin{align}
S_{f} & =aN^{b}  \\
\log S_{f} & =b\log N+\log a
\end{align}
$$
where $a = S_{ut}$ and $b=-\frac{1}{3}\log f$.

![[Stress-Life Method-6.png]]

## High-Cycle S-N Line
The low cycle line between $10^{3}$ and $10^{6}$ cycles is given by Basquin's equation:
$$
\begin{align}
S_{f} & =aN^{b}  \\
\log S_{f} & =b\log N+\log a
\end{align}
$$
where:
$$
a=\frac{(fS_{ut})^{2}}{S_{e}},\quad b=-\frac{1}{3}\log\left( \frac{fS_{ut}}{S_{e}} \right)
$$
We can use this to solve for $N$:
$$
N=\left( \frac{\sigma_{ar}}{a} \right)^{1/b}
$$
where $\sigma_{ar}$ is the alternating stress or stress amplitude.