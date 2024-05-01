---
title: Separate Chaining
tags:
  - dsa
  - cs
date: 2024-04-29
aliases:
---
Separate chaining is a method for dealing with [[Hash Collision|hash collisions]] by representing a hash table as an array of $m$ linked lists or buckets. The $i$th list in the array contains all the items that hash to the value of $i$. 

![[Pasted image 20240429193833.png]]

Thus, operations like search, insertion, and deletion reduce to the corresponding problem in linked lists. If there are $n$ keys and they are distributed uniformly in a table, each list will contain roughly $n/m$ elements, making them a constant size when $m \approx n$.

Chaining is intuitive but devotes a lot of memory to pointers. This is space that could be used to make the table larger, which reduces the likelihood of collisions. This is why [[Open Addressing]] tends to be the preferred method for high-performance hash tables.

Given that $m$
- Chaining costs $O(m)$ to initialize an $m$-element hash table with null elements prior to the first insertion.
- Traversing all the elements in the table takes $O(n + m$) time, where $n$ is the actual number of insertions. This is because we have to visit each of the $m$ buckets and all $n$ elements within those buckets. The $+m$ accounts for visiting each bucket, even those that are empty.