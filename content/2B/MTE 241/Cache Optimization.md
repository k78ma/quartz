---
title: Cache Optimization
tags:
  - mte241
date: 2023-09-27
---
How exactly is the small, fast [[cache]] optimized?

- **Block size**: memory access in RAM can be anywhere; caches are instead into blocks of fixed size, where you can either transfer the whole block or nothing. Thus, transfer circuitry can pull in more data faster, at the expense of not being able to transfer arbitrary data.
- **Hashing:** Caches are essentially copies of data already in memory, and that data already has a known address, which must be maintained because the CPU will eventually need to write it back to main memory. This is done via fast hash functions, so that the controller can first check a hash function to see if data is in the cache, and if so the whole [[Memory Cycle and Memory Bottleneck]] is avoided.
- **Locality of reference:** Compiles organize data in programs so that memory addresses are contiguous and accessed one after the other. Thus, whole blocks of adjacent data are brought in at once.