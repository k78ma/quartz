---
title: Quicksort
tags:
  - dsa
  - cs
date: 2024-08-16
aliases:
  - quicksort
---
Suppose we select an arbitrary item $p$ from the $n$ items we seek to sort. Quicksort separates the $n-1$ other items into two piles: a low pile containing all the elements that are $<p$, and a high pile containing all the elements that are $\geq p$. Low and high denote the array positions into which we place the respective piles, leaving a single slot between them for $p$.

Such partitioning buys as two things:
1. The pivot element $p$ ends up in the exact array position it will occupy in the final sorted order. 
2. Second, after partitioning no element flips to the other side in the final sorted order. 

Thus, we can now sort the elements to the left and the right of the pivot independently! This gives us a recursive sorting algorithm, since we can use the partitioning approach to sort each subproblem. The algorithm must be correct, because each element ultimately ends up in the proper position:

```c
void quicksort(item_type s[], int l, int h) { 
	int p; /* index of partition */ 
	
	if (l < h) { 
		p = partition(s, l, h); 
		quicksort(s, l, p - 1); 
		quicksort(s, p + 1, h); 
	} 
}
```
