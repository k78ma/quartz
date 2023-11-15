---
title: Microkernel
tags:
  - mte241
date: 2023-10-19
aliases:
---
In a microkernel, the kernel does as little as possible. It is only responsible for all hardware interfacing and possibly some security. 

It will receive data from other programs that are running at lower privilege levels, sometimes even just userspace. For example, the hard drive driver may spend almost all of its time in userspace, setting up messages that need to be passed to the hard drive. Once this part is done, and only then, does the kernel get called (via a system call) to actually do the hardware interfacing.

Advantages of microkernel architecture:
- The kernel itself is tiny, requiring only enough code to handle the hardware interfacing.
- The OS, which we might consider to be built of the kernel and the drivers, is easy to expand. If you want new functionality, you write it into userspace and, presuming the kernel is written broadly enough, everything will just work.
- The OS is more secure, in theory, since almost everything happens in userspace. It’s not possible, for instance, for the hard drive driver to accidentally delete the hard drive, since it can’t physically access the hard drive.

Why are microkernels not widely used? 
- Inefficient and hard to get right.
- In order for a microkernel to work it has to be constantly passing messages to and from userspace. This overhead takes a lot of time, resulting in performance hits. This is why older computers especially use monolithic kernels.