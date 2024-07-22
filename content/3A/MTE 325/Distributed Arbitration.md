---
title: Distributed Arbitration
tags:
  - mte325
date: 2024-07-22
aliases:
  - distributed arbitration
  - daisy-chain arbitration
---
Distributed arbitration systems have two component types:
- **Central arbiter (CA)**: Responsible for monitoring requests and deciding when to issue permission for a device to take control of the bus.
- **Distributed arbiter (DA)**: The distributed arbiter allows a device to make a request, and lets the device know when it has control of the bus.

Consider the high level view shown below in Figure 1. 
- Two additional shared wires are required in addition to the system bus lines per the [[Parallel Port|model used in previous sections]]. These lines are inputs to the central arbiter and allow it to determine if anyone is making a request and whether the bus is currently in use. 
- The CA has one output line that is used to indicate permission to use the bus. This permission signal is often called a **token**. Notice that in this case, the token gets passed from one device to the next through the DAs. This is where the "daisy chain" part of the name comes from. For devices that aren’t capable or aren’t configured to act as a controller, they can either pass the signal through as shown, or they could have no connection to the arbitration system in the first place.

![[Distributed Arbitration.png]]

## 3-Wire Daisy Chain
