---
title: Embedded Systems
tags:
  - mte325
date: 2024-05-08
aliases:
---
An **embedded system** is a special-purpose computer to perform a task without the user's knowledge of its existence. The user may provide input to the embedded system via controls and sensors but the user need not be aware of the system's presence.

A *real-time* embedded system guarantees a worst-case latency for critical events.

The definition of embedded system is not always clear – digital cameras are embedded systems, but are cell phones?

## Embedded System Design
Generally:
- First, identify the problem and the development of requirements and specifications
- Select primary hardware components, such as the microcontroller, development board, and peripherals
- Hardware design – select interfaces and wire hardware components together. This is done with development kits and breadboards for prototyping, but might use custom PCBs for production.
- Software development can be done after component selection. Ideally, hardware/software co-design would be used, allowing hardware to be optimized on the fly. FPGA is as close as we get right now.
	- For microcontroller-based designs, the processor may have pin-compatible options in the same family.

The whole process is cyclic as there will always be issues or changes to requirements, resulting in design iteration.

Embedded software tends to have a low level of abstraction, as the code is often tied to a specific processor or processor family; porting to another system requires changes to be made.

## Hardware vs. Software
- Hardware – the mechanical or electronic components of a computer.
- Software – the programs or other operating systems used by a computer, such as video cassettes, audio tapes, etc. that require playback on electronic equipment. This includes both programs and data.