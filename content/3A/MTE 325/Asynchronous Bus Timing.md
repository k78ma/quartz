---
title: Asynchronous Bus Timing
tags:
  - mte325
date: 2024-06-11
aliases:
  - asynchronous bus timing
---
Now that the sequence for both [[Asynchronous Bus|asynchronous read and write transactions]] have been established, we can consider the speed of the bus. 

The read time was shown to be the dominant time when determining minimum cycle times. For an asynchronous bus, the time will vary based on the access time of the current device. Comparing to the [[Synchronous Bus|synchronous case]], there are 3 major differences:
- $4t_{p}$ are needed in the asynchronous case due to extra handshake
- The current access time is used of the max access time. This also means there is no single read cycle time for this configuration.
- The hold time is no longer included as it overlaps the extra propagation times to de-assert the control signals.

The time for an optimized, fully interlocked, asynchronous bus will be:
$$
\begin{align}
T_{\text{Bus cycle}}^{\text{Asynchronous, Read}}  & = 2t_{\text{p}}+t_{\text{skew}}+t_{\text{select}}+t_{\text{Access}}^{\text{Current transfer}} + 2t_{\text{p}} + t_{\text{skew}}+t_{\text{setup}} \\[2ex] 
	 & = 4t_{p}+2t_{\text{skew}}+t_{\text{select}}+t_{\text{Access}}^{\text{Current transfer}} + t_{\text{setup}}
\end{align}
$$
An average value of this could be derived using $t_{\text{access}}^{\text{average}}$ as $t_{\text{access}}$.

Transaction times are now variable; each peripheral knows its own access/store time and can assert the `peripheral` signal accordingly. As such, the restriction on synchronous buses that time was limited by the slowest device in the system has been lifted. The fully interlocked control signals also means there's a mechanism to verify that a device actually exists. 

The trade-off is that a transaction to an unassigned address or malfunctioning device will hang the bus, since `peripheral` is never asserted. Most practical asynchronous buses have a time-out on the transaction, such that the transaction aborts and logs an error after a certain amount of time.




