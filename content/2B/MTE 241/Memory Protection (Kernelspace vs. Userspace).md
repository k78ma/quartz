---
title: Memory Protection (Kernelspace vs. Userspace)
tags:
  - mte241
date: 2023-10-10
aliases:
---
- Kernel space: Memory not accessible to protected programs
- User space: Memory accessible to protected programs and the kernel

If a user program is running in user space, which is restricted, and hardware is only accessible by the kernel, how do we switch between user space and kernel space? This is done through the [[System Call]] interface.