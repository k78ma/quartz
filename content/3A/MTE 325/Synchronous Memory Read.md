---
title: Synchronous Memory Read
tags:
  - mte325
date: 2024-06-10
aliases:
  - synchronous memory read
---
Here is an example of a synchronous memory read.

![[CPU-Memory Interface - Memory View-1.png|572]]

- Actions are timed based on the edges of the clock, and timing is dictated by the worst case scenario. In this example, the worst case memory access time is 55 ns. 
- Synchronous buses require that everything be timed to complete cycles. The CPU would start the transaction (using a synch pulse as shown), wait 6 cycles, and then assume the data on the data lines is valid and can be clocked into the MDR. 
- After the end of the 6th cycle, the data is assumed to be gone. In other words, there is transient data.
	- *Transient data*: Information is made available to the consumer and only remains valid for a period of time. In most cases the minimum period of time the data will remain valid is known by the designer.
- Bling synchronization is being used as there is no communication to memory to verify the transaction is actually done. 
	- *Bling synchronization*: When there is no communication between the two sides of a transaction to check that data is available or the validity of the data.
- It’s possible the transaction used a bad address and no data was ever put on the bus, but the CPU won’t know that. 
- The functionality of the memory function complete signal is being implemented virtually by counting to the 6th clock edge instead of using a physical signal.
