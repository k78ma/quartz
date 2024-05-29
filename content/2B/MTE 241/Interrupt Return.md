---
title: Interrupt Return
tags:
  - mte241
date: 2023-10-27
aliases:
---
Returning from an interrupt is slightly more complicated than returning from a regular function call. 
- Primarily, this has to do with the step of returning the stack to normal.
- Furthermore, whenever an interrupt triggers, the processor enters what is known as “Handler Mode”. In Handler Mode we always have full control over the chip. However, when returning from an interrupt we may be returning to an instruction that does not execute in such a privileged mode. The Cortex cannot go into unprivileged mode from an interrupt unless we take special precautions.

The state diagram that depicts how all of this is handled is shown below:![[Interrupt Return.png|388]]

For our purposes, we just need to know:
1. Returning from an interrupt is more complex than returning from a regular function.
2. There are special instructions that must be executed to return from an interrupt.
3. These instructions almost never work from C or C++.
4. Assembly is required to exit an interrupt.

But not all is lost! We can write most of our interrupt code in C, and use assembly only to handle the little start and end parts: [[ISR]]