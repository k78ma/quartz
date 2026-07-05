---
title: Interrupt Initialization
tags:
  - mte325
date: 2024-05-17
aliases:
  - interrupt initialization
---
Interrupt initialization, especially with [[Non-vectored and Vectored Interrupts|vectored interrupts]], is usually part of the global initialization. This means that these are done once at the beginning to configure the system before starting the infinite loop in the main routine in an embedded system.

Steps that need to be taken when initializing interrupts:
1. Disable all interrupts.
2. Enable device interface interrupts by setting the appropriate device interface registers.
3. Set interrupt mask to allow interrupts from device, configure priority.
4. Initialize interrupt vector with address of ISR.
5. Enable interrupts as required.

Steps 2, 3, and 4 may be performed in any order provided that all interrupts are disabled.