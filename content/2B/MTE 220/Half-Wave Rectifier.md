---
title: Half-Wave Rectifier
tags:
  - mte220
date: 2023-10-25
---
A half-way rectifier is a simple way to turn an AC signal into DC with diodes. It only lets the positive part of the AC cycle through, which can then be smoothed out using a capacitor to reduce the ripple.

![[Half-Wave Rectifier.png]]

To summarize:
- $V_{AC} > 0$ means that the diode conducts
- $V_{AC} < 0$ means that the diode does not conduct

![[Half-Wave Rectifier-1.png|383]]

Adding a capacitor will result in the input charging the capacitor, which will stay higher than $V_{AC}$ and smooth the output signal. This is the dashed line in the diagram below.

![[Half-Wave Rectifier-2.png|660]]

- $C$ acts like a "charge gas tank" when the diode is blocking. 
- The "bumpiness" of the signal is called "ripple". 
- As $C$ increases, ripple decreases. 
- Called "bulk decoupling capacitor"