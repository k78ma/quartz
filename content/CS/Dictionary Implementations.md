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
Given that $n$ is the number of elements currently in the array, we have:

| Operation          | Unsorted Array | Sorted Array |
| ------------------ | -------------- | ------------ |
| `Search(A, k)`     | $O(n)$         | $O(\log n)$  |
| `Insert(A, x)`     | $O(1)$         | $O(n)$       |
| `Delete(A, x)`     | $O(1)$         | $O(n)$       |
| `Successor(A, x)`  | $O(n)$         | $O(1)$       |
| `Predecessor(A,x)` | $O(n)$         | $O(1)$       |
| `Maximum(A)`       | $O(n)$         | $O(1)$       |
| `Minimum(A)`       | $O(n)$         | $O(1)$       |
- *Search* – For an unsorted array, this is implemented by testing the search key `k` against each element of an unsorted array. Thus, it takes linear time in the worst case (key `k` is not found in `A`). For sorted arrays, this can be done via [[Binary Search|binary search]], which reduces to logarithmic time.
- *Insertion* – For an unsorted array this is implemented by incrementing `n`  and then copying item `x` to the $n$th cell in the array, `A[n]`. The bulk of the array is untouched, so this operation takes constant time. This becomes more expensive in the sorted case, since we need to find make room for the new item and shuffle everything to the right.
- *Deletion* – This is defined such that we are given a pointer to `x`, so we don't need to spend time searching. However, removing the $x$th element from the array leaves a hole. 
	- For a sorted array, we need to shift all elements to the left, which is $O(n)$. 
	- For an unsorted array, we can just overwrite `A[x]` with `A[n]`, and decrement `n` . This takes constant time.
- *Predecessor/Successor* – This require us to find the biggest element smaller than `A[x]` and smallest element bigger than `A[x]` respectively. For an unsorted array, we need to sweep through all $n$ elements, so this is linear time. For a sorted array, we can just retrieve `A[x-1]` or `A[x+1]`, which is constant time.
- *Minimum/Maximum* – Similar to predecessor/successor above.
## Linked Lists
| Operation          | Single/Unsorted | Single/Sorted | Double/Unsorted | Double/Sorted |
| ------------------ | --------------- | ------------- | --------------- | ------------- |
| `Search(A, k)`     | $O(n)$          | $O(n)$        | $O(n)$          | $O(n)$        |
| `Insert(A, x)`     | $O(1)$          | $O(n)$        | $O(1)$          | $O(n)$        |
| `Delete(A, x)`     | $O(n)$          | $O(n)$        | $O(1)$          | $O(1)$        |
| `Successor(A, x)`  | $O(n)$          | $O(1)$        | $O(n)$          | $O(1)$        |
| `Predecessor(A,x)` | $O(n)$          | $O(n)$        | $O(n)$          | $O(1)$        |
| `Maximum(A)`       | $O(1)$          | $O(1)$        | $O(n)$          | $O(1)$        |
| `Minimum(A)`       | $O(1)$          | $O(1)$        | $O(n)$          | $O(1)$        |
- *Search* – Sorting doesn't provide benefit for linked lists than it did for arrays. Binary search is no longer possible, because we can’t access the median element without traversing all the elements before it. What sorted lists do provide is quick termination of unsuccessful searches, for if we have not found "A" by the time we hit "C" we can deduce that it doesn’t exist in the list. This is still linear time in the worst case.
- *Insertion/Deletion* – For a singly-linked list, this is hard to do because the definition of the Delete operation states we are given a pointer `x` to the item to be deleted; but what we need is a pointer to the node pointing to `x` in the list, because that's the node that needs to be changed. We can't do anything without this predecessor pointer, so we need to spend linear time searching. Doubly-linked lists solve this problem, since we can just retrieve the predecessor of `x`; this is a benefit of doubly-linked sorted lists over sorted arrays.
- *Predecessor/Successor* – The predecessor pointer problem again complicates implementing `Predecessor` with singly linked lists, requiring a constant time search. The logical successor is equivalent to the node successor for both types of sorted lists, and hence can be implemented in constant time.
- *Minimum/Maximum* – The minimum element sits at the head of a sorted list, and so is easily retrieved. The maximum element is at the tail of the list, which normally requires linear time to reach in either singly or doubly linked lists.
	- We can maintain a pointer to the list tail but we need to pay maintenance costs on every insertion and deletion. This tail pointer can be updated in constant time for doubly-linked lists; on insertion, check whether `last->next == NULL`, and on deletion, set `last` to point to the list predecessor of `last` if the last element is deleted. 
	- We have no efficient way to find this predecessor for singly linked lists. So why can we implement `Maximum` in $O(1)$? The trick is to add the cost to each deletion, which already took linear time. Adding an extra linear sweep to update the pointer does not harm the asymptotic complexity of `Delete`, while gaining us `Maximum` and `Minimum` in constant time as a reward.