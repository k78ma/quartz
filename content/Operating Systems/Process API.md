---
title: Process API
tags:
  - os
date: 2023-06-25
aliases:
---

- [[Process Creation|Create]]: An OS must include some method to create new processes
	- An example of this is [[UNIX System Calls]]
- **Destroy:** Must include an interface to destroy processes forcefully
- **Wait:** Interface to wait for a process to stop running
- **Miscellaneous Control:** Other controls like suspending or resuming
- **Status:** Get status info about a process (duration, state, etc)

