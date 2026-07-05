---
title: Bus Drivers
tags:
  - mte325
date: 2024-06-07
aliases:
  - bus drivers
---
## Motivation
When additional peripherals and memory devices are added to a system bus, the complexity increases compared to the single-device scenario discussed [[CPU-Memory Interface - CPU View|here]] and [[CPU-Memory Interface - Memory View|here]]. A [[Synchronous Bus|synchronous bus]] will not be ideal because the CPU has to assume a worst case scenario based on the slowest memory device available; if most transactions are to a faster memory, a lot of bus time will be wasted. An [[Asynchronous Bus|asynchronous bus]] allows the devices to indicate if they are done sooner, so the CPU will be able to complete transactions sooner.

In terms of system bus lines, addresses are driven by the MAR and have no conflicts, but data lines can be driven by multiple sources (memory and MDR) and thus need mechanisms to avoid conflicts, such as ensuring only source drives the lines at a time. 
- Basically, memory devices can place data on the data lines if the CPU wants to read data, and the CPU can place data on the data lines for a write transaction.
- MAR has no conflicts because it only goes in one direction – the CPU uses the MAR to tell the memory devices what address to retrieve the data from.

Thus, a mechanism is needed to ensure only source is driving the data lines at a time. The processor synch pulse for an [[Asynchronous Bus|asynchronous bus]] could also be driven by any of the multiple memory devices. Specifically, a conflict involves one source attempting to set a line to logic 1 while another source tries to set the same line to logic 0.

![[Bus Drivers.png|612]]

## Device Driver Conflicts
At a hardware level, the circuitry responsible for generating a signal between memory and CPU is called a device driver. In a simple case, the device drivers could be AND gates.

![[Bus Drivers-1.png|644]]

Consider a scenario where device 1 and device 2 each have two inputs, and both feed the same input to device 3. The outputs of device 1 and 2 are connected to a shared line.
- If both inputs to device 1 are 1, the output of device 1 would be 1. 
- If both inputs to device 2 are 0, the the output of device 2 would be 0. 

Then, the shared line is in conflict, since it can't be 1 and 0 at the same time. In a real circuit, a conflict like this creates a short between power and ground, which will damage transistors if the current is high enough. 

The two possible solutions to safely sharing a bus line are:
- Mechanism to select only one device or source to drive the line at a time.
- Multiple drivers, with some way to ensure they actively drive only the same value.