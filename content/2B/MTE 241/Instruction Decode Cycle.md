---
title: Instruction Decode Cycle
tags:
  - mte241
date: 2023-09-25
---
A program is comprised of instructions and data. 
- An instruction is just a subcircuit on the CPU that is presented with voltages, which are then modified to produce a result.
- Voltages are stored in memory (RAM/flash memory)

The CPU has to perform same steps repeatedly to keep itself fed with instructions. This is the instruction decode cycle:
- Fetch (get data)
- Decode (figure out what to do with data)
- Execute (actually do what was decoded)
- Store (write back to memory or just store this instruction in cache for future speedup)

![[Pasted image 20230925212348.png|428]]

Connecting every instruction to every memory address is impractical. Instead, they are connected the instructions to a few memory locations ([[Registers|registers]]), and then to connect these memory locations to a memory bus, which itself is connected to main memory. This reduces the size of the circuitry at the expense of speed.