---
title: Photodiode
tags:
  - mte220
date: 2023-10-25
---
This is the opposite of a [[LED]]. We apply a reverse bias to it; normally the current is 0, but when photons come in, we will get electron flow resulting in a current.

- Dark: very small amount of reverse current under reverse bias ($\text{ nA}$)
- Light: signal current ($\mu \text{A}$)

Essentially, we can think about these as controlled current sources that are proportional to incoming light intensity.

We need to the signal current from $\mu \text{A}$ to $\text{V}$, so we need an amp with gain in $[\frac{V}{A}]$. This is where the name for "trans resistance amplifier" or "trans impedance amplifiers (TIA)" comes from.

TIA circuit:

![[Photodiode.png|452]]

We have:
$$
\begin{align}
V_{out}  & = V_{Bias} + V_{R} \\
	 & = V_{Bias} + I_{D}R
\end{align}
$$