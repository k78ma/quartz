---
title: Interrupt Setup
tags:
  - mte241
date: 2023-10-13
aliases:
---
Once an interrupt triggers the chip does some setup to ensure that normal execution can resume if possible. Note that this is all done for you by the CPU.

1. When we interrupt, we need to return to the exact same place as we stopped. That we need to store PC, the program counter. Otherwise, we wouldn’t know where to return to. 
2. An interrupt is a function, and may use the stack. This means we need to store stack pointer (SP). Interrupts are weird – it may be that the stack pointer itself changes (as in from MSP to PSP), or that we enter a mode of operation in which the stack moves to a different location. For this reason, SP is saved. 
3. Interrupts rarely use input arguments, but they may call functions that do. We need to save R0 through R3 for function input and output arguments. 
4. If the interrupt calls functions, it will need to store return addresses.
5. Just save R12. The compiler knows what it does, it knows it is important, and it has to be saved.