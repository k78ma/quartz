---
title: Microcontroller Architecture
tags:
  - mte325
date: 2024-06-05
aliases:
  - microcontroller architecture
---
A typical microcontroller contains: a processor, memory (RAM and ROM), a clock, and peripheral interfaces. 

![[Microcontroller Architecture.png|500]]

## Bus Connections
*How are these blocks connected?* Connecting every block to the microcontroller directly is impractical as the number of wires required would be impossible to run. Instead, a dedicated set of shared wires is used, which are commonly referred to as a [[Bus|bus]].

The **system bus** is the main bus in the microcontroller and connects the microprocessor to the other blocks in the system. Using a system bus reduces the number of wires, and decreases the size of the chip itself. Buses also allow for easy expansion or reconfiguration of peripherals, which is useful in re-using hardware designs from one microcontroller to the next.

## MMIO
In [[MTE 325 - Embedded Systems|MTE 325]], only systems where the CPU is connected to the same system bus for both memory and I/O are considered – this is called the memory mapped I/O configuration. 
- The I/O interfaces are given addresses, just like memory locations. 
- When the CPU participates in a transaction, all it knows is the address. From it’s perspective, there is no difference between interacting with a location in memory or a register inside an I/O interface.

![[Microcontroller Architecture-1.png|564]]

Both data and instructions are stored in memory. If we put an oscilloscope on a bus transaction, we wouldn’t see any difference between reading data or reading an instruction, both are accessed using addresses. As far as the CPU is concerned, it can only distinguish them by how they are used internally. 
- Most systems have both ROM which is read only, and some form of memory which can be read and written. The ROM is typically used for the start up code of the processor that boots it into a known state. 
- The other memory can be used to store both runtime data and instructions. Both RAM and flash are common in modern systems. The biggest difference is ram is volatile, meaning the information is gone when power is lost whereas flash is not. In the labs, your code is programmed to the flash memory in the controller, which is why your most recent code is still there the next time you power on the board.