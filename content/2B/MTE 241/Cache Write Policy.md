---
title: Cache Write Policy
tags:
  - mte241
date: 2023-09-27
---
Cache is a copy of data in memory; RAM is used for storing the data itself in the relatively long term of a program’s runtime. When does the data that has only changed in cache get written back to memory?

Two main policies:
- **Write-through:** Maintain the most recent data in both cache and memory. As soon as cache is updated, write to memory.
	- Downside: a large number of writes to cache triggers a large number of writes to memory, which may hit the bottleneck again.
- **Write-back:** Once data in cache is written, mark it as “dirty”. Then, only once the data is removed from cache should it be updated in memory.
	- Upside: Memory access is minimized as much as possible
	- Downside: Have to keep track of what needs to be written

Modern general-purpose CPUs usually use write-back. 