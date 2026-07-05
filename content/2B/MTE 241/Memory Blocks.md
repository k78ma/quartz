---
title: Memory Blocks
tags:
  - mte241
date: 2023-10-02
aliases:
---
Arcane knowledge – not practical to know
#### Block 0: Code
Stuff that isn't in RAM or control settings. Things to note:
- Flash memory is mapped to addresses `0x0800 0000` to `0x0807 FFFF`. This is just under 512KB, (largest possible flash memory on a Cortex M4).
- The first `0x7 FFFF` memory addresses are “aliased”. Practically this means you can use either RAM, flash, or system memory here if you set the chip up correctly. By default this maps to flash memory. Notice how big it is – exactly `0x7 FFFF` bytes, or exactly as large as flash memory can be. This is where the “aliasing” part comes in – you don’t get two flash memories, but you can map the addresses to each other. A mapping might say address `0x0` maps to `0x800 0000` and so on, essentially making access to 0x0 equivalent to access to `0x800 0000`. Why one might want to do this is more up to the compiler than anything – if it feels like starting its access at `0x0`, it can.

#### Block 1: SRAM
RAM! A contiguous section (96 KB in the case of Cortex M4). This is an example of "reserved" in [[Memory Maps]] indicating common core features.

#### Block 2: Peripherals
…see [[MMIO]]