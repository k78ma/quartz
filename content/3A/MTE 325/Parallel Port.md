---
title: Parallel Port
tags:
  - mte325
date: 2024-06-12
aliases:
  - parallel port
  - parallel interface
  - parallel interfaces
---
Peripheral interfaces typically connect to the [[System Bus|system bus]] using a parallel port.

A simple parallel port model is shown below. Remember that "read" and "write" area always from the perspective of the CPU. Depending on the functionality required, only some components of the port may be needed. 

![[Parallel Port.png]]

The interface consists of four registers:
- **Control Register (CR)**: An optional write-only register used to store control information. Contents will vary, but include device settings and interrupt enable bits. The output may be divided into groups of bits or individual bits that are routed to different places within the device, based on their purpose.
- **Status Register (SR)**: An optional read-only register that stores information about the current state of the device. Usually, this is state information that is needed by the CPU, such as new data available, or the occurrence of an interrupt. The individual bits or groups of bits may come from different sources within the device.
	- If the data sources are persistent, the port designer may choose to omit this register. Instead, we may connect the information directly from its source in the device interface to the tristate that provides the interface to the system bus.
- **Data out register (DO)**: A write-only register used to store the data written to the device by the CPU.
- **Data in register (DI)**: An optional read-only register that may be used to store data requested by the CPU during a read transaction before it is made available on the system bus.
	- If the data source is transient, a DI register must be used. 
	- If the data is persistent, the designer may choose to omit this register and connect the data directly from the device to the input of the connected tri-state.