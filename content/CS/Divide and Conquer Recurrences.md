---
title: Divide and Conquer Recurrences
tags:
  - cs
  - dsa
date: 2024-08-29
aliases:
  - divide and conquer recurrences
---
Typical [[Divide and Conquer Algorithms|divide-and-conquer algorithms]] break a given problem into $a$ smaller pieces, each of which is of size $n/b$. It then spends $f(n)$ time to combine these subproblem solutions into a complete result. 

Let $T(n)$ denotes the worst-case time this algorithm takes to solve a problem of size $n$. Then, $T(n)$ is given by the following [[Recurrence Relations|recurrence relation]]:
$$
T(n)=a\cdot T(n/b)+f(n)
$$
Consider the following examples of this:
- [[Mergesort]] – The running time of mergesort is governed by the recurrence $T(n)=2T(n /2)+O(n)$, since the algorithm divides the data into equally-sized halves and then spends linear time merging the halves after they are sorted. This recurrence evaluates to $T(n) = O(n \lg n)$, just as we got by our previous analysis.
- [[Binary Search]] – The running time of binary search is governed by the recurrence $T(n) = T(n/2) + O(1)$, since at each step we spend constant time to reduce the problem to an instance half its size. This recurrence evaluates to $T(n) = O(\lg n)$, just as we got by our previous analysis.
- [[Heap Data Structure#Faster Heap Construction|Fast heap construction]] – The "bubble down" method of heap construction builds an $n$-element heap by constructing two $n/2$ element heaps and then merging them with the root in logarithmic time. The running time is thus governed by the recurrence relation $T(n) = 2T(n/2) + O(\lg n)$. This recurrence evaluates to $T(n) = O(n)$, just as we got by our previous analysis.

Solving a recurrence means finding a nice closed form describing or bounding the result. We can use the **master theorem** to solve the recurrence relations typically arising from divide-and-conquer algorithms.

## Solving Divide-and-Conquer Recurrences
