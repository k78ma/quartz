---
title: DC Motor Drives by PWM
tags:
  - mte322
date: 2024-10-18
aliases:
  - dc motor drives by pwm
---
It is safer, simpler and more robust to control DC motors using a digital (on-off) signal rather than an analog signal. PWM does this by smoothing the current. EMF voltage is smoothened also by mechanical effect. See [[Pulse Width Modulation]].

![[DC Motor Drives by PWM.png|676]]

The width of each pulse determines the average voltage supplied to the motor. Narrow pulses represent a low average voltage, while wide pulses correspond to a higher average voltage. This approach allows for fine control over the motor's speed and torque.

Smoothing – the voltage-current relation in an inductive circuit is given by:
$$
V=L \frac{di}{dt} \quad \implies \quad i=\frac{1}{L}\int V(t) \, dt 
$$
where the inductor integrates the voltage over time, leading to a more continuous current flow.

The **EMF voltage** is also smoothed out due to mechanical effects, making the motor respond more smoothly