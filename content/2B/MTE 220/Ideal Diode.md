---
title: Ideal Diode
tags:
  - mte220
date: 2023-10-25
---
In an ideal diode circuit, the feedback "cancels" the op-amp forward voltage drop, so that we have something like:
![[Ideal Diode-2.png|500]]

The circuit uses an op-amp and looks like this:
![[Ideal Diode.png|424]]

For example, if we have $V_{in} = 3\text{ V}$ and $V_{F} = 0.7 \text{ V}$. In order for the op-amp to make $V_{+} - V_{-} = 0$, we need $V_{out}$ after the diode to be $3 \text{ V}$. So, the output of the op-amp has to be $3.7 \text{ V}$ in order to account for the forward voltage.

![[Ideal Diode-1.png|392]]

