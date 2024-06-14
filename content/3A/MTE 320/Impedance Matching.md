---
title: Impedance Matching
tags:
  - mte320
date: 2024-06-14
aliases:
  - impedance matching
---
Below we have a schematic diagram of an electrical circuit composed of an AC voltage source, with an internal resistance, and a resistive load connected across the source terminals.

![[Impedance Matching.png|632]]

To maximize the power transferred from the source to the load, the condition $R_{L}=R_{s}$ must be satisfied. Since the load resistance $R_{L}$ is out of our control, we need to place a special device between the source and the load such that the resistance of the load, as seen from the source side, becomes equal to the source resistance. This is called *impedance matching*.

![[Impedance Matching-1.png|640]]

## Transformers for Impedance Matching
[[Electrical Transformer|Transformers]] can match the resistance of a load with that of the source:

![[Impedance Matching-2.png]]

The idea is to design the transformer such that the resistance of the load, as seen from the primary side of the transformer, is equal to the source's internal resistance. In other words, we want $R_{in}=R_{s}$.

From the figure above, we can write:
$$
\begin{cases}
\frac{V_{p}}{V_{s}}=a \\[2ex]
\frac{I_{p}}{I_{s}} = \frac{1}{a}
\end{cases} \implies
\begin{cases}
V_{p}=aV_{s} \\[2ex]
I_{p}= \frac{1}{a}I_{s}
\end{cases}\implies
\frac{V_{p}}{I_{p}}=a^{2} \frac{V_{s}}{I_{s}}
$$
Knowing that $\frac{V_{s}}{I_{s}}=R_{L}$ and $\frac{V_{p}}{I_{p}}=R_{in}$, we can choose $a$ such that:
$$
R_{in}=a^{2}RL=R_{s}
$$
or:
$$
a=\sqrt{ \frac{R_{s}}{R_{L}} }
$$