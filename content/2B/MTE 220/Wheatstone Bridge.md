---
title: Wheatstone Bridge
tags:
  - mte220
date: 2023-11-15
aliases:
---
A Wheatstone bridge circuit converts an unknown resistance $R_{x}$ into a measurable voltage difference $\Delta V$, using two voltage dividers with known resistances $R_{1}$ through $R_{3}$.

![[Wheatstone Bridge.png|403]]
$$
\Delta v = v_{b}-v_{a} = v_{s} \frac{R_{x}}{R_{2}+R_{x}} - v_{s} \frac{R_{3}}{R_{1}+R_{3}}
$$
It's basically just two voltage dividers that we're subtracting.

This differential voltage output is preferable to single-ended voltage that one voltage divider would produce. Since all the resistors experience the same variation due to operating conditions, those errors should be self-cancelling. 

It is also possible to buy highly-matched on-chip resistors. Often one resistor is a potentiometer for calibration.

There are two strategies for finding the unknown resistance:
1. Vary $R_{3}$ until $\Delta v = 0$, then:
$$
R_{x} = \frac{R_{2}}{R_{1}}R_{3}
$$
2. $R_{3}$ is set so that $\Delta v = 0$ at a known calibration point, then $\Delta v$ is used to calculate the resulting $R_{x}$ while in operation:
$$
R_{x} = \frac{R_{2}\left( \frac{\Delta v}{v_{s}} + \frac{R_{3}}{R_{1}+R_{3}} \right)}{1 - \left( \frac{\Delta v}{v_{s}}+\frac{R_{3}}{R_{1}+R_{3}} \right)}
$$

A software lookup table is often used to directly relate the measured $\Delta v$ with $R_{x}$ or the sensor's input physical parameter since $\Delta v$ vs. $R_{x}$ is nonlinear.

![[Wheatstone Bridge-1.png|447]]

#### Example
![[Wheatstone Bridge-3.png]]