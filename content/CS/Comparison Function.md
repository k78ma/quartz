---
title: Comparison Function
tags:
  - dsa
  - cs
date: 2024-06-06
aliases:
  - comparison function
---
## Sorting Pragmatics
[[Sorting Algorithms]] have many applications; however, there are some issues that we have to think about whenever we use them.
- **Order**: Increasing or decreasing?
- **Key vs. Value**: Sorting a data set requires maintaining the integrity of complex data records. For example, if we're sorting a [[Dictionary|dictionary]] by its keys we need to make sure the corresponding values to the keys are saved as well.
- **Equal keys**: What should we do with equal keys? Which entry should appear first? You may need to resort to secondary keys to resolve ties in a meaningful way.
	- Leaving items in the same relative order as in the original permutation calls for a stable algorithm. Few fast algorithms are naturally stable. Stability can be achieved for any sorting algorithm by adding the initial position as a secondary key.
	- We can make no decision about equal key order and let the ties fall where they may. However, certain efficient sort algorithms (such as [[Quicksort|quicksort]]) can run into quadratic performance trouble unless explicitly engineered to deal with large numbers of ties.
- **Non-numerical data**: Alphabetizing defines the sorting of text strings. Libraries have very complete and complicated rules concerning the relative collating sequence of characters and punctuation. Is Skiena the same key as skiena? Is *Brown-Williams* before or after *Brown America*, and before or after *Brown, John*?

## Comparison Functions
The right way to specify these details is with an application-specific **comparison function**. This function would take pointers to elements $a$, $b$ and return $<$, $>$, $=$ based on the whether $a<b$, $a>b$, or $a=b$.

By abstracting these decisions to a comparison function, sorting algorithms can be implemented independently of these criteria. We simply pass the comparison function in as an argument to the sort procedure.

## Example: `qsort`
Most programming languages have a built-in sort routine. For example, C has `qsort`, which implements [[Quicksort|quicksort]]:

```c
#include <stdlib.h>

void qsort(void *base, size_t nel, size_t width, int (*compare) (const void *, const void *));
```

- It sorts the first `nel` elements of an array (pointed to by base), where each element is `width`-bytes long.
- We can sort arrays of 1-byte characters, 4-byte integers, or 100-byte records, all by changing the value of width.

The desired output of `qsort` is determined by the `compare` function. It:
- Takes pointers to two `width`-byte elements as arguments
- Returns a negative number if the first belongs before the second in sorted order
- Returns a positive number if the second belongs before the first
- Returns zero if they are the same

```c
int intcompare(int *i, int *j) 
{ 
	if (*i > *j) return (1); 
	if (*i < *j) return (-1); 
	return (0); 
}
```

This comparison function can be used to sort an array `a`, of which the first `n` elements are occupied, as follows:
```c
qsort(a, n, sizeof(int), intcompare);
```