---
title: Zener Diode
tags:
  - mte220
date: 2023-10-25
---
A Zener diode relies on the reverse breakdown voltage. $V_{F}$ is generally poorly controlled, while $V_{R}$ can be well-controlled.

Zener diodes operate right on the edge of breakdown to provide a reasonably precise voltage.
- Given a specific $I_{Z}$, a Zener diode will drop $V_{Z}$ across it
- Choose a precision resistor, $R$, to drop the rest of the voltage
This has much better voltage regulation than a resistor voltage divider. Use this when we need good voltage regulation but not a complete voltage supply!

Analyze just like a regular diode, using $V_{Z}$ instead of $V_{F}$. 

![[Zener Diode.png|220]]

#### Example
**Problem:** Say that $V_{Z} = 3\text{ V}$, and the datasheet says to use $I_{Z} = 1\text{ mA}$. Choose $R$ to drop excess voltage. Assume $V_{DD}$ is a $5\text{ V}$ supply.

The Zener diode is going to lock in at 3 volts, so the voltage across our resistor is the leftover 2 volts. Knowing that $I_{Z} = 1\text{ mA}$, we have:
$$
R = \frac{V}{I} = 2 \text{ k} \Omega
$$
Extra: we can find the static ("all the time") power of the diode:
$$
	V_{Z} \cdot I_{Z} = 3\text{ mW}
$$
