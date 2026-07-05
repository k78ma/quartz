---
title: Heapsort
tags:
  - cs
  - dsa
date: 2024-06-30
aliases:
  - heapsort
---
Heapsort is a good example of algorithm design leveraging data structures. It is in fact just selection sort implemented with a heap data structure.

> [!note] Selection Sort
> [[Selection Sort]] is a basic sorting algorithm partitions the input array into sorted and unsorted regions. To find the smallest item, we performed a linear sweep through the unsorted portion of the array. The smallest item is then swapped with the $i$th item in the array before moving on to the next iteration. Selection sort performs $n$ iterations, where the average iteration takes $n/2$ steps, for a total of $O(n^{2})$ time.

What if we improve the data structure? The two operations we use in selection sort are:
- Find the smallest item, $O(n)$
- Remove item from an unsorted array after it has been located, $O(1)$

These are exactly the operations supported by a [[Priority Queue|priority queue]]! Thus, we can replace the array data structure with a better priority queue implementation, such as a [[Heap Data Structure|heap]] or a [[Balanced Binary Tree|balanced binary tree]]. The search operation now takes $O(\log n)$ instead of $O(n)$, speeding up selection sort from $O(n^{2})$ to $O(n\log n)$.

```c
void heapsort_(item_type s[], int n) {
	int i; /* counter */ 
	priority_queue q; /* heap for heapsort */ 
	
	make_heap(&q, s, n); \
	
	for (i = 0; i < n; i++) {
		s[i] = extract_min(&q); 
	} 
}
```

- For implementation of the heap functions like `make_heap` and `extract_min`, see [[Heap Data Structure]].

## Notes
- Heapsort is simple to program. 
- It runs in worst-case $O(n \log n)$ time, which is the best that can be expected from any sorting algorithm. 
- It is an in-place sort, meaning it uses no extra memory over the array containing the elements to be sorted. 
- Admittedly, as implemented here, my heapsort is not in-place because it creates the priority queue in q, not s. But each newly extracted element fits perfectly in the slot freed up by the shrinking heap, leaving behind a sorted array. 
- Although other algorithms prove slightly faster in practice, we won’t go wrong using heapsort for sorting data that sits in the computer’s main memory