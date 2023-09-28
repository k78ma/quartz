---
title: Cortex M4 Registers
tags:
  - mte241
date: 2023-09-27
---
The ARM Cortex M4 has 16 registers, some of which are “general purpose” and store arbitrary results, and others have special purposes that need to be respected.
![[Pasted image 20230925213406.png]]

- `r0 - r12`: General purpose registers. They just store data, and can be used however we (or the compiler) like.
- `r13`: Stack Pointer (SP). Points to the top of the stack for the current running process. 
	- This is the pointer used to determine where local variables go and how they should be accessed. Cannot be used for storing arbitrary data. Will try to access memory it shouldn’t if we don’t put a valid memory address in.
- `r14`: Link Register (LR). Used for storing the return address when we call a function. 
	- In C, once we reach the end of a function, we need to get back to where we were before. To do this we need to store the address we left off, which is what LR does.
- `r15`: Program Counter (PC). Used to store the address of the currently executing instruction in memory.
	- If we write a valid function address to PC, it makes the processor run that function. This is how a processor is loaded – PC is loaded with very specific address and instructions start executing.
- `PSR`: Program Status Register located at `r16`. Not called `r16` because it’s different from the other registers. Keeps track of operating conditions and settings, chip decides how to use it so we usually don’t count it as a register.