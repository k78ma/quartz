---
title: Digital to Analog Converter Specifications
tags:
  - mte325
date: 2024-06-26
aliases:
  - digital to analog converter specifications
  - DAC specifications
---
What are parameters used to specify [[Digital to Analog Converter|DACs]]?
- Initial filters – Device interface, Packaging, Voltage Range, Temperature Range

## Resolution, Precision, Accuracy
- **Resolution** – Number of binary bits in the digital value used as input to the DAC for conversion to an analog signal.
- **Precision** – Smallest change in the output that can be distinguished. Ideally it is 1 LSB.
	- If precision is greater than 1 LSB, the resolution of the DAC is significantly reduced. If we have a 10 bit DAC but the precision is 2 LSB, we effectively only have a 9-bit DAC.
- **Accuracy** – Measure of how the actual output compares to the ideal output. It is a measure of maximum cumulative error. 
	- If your accuracy exceeds 1 LSB, then the DAC has bits that are effectively meaningless as they are within the bounds of the error of the device.

Both precision and accuracy can be stated in several ways:
- Fraction of the LSB
- Percentage of the full scale
- Absolute voltage

For example, a converter with $10\text{ V}$ full scale and an accuracy of $0.2\%$ has a maximum error of $10\times 0.002=20\text{ mV}$. In these cases, we should convert the value to LSB in order to draw conclusions on the quality of the device:
- A 12-bit DAC where the precision is $0.03\%$ sounds good, but one LSB is 1 in $2^{12}$, or $0.024\%$. Therefore, the LSB of this device would just be noise.
- If the precision of a 10-bit DAC is 1 in $2^{10}$ or $0.1\%$, the accuracy should ideally just be $\leq 0.05\%$

## Range and Dynamic Range
- **Range**: Also referred to as [[Analog Signal Conversion Issues|FSAR]], this is the difference between the maximum and minimum output voltages.
$$
\text{FSAR}=V_{\text{out max}}-V_{\text{out min}}
$$
- **Dynamic range**: The range over which the device produces a suitable output. For a DAC, this is the smallest detectable change, or 1 LSB which is an input code of $1$, to the largest value we can convert before the op-amp saturates, which will have an input code of $2^{n}-1$.

Typically, dynamic range is specified in decibels, so we take
$$
20\log(kV_{\text{ref}}B)
$$
- If we have a good device with a noise level close to 1 LSB, then the dynamic range will be $20\log(2^{n}-1)$. If we have a higher noise floor, the dynamic range would be reduced accordingly.
- Example calculation for a 4-bit DAC:
	- The noise level is at least 1 LSB: $20\log(kV_{\text{ref}}) \text{ dB}$
	- Max output: $20\log(kV_{\text{ref}}\times(2^{n}-1)) \text{ dB}$
	- Dynamic range, using $\log a-\log b=\log \frac{a}{b}$
$$
20\log(kV_{\text{ref}}\times (2^{n}-1))-20\log(kV_{ref})=20\log(2^{n}-1) \text{ dB}
$$
	- For example, 4 bits would mean we have $20\log 15 \approx 20 \text{ dB}$.