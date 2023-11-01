---
title: Multilevel Cache
tags:
  - mte241
date: 2023-09-30
aliases:
---
Many processors have multiple cache levels. These are usually organized as:
- **L1:** Small (a few hundred MB). Accessible by processor almost immediately. Typical access times are 1 to 2 processor cycles. Cache misses ([[Cache Hit, Miss, Replacement]]) can be frequent.
- **L2 and below:** Increasingly larger. This means lower probability of a cache miss, but also further from the processor and slower to access. Replacement policies remove cached data from the faster levels into the slower levels before ultimately writing back to main memory once the slowest cache needs the space.