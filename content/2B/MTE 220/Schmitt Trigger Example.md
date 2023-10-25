---
title: Schmitt Trigger Example
tags:
  - mte220
date: 2023-10-24
---
### Problem
Design the Schmitt trigger circuit (a) to achieve the transition shown in (b). The current through any resistor should not exceed 1mA

![[Schmitt Trigger Example-1.png|248]]

### Describing the system
Looking at the hysteresis voltages, we have:
$$
\begin{align}
V_{ref_{1}} = 2.1 \\
V_{ref_{0}} = 1.2
\end{align}
$$

When $V_{out} =0$, we have this equivalent circuit:
![[Schmitt Trigger Example.png|214]]

This is described by:
$$
V_{ref_{0}} = 3.3 \frac{R_{2} \parallel R_{3}}{R_{1}+ R_{2} \parallel R_{3}}
$$
When $V_{out} = \text{``1"} = 3.3V$, we have:
![[Schmitt Trigger Example-2.png|222]]

This is governed by:
$$
V_{ref_{1}} = 3.3 \frac{R_{2}}{R_{1} \parallel R_{3} + R_{2}} = 2.1
$$
### Solving the system
For now, we have 2 equations and three unknowns. We find a third clue from "the current through any resistor should not exceed $1 \text{ mA}$". Solving just in terms of ratios:
$$
R_{1} = R_{2} = 0.75R_{3}
$$
A quick choice would be: $R_{1} = R_{2} = 7.5\text{ k} \Omega$ and $R_{3} = 10 \text{ k} \Omega$.
A rigorous solution would require us to ensure that in the top case, we have: 
$$
\begin{align}
R_{1} + R_{2} \parallel R_{3} \leq 3.3 \text{ k} \Omega
\end{align}
$$
And that in the bottom case we have:
$$
R_{1} \parallel R_{3} + R_{2} \geq 3.3 \text{ k} \Omega
$$
This gives $R_{3min} \leq 2.8 \text{ k} \Omega$.