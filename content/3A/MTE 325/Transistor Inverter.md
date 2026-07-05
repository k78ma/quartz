---
title: Transistor Inverter
tags:
  - mte325
date: 2024-06-08
aliases:
  - transistor inverter
---
An **inverter** is one of the simplest circuits to implement using [[Transistor|transistors]]. They function such that:
- When the input is 0 (low voltage), the output will be 1 (high voltage).
- When the input is 1 (high voltage), the output will be 0 (low voltage).

### NMOS Inverter
Consider one built using only an NMOS transistor as shown in Figure 15.

![[Transistor Circuits.png]]

An NMOS transistor turns "on" when a logic 1 is applied to the gate.
- When the input signal $V_{\text{GS}}$ is logic 0, the transistor acts like an open circuit. The output signal, $V_{\text{DS}}$, will be pulled high by the pull-up resistor. This behavior characterizes the cutoff region as marked on the input vs. output plot on the right.
	- Note that the output voltage doesn't quite reach $V_{\text{DD}}$ because there will be a small voltage drop across the pull-up resistor.
- Ideally, the input of the inverter would switch instantly from logic 1 to 0, but in reality there is a transition between the two. Thus, there is a transition on the output as well. This is known as the *active region operation*, and is mostly ignored.
- As the input voltage continues to increase, it will eventually surpass the threshold for a logic 1, ad indicated by $V_{\text{IH}}$ (voltage - input high), which corresponds to the start of the saturation region of transistor behavior. In this region, the transistor acts like a short circuit. 
	- Since the transistor is sinking current to ground, it will in turn pull $V_{\text{DS}}$ to logic 0.

### PMOS Inverter
PMOS transistors allow current to flow (short circuit) when the gate is a logic 0 and act like an open circuit when the gate is a logic 1.

NMOS transistors are connected between the output and ground, while PMOS are used to provide a path between the supply voltage and the output. Thus, when building an inverter using a single PMOS transistor, the position of the resistor and transistor will be swapped compared to the NMOS inverter.

![[Transistor Circuits-1.png]]

### CMOS Inverter
A CMOS inverter can be built by combining both a PMOS and an NMOS transistor as shown below. In this case, their inputs are tied to the same source signal, and their outputs are also tied together. The transitions between ranges will not be as sharp due to the two transistors in the circuit. 

![[Transistor Inverter.png]]