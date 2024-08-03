---
title: Detached DMA
tags:
  - mte325
date: 2024-08-02
aliases:
  - detached dma
---
The [[Integrated DMA|integrated DMAC]] had the advantage of reducing the number of bus cycles to transfer a piece of data from 2 to 1, but the drawback of only being usable for block transfers that involve the device it is integrated with. An alternative is to use a controller that is a standalone peripheral. This is known as a **detached controller**. We will specifically discuss the dual-address detached DMAC. The figure below compares the integrated and detached implementations.

![[Alternative DMA Controller Architectures.png]]

The detached DMAC acts as a surrogate CPU. It is called "dual address" because a read needs to be followed by a write to completely a single transfer; therefore, both the source and destination address are required.

There are additional registers required in the detached interface compared to the integrated case, which have been highlighted in yellow in the figure below.
- The `buffer` acts like the `MDR` in the CPU
- The `DIAR` is the device interface address register. It is used to store the address of the next location to be accessed in the device. 

![[Alternative DMA Controller Architectures-1.png]]

Assuming the DMAC is operating in [[Integrated DMA|cycle stealing mode]] (transfer of 1 byte per bus controllership), and block initialization has already been completed, the transfer of one unit of data will be as follows:
1. DMAC receives a request from the device.
2. DMAC participates in and successfully arbitrates for control of the bus.
3. DMAC initiates a read from the memory address stored in the `MAR` (or the device address stored in the `DIAR`). In other words, the [[Synchronous Bus#Controller Phase|control phase of the synchronous bus read cycle]] is completed.
4. Memory (or device) places requested data on the bus; in other words, the peripheral phase of synchronous bus read cycle is completed.
5. DMAC temporarily stores the data to be written in the `buffer`.
6. DMAC writes the data to the device at the address stored in the `DIAR` (or memory); in other words the controller phase of the synchronous bus write cycle is completed.

This ==requires twice as many bus cycles as the integrated version of the transfer, but no hardware changes to device interfaces.== 

> [!note] Why bother if the number of cycles is the same?
> Each DMA cycle requires 2 bus cycles, a read and a write. This is the same amount of cycles that are required for the data transfer portion of the [[Program Controlled Input and Output|programmed controlled I/O]] (CPU driven case). So why bother with using a detached DMA at all?
> 
> While the number of transfers has not been reduced, there are still significant savings from the CPU perspective as it no longer needs to be involved with the transfers.


## System Bus View
Consider which entities are driving signals on the synchronous system bus. 

If the CPU is currently bus controller, it will drive the address and control lines. All other entities, including the DMA controller, will only be listening to these lines. This is shown below; the diagram shows a detached controller, but the scenario would be the same in the integrated case. 
- When the CPU is in control, the DMAC is just another peripheral in the system. 
- The data lines to all entities are bi-directional to support reading and writing data to any address in the system.

![[Alternative DMA Controller Architectures-2.png]]


If the DMAC is currently bus controller, the CPU will have no involvement with the bus. The DMAC is now responsible for driving the address and control lines as shown in Figure 16. From the perspective of the peripherals, nothing has changed. They cannot tell the difference between a transaction controlled by the CPU and one controlled by the DMAC.

![[Alternative DMA Controller Architectures-3.png]]

