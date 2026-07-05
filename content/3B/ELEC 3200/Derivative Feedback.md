---
title: Derivative Feedback
tags:
  - elec3200
date: 2025-04-27
aliases:
  - derivative feedback
---
Instead of simple [[Proportional Feedback]], what if we use the derivative of the error, multiplied by some gain, as feedback?

![[Derivative Feedback-20250427212929073.png|565]]

The motivation behind this is that since the derivative represents the rate of change, a faster rate of change means that more correction/control is needed.

The transfer function for this is
$$
\frac{Y}{R}=\frac{\frac{K_{D}s}{s^{2}-1}}{1+\frac{K_{D}s}{s^{2}-1}}=\frac{K_{D}s}{s^{2}+K_{D}s-1}
$$
This is still not stable because the denominator has a negative coefficient. The transfer function also has a zero at the origin, which is generally undesirable.



