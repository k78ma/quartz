---
title: Sensor Step Response
tags:
  - mte220
date: 2023-11-15
aliases:
---
Sensors cannot instantaneously respond to changes in the values that they measure. There is some delay, which may be very important to characterize. 

![[Sensor Step Response.png|285]]
#### First-order Response
For some sensors, the speed of sensor response to an input is quantified by a time constant $\tau$, similar to [[RC Formulation|RC/RL circuits]]. This is expressed as $10\% \to 90\%$ of the rise time, such that:
$$
t_{10\% \to 90\%} = 2.2\tau
$$
If needed, a first-order factor may be included in the sensor’s transfer function to model this low-pass behaviour: 
$$
\frac{1}{(s\tau+1)}
$$
#### Second-Order Response
Some sensors may be modeled as a second-order system if the step response exhibits overshoot or "ringing", which occurs when a system is underdamped. Usually, adding damping (resistance, friction, rotational damper) will eliminate oscillations. Ringing can lead to instability if feedback is present. A second-order factor with appropriate natural frequency.

A second-order factor with appropriate natural frequency and damping factor, $\omega$and $\zeta$ , can be included in the transfer function.



