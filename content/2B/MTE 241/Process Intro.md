---
title: Process Intro
tags:
  - mte241
date: 2023-11-05
aliases:
---
Once an executable starts running, via a process known as “loading”, additional memory structures are created. 

At an absolute minimum, a C program requires a memory region known as a stack, which is where local variables and general bookkeeping is done. Another memory location, the heap, is used for dynamically allocated variables and is optional but usually present. 

Executables run inside of the “runtime environment”, which even on simple chips is not a trivial thing. The runtime environment is really just a description of the chip and any operating-system specific things that are available to an executable, so it includes things like the registers, perhaps timers, and services provided by the OS (like memory allocation). The runtime environment differs from one chip to the next and one OS to the next, which is why code compiled for one platform doesn’t work on another. 

Finally, the executable’s code is written (often by the compiler) to comply with the Application-Binary Interface (ABI). The ABI is a set of rules that the chip’s designer has created and anyone writing executables for that chip agrees to abide by. It specifies things like how function calls work, where return addresses are stored, and how registers are used. 