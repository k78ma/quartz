---
title: Registers
tags:
  - mte241
date: 2023-09-08
---
Registers have small storage for temporary results. They are memory locations directly connected to CPU.

### How do they work?
Consider the following ARM Assembly code:
```assembly
ADD r2, r1, r3
```
This adds `r1` and `r3` and stores results in `r2`.

### Who figures this out?
If we are writing assembly by hand we have to know which registers exist and what they are used for, and how to use them correctly. In higher-level languages like C it is the compiler’s job.

