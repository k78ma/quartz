---
title: ADCs and DACs
tags:
  - mte220
date: 2023-11-30
aliases:
  - ADC
  - DAC
---
## Analog-to-Digital Converter (ADC)
Converts an analog signal (usually voltage) to an $N$-bit digital representation, where:
- $0$ and $2^{N}-1$ represent the lower and upper voltage limits provided by the ADC ($V_{min}$ and $V_{max}$). 
- The resolution, $Q=(V_{max}-V_{min}) / 2^{N}$ is the minimum change in input voltage that causes a change in output value.

![[ADCs and DACs.png|327]]

## Digital-to-Analog Converter (DAC)
Converts an $N$-bit digital signal to an analog signal (usually voltage).
-  $0$ and $2^{N}-1$ represent the lower and upper voltage limits provided to the DAC ($V_{min}$ and $V_{max}$). 
- The resolution, $Q=(V_{max}-V_{min}) / 2^{N}$ is the change in output voltage caused by a change in the least significant bit (LSB) of the DAC input.

![[ADCs and DACs-1.png|331]]