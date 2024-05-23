---
title: Embedded Systems Synchronization
tags: 
date: 2024-05-17
aliases:
  - embedded systems synchronization
---
Synchronization refers to the interaction required to make two entities (with different views of time) interact.

*Active synchronization* occurs when one of the entities is forcing a change in the other.
- [[Hardware Interrupts|Interrupts]] are an example; the device initiating the interrupt is forcing the receiver to stop what it was doing and handle the interrupt immediately.

*Passive synchronization* allows one of the entities to make the request, without demanding an immediate response. These techniques are most suitable when the requester is able to wait for service, and include techniques like occasional polling.

There is no general best choice of synchronization method. 
- The most appropriate method is highly situation dependent and must be chosen based on the problem requirements. 
- Even then, there may be multiple good choices, each with its own trade-offs. For example, the needs when communicating between only two devices will not be the same as running a bus with multiple controllers and many peripheral devices.

Consider the relationship between/among the entities:  
- What is the number of communicating entities (two or more than two)?  
- Is there a controller/peripheral relationship?  
- Are the entities equals?
