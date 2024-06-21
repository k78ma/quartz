---
title: Reactive Power
tags:
  - mte309
date: 2024-05-13
aliases:
  - reactive power
---
Reactive power, unlike [[Average Power|active power]], does not convert to useful work. However, inductors and capacitors in circuits means that there is a phase angle difference between voltage and current, making reactive power inevitable.
- Inductive loads receive reactive power
- Capacitative loads send reactive power
- Pure resistive loads receive [[Average Power|real power]]

In AC circuits, reactive power goes back and forth between the inductors and capacitors, occupying part of the capacity of the system which is meant for generating, transmitting, and distributing real power. This causes extra losses. *Reactive* power does not perform any real work but is essential for maintaining voltage levels in the power system to ensure the efficient operation of equipment.

Reactive power is defined as:
$$
Q=VI\sin(\theta_{v}-\theta_{i})
$$
It can also be written as:
$$
Q=\frac{V^{2}}{X}
$$
where $X$ is the reactance.

The unit for this is $\text{VAr}$, or Voltage Ampere reactive.

