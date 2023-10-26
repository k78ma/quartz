---
title: Signal Clamp (Limiter)
tags:
  - mte220
date: 2023-10-25
---
This forces a signal to stay in a certain range; voltages in a circuit greater than $V_{DD}$ or smaller than $V_{SS}$ can damage some components. Diodes can limit such signals – called "clamping" or "protection" diodes.

![[Signal Clamp (Limiter).png|328]]

The clamp restricts $V_{out}$ to be within $V_{SS} - V_{F} \leq V_{out} \leq V_{DD} + V_{F}$
#### Example
Let's say we have $V_{DD} = 5\text{ V}$ and $V_{SS}$ is ground. If we have a $V_{in}$ of $6$ volts. The top diode would be forward biased and we pay the penalty of $0.7\text{ V}$, so that $V_{out}$ is limited to $5.7\text{ V}$.  

![[Signal Clamp (Limiter)-1.png]]

Let's say instead that $V_{in}$ drops below $-0.7 \text{ V}$, the bottom diode would turn on, and we would pay the $0.7\text{ V}$ bias penalty, so now $V_{out}$ is stuck at $-0.7\text{ V}$.

![[Signal Clamp (Limiter)-2.png]]

