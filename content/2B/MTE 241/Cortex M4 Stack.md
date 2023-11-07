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

### Reset Vector Table
During the boot process, how does the chip know where to look for code and data?

Chips are hard-wired to look for code at a fixed address and start executing that. In addition to the first instructions they run, the chips are also hard-wired to look at specific memory locations for certain pieces of information. On the Cortex M, these memory locations are known as the Reset Vector Table and the table stores several important things. 

Let’s take a look at it in Figure 18. Notice how address `0x0` is referred to as the “Initial SP value” – this is the value stored in flash memory that gets loaded into MSP as soon as the processor boots, so that the stack is a valid memory location.

![[Cortex M4 Stack-1.png|408]]

Other interesting memory addresses are:
- `0x04` – the Reset address – which stores the initial value for PC. This is, essentially, the first instruction that is run. 
- `0x0C`, Hard Fault. Your code is going to hard fault a lot! This address stores the address of a function called the Hard Fault Handler, which is usually made for you by the compiler but can be modified. Once your code hard faults (mainly because it tried to do something against the rules) this function gets called and, unless you are very good, never returns.
- `0x0` is a valid address – This stores the initial address of MSP (and therefore SP) • We access it like this: `uint32_t* MSP_INIT = *(uint32_t*)0;`

