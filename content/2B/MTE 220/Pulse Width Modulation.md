---
title: Pulse Width Modulation
tags:
  - mte220
date: 2023-10-03
---
PWM is a technique used to control the power or intensity of a signal.

- Pulse repetition frequency (PRF): Square wave generated with fixed frequency
- Duty cycle (DC): Proportion of time the signal spends high, expressed in percent

![[Pasted image 20231003120727.png]]

In simple terms, PWM rapidly turns a signal ON and OFF at high frequency. The average power or voltage can be controlled by adjusting the ratio of the ON time (pulse width) to the total period.
- Applications: motor speed control, power regulation, audio amplification, dimming LEDs

Averaging the digitally-generated PWM signal provides an analog voltage that can be varied by changing the duty cycle. In Lab 2, we use the signal generator to generate a PWM signal and control the output to change the duty cycle and frequency.