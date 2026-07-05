---
title: Rise Time
tags:
  - mte220
date: 2023-10-19
aliases:
  - rise time
  - fall time
---
Rise time and fall time measure how fast a signal transitions from one value to another.

The rise/fall time is defined as the time it needs to go from 10% to 90% of the transition (or vice versa).

Since every curve behaves the same way, we always have $V(t)$ at 90% when $\tau=0.105$, and $V(t)$ at 10% when $\tau = 2.303$ (or vice versa in the discharging case). So, we always have:
$$
t_{\text{rise}} = t_{\text{fall}} = 2.2\tau
$$
Using this information, we can determine or design the maximum frequency of digital systems.

![[Rise Time & Fall Time-1.png]]

For other percentages, we can find the time required would by:

1. Finding the percentage in terms of $-\frac{t}{\tau}$ by solving:
$$
\begin{align}
e^{-\frac{t_{i}}{\tau}} = 0.8 \\
e^{-\frac{t_{f}}{\tau}} = 0.2
\end{align}
$$
2. Once you've found $-\frac{t}{\tau}$, you can find $t$ since you already know $\tau$.