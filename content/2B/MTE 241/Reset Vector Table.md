---
title: Reset Vector Table
tags:
  - mte241
date: 2023-10-19
aliases:
---
During the boot process, how does the chip know where to look for code and data?

Chips are hard-wired to look for code at a fixed address and start executing that. In addition to the first instructions they run, the chips are also hard-wired to look at specific memory locations for certain pieces of information. On the Cortex M, these memory locations are known as the Reset Vector Table and the table stores several important things. 

Let’s take a look at it in Figure 18. Notice how address `0x0` is referred to as the “Initial SP value” – this is the value stored in flash memory that gets loaded into MSP as soon as the processor boots, so that the stack is a valid memory location.

![[Cortex M4 Stack-1.png|408]]

Other interesting memory addresses are:
- `0x04` – the Reset address – which stores the initial value for PC. This is, essentially, the first instruction that is run. 
- `0x0C`, Hard Fault. Your code is going to hard fault a lot! This address stores the address of a function called the Hard Fault Handler, which is usually made for you by the compiler but can be modified. Once your code hard faults (mainly because it tried to do something against the rules) this function gets called and, unless you are very good, never returns.
- `0x0` is a valid address – This stores the initial address of MSP (and therefore SP) • We access it like this: `uint32_t* MSP_INIT = *(uint32_t*)0;`
