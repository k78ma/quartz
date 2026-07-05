---
title: Memory Hierarchy
tags: []
date: 2023-09-08
---
The memory hierarchy:

![[Pasted image 20230923140901.png]]

- [[Registers]] – extremely limited memory locations built into the CPU itself
	- Only a few dozen bytes of space
	- Store intermediate results without having to send those results back and forth to RAM
	- Special functions – storing return addresses for function calls
- [[Cache]]
	- Not available on all processors
	- Store frequently used data in extremely fast memory
	- Also reduces the amount of time spent requesting stuff from RAM
- [[RAM]]
	- “Primary storage” – main location CPUs use to access code and data while running, much faster than permanent secondary storage
- Secondary storage
	- Slow, permanent memory
### Producer/Consumer Model
Why do we have a hierarchy at all?
CPUs consume data, memory produces data. CPUs are very fast compared to memory; if the consumer (CPU) can’t get the product fast enough, there is a bottleneck. Thus, the hierarchy exists to reduce the effect of this bottleneck.
