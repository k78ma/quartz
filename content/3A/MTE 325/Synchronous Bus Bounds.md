---
title: Synchronous Bus Bounds
tags:
  - mte325
date: 2024-06-10
aliases:
  - synchronous bus bounds
---
It can be useful to compute an upper bound on the frequency at which the bus clock can run. We require that all transactions must complete in one cycle, which means the speed of the bus will be limited by the slowest device in the system.

From the results below, we can conclude that the optimized clock likely doesn't have a 50% duty cycle – a lot more is being done in the peripheral phase than the controller phase.
## Read Transaction
### Controller Edge
After the controller (rising) edge of clock:
- Propagation delay for the address going to the peripheral ($t_{\text{PA}}$)
- Bus skew delay ($t_{\text{skew}}$)

This gives us:
$$
t_{\text{phase 1}}^{\text{min, Read}} = t_{\text{PA}}+t_{\text{skew}}
$$
In the case of consecutive cycles, the second cycle must delay for $t_{\text{hold}}$ at the start of phase 1. Thus, the upper bound is:
$$
t_{\text{phase 1}}^{\text{min, Read}} = t_{\text{PA}}+t_{\text{skew}}+t_{\text{hold}}
$$

### Peripheral Edge
After the peripheral (falling) edge of the clock:
- Address decode time at the peripheral ($t_{\text{select}}$)
- Response time (read time) for the peripheral device ($t_{\text{access}}$)
- Propagation delay for the data along the data bus ($t_{\text{PD}}$)
- Skew delay ($t_{\text{skew}}$)
- Setup time at the controller latch ($t_{\text{setup}}$)

Thus, our upper bound is:
$$
t_{\text{phase 2}}^{\text{min, Read}} = t_{\text{select}}+t_{\text{access}}+t_{\text{PD}}+t_{\text{skew}}+t_{\text{setup}}
$$
### Result
Thus, for the synchronous bus read cycle, we have:
$$
\begin{align}
T_{\text{bus cycle}}^{\text{Optimized, Synchronous, Read}}  & = t_{\text{phase 1}}^{\text{min, Read}} + t_{\text{phase 2}}^{\text{min, Read}} \\[2ex]
	 & = t_{\text{PA}}+t_{\text{skew}}+t_{\text{hold}} + t_{\text{select}}+t_{\text{access}}^{\text{max}}+t_{\text{PD}}+t_{\text{skew}}+t_{\text{setup}}
\end{align}
$$
Here, we're using $t_{\text{access}}^{\text{max}}$ to indicate the access time for the slowest interface ont he bus.

## Write Transaction
### Controller Edge
After the controller edge, we have:
- Hold time incase previous cycle was a read ($t_{\text{hold}}$)
- Propagation delay for the address and data going to the peripheral ($t_{\text{p}}$)
- Bus skew delay ($t_{\text{skew}}$)

This gives us:
$$
t_{\text{phase 1}}^{\text{min, Write}} = t_{\text{hold}}+t_{\text{p}}+t_{\text{skew}}
$$

### Peripheral Edge
After the peripheral edge, we have:
- Address decode time at the peripheral ($t_{\text{select}}$)
- Make the data available at the input of the destination register ($t_{\text{store}}$)
- Setup time ($t_{\text{setup}}$) at the controller latch

This gives us:
$$
t_{\text{phase 2}}^{\text{min, Write}} = t_{\text{select}}+t_{\text{store}}+t_{\text{setup}}
$$
These expressions can be used to derive the minimum time for a synchronous bus write cycle:
$$
\begin{align}
T_{\text{bus cycle}}^{\text{Optimized, Synchronous, Write}}  & = t_{\text{phase 1}}^{\text{min, Write}} + t_{\text{phase 2}}^{\text{min, Write}} \\[2ex]
	 & = t_{\text{PA}}+t_{\text{skew}}+t_{\text{hold}} + t_{\text{select}}+t_{\text{store}}^{\text{max}}+t_{\text{setup}}
\end{align}
$$