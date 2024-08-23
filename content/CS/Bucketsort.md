---
title: Bucketsort
tags:
  - dsa
  - cs
date: 2024-08-22
aliases:
  - bucketsort
  - distribution sort
---
To sort names for a telephone book, we could partition them first according to the first letter of the last name. This will create 26 piles or buckets of names, one for each letter. Observe that any name in the $J$ pile must occur after all the names in the $I$ pile, and before any name in the $K$ pile. Therefore, we can proceed to sort each pile individually and just concatenate the sorted piles together at the end.

Assuming the names are distributed evenly among the buckets, the resulting 26 sorting problems should each be substantially smaller than the original problem. Further partitioning each pile based on the second letter of each name, we can generate smaller and smaller piles. The set of names will be completely sorted as soon as every bucket contains only a single name. Such an algorithm is commonly called **bucketsort** or **distribution sort**.

Bucketing is a very effective idea whenever we are confident that the distribution of data will be roughly uniform. It is the idea that underlies hash tables, $kd$-trees, and a variety of other practical data structures. 

The downside of such techniques is that the performance can be terrible when the data distribution is not what we expected. Although data structures such as balanced binary trees offer guaranteed worst-case behavior for any input distribution, no such promise exists for heuristic data structures on unexpected input distributions.

