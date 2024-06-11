---
title: Bus Comparison
tags:
  - mte325
date: 2024-06-11
aliases:
  - bus comparison
---
Asynchronous transfers:
- Will be slower than an optimized synchronous bus if all of the attached interfaces have similar performance characteristics, since one transfer requires at least $4t_{p}$
- Supports a wide range of device/interface response times
- Verifies real values are being read, use time-outs for non-existent locations
- Treat the data as persistent

Synchronous transfers:
- Faster if all attached interfaces have comparable performance characteristics
- Transfer rate is limited by the slowest interface attached to the bus
- Treat the data as transient


Figure 15 graphically compares the speed for synchronous and asynchronous configurations while varying the average access time compared to the maximum access time in the system.

![[Bus Speed Comparison.png]]

- The synchronous transaction will always take the same amount of time as it is always limited by the slowest device. 
- The asynchronous transaction will perform significantly better if most transactions are fast, but loses its advantage when average access time reaches ~80% of the max.
	- This is because the extra propagation times for the control signals have now exceeded the speed advantage gained by varying the access time to the speed of each transaction.
	