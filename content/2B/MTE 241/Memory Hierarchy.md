---
title: Memory Hierarchy
tags: []
date: 2023-09-08
---
The memory hierarchy:
- [[Registers]]
	- Super fast
	- Super expensive
	- Super small
- Cache
	- Ultrafast
	- Ultra expensive
	- Ultra small
- Primary storage (RAM)
	- Fast
	- Expensive
	- Small
- Secondary storage
	- Slow
	- Cheap
	- Big

### Producer/Consumer Model
Why do we have a hierarchy at all?
CPUs consume data, memory produces data. CPUs are very fast compared to memory; if the consumer (CPU) can’t get the product fast enough, there is a bottleneck. Thus, the hierarchy exists to reduce the effect of this bottleneck.