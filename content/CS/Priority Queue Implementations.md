---
title: Priority Queue Implementations
tags:
  - dsa
  - cs
date: 2024-04-26
aliases:
---
## Unsorted Array
Like the [[Dictionary Implementations|unsorted array implementation of a dictionary]], we can do:
- Insertion in constant time.
- Find-min/max in linear time. 
- Delete-min/max can be done in linear time by combining find-minimum and then deleting.
## Sorted Array
- Insertion in linear time.
- Find-min/max in constant time.
- Delete-min/max is constant time, as we decrement the number of items `n`.
	- If this is a min-priority queue, we should sort in reverse order!

## Balanced Binary Search Tree
- Insertion is $O(\log n)$ – we traverse the tree to the correct location.
- Find-min/max is $O(\log n)$ – we traverse to either the left-most or right-most node.
- Delete-min/max is also just $O(\log n)$.

Find-min/max can actually be improved to constant time for all 3 data structures if we store a pointer/index to the minimum entry.
- This pointer is updated upon insertion of a new value iff the new value is less than the current minimum.
- In this case, Delete-min/max would become involve delete that minimum element we point to, and then doing a search to restore this canned value. The time complexity of this would just be whatever the time complexity of searching is.

## Heap
See [[Heap Data Structure|Heap]].