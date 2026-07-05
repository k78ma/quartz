---
title: System Bus
tags:
  - mte325
date: 2024-06-10
aliases:
  - system bus
---
A system bus is the main communication pathway that connects the various components of a system, allowing them to transfer data and instructions.

Typically, it is divided into three categories of signals:
- Address
- Data 
- [[Control Signal|Control]]

The address and data portions typically each have a number of wires equal to the system size. For example, a 32-bit system has 32 address lines and 32 data lines. 

The control lines are usually single wires, the exact purpose of which will depend on the type of bus being implemented. As an example, a R/W line will be used by the controller to indicate whether a read or write is taking place.

## System Parameters
In [[MTE 325 - Embedded Systems|MTE 325]], a 16-bit system is assumed. Most systems are byte-addressable, such that one address is assigned to one byte in the system (recall that 1 byte = 8 bits). This could be a byte in a register or a byte in memory.

Since the data bus is 16 bits (2 bytes) wide, the data from two addresses will actually be returned. For example, a read to address `0x1010` would actually return the byte at address `0x1010` and the byte at address `0x1011`.