---
title: Controller Arbitration
tags:
  - mte325
date: 2024-07-17
aliases:
  - controller arbitration
---
Real systems often support multiple controllers. Examples of such systems are those with multiple processors, and those that use something called [[DMA]], or direct memory access.
- The DMA controller is a peripheral in the system that is capable of being bus controller, as well as facilitate transactions between memory and another device without the CPU’s involvement. It is common to use it for tasks like transferring large amounts of data from memory to an external drive. 

In order to have multiple controllers, there must be a mechanism that ensures only one is in control of the bus at any moment in time. Some different arbitration schemes:
- [[Distributed Arbitration|Distributed/Daisy Chain Arbitration]]
- [[Non-Daisy Chain Arbitration]]
- [[CAN Bus Arbitration]]

The primary goal of arbitration is to select a unique bus controller (one and only one). Beyond this, there may be secondary goals depending on the particular system such as cost, fixed priority, or “fair” allocation. 
- Exactly what “fair” means is open to interpretation. It could mean a round-robin scheme, there could be rotation priorities, it could be first-come-first-served or any number of other schemes not listed. All three schemed listed above are fixed priority.

We also restrict discussion to non-preemptive schemes. Non-preemptive resource means that once a task is in control of a resource, it can’t be forcibly taken away. The task has to finish what it is doing and return the resource. Once a device is given bus control, its up to the device to complete the transaction and release the bus. It can’t be interrupted part way through a transaction.