---
title: ADC Specifications
tags:
  - mte325
date: 2024-06-29
aliases:
  - adc specifications
---
Previously [[DAC Specifications|DAC specifications]] were discussed. Many of the same ideas are also applicable to ADCs.
- The **resolution** refers to the number of bits in the digital output
- **Quantization** is inherent any time we move between the analog and digital domains
- **Accuracy** refers to the difference between the expected output code and the actual code observed.

**Missing codes** are unique to ADCs. Ideally, as $V_{\text{analog}}$ increases from its minimum to maximum value, all binary output codes should be produced in successive order. If any codes are skipped, meaning they cannot be produced regardless of the applied analog voltage, the ADC has missing codes. This is a sign of a poor device.

The **dynamic range** for an ADC is the ratio of the largest value that can be converted to the smallest step size. For example, consider a 10-bit ADC with an input range from 0V to 4V. Then, the quantization step is:
$$
\text{Quantization Step} =\frac{4\text{V}-0\text{V}}{2^{10}-1} = 3.9062 \text{ mV}
$$
and the dynamic range would be:
$$
\begin{align}
\text{Dynamic range} = \frac{4.0 \text{ V}}{3.9062 \text{ mV}}  & = 1023 \\[2ex] 
20 \log 1023  & = 60 \text{ dB}
\end{align}
$$
For the [[Binary Ramp ADC|binary ramp]] and [[Successive Approximation ADC|successive approximation]] designs, the [[DAC Errors|offset]], [[DAC Errors|gain]] and [[DAC Errors|linearity]] errors will also apply. This is a direct result of the fact that these designs use a DAC internally to compare their output with the $V_{\text{Analog}}$ to be converted.

The **conversion time** of the binary ramp and successive approximation designs is dominated by the settling time of the DAC. For the flash design, it will be the time for the comparators and encoder to settle after a change in $V_{\text{analog}}$.

