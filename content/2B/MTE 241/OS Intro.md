---
title: OS Intro
tags:
  - mte241
date: 2023-10-08
aliases:
---
An operating system (OS) is a program or set of programs that provide and control access to resources on a computer. The PC’s OS’s purpose is twofold: 
1. Make sure that untrusted programs do not mess up the hardware (like erasing the hardware)
2. Abstraction: Make sure that the application programmers do not need to know anything about how the hardware works

### OS Organization
There are two core parts to an OS:
1. **Kernel:** Software that talks directly to hardware and guards access to it. Usually, no other software is allowed to do this. Non-optional.
2. **API:** Provide simple methods to access hardware. APIs are theoretically optional if the OS was written for a specific purpose and will only ever be used by the person who programmed it.

The "kernel" is difficulty to define, but we will just consider it to be the core part of the OS and any [[RTOS]]. 

Traditional UNIX system structure:
![[OS Intro.png|532]]
