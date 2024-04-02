---
title: Dictionary Implementations
tags:
  - dsa
date: 2024-04-01
aliases:
---
What data representation is appropriate for implementing a [[Dictionary]]? What are the running times for all the dictionary operations (search, insert, delete, successor, predecessor, minimum, maximum) when the data structure is implemented as:
- Unsorted array
- Sorted array
- Singly-linked unsorted list
- Doubly-linked unsorted list
- Singly-linked sorted list
- Doubly-linked sorted list

This reveals some of the inherent trade-offs of data structure design. A given data representation may permit efficient implementation of certain operations at the cost that other operations are expensive.
## Arrays
| Operation          | Unsorted Array | Sorted Array |
| ------------------ | -------------- | ------------ |
| `Search(A, k)`     | $O(n)$         | $O(\log n)$  |
| `Insert(A, x)`     | $O(1)$         | $O(n)$       |
| `Delete(A, x)`     | $O(1)$         | $O(n)$       |
| `Successor(A, x)`  | $O(n)$         | $O(1)$       |
| `Predecessor(A,x)` | $O(n)$         | $O(1)$       |
| `Maximum(A)`       | $O(n)$         | $O(1)$       |
| `Minimum(A)`       | $O(n)$         | $O(1)$       |
- Search is implemented by testing the search key `k` against each element of an unsorted array. Thus, it takes linear time in the worst case (key `k` is not found in `A`). For sorted arrays, this can be done via [[Binary Search]], which reduces to logarithmic time.
- Insertion 

## Linked Lists