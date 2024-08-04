---
title: Distributed Arbitration Priority Uncertainty
tags:
  - mte325
date: 2024-07-25
aliases:
  - distributed arbitration priority uncertainty
  - priority uncertainty
---
Up until this point, it has been stated that the devices in the [[Distributed Arbitration|distributed arbitration system]] have fixed priority. The one closest to the central arbiter has the highest priority, and they decrease in order from there. 

However, there is a possibility during a small window of time, where no one is using the bus so `/BusBusy` is equal to 1, that a higher priority device makes a request but does not win the arbitration, such that a lower priority device ends up with control of the bus. This is a side-effect of daisy-chaining the `BusGrant` signals.

Consider Figure 9.
- Device $i$ is closer to the CA, Device $n$ is further from the CA. 
- The time window where priority can be violated will be $(n-i)\cdot t_{\text{DA}}$ and is called the **uncertainty time**, which is the time for the grant to be passed through the DAs between the two devices making requests.
- The existence of this window where priority does not behave as expected is called **priority uncertainty**.
- Uncertainty occurs when a high-priority device requests the bus after the BusGrant signal has passed it but before it reaches a lower-priority device, leading to potential priority inversion.

![[Distributed Arbitration Priority Uncertainty.png]]

- If Device $i$ makes the request at the time marked $t_{\text{Request i1}}$ (before the `BusGrant` signal reaches it), then it will win the arbitration and take control of the bus, as the request was made before the `BusGrant_0` token was received. 
- However, if Device $i$ makes the request at the time marked $t_{\text{Request i2}}$ (after the `BusGrant` signal has passed it), it will not get the bus. 
	- The grant token will propagate from the CA through the DAs up to DA $i$.
	- When DA $i$ sees the signal, `Request_i` has not been asserted yet, so it passes it on.
	- Once DA $i$ has passed on the `BusGrant` signal, there is a period of time where the grant may be propagating through devices that are not asking for the bus before it reaches Device $n$.
	- If the request by Device $i$ is made during this time, no device has control of the bus, but it cannot take control as it has already passed the token along.
	- This uncertainty period ends when the token reaches Device $n$ and it takes control of the bus.