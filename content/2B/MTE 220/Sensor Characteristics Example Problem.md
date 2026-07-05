---
title: Sensor Characteristics Example Problem
tags:
  - mte220
date: 2023-11-15
aliases:
---
![[Sensor Characteristics Example Problem.png]]

- The instrument span is:
$$
x_{max}-x_{min} = \frac{1.5-0 \, \, \, [\text{V}]}{20\, \, \, [\text{mV/mm}]} = 75 \text{ mm}
$$
- There are $2^{8}$ states, which correspond to $0, \dots, 255$. We want this to correspond to our input voltage range from $0$ to $3.3\text{ V}$. Thus, the resolution is:
$$
\frac{3.3\text{ V}}{2^{8}} = 12.89 \text{ mV per LSB} 
$$
- The minimum voltage (LSB) we can discern is $12.89 \text{ mV}$, so we want to find how many millimeters this corresponds to.
$$
\frac{12.89 \text{ mV}}{20 \text{ [mV/mm]}} = 644.5 \mu \text{m}
$$
- The resolution of $0.5 \text{ mm}$ is much worse than $644.5 \mu \text{m}$.