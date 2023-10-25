---
title: LED
tags:
  - mte220
date: 2023-10-25
aliases:
  - LEDs
---
Light Emitting Diode.

These work in principle by adding an undoped "Intrinsic" layer between the P and N layers (which are doped). Holes from P and electrons from N recombine in the middle I layer and produces photons.

![[LED.png|281]]

The brightness (number of photons coming out) is set by the forward current, $I_{F}$. 

$V_{F}$ in LEDs is poorly controlled and dependent on LED color, so usually we ensure that $V_{DD} > V_{F}$ by a few volts.

Closed-loop feedback can be used provide a precise current independent of $V_{F}$.