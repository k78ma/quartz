---
title: Diode Intro
tags:
  - mte220
date: 2023-10-24
---
A diode is like a one way valve:
- No flow until you push hard enough, then it flows freely
- Blocks reverse flow…until it breaks
- Like a check valve

![[Diode Intro.png|348]]

How do they work? Diodes are made through [[Semiconductor Doping]], which intentionally introduces impurities into a semiconductor.
#### Exponential Current Relationship
The current through a diode, $I_{D}$, can be written as:
$$
I_{D} = I_{S}\left( e^{\frac{V_{D}}{V_{T}}} -1 \right) \approx I_{S}e^{\frac{V_{D}}{V_{T}}}
$$
$I_{D}$ is a constant that depends on the the semiconductor doping, and tends to be a very small value.

The key part is $e^{\frac{V_{D}}{V_{T}}}$, where $V_{D}$ is the diode voltage and $V_{T}$ is the thermal voltage (average voltage of particles given a certain temperature, around $25\text{ mV}$ at room temperature). The takeaway here is that diodes are very temperature sensitive.

Effects of $V_{D}$ on $I_{D}$:
- What happens to $I_{D}$ when $V_{D}$ changes to some $V_{D} + \Delta V_{D}$? Big changes!
- What is required of $V_{D}$ to cause a "normal sized" $\Delta I_{D}$ ? Need a very small $\Delta V_{D}$

Due to the above sensitivity, we will assume $V_{D}$ is constant near an operating point.

Note on terminology:
- $V_{D}$ is the voltage across the diode
- $V_{F}$ is the forward voltage required to turn on the diode (see [[Diode Models]])