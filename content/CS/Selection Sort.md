---
title: Selection Sort
tags:
  - dsa
  - cs
date: 2024-06-29
aliases:
  - selection sort
---
Selection sort is a simple sorting algorithm which operates by repeatedly selecting the smallest element from the unsorted portion of the list and moving it to the sorted portion.

Implementation of selection sort in C:
```c
void selection_sort(item_type s[], int n) { 
	int i, j; /* counters */ 
	int min; /* index of minimum */ 
	
	for (i = 0; i < n; i++) { 
		min = i; 
		for (j = i + 1; j < n; j++) { 
			if (s[j] < s[min]) {
				min = j; 
			} 
		} 
		swap(&s[i], &s[min]); 
	} 
}
```

- We partitioned the input array into sorted and unsorted regions; initially, the sorted region is empty, and the entire array is unsorted.
	- Anything before `i` is sorted. Starting from `s[i]`, the array is unsorted. 
- To find the smallest item, we perform a linear sweep through the unsorted portion of the array. 
- The smallest item is then swapped with the $i$th item in the array (first element in unsorted region) before moving on to the next iteration. 
- Selection sort performs $n$ iterations, where the average iteration takes $n/2$ steps, for a total of $O(n^{2)}$ time.