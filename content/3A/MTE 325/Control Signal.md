---
title: Control Signal
tags:
  - mte325
date: 2024-06-04
aliases:
  - control signal
  - active high
  - active low
  - clock
---
Control signals are used to trigger operations. 
## Active High vs. Low
They can be *active high*. meaning they indicate or perform a certain action when they are a logic 1. Or they can be *active low*, meaning they indicate or perform a certain action when they are a logic 0.

The name of the signal indicates whether it is active high or low, and typically describes the action it controls. Active low signals have a backslash in front, a bar over, or are suffixed with `_n`.

For example, an active high signal used to indicate that a read is being performed might be called  
`RD` and indicates the system is reading when it is a 1.  An active low version of this signal could be called `/RD` and would indicate the system is in read mode when it is a 0.

## Clocks
If it is the edge of the control signal that matters, it is often referred to as an edge-sensitive signal or a *clock*. The controlled element may be sensitive to the rising edge transition from 0 to 1, or  
falling edge transition from 1 to 0.

When a signal is called a clock in [[MTE 325 - Embedded Systems|MTE 325]], it should be taken to mean that the edges have significance for timing or control purposes. These signals may also be used to synchronize two or more devices. 

Some clocks are periodic, such as the typical system clock, which also tends to have a 50% duty cycle. In this case, values might be sampled on the rising edge and change on the falling edge. There are others, like the register clock signal used to store data after a bus transaction, that are not periodic and do not have a 50% duty cycle.