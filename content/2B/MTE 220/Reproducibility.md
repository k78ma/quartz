---
title: Reproducibility
tags:
  - mte220
date: 2023-11-14
aliases:
---
A sensor's reproducibility quantifies the change in measured values as an input is repeatedly applied. Sources of error that hamper reproducibility are random processes and fluctuations in operating conditions.

For example, the reproducibility of a linear position sensor could be determined by resetting to $x=0 \text{ mm}$, moving it to exactly $x=4 \text{ mm}$, then measuring $y(x= 4 \text{ mm})$ many times in a row.

Another example. Let's say we have a speed sensor with
$$
\text{Out} = 100 \left[\frac{\text{mV}}{\text{km/h}}\right] \times  \text{In}_{\text{km/h}} +2\text{V}
$$
1. Go from $0 \to 10.00 \text{ km/h}$ (must always approach in the same direction in case there is [[Hysteresis]])
2. Measure
3. Reset, repeat

We may get some results like:
$$
\begin{align}
V_{out_{1}} = 1.012 V \\
V_{out_{1}} = 1.007 V \\ 
V_{out_{1}} = 1.996 V 
\end{align}
$$
Then, we can get some statistics like mean, std, etc.
