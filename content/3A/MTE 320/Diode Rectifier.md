---
title: Diode Rectifier
tags:
  - mte320
date: 2024-07-29
aliases:
  - diode rectifier
---
In applications where the input power is provided by the utility grid in the form of an AC, sinusoidal voltage at 50 or 60 Hz, using a diode rectifier is the simplest and the most cost-effective way of converting the sinusoidal input voltage to a DC voltage before any other power processing takes place. 

In applications such as switching DC power supplies, AC motor drives, and wind energy conversion systems, a front-end diode rectifier is commonly used. Diode rectifiers convert AC voltage to uncontrolled DC voltage, since diode is an uncontrolled semiconductor device. 

Diode rectifiers are unidirectional converters. The power flows from the AC terminals to the DC terminals.

As the output voltage of diode rectifier has large ripple contents, a large capacitor is normally used to obtain a smooth dc output voltage. The AC-side current of a diode rectifier is distorted and injects unwanted components (harmonics) into the grid, necessitating filtering. 

Diode rectifiers are seen as a nonlinear load by the AC source. This means that when a sinusoidal voltage is applied to the AC terminals of a diode rectifier, the current drawn from the AC source is non-sinusoidal. This is in contrast with the characteristics of linear circuits that are composed of resistors, inductors, and capacitors.

Types:
- [[Single-Phase Diode Bridge Rectifier]]
- [[Three-Phase Diode Bridge Rectifier]]