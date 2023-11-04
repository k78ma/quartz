---
title: Executables
tags:
  - mte241
date: 2023-11-03
aliases:
---
When we compile a C program, the compiler produces an executable. What goes into an executable depends on the environment it will eventually execute in. A Linux executable has more requirements than a Cortex M4 executable. 

At a bare minimum an executable consists of two parts before it starts running: code and data. 
- The code of an executable refers to the actual machine instructions that must be run. It might be possible to create a useful executable without data, but it is 100% impossible to create a useful executable without code! 
- The data of an executable really refers to the data that is available at the time of compilation, not at runtime. For instance, a global integer and its value are stored as data in the executable.

## Segments
Executables are broken into distinct segments or sections. This will always include at least a code segment and a data segment, but it may be more complicated than this.

Common segments regardless of platform:
- **.rodata** – Read Only Data. This is data that isn't supposed to change, such as strings, constants, and literals. This has special meaning in some microcontrollers, since rodata might need to be stored in RAM unless you do something specific. The Arduino suffers from this, where a string literal is stored in RAM unless you explicitly force it to live in flash.
- **.bss** – Used to indicate how how much space is required for global variables that are initialized to zero. As such, it takes up very little space in the executable (it’s just a start address and an end address), and when the executable actually runs the addresses are read, reserved and initialized to zero. BSS is the reason that you can initialize an entire array to zero (so you can do `int AR[100] = {0}`) but no other constant – there is no “initialize to 10” segment, but initialization to zero does exist.
- **.data** – This segment is used for initialized variables. It has to store the initial values of the variables, so if you are very concerned about space you should either not initialize your data or initialize it to zero, so it will go into bss and not data. On modern microcontrollers we are very rarely concerned about this.
- **.text** – The code itself.

###