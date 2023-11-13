---
title: Power Conditioning Circuits Figures of Merit
tags:
  - mte220
date: 2023-11-12
aliases:
---
When it comes to power conditioning circuits, there are many things that we need to consider, not just I/O voltage, current, power, etc.

- [[Power Conditioning Circuits#Efficiency|Efficiency]]
- **Output Voltage Accuracy**: How close does $V_{out}$ match specification?
- **Load Regulation**: Stability of $V_{out}$ with changes in $I_{out}$
- **Line Regulation**: Stability of $V_{out}$ with changes in $V_{in}$
- **Ripple and Noise**: How "clean" a supply is
- **Transient Response**: How fast $V_{out}$ can respond to step change in $I_{out}$
- **Mechanical:** Size, weights, form factor, thermal
- **Protection Features**
	- Overvoltage protection (OVP)
	- Overcurrent protection (OCP)
	- Short-circuit protection (SCP)
	- Thermal protection
- **Power Factor Correction** (PFC): Ensure that $V_{in}$ and $I_{in}$ are in-phase
- **Level of Integration:** Module vs. Regulator vs. Controller
- **Reliability:** Mean Time Between Failures (MTBF) quantifies average time between failures