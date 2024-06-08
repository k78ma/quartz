---
title: <%tp.file.title%>
tags:
  - mte325
date: <%tp.date.now()%>
aliases:
  - <%tp.file.title.toLowerCase()%>
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