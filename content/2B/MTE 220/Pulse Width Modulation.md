---
title: Pulse Width Modulation
tags:
  - mte220
date: 2023-10-03
aliases:
  - PWM
---
PWM is a technique used to control the power or intensity of a signal. It allows us to easily convert a digital signal to create an analog voltage

In simple terms, PWM rapidly turns a signal ON and OFF at high frequency. The average power or voltage can be controlled by adjusting the ratio of the ON time (pulse width) to the total period.
- Applications: motor speed control, power regulation, audio amplification, dimming LEDs.
- It's far more efficient to drive transistors fully-on/full-off (digital) instead of partly on (analog). However, this can be very noisy due to high frequency switching.
- We can encode information in PWM parameters, like duty cycle.

Averaging the digitally-generated PWM signal provides an analog voltage that can be varied by changing the duty cycle. In Lab 2, we use the signal generator to generate a PWM signal and control the output to change the duty cycle and frequency.

#### Pulse repetition frequency (PRF)
Frequency of rectangular waves, defined as:
$$
f_{PRF} = \frac{1}{T_{PRF}}
$$
where $T_{PRF} = t_{high} + t_{low}$, such that:
- $t_{high}$  is the duration of time that the signal is high ($\text{V} = \text{V}_{+}$)
- $t_{low}$ is the duration of time that the signal is low ($\text{V} = 0$)

![[Pulse Width Modulation.png|372]]

The PRF is usually much higher than the intended frequency of the resulting analog voltage output signal. 

#### Duty cycle
Proportion of time the signal spends high, expressed in percent. Given by:
$$
\text{DC} = \frac{t_{h}}{t_{h}+ t_{l}} = \frac{t_{h}}{T_{\text{PRF}}}
$$

![[Pasted image 20231003120727.png]]
