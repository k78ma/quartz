---
title: Interrupt Lines
tags:
  - mte325
date: 2024-05-17
aliases:
  - interrupt lines
---
There are two ways in which interrupt lines for [[Hardware Interrupts|hardware interrupts]] between the CPU and devices can be connected. A combination of both might be used within the same system.

A single interrupt request line might be shared between many devices.

![[Interrupt Lines.png|436]]

- The line is active low, such that there is an interrupt when it transitions from `1` to `0`
	- Denoted with a bar over the signal name $\overline{\text{IRQ}}$
	- A method is used to ensure one device cannot drive a logic 1 while another is driving a logic 0, which would cause a short circuit
		- This provides flexibility, as more devices can be added to the shared line, and means we can use less pins
	- Downside: More time has to be spent determining which of the devices on the line triggered the interrupt.

Alternatively, each device could have its own interrupt line. 

![[Interrupt Lines-1.png|452]]

- In this case, we know immediately known which device triggered the interrupt.
- More pins on the microcontroller are required.