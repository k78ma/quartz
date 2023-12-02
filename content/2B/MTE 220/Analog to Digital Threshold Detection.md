---
title: Analog to Digital Threshold Detection
tags:
  - mte220
date: 2023-11-16
aliases:
---
Sometimes we need to check if an analog signal is above a certain threshold. One way to do this is to connect it directly to a digital input, causing $0 \to 1$ to $1 \to 0$ transitions when it exceeds $V_{IH}$ OR $V_{IL}$, respectively. 

In such a case, if needed, we can use a voltage divider to scale down the voltage range of an input analog signal. But it is unwise to hold a digital input between "0" and "1" for extended periods because it can cause short circuit current within the IC and possibly damage it. 

If the analog signal has slow transitions, it is better to use a [[Comparator]] op-amp circuit. 

![[Analog to Digital Threshold Detection.png|407]]

The $10\text{ k} \Omega$ input resistor reduces the current loading on the analog signal source, though the op-amp's input current requirements may be negligible. The comparator circuit creates the sharp, high-speed transitions needed for digital signaling.