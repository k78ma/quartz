---
title: Analog Signal Conversion Issues
tags:
  - mte325
date: 2024-06-24
aliases:
  - analog signal conversion issues
---
There are several issues associated with conversion between discrete (digital) and continuous (analog) systems that need to be considered before looking at the hardware to convert between them. 

## Terminology and Parameters
Let's say we have a step response from the minimum to maximum possible voltage, as shown below in Figure 2. 

An ideal signal changes value instantaneously. However, real signals have a delay between when the change is requested and when the signal actually starts changing. This delay is typically defined to end when the signal reaches 10% of its full **swing**.
- The swing is the difference between the minimum and maximum output values of a signal. May also be referred to as the range of the signal.

The time between 10% and when the peak output is reached is called the **slew time**. The slope of this line is called the **slew rate**. Slew rate is often used as a specification, as it is a measure of how fast the device can change from one value to another. Thus, it often dictates the maximum frequency at which a circuit can operate correctly; it is often a limiting factor for converters.

Note that the peak voltage of a real signal overshoots the expected output. This overshoot results in the signal oscillating around the target output, with the amplitude of the oscillation decreasing each time, which is referred to as the **ring** of the signal. The signal is considered settled when it is oscillating within $\pm 10\%$ of the final value. The **settling time** is considered to be the time for the full change to occur:
$$
\text{Settling time} = \text{Delay} +\text{Slew} +\text{Ring}
$$

![[Analog Signal Conversion Issues.png]]

## Conversion Issues
### Quantization
By definition, the analog signal is continuous and can take on any real value while digital signals are discrete and can only be integer values. Thus, converting between them requires some form of mapping, where a range of analog values are assigned to the same digital value. 

When converting digital signals to analog, only a subset of the possible analog values can be produced, one per digital value. (Lossy?)

### Least Significant Bit
Another issue to consider is the least significant bit - **LSB**. 
- In the digital sense, 1 LSB refers to a flip in the lowest bit of the digital binary value.
- In the analog sense, 1 LSB refers to the change in voltage (or current) required to produce a change in the lowest bit of the digital representation.

In this course, all quantizations of the analog range will be linear. This means the steps between digital values, each of which is 1 LSB, will all be equal.

## Full Scale Analog Range
As a result, when quantizing the analog signal, the full scale analog range (**FSAR**) is used:
$$
\text{LSB}=\frac{\text{FSAR}}{2^{n}-1}
$$
where
- $\text{FSAR}=\text{Max analog value} - \text{Min analog value}$
- $n$ is the number of bits in the binary digital value. 

Why $2^{n}-1$? Because one code represents each of the min and max values, so there will be one fewer steps than codes. For example, if $n=2$, this gives four binary values. If the FSAR is 3 V, then the LSB is 1 V and the following mapping is implemented between digital and analog values:
$$
1 \text{ LSB}=\frac{\text{FSAR}}{2^{n}-1}=\frac{3\text{ V}}{2^{2}-1}=1 \text{ V}
$$
