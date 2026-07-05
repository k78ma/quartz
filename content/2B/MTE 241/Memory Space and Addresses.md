---
title: Memory Space and Addresses
tags:
  - mte241
date: 2023-10-02
aliases:
---
The number of bits used in addressing memory is the size of the *memory space* or address space. This is a linear range of addresses that we can put things in. The number of bits in each address governs how many possible locations you can access; for example, a 16-bit memory space would have $2^{16}$ locations (from $0$ to $2^{16}-1)$, and any addresses above this simply do not exist. This is why you can't add RAM; you simply can't access it!

"Addresses" refer to abstractions in terms of the smallest available unit of memory. Memory might be:
- Byte-addressable
- Word-addressable (4 bytes)
- Double word addressable (8 bytes)

For example, a word-addressable 8-bit memory space would mean there are $2^{8} = 256$ locations, and each location has 8 bytes of memory, so there are a total of $64 \times 4 = 1024$ bytes of memory.

>[!note] Smaller units
>It's possible to read or write smaller pieces of memory than the fundamental memory unit – you would simply read in the whole unit, then use CPU instructions to read or modify the appropriate bits – it just takes extra steps and therefore extra time.

It is predicted that memory will end at 64-bit memory spaces that modern computers use, as a byte-addressable 64-bit memory space would have 17 billion gigabytes. This is a lot of memory for one computer and would need hundreds of years to be searched by a modern computer.