---
title: Cortex M4 Stack
tags:
  - mte241
date: 2023-11-05
aliases:
---
C is a stack-based language and the Cortex M4 is often programmed in C, so we need a way to access a stack.

### SP, MSP, MSP
>[!info] Summary
>SP (Stack Pointer): Used by the processor to access the stack
>
>MSP (Main Stack Pointer): 
>- Just an address to load into SP
>- Always used in interrupts • Sometimes used for regular programs
>- Initialized via reset vector address 0x0
>
>PSP (Process Stack Pointer):
>- Another address to load into SP
>- Never used in interrupts
>- Sometimes used in regular programs
>- Initialized by the user/programmer
>



There is a single memory location that the CPU can access to put things onto or take things off the stack. This is called “**SP**”, the Stack Pointer. Whenever the CPU runs a PUSH or a POP instruction it does so using SP itself. 

SP just stores a location in memory that contains the top of the stack. The Cortex has two other locations, known as **MSP** and **PSP**, that are called “banked” registers. These registers allow us to maintain multiple stacks, storing the one that is not in use (“banking” it). 
- The Main Stack Pointer, is the default. MSP’s address is set by the startup code and is stored in the vector table at address 0x0 (see below). When the chip first boots, that address is retrieved and placed into SP. 
- As PUSH and POP operations are performed, SP changes but the original location of MSP does not, meaning that if we ever want to reset the stack entirely, we just point SP to the original location of MSP again. 
- PSP is set by user code and initially it contains random data that may or may not be a valid stack location.

![[Cortex M4 Stack.png|428]]

Why use both PSP and MSP? Unfortunately, the Cortex uses MSP exclusively whenever we are inside of an interrupt service routine. This means that we need MSP to remain unchanged and accessible, since it’s not up to us when the processor uses it. Our job is to do the following steps: 
1. Let the microcontroller set MSP on its own but never modify it ourselves;
2. Use MSP’s address to locate valid addresses for a bunch of stack pointers, one per thread, that will eventually be switched out (see the next chapter about the switching thing. Today we’re just going to deal with one MSP and one PSP).
3. Tell the microcontroller to use the stack pointed to by PSP when we start running our threads.

During the boot process, how does the chip know where to look for code and data? It uses the [[Reset Vector Table]].
