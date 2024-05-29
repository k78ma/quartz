---
title: Sensor Sensitivity
tags:
  - mte220
date: 2023-11-14
aliases:
---
The sensitivity of a sensor describes the change in output signal for a change in the input signal. This is basically the slope of the input-output relationship ([[Sensor Transfer Function]]):
$$
\frac{ \partial \text{ Output} }{ \partial \text{ Input} } 
$$
High sensitivity is often desirable but costly. 

The sensitivity is like the gain of a transfer function. For example, for a speed sensor, we would have:
$$
\text{Out} = 100 \left[\frac{\text{mV}}{\text{km/h}}\right] \times  \text{In}_{\text{km/h}} +2\text{V}
$$
Here, the sensitivity would be $100$ as that's the slope of the output vs the input at the operating point.