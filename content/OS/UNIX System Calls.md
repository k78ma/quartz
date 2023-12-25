---
title: UNIX System Calls
tags:
  - os
date: 2023-06-25
aliases:
---

These essentially serve as APIs for abstractions like [Process Creation](Process%20Creation.md).

- [fork()](fork().md)
- [wait()](wait().md)
- [exec()](exec().md)

## Why?
Why would we build such an interface to do what should be the simple act of creating a new process? Well, as it turns out, the separation of `fork()`and `exec()` is essential in building a UNIX shell, because it lets the shell run code after the call to fork() but before the call to exec(); this code can alter the environment of the about-to-be-run program, and thus enables a variety of interesting features to be readily built.

The shell is just an user program, which shows you a prompt and then waits for you to type something into it.