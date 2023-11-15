---
title: OS Resource Management
tags:
  - mte241
date: 2023-10-18
aliases:
---
The most important purpose (and arguably only) purpose of an OS is to manage access to the computer's resources.

Why bother? An OS will always incur a performance cost compared to just writing in the bare metal. There are 2 reasons:
1. Writing the code that does resource management is very hard, and most of the time we aren’t interested in doing that. We are, instead, interested in using the resources that are available to solve problems quickly. The OS needs to provide services to make resource use easy.
2. Users and programmers absolutely cannot be trusted. Even worse, some people are trying to do things maliciously. The OS needs to prevent these things from being problems.

Types of resources:
- Physical resources, such as the CPU, memory, timers, and other hardware.
- Software resources, such as files, input/output streams, and file systems.
