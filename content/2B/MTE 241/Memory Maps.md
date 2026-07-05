---
title: Memory Maps
tags:
  - mte241
date: 2023-10-02
aliases:
---
Memory spaces are not just used for RAM, as RAM is often much smaller than the entire memory space. The layout of memory is detailed by memory maps.

![[Memory Maps.png|460]]

In the memory map of the Cortex shown above, there are some things we should note:

- Hexadecimal memory addresses: Lowest is `0x0` and highest is `0xFFFF FFFF`, which corresponds to $2^{32}-1$.
- Memory is organized into 512 MB [[Memory Blocks|blocks]]. This is more than the Cortex M4 ever uses for its blocks, but it's good to have more than you need for future-proofing purposes.
- Reserved portions. This can mean several things:
	- Future expansion.
	- Common core: Chips may share a common core set of features, so space is reserved for fancier chips to do their extra functions.
	- Circuit optimization: Addresses aren't mapped because it isn't necessary or practical to create circuits that use them. This is seen in peripherals, where only 2 or 3 bits of an entire 32-bit address are used and the rest are “reserved”. It really just means that it was easier to route wires to those specific bits, given how the rest of the circuit was placed.