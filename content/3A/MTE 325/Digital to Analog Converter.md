---
title: Digital to Analog Converter
tags:
  - mte325
date: 2024-06-24
aliases:
  - digital to analog converter
  - DAC
---
At the highest level, the DAC is a black box that takes in a reference voltage, $V_{\text{ref}}$, and scales it by both a proportionality constant, $| k |$, and the binary value, $B$, to produce an analog output signal, such that:
$$
x=k\cdot V_{\text{ref}}\cdot B
$$
where
- $x$ is the output
- $k$ is a proportionality constant
- $V_{\text{ref}}$ is the reference voltage
- $B$ is the binary word.

We will use $| k |=\frac{1}{2^{n}}$. This means that the maximum output voltage will be:
$$
V_{\text{max}}=kV_{\text{ref}}(2^{n}-1)
$$
therefore it will always be smaller than $V_{\text{ref}}$.

The binary value $B$ can be provided to the DAC in either serial or parallel form; either way, a [[Parallel Port|parallel port]] is used to provide a connection to the system bus, thus providing a path for the CPU to set the binary value by writing to an interface register .

Generic block diagram of a DAC:

![[Digital to Analog Converter.png]]

## Quantization and LSB
Analog signals are continuous, digital signals are discrete. As such, for $n$ digital values, we can only produce outputs at $n$ points along the analog range, ideally at equally spaced intervals. Those intervals, or steps between outputs, are 1 LSB each. 

For example, if we have $V_{\text{ref}}=5 \text{V}$, $n=2$, $k=\frac{1}{2^{n}}$, the only analog outputs that can be produced are:
$$
x=\frac{1}{2^{2}}\cdot 5\text{V}\cdot B = 1.25B
$$
where $B$ is an integer between 1 and 3. While $V_{\text{ref}}$ was $5 \text{V}$, the maximum output that can be produced is $3.75\text{V}$, which is exactly $1$ LSB less than $V_{\text{ref}}$. For the converters considered in this course, $V_{\text{out max}}$ will always be 1 LSB less than of $V_{\text{ref}}$.

![[Digital to Analog Converter-1.png]]