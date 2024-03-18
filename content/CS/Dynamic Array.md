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

