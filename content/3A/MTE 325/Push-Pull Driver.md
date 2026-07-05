---
title: Push-Pull Driver
tags:
  - mte325
date: 2024-06-08
aliases:
  - push-pull driver
---
A push-pull driver is a standard [[Hardware Driver|hardware driver]].  The schematic symbol for a push-pull driver is the same as a buffer, as that is the behavior of the circuit. 
- "Push" means sourcing current
- "Pull" means sinking current.

Both sourcing and sinking current is done through a [[Transistor|transistor]]; thus, this is an active driver. The implementation of the push-pull driver makes use of two inverters in series, as it's easier to implement negative logic with CMOS than non-inverted logic.

![[Push-Pull Driver-1.png]]

## Two-Stage Gate Implementation
*If the driver has no effect on the logic value, why bother?* Most logic gates are built in two stages, as shown for an AND gate in Figure 19.
- The first stage uses smaller transistors because they are faster and consume less power. At the end of the first stage, the desired gate logic has been implemented
- The second stage is the output driver. It uses larger transistors that are capable of sourcing and sinking larger currents, allowing them to drive the value over longer distances and meet the needs of the next circuit stage. This stage simply passes along the value it receives.

![[Push-Pull Driver.png]]

## Multi-Device Buses
The original challenge of connecting two devices to the same bus driver is not resolved by push-pull drivers. In Figure 20, if device 1 has an input 1 and device 2 has an input of 0, the top transistor will connect the supply to the output for device 1, and the bottom transistor will connect the output to the ground for device 2. 

Then what will the value of the output be? Initially, it will be somewhere in between, but then it will settle to one value or another depending on which transistor is damaged to the point of failure first. 

![[Push-Pull Driver-2.png]]

Any time there's a circuit capable of active connections to both power and ground, there's a potential conflict; if both are activated at the same time, there's a short and the circuit will blow up. To prevent damage, we can use:
- Permanent solution: Remove one of the active paths (all transistors connected to power or all transistors connected to ground)
- Temporary solution: Disable active paths temporarily