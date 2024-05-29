---
title: Embedded Software Design
tags:
  - mte325
date: 2024-05-13
aliases:
---
Building an embedded system requires both hardware and software design work. Generally, embedded software is divided into 3 layers:

- *High-level program/app.* This is highly abstracted, such that it should not know anything about the hardware itself. For example, it may be waiting for an input from a button, but it doesn't matter if this button is from a GUI, mouse, or keyboard.
- *Functional level.* Has less abstraction than the main program, so it will be aware of whether the input originated with a mouse or a keyboard, but doesn’t need to know the specs of the device.
- *Hardware abstraction layer (HAL).* Requires knowledge of the external hardware it is interacting with. This is the lowest layer of code, and does the following:
	- Initialize device configuration
	- Read or write data
	- Synchronize using polling or interrupts


![[Embedded Software Design.png|636]]