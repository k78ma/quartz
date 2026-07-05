---
title: Asynchronous Memory Read
tags:
  - mte309
date: 2024-06-11
aliases:
  - asynchronous memory read
---
One of the downsides of a [[Synchronous Memory Read|synchronous]] implementation is having to always assume a worst case scenario. If most of the time the memory responds closer to the minimum time of 45 ns, this implementation forces an extra bus cycle to be wasted as data was available at the end of the 5th clock cycle but the CPU wasn’t able to take advantage of it. 

In the asynchronous case shown in Figure 11, the clock is not shared with memory. The transaction could start the same way as in the synchronous case, but instead of always counting 6 cycles, the CPU is waiting for the memory synch pulse to indicate that data is ready. 

![[CPU-Memory Interface - Memory View-2.png|436]]

- This is one possible implementation of the “wait for memory function complete” discussed previously. 
- One advantage of this implementation is that in cases where the memory is able to respond closer to the minimum time, the CPU can complete the transaction after 5 cycles instead of being forced to wait 6.
- Persistent data behavior is observed as data will remain available until the CPU changes the address on the address lines. 
	- *Persistent data:* Information remains valid until consumer signals that the data has been consumed (processed).
- The fact that memory is driving the synch pulse also means there is verification the device actually responded. If the CPU attempted to read from an unused address, there would be no response and the bus would hang unless some other mitigation technique was used.