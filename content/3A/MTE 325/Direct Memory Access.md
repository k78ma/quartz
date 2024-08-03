---
title: Direct Memory Access
tags:
  - mte325
date: 2024-07-29
aliases:
  - direct memory access
  - DMA
---
Up to now, CPU has been the only controller on the system bus. Previous chapters have covered how the [[System Bus|system bus]] works, how devices can use a [[Parallel Port|parallel interface]] to interact with the system bus, and how [[Controller Arbitration|arbitration]] allows a system to support multiple controllers without conflicts. Now that the foundation has been laid, it is time to introduce direct memory access (**DMA**). 

Direct Memory Access (DMA) is a feature of systems that allows peripheral devices to access the main system memory independently of the central processing unit (CPU). DMA enables these devices to transfer data directly to or from memory without requiring the CPU to manage the data transfer, thus freeing up the CPU to perform other tasks.

A system that supports DMA will have the appropriate hardware to take the place of the CPU when facilitating system bus transactions. In other words, DMA implements an alternate bus controller.

Specifically, DMA adds an additional **DMA Controller (DMAC)** to reduce the workload on the CPU. This is the hardware component that manages the DMA process. It controls data transfers between memory and peripherals, acting as an alternate bus controller when a DMA operation is in progress.
- [[Integrated DMA|Integrated DMAC]]: The DMA control functions (Byte Count Register, `MAR`, Control Register, and Status register functions) are part of the device interface.
- [[Detached DMA|Detached DMAC]]: The DMA control functions are implemented in a detached control interface separate from both the processor and the device interfaces that use the DMA functionality. Two address cycles are used per transfer; one to read the data from the source, and one to write the data to the destination (dual-address protocol).

