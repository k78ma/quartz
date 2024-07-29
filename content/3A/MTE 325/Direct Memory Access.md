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

A system that supports DMA will have the appropriate hardware to take the place of the CPU when facilitating system bus transactions. In other words, DMA implements an alternate bus controller.