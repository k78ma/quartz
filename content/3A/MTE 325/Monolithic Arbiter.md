---
title: Monolithic Arbiter
tags:
  - mte325
date: 2024-07-25
aliases:
  - monolithic arbiter
---
So far it has been assumed that the central arbiter and distributed arbiters are physically separate, with each distributed arbiter residing within the device interface of the corresponding device. However, the same functionality can also be achieved by placing all of the arbitration logic inside a single physical chip. In this case, it is referred to as a **monolithic arbitration system**. 

![[Monolithic Arbiter.png]]

- In the model shown above, 4 devices are supported so 1 central arbiter and 4 distributed arbiters would be implemented inside the chip. 
- Not counting power and ground lines required to drive the logic, there are 8 wires to connect to the device interfaces: 4 sets of request and grant lines, one for each supported device. 
- The operation of these signals has not changed, the wires between the device and the distributed arbiter will just be longer since they are no longer co-located.