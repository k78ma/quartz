---
title: Processor Types
tags:
  - mte325
date: 2024-05-08
aliases:
---
Computer hardware can be categorized based on the relationship between the processor and the peripherals. There aren't standardized definitions, these are the MTE 325 definitions.

A *microprocessor* consists of a processor only. 
- No main memory
- No built-in support for input/output devices
- Commonly refers to a general-purpose CPU, like Intel i5, AMD Ryzen
- Because they are standalone processors and require separate peripherals, typically used with a motherboard that provides the required interfaces and memory
- A system based on a microprocessor will, in general, NOT be an embedded system.

A *microcontroller* is a complete computer on a single chip consisting of a processor, memory and some input/output devices.
- These devices are usually specified in a fairly general manner to permit reuse of the same microcontroller component in many applications.
- Commonly refers to a chip with a CPU that has been specialized to control the operation of a mechanical or electronic system.
- Each chip will have specialized built-in interface support for some or all of high-speed communication, parallel devices, serial devices, and analog devices.
- Example: STM32, Texas Instruments TMS320, Microchip ATtiny.

A *System-on-a-Chip* (SoC) is a user-designed fully-functional system implemented on a single chip.
- Includes processing, memory, input/output devices and other digital logic. This typically includes:
	- Functionality similar to a microprocessor or a microcontroller (implementation may be done in software or hardware)
	- Communication ports
	- Volatile storage (RAM) and non-volatile storage (ROM)
	- Other: Timers, parallel interfaces, analog to digital converters, pulse width modulators
- Can be used to implement an embedded system or a portion of an embedded system
- Difference between a microcontroller and an SoC is that the SoC configuration is chosen by the user.
	- Interfaces and memory are selected, and then the chip is fabricated for the user.

A *System-on-a-Programmable-Chip* (SoPC) is an SoC implemented using a high-density, reconfigurable programmable logic device (PLD).
- Unlike the SoC, the user is able to reconfigure and program the chip logic themselves
- Many SoPC chips either have a CPU block to can be loaded to them or contain a hardwired CPU surrounded by programmable logic.
- FPGAs are an example of a SoPC.