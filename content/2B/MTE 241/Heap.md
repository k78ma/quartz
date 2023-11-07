---
title: Heap
tags:
  - mte241
date: 2023-11-06
aliases:
---
The heap is a memory region that is used for dynamic allocation of memory – this is memory that we do not know we need until the executable starts to run. 

The heap must be managed by the programmer because there is no obvious time when a variable goes out of scope. 
### Heap Location
Most processors specify the heap's location via two pointers:
- The name isn’t important, so assume it is `HEAP_START` and `HEAP_END`

### ARM freelist
The freelist method is used by ARM processors:
- When not allocated, the heap is just sitting there
- Put the metadata into the heap itself.

Freelist-based heaps are:
- Singly-linked lists
- Each block stores:
	- Its size
	- A pointer to the next free block
	- Potentially an ALLOCATED/DEALLOCATED flag

Allocation is done by “first to fit"
- Allocate to the program the first block that fits
- Resize the block if needed
- Deallocation is done by marking the block as free

>[!example]- Freelist Allocation
>1. Initialized heap
>- NULL because it's the only block
>- This block is unallocated
>- The rest of the memory is not used
>
>![[Heap.png|350]]
>
>2. After a few calls to malloc:
>   
>![[Heap-1.png|350]]
>
>3. After a free:
>   
> ![[Heap-2.png|400]]


### Managing the Heap
The two C functions to dynamically allocate or release memory are: 
- `malloc` (Memory allocate), use to allocate memory on the heap.
- `free`, releases the memory back onto the heap.
#### Malloc
Malloc returns a void pointer but, in C, you don’t have to cast it. This is because the left side of the call to malloc determines the data type. To use malloc you need to use the “sizeof” operator, which is a keyword in C. It looks like this: 

```c
int* myInt = malloc(sizeof(int)); 
int* arrayOfSize10 = malloc(10*sizeof(int)); 
```

Note that to make an array of something you just multiply the output of `sizeof` with the number of elements you want. Malloc returns NULL if there is not enough memory to allocate. 

#### Free
The call to `free` takes the name of the pointer you previously allocated, like this: 
```c
free(myInt); 
```

#### Best Practices
In an embedded system we want to avoid using dynamically allocated memory repeatedly. This is for two reasons: 
1. **Memory leak:** Programmers often forget to call free when they should, and therefore the memory is never released. This is a memory leak, which is really bad when you have limited memory in the first place.
2. **Memory fragmentation:** Essentially, there might be a kilobyte of free memory available, but because you kept allocating and releasing single bytes, the heap is broken into one-byte chunks. It’s possible to defragment, but that is computationally intensive and many microcontroller implementations of malloc and free do not do it. Therefore, the heap looks full but it isn’t and there’s nothing you can do about it.

Better heap management means more overhead
- Why not merge contiguous free blocks? Sure, but now you have to find them and update them every free.
- Why not periodically defragment by moving all free blocks to one end? LOTS of memory overhead, which is inefficient. Also, who controls when this happens?
- Why not use a better data structure than a linked list? More initial overhead and memory use. ARM’s heap mode does use a tree-based structure

In general:
- Only allocate onto the heap if you are very certain you need to! 
- A bad idea would be to constantly malloc and free space for each running thread. Threads run many times per second, and you will rapidly fragment memory
- A good idea would be to dynamically allocate space for all threads at once then only call free if the kernel encounters and error and has to return to a safe mode. 
- An even better idea would be to set up a linker script so that you know exactly where your threads go at all times and never use malloc in the first place.

There are other functions in addition to malloc. The common ones are:
- `calloc` – Clear and allocate, which sets the memory equal to zero before giving it to you)
- `realloc` – reallocate, which resizes the memory already allocated, copies things over, and frees the original.
