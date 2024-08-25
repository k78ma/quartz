---
title: Occurrence Counting
tags:
  - cs
  - dsa
date: 2024-08-24
aliases:
  - occurrence counting
---
Suppose that we want to count the numbers a key $k$ occurs in a given sorted array. 

## Naive Algorithm
Sorting the array groups all of the copies of $k$ into a contiguous block, so the problem reduces to finding that block and then measuring its size.

[[Binary Search]] allows us to find the index of an element $x$ of the correct block in $O(\lg n)$ time. A natural way to identify to identify the boundaries of the block is sequentially test elements to the left of $x$ until we find one that differs from the search key, and then repeat this search to the right of $x$. The difference between the indices of these boundaries (plus 1) gives the number of occurrences in $k$.

This algorithm counts runs in $O(\lg n + s)$, where $s$ is the number of occurrences of the key. But this can be as bad as $\Theta(n)$ if the entire array consists of identical keys.

## Improved Algorithm
A faster algorithm results by modifying binary search to find the *boundary* of the block containing $k$, instead of $k$ itself. Suppose we delete the equality test:
```python
if nums[m] == target:
	return m
```
from the implementation and return the index `high` instead of `-1` on each unsuccessful search.

All searches will now be unsuccessful, since there is no equality test. The search will proceed to the right half whenever the key is compared to an identical array element, eventually terminating at the right boundary. Repeating the search after reversing the direction of the binary comparison will lead us to the left boundary. Basically, we're doing a [[One-sided Binary Search]] twice.

Each search takes $O (\lg n)$ time, so we can count the occurrences in logarithmic time regardless of the size of the block.

By modifying our binary search routine to return `(low+high)/2` instead of `-1` on an unsuccessful search, we obtain the location between two array elements where the key $k$ should have been. This variant suggests another way to solve our length of run problem. We search for the positions of keys $k-\epsilon$ and $k+\epsilon$, where $\epsilon$ is a tiny enough constant that both searches are guaranteed to fail with no intervening keys. Again, doing two binary searches takes $O(\log n)$ time.