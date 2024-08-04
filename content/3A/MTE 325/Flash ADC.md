---
title: Flash ADC
tags:
  - mte325
date: 2024-06-28
aliases:
  - flash adc
---
The flash ADC uses $2n-1$ comparators to check whether the analog voltage to be converted is greater or less than the voltage associated with the corresponding quantization at each point, as shown below. 
- Advantages: – Fixed, very fast conversion time
- Disadvantages: – Expensive, requires $2 n − 1$ comparators, more components increases likelihood of failure

![[Flash ADC.png|512]]

- For a 3-bit ADC, we would have 7 comparators with reference voltages set at 1/8, 2/8, 3/8, ..., 7/8 of the full-scale voltage.
- If $V_{\text{analog}}$ is greater than the reference voltage, the comparator outputs 1.
- If $V_{\text{analog}}$ is less than the reference voltage, the comparator outputs 0.
	- For a 3-bit ADC with $V_{\text{analog}}=\frac{4.5}{8}V_{\text{max}}$, and reference voltages at $\frac{1}{8}V_{\text{max}}, \frac{2}{8}V_{\text{max}}, \ldots, \frac{7}{8}V_{\text{max}}$​, the thermometer code will be `1111000`.
- This is inherently biased low, since a comparator won't round up.
- An encoder is used to convert the $2n − 1$ bit comparator output to a $n$-bit digital value (`DV`).

Unlike the other two designs considered, there is no `start of conversion` or `conversion complete` signal. In fact, with this design there is no indication of whether the conversion is complete or not. The output data is transient, and it is up to the user to allow settling time for the comparators and encoder before reading the output.

Despite the transient nature of the output, flash ADC are commonly used for high-speed applications such as video processing. They are capable of data rates up to 750 M samples/s, which far exceeds any of the other designs considered. The speed is limited only by this time it takes the comparator and encoder to settle.

The greatest drawback of this design is the number of components required, which means a large footprint on silicon. A large number of accurate resistors is needed, as are $2 n − 1$ comparators. The high component count increases the cost, the likelihood of a component failing, and the power requirements of the device.

To see how this works in practice, consider a trivial example as illustrated in Figure 13. For a 2-bit flash ADC, 3 comparators are required. If $V_{\text{analog}}$ is between $\frac{1}{4}V_{\text{ref}}$ and $\frac{1}{2}V_{\text{ref}}$, then the comparator outputs will be `ZYX` = `001`. The encoder will then map this to a 2-bit value as `DV = 01`.

![[Flash ADC-1.png]]