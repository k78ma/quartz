---
title: Software Device Drivers
tags:
  - mte325
date: 2024-06-08
aliases:
  - software device drivers
---
This is usually included in the HAL in the [[Embedded Software Design|embedded software model]]. 

The device driver includes:
- Data structures
	- Variables needed to access the device interface registers
	- Variables associated with the state of the device
	- Data buffers
- Initialization functions
	- Device initialization
	- Synchronization initialization
	- Initialization of driver variables
- I/O functions
	- Functions to input from the device and/or output to the device (read/write)
- Interrupt Service Routines