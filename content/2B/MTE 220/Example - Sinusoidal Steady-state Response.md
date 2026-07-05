---
title: Example - Sinusoidal Steady-state Response
tags:
  - mte220
date: 2023-10-21
---
![[Example - Sinusoidal Steady-state Response.png|354]]

Since this is DC, we can pretend that the capacitor is just a resistor:

![[Example - Sinusoidal Steady-state Response-1.png|349]]

We call the resistor $Z_{C}$ since we know it's some impedance $Z_{C}$. With a resistor, the circuit becomes a voltage divider such that:
$$
V_{out} = V_{in} \cdot \frac{R}{R + Z_{C}}
$$
We also know that the value of our resistor is:
$$
Z_{C} = \frac{1}{j\omega C}
$$
Thus, we have:
$$
\frac{V_{out}}{V_{in}} = \frac{R}{R+\frac{1}{j\omega C}} = \frac{j\omega RC}{j\omega RC + 1}
$$

Qualitatively, we have an open circuit at DC (remember how the capacitor symbol looks open), which means that $V_{out}$ is only connected to the resistor to ground, such that $V_{out} = 0$.  If we have $f \to \infty$, we would instead have $V_{out} = V_{in}$. 

This means we've basically made a [[Highpass Filter]] – high frequencies make it through but low frequencies are blocked.

The magnitude of $V_{out} / V_{in}$ is:
$$
\left| \frac{V_{out}}{V_{in}} \right| = \frac{| j\omega RC |}{| j\omega RC + 1 |}
$$
The phase is:
$$
\angle \left( \frac{V_{out}}{V_{in}} \right) = \angle(j\omega RC)- \angle(j\omega RC + 1)
$$