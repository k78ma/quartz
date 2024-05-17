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
1. Save the state of the system so it can be restored later as if the ISR never ran (context switch).
2. Optional: Acknowledge to the device that the interrupt is being acted on.
3. Optional: Re-enable higher priority interrupts if they were disabled. If this is done, it’s possible your interrupt routine can itself be interrupted.
4. If [[Non-vectored and Vectored Interrupts|non-vectored interrupts]] are being used, determine the source. If [[Non-vectored and Vectored Interrupts|vectored interrupts]] are being used, optionally check that an interrupt has actually occurred (not noise), this is usually done by checking a status bit on the device.
5. Complete the action required to service an interrupt. This can be as simple as setting a flag that triggers a longer processing step later on (so that work can be done outside the routine).
6. Registers are restored using the copies saved earlier (context switch). If interrupts were re-enabled, they should be disabled again while registers are restored to prevent corruption.
7. Return and resume execution of interrupted code.

Typically, in modern systems, steps 1, 6, 7 are done automatically.