---
title: Distributed Arbitration Example
tags:
  - mte325
date: 2024-08-03
aliases:
  - distributed arbitration example
---
We let $t_{\text{CA}} = t_{\text{DA}}=1 \text{ ns}$.

Block diagram for reference:

![[3wire daisy chain.png]]

Initial state:

![[Distributed Arbitration Example.png|600]]

- Initially `/BusRequest` and `/BusBusy` are high, which tells us that the bus is initially idle. Thus, we expect all of the grant signals to be low, which is in fact true for our initial state.
- A good thing to look at right at the beginning is the `BusGrant3` signal. This is an output of DA 3. Since our system only has 3 distributed arbiters and devices, `BusGrant3` goes off the end of the system since there is no 4th request to grant to. Thus, it is always low.

The first request occurs at 1 ns from Device 3. A request from Device 3 goes to DA 3, which acts on the request by pulling `/BusRequest` low. There is a $t_{\text{DA}}$ request of 1 ns.

![[Distributed Arbitration Example-1.png|600]]

At 2 ns, the central arbiter sees that `/BusRequest` is low and `/BusBusy` is high, so someone is making a request and the bus is not currently in use. Thus, it will issue a bus grant/token , `BusGrant0`. This has a  $t_{\text{CA}}$ delay of 1 ns.

![[Distributed Arbitration Example-2.png|600]]

DA 1 will see the rising edge on `BusGrant0`, which is the token, and will check its local request line `Request1`. Since this is low, it will pass on the request to DA 2 but pulling `BusGrant1` high. Similarly, DA 2 will see the rising edge on `BusGrant1`, check its local `Request2`, see that it's not requesting anything, and pass on the token by pulling `BusGrant2` high.

![[Distributed Arbitration Example-3.png|600]]

DA 3 will see `BusGrant2` pulled high and look the status of its local request line `Request3`. It will see that it is indeed making a request since `Request3` is high. Therefore, it can take control of the bus. Three things need to happen here:
1. `/BusBusy` needs to be pulled low to show that we are taking control of the bus.
2. The local grant `Grant3` needs to be pulled high to let the device know it can start using the bus.

![[Distributed Arbitration Example-4.png|600]]

3. `/BusRequest` needs to be de-asserted. However, we need to check whether the other request lines are issuing requests. If other devices are making requests, `/BusRequest` stays low even if the current device is done with its request. In this case, Device 1 has an active request and Device 2 has started to make a request, so `/BusRequest` will indeed stay low.

The `/BusBusy` signal going low means that the CA will see that the bus is in use, so it will de-assert the grant `BusGrant0`, which will cascade through the system to de-assert `BusGrant1` and `BusGrant2` as well.

![[Distributed Arbitration Example-5.png|600]]

Nothing else changes until Device 3 is done with the bus. This happens at 8 ns, signified by `Request3` being pulled low. When the distributed arbiter sees this request go low, it will de-assert the local grant `Grant3` (don't forget that there's a time delay $t_{\text{DA}}$), telling the device it no longer has control of the bus. It will also de-assert `/BusBusy` so that other devices can begin using the bus. 

Since device 3 never makes any more requests (`Request` is low for the rest of the time), we can fill in `Grant3` as low for the rest of the time as well.

![[Distributed Arbitration Example-7.png|600]]

Going back to the central arbiter, we see that `/BusBusy` is high, so the bus not in use, and there is an active request since `/BusRequest` is low. This causes the central arbiter to issue a grant but setting `BusGrant0` to high.

![[Distributed Arbitration Example-8.png|600]]

DA 1 will see `BusGrant0`, check its local request line, and see that it is indeed making a request. It will then:
1. Issue the local grant `Grant1`, one delay later.
2. Assert `/BusBusy`.
3. De-assert `/BusRequest`. However, since Device 2 is also making a request, `/BusRequest` is kept low, even though Device 1 is no longer actively driving it.

![[Distributed Arbitration Example-9.png|600]]

At the central arbiter, now that `/BusBusy` has gone low, the grant will need to be taken away, so `BusGrant0` will also go low (one delay later). The grant only went down to Device 1, so it does not need to cascade any further down the chain.

![[Distributed Arbitration Example-10.png|600]]

The grant at Device 1, `Grant1`, will remain high until one delay after Device 1 signals that it is done with the bus by de-asserting `Request1`. `Request1` is de-asserted at $t=13 \text{ ns}$; so, at $t=14 \text{ ns}$, `Grant1` goes away. Device 1 makes no more requests for the rest of time so `Grant1` stays low for the rest of time.

At the same time that DA 1 de-asserts `Grant1`, it also needs to de-assert `/BusBusy` by setting it high.

![[Distributed Arbitration Example-12.png|600]]

At this point, the central arbiter once again sees that the bus is not busy, since `/BusBusy` is high, and that there is a request being made (`BusRequest` is low because of `Request2`). It issues a token by asserting `BusGrant0`; Device 1 sees this grant but does not have an active request so it passes it on to Device 2 by asserting `BusGrant1`.

![[Distributed Arbitration Example-13.png|600]]

We have reached the end of the time period. We can fill in the outstanding signals so that they reach the end of the time period.

![[Distributed Arbitration Example-14.png|600]]

We should note that there is a case of [[Distributed Arbitration Priority Uncertainty|priority uncertainty]] here – a higher priority device makes a request while the bus is not busy, but does not end up as bus master. At the highlighted point below, Device 1 made a request while the bus was not busy; however, Device 3 gets control of the bus, because the token had already propagated past Device 1 (`BusGrant1` was already high at this time).

![[Distributed Arbitration Example-16.png|600]]