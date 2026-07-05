---
title: Voltage and Current Sources
tags:
  - mte220
date: 2023-09-19
---
## Voltage Sources
A voltage source adds energy per charge (voltage ($V$)) to the charge flowing through it.
- Unit: $[V] = \left[ \frac{J}{C} \right]$
Voltage is defined as energy per unit charge added as current flows through it.
- Can be thought of as “force” pushing current.

![[Pasted image 20230920104735.png|150]]

Voltages can be added in series; they cannot be placed in parallel unless they are the same voltage.
![[Pasted image 20230920104903.png|300]]

## Current Sources
A current source moves a constant amount of charge per second at a constant rate, called current ($I$).
- Unit: $[A] = \left[ \frac{C}{s} \right]$

![[Pasted image 20230920105046.png|170]]

Current sources can be added in parallel, such that both sources add current flow to the conductor; they cannot be placed in series as they are fighting different currents through the same wire.

## Dependent Sources
These perform the same function as the independent sources above, but their value is some function of some other state in the system.

![[Pasted image 20230920105235.png|300]]

They have units of $\left[ \frac{\text{output type}}{\text{input type}} \right]$.
- Output voltage depends on some other voltage: $\left[ \frac{V}{V} \right]$
- Output voltage depends on some current: $\left[ \frac{V}{A} \right]$
- Output current depends on some voltage: $\left[ \frac{A}{V} \right]$
- Output current depends on some other current: $\left[ \frac{A}{A} \right]$
