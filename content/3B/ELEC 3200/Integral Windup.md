---
title: Integral Windup
tags:
  - elec3200
date: 2025-04-27
aliases:
  - integral windup
---
A potential problem for [[Proportional-Integral-Derivative Control|PID control]] is integral windup. 

When the actuator that follows your control signal $U$ has a maximum and minimum limit (saturates), and our signal $U$ asks for too big/small of a signal, the actual output is clipped. However, our PID controller has an integrator, which accumulates error over time; however, when the actuator is saturated, even if the error is decreasing, the integrator keeps adding up the past error.  

![[Integral Windup-20250427223202843.png|620]]

We say that the integrator "winds up"; the error may be small, but its integrated past history builds up. There are various anti-windup schemes to deal with this; essentially, we try to detect the onset of saturation and turn the integrator off.