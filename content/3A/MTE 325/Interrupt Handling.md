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

General rules for writing ISRs:
- Should run as fast as possible as other tasks are being interrupted.
- If work can be done outside the routine, it should be.
- Must be non-blocking – 