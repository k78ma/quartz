---
title: Embedded Systems Synchronization
tags: 
date: 2024-05-17
aliases:
  - embedded systems synchronization
---
Synchronization refers to the interaction required to make two entities (with different views of time) interact.

*Active synchronization* occurs when one of the entities is forcing a change in the other.
- [[Hardware Interrupts|Interrupts]] are a great example; the device initiating the interrupt is forcing the receiver to stop what it was doing and handle the interrupt immediately.

*Passive synchronization* allows one of the entities to make the request, without demanding an immediate response. These techniques are most suitable when the requester is able to wait for service, and include techniques like occasional polling.

There is no general best choice for 

Methods:
- [[Blind Cycle Synchronization]]
- [[Polling Synchronization]]
	- [[Tight Polling Implementations]]
- [[Hardware Interrupts]]