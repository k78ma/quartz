---
title: Resistive Sensing Techniques
tags:
  - mte220
date: 2023-11-30
aliases:
---
## Voltage Divider
![[Resistive Sensing Techniques-2.png|219]]

- Simple
- Low-cost
- Good when $R_{x}$ is large ($I$ is low), bad if $R_{x}$ is small ($I$ is too high)
- Non-linear $V_{out}$ to $R_{x}$ relationship

## Current Divider
![[Resistive Sensing Techniques-1.png|215]]

- Simple (but more complex than a voltage divider)
- Low-cost
- Good when $R_{x}$ is small, poor choice when $R_{x}$ is large
- Non=linear relationship between $I_{out}$ and $R_{x}$
- May require TIA to convert $I_{out}$ to $V_{out}$

## Bridge Circuit

![[Resistive Sensing Techniques-3.png|228]]

- Can use $V_{out}$ or $I_{out}$ configuration for high or low $R_{x}$
- More components
- Receiver must accept differential voltage signal or current signal
- We can use a TIA (tranimpedance amplifier) to take $I$ in and give $V$ out.