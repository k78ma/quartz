---
title: Dynamic Array
tags:
  - dsa
date: 2024-03-18
aliases:
---
A dynamic array is a method of enlarging [[Array|arrays]] when we need them. 

We start with an array of size $1$ and double its size from $m$ from $2m$ whenever we run out of space. The process is as follows:
- Allocate a new continuous array of size $2m$
- Copy contents of old array to the lower half of the new one
- Return space used by old array to storage allocation system

The waste in this procedure involves copying our contents on each expansion.
- For some number of slots $n$, it will take $\log_{2}n$ doublings until the array has $n$ positions, plus one final doubling on the last insertion.
- There are copying operations on first, second, eight, $\dots$ , $n$th insertions.
- The number of copy operations at the $i$th doubling will be $2^{i-1}$, so the total number of operations will be:
$$
\begin{align}
M  & = n + \sum_{i=1}^{\log_{2}n}2^{i-1}=1+2+4+ \dots+\frac{n}{2}+n  \\[2ex]
 & = \sum_{i=1}^{\log_{2}n} \frac{n}{2^{i}} \;\leq \; n\sum_{i=0}^{\infty} \frac{1}{2^{i}} = 2n
\end{align}
$$
Thus, each of the $n$ elements is only moved twice on average. The total work of managing the dynamic array is the same $O(n)$ as it would have been if a single array of sufficient size had been allocated in advance.

By using dynamic arrays, the thing we are losing is the guarantee that each insertion takes constant time in the worst case. All accesses and *most* insertions will be fast, except for those relatively few insertions that trigger array doubling. What we get instead is an *amortized* guarantee that the $n$th element insertion will be completed quickly enough that the total effort expended so far will still be $O(n)$.
