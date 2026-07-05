---
title: Virtual Memory and Paging
tags:
  - mte241
date: 2023-10-05
aliases:
---
A major distinguishing factor between a "microcontroller" and "computer" is the existence of virtual memory. The Cortex M series does not have this. See [[Virtualization]].

Essentially, we make each process believe it has access to the entire memory space via paging. This simplifies a ton of problems, especially in compilation. This makes it so that many large processes can run on the same processor at once, Incurs a cost during a page fault. If the data required is not in RAM, it must be swapped out. All of this is managed by a Memory Management Unit.

#### Paging
What happens if you try to run a 2GB processes on a 32-bit machine? Theoretically, you would run out of RAM and it wouldn't run. But word-size is 32 bits, not 2GB; so, we put unused data into "pages" on the secondary storage, which tends to be larger than RAM.

Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory and thus eliminates the problems of fitting varying sized memory chunks onto the backing store. It works by dividing physical memory into fixed-sized blocks known as "frames" and dividing logical memory into blocks of the same size, called "pages."


1. **Physical and Logical Memory Division:** When a process is to be executed, its pages are loaded into available memory frames from their source (like a disk). Not all pages of a process need to be loaded immediately, which allows for more efficient memory utilization.
    
2. **Page Table:** The operating system maintains a page table for each process, which maps the logical page numbers to physical frames. The page table is kept in main memory.
    
3. **Address Translation:** When a process executes and accesses its memory, the CPU generates a logical address divided into:
    
    - **Page number (p):** Used as an index into the page table.
    - **Page offset (d):** Combined with the frame number from the page table to define the physical memory address that is sent to the memory unit.

4. **Page Fault:** If a process tries to access a page that's not currently in memory (i.e., not loaded into a frame), a page fault occurs. The operating system will then load the required page into memory, update the page table, and then the process can access the page.
    
5. **Swapping:** When memory is full, and a process needs to load a new page, the OS might need to swap some pages out of main memory and onto the disk (backing store). The decision of which page to remove is determined by a "page replacement algorithm" (like LRU, FIFO, etc.).