---
title: Monolithic Kernel
tags:
  - mte241
date: 2023-10-18
aliases:
---
“Monoliths”, in the context of computer programs, they are a single program compiled all at once. In a monolithic kernel, everything that is a kernel service happens in kernelspace. 

The huge benefit of a monolithic kernel is the efficiency of having a single program do everything. Specifically, once the kernel starts doing something, it doesn’t have to switch out of itself to get the job finished. 

The huge downside of the monolithic kernel is that if your kernel doesn’t have certain functionality…you’re screwed. You have to recompile the whole thing, which means you want to make sure your kernel is as big as possible to handle as many things as it can.