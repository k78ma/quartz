---
title: System Calls
tags:
  - mte241
date: 2023-10-10
aliases:
---
System calls give [[Memory Protection (Kernelspace vs. Userspace)|userspace]] programs the ability to ask the kernel to do something.

The kernel may refuse, depending on how it is written and what the system call is. For example, in Linux, if a file is already open in one process it cannot be deleted by another. The open and delete operations on that file were both handled via system calls, and the OS enacted a rule that says “you cannot delete an open file” when the delete call came in.

Practically, a system call is simply a function, typically accessed via an [[interrupt]]. The function that defines a system call does not get compiled into the user program's code. Rather, it lives in a fixed place in memory. 

Let’s see how this works. 
- When you trigger a system call, the system call handler is called to provide a kernel service. Since the handler is always at the same location in memory, the mechanism by which we trigger a system call just needs to know that address, and then call the function pointer stored there.
- In this way, a userspace program can call a kernel function without having to have it compiled into that userspace program – it’s always at the same fixed address, so the userspace programs simply need to know that address. In general, it looks like this:

![[System Calls.png|440]]

### SVC Function
