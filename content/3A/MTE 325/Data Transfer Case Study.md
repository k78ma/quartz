---
title: Data Transfer Case Study
tags:
  - mte325
date: 2024-05-27
aliases:
  - data transfer case study
---
Let's compare the time taken to produce and transfer the same block of data using the various synchronization methods.

## Initialization
### Global Initialization
Regardless of the synchronization method, some initial setup is usually required when using devices in an embedded system, known as **global initialization**. This includes the routines run once to configure interface parameters.
- For example, if interrupts are being used, they need to be enabled on the device side, enabled on the CPU side and the interrupt vector may need to be configured to point to the right [[Interrupt Handling|ISR]].
- Embedded systems usual complete the global initialization step in main before entering into an infinite loop

### Transfer Initialization
Once the system is running, a point will be reached where there is a need to transfer data. The transfer must be initialized before any data is moved. 
- This could include indicating the type of transfer, and setting a memory location to provide or accept the data, or setting block and track numbers for a disk transfer. 
- The steps that must be done once at the start of each transfer are called **transfer** **initialization**. Later on, when the idea of multiple transfers per initialization cycle is introduced, it will be known as block initialization.

## Transfer
### Assumptions/Setup
For the sake of comparing the various synchronization methods and combinations, a generalized model of I/O behaviour with as few restrictions as possible will be used. The transfer will be read transactions, transferring data from a device interface to the processor. One data unit is the data transferred in one bus transaction, the size of the unit in bits is equal to the width of the data bus.

A *block* is a set of data units that only require synchronization, or transfer initialization, to occur once before all data units in the block are transferred. 
- For example, synchronization can occur for each sector of a disk, for each block transmitted using a synchronous communication channel, or for a single byte written to an I/O device.
- Block synchronization typically happens before the data is transferred, and we will assume this is the case.

### Data Generation
Let's consider the case where only unit of data is transferred per block and compare the synchronization methods for [[Data Generation|data generation]] – consumer sensitive, spontaneous, and consumer responsive.

![[Data Transfer Case Study.png|576]]

![[Data Transfer Case Study-1.png|576]]

Assuming that data production takes a set time and is consistent for every block produced, the three data generation techniques can be compared in terms of the total cycle time per transfer. 

**Consumer-sensitive:** After a data unit is produced, it must be transferred before the production of the next unit can begin. This production starts as soon as the transfer is complete.

**Spontaneous:** Production of the next data unit can begin as soon as the current one finishes, such that $t_{\text{transfer producer}}$ can overlap the data production. This results in a faster per unit total time for the spontaneous case compared to the consumer-sensitive case.

**Consumer-responsive:** After a data unit is produced and transferred, production of the next unit doesn't start until the consumer requests a new piece of data. Depending on the length of the delay between the completion of transfer and this request, the total time for the consumer responsive call will at best be close to that of the consumer sensitive transfer.

### Notification/Initiation
The second level in synchronization is [[Data Notification|data notification]]. To compare the types of interrupt methods, assume data generation is being done in a consumer-sensitive manner and each block only consists of one data unit.

![[Data Transfer Case Study-2.png]]

**Blind:** The blind case is difficult to illustrate as the timing of the transfers is arbitrary. 

**Tight polling:** 
- The CPU spends all its time tight-polling ($t_{\text{sync-poll}}$), while the producer creates the piece of data ($t_{\text{interdata}}$). 
- The consumer then initiates the transfer of data once it is produced. 
- The consumer's view of how long the transfer takes, $t_{\text{transfer consumer}}$, is longer than what the producer sees as transfer time. 
	- The side of the longer time will always be the one initiating the transfer.

**Interrupts:**
- The CPU is free to do other work, $t_{\text{other}}$, throughout the data production $t_{\text{interdata}}$ time.
- However, there's a large delay between the production of data and the actual transfer, as the synchronization only includes the time between seeing that the interrupt occurred and initiating the correct ISR. It does not include the actual transfer.

**Periodic/Occasional polling:** The CPU would have some time to complete other tasks, but less than the interrupt case. It's difficult to precisely determine the timing, as the exact timing depends on how the poll cycle happens to fall with respect to the data becoming available.

In terms of total cycle time, interrupts are slower than tight polling due to the longer synchronization delay between the completion of data production and the start of the transfer. The trade-off is that the CPU has significantly more time to do other things.

Since $t_{\text{transfer producer}}$ is less than $t_{\text{transfer consumer}}$, the overall transfer time is $t_{\text{transfer}} = t_{\text{transfer consumer}}$. The transfer is consumer-initiated because $t_{\text{transfer consumer}}$ starts before and ends after $t_{\text{transfer producer}}$.

### Comparisons
Let $t_{\text{wait}}$ be the time not spent transferring the data. 
- In the tight polling case, this will simply be the time we spend polling.
- In the interrupt case, this will be $t_{\text{interdata}}+t_{\text{synch interrupt}}$ since they do not overlap.

This lets us compare the CPU time and transfer time in a generic way:
$$
\begin{align}
t_{\text{transfer}}&=\max(t_{\text{transfer producer}}, t_{\text{transfer consumer}}) \\[2ex] 
t_{\text{wait}}&= \begin{cases}
t_{\text{sync poll}}   &  \text{Polling} \\
t_{\text{sync interrupt}}+t_{\text{interdata}} & \text{Interrupts}
\end{cases}
\end{align}
$$
We can also write some generic equations that calculate the CPU time and total transfer time using either tight polling or interrupts with a consumer-sensitive device. 

![[Data Transfer Case Study-3.png]]

- The total time decreases significantly as the items per synchronization decrease
- With tight polling, the CPU time and total transfer time are equal.
- With interrupts, the CPU time is lower by $t_{\text{interdata}}$ times the number of synchronization cycles. This accounts for time where the CPU is free to do other work.

Note that the assumption that $t_{\text{interdata}}$ is fixed regardless of the size of the block is most likely not true. 

### Block Size
Let's say that we have 256 data units we want to transfer. This means we can set out block size to 1, in which case we would need 256 synchronization cycles. In the other extreme case, we can set our block size to 256, which would only require one cycle.

Block size/synchronization cycles has an effect on read performance.

![[Data Transfer Case Study-4.png|620]]
