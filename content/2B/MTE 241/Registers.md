---
title: Registers
tags:
  - mte241
date: 2023-09-08
---
Registers have small storage for temporary results.

### How do they work?
They are memory locations directly connected to CPU.
Consider the following ARM Assembly code:
```assembly
ADD r2, r1, r3
```
This adds `r1` and `r3` and stores results in `r3`

### Who figures this out?
The compiler almost always does this, but you have to do it if you are writing hand-optimized assembly or writing an OS.

### Why register machines?
Since instructions are physical electrical circuits