---
title: Interrupt Handling
tags:
  - mte325
date: 2024-05-17
aliases:
  - interrupt handling
---
Once the microcontroller recognizes that an interrupt has occurred, the software takes over to handle the interrupt.

The first step is to determine the correct *Interrupt Service Routine (ISR)* to run, which depends on whether we use [[Non-vectored and Vectored Interrupts|non-vectored or vectored interrupts]].

## ISR Design Principles
General rules for writing ISRs:
- Should run as fast as possible as other tasks are being interrupted.
- If work can be done outside the routine, it should be.
- Must be non-blocking – this means that blocking function calls, such as those for more complex I/O transactions should be avoided.
	- This is why `printf()` should never be called in an ISR
	- Non-blocking I/O calls such as setting a bit that turns on an LED or reading the state of a push button are okay

## Process of Running ISRs
Process of running an ISR typically looks like:
