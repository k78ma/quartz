---
title: Tri-State Driver
tags:
  - mte325
date: 2024-06-08
aliases:
  - tri-state driver
---
If permanently solving the conflict problem by eliminating transistors from the driver design is not desirable, we can temporarily solve it by selectively enabling only one driver at a time. This is how a tri-state driver works. The schematic symbol is a buffer with an enable added.

![[Tri-State Driver.png]]

Tri-state drivers are a variation on the push-pull drivers, where the transistor inputs are now fed through AND gates, which have the original input signals as well as an enable signal as their inputs.
- Both transistors are off if the enable is low, making the output high-Z regardless of the input. 
- The input is passed through if the enable signal is high.

One caveat is that enable signals must be mutually exclusive. If we have a line fed by two tri-state drivers, both transistors on one of the drivers must be off, and it is impossible for one driver to turn on both of its own transistors. Thus, only one transistor in this circuit can turn on at a time to eliminate the conflict problem.

![[Tri-State Driver-1.png]]