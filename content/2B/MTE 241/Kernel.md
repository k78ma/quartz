---
title: Kernel
tags:
  - mte241
date: 2023-10-18
aliases:
  - kernel
---
The kernel is a gatekeeper. It talks directly to hardware, and on larger systems it is the only software that talks to hardware. The kernel runs in an extremely privileged mode in which any access is possible. Most OS, therefore, are written with at least two modes of execution that are possible:

- **Kernel mode:** Privileged mode with full access to all instructions and memory. Code can run any CPU instruction, and access any memory location that is available
	- Known as "privileged mode" on Cortex
- **User mode:** Can execute instructions associated with *processor* operations, cannot execute instructions associated with *hardware* buses (like the S-bus). Code that can run any instruction that affects the CPU alone, but none of the instructions that access hardware buses.