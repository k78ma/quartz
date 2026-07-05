---
title: RTOS
tags:
  - mte241
date: 2023-10-09
aliases:
---
In an RTOS, the kernel is not only small but extremely efficient to deal with the resource limitations of embedded systems. 

The purposes of RTOS is:
- To provide safe libraries of code that make it harder for untrusted programs from messing up the hardware.
- To provide simple methods of configuring memory and certain hardware on the chip so that applications programmers do not have to know how those specific things work

For purpose 1, we are not requiring the kernel protect anything (unlike a regular OS), and only provide protections should application programs choose to use them. It is possible for an RTOS to restrict what untrusted programs can do but this is less often seen in the real world; the separation of userspace and kernelspace is a lot more fluid in an RTOS. This is done both to save resources and because most of the time an embedded system is supposed to be used for interacting with hardware anyway.

For purpose 2, the RTOS does not provide abstractions for all the hardware on the microcontroller, but provide abstractions to the commonly needed an RTOS. Usually, the RTOS provides easy ways to access:
- **Threading**: – the ability to concurrently run multiple independent chunks of code, known as threads
- **Timing hardware** – specifically the use of timers so that threads can run periodically or within known time bounds. RTOSs are intimately linked with timing.
- **Scheduling** resources that determine when each task runs.
- **Memory protection**, especially to ensure that multiple threads do not try to modify the same memory at the same time. 
- **Handling priority** access so that important tasks get preferred access to hardware.
