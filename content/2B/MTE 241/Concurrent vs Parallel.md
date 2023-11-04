---
title: Concurrent vs Parallel
tags:
  - mte241
date: 2023-10-09
aliases:
---
**Concurrency** is the property of a system where the various sub-tasks can be executed in any order. For example, when setting a table, it doesn’t really matter if you put the plates on first or the cups. 

**Parallelism** is the act of running multiple concurrent tasks at the same time, as if one person were putting the plates on the table while the other is putting the cups on the table. All parallel programs are concurrent, but not all concurrent programs are parallel. On a single core processor, we cannot execute anything in parallel, but it is still useful to have concurrency.