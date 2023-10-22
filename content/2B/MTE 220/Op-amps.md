---
title: Op-amps
tags:
  - mte220
date: 2023-10-09
---
An operational amplifier is a kind of difference amplifier. 

- Output voltage, $V_{out}$, is the input voltage, $V_{in}$, amplified by a gain, $A_{0}$, called the open-loop gain.
- Input voltage, $V_{in}$, is the difference between the non-inverting and inverting terminals, $V_{+}$ and $V_{-}$, respectively.

![[Op-amps.png|203]]

The output voltage is clipped by the supply voltages (also called voltage rails). For example, if $A_{0} = 1 \; [V / \mu V]$ and $V_{in}= 1V$, $V_{out}$ would not go all the way to $1,000,000 V$, and instead only max out at $V_{DD}$. Typically, $V_{SS}$ is ground but can also be $V_{SS} = -V_{DD}$.