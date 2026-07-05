---
title: Bus
tags:
  - mte241
  - mte325
date: 2023-09-08
aliases:
  - bus
---
Data is transferred over wires.

The set of wires dedicated to a particular type of data transfer is called a “bus”:
- Data bus (D-Bus, transfer data to/from memory)
- Address bus (select an address for read/write)
- Instruction bus (I-Bus, transfer code but not data)
- System bus (S-Bus, control circuitry, especially peripherals, sometimes data transfer)

*What distinguishes a bus from just a group of wires?*

A bus will be shared by multiple components. The components will communicate with one another using the same standardized protocol. In the case of a system bus, it will facilitate communication between the processor and at least one other entity. If there are more than two entities on the bus, a method of selecting the participants will be required. Usually, the system bus will have dedicated wires to transfer data and separate wires for the address. There will also be additional wires to control the transaction.