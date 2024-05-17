---
title: Non-vectored and Vectored Interrupts
tags: 
date: 2024-05-17
aliases:
  - non-vectored and vectored interrupts
---
## Non-vectored interrupts

![[Interrupt Handling.png|528]]

- All interrupt requests cause the same general handler to run
- The handler checks each device, with a priority setting determining order, to determine which one or ones set an interrupt
- When a device with an active interrupt is identified, the appropriate handler will be called
- Appropriate approach in the case of shared [[Interrupt Lines|interrupt lines]].
- Downside is that the general handler means that latency will be higher.

## Vectored Interrupts

![[Interrupt Handling-2.png|532]]

- Specific interrupt routines are associated with interrupt request lines
- No need for a general handler
- Lower latency
- A fixed priority is usually associated with each vector, and the user may need to configure the interrupt as active, associate a handler (ISR) and set the priority as part of the global initialization of the system.