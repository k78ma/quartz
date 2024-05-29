---
title: Hash Table Example
tags:
  - dsa
  - cs
date: 2024-04-27
aliases:
  - hash table
---
Hash tables maps an arbitrary data type to another arbitrary data type using [[Hashing|hashing]].

Data is stored in an array, where each data value has an unique index. 
- When we add `(key, value)` pair to the array, we use a hash function to map `key` to a hash value within the range of the array. 
- When we retrieve the data with `key`, we hash the `key` again and look up the data in the array with the corresponding index.

> [!example]- Graphical example of hash table
> ![500](Pasted%20image%2020230726171358.png)
> ![500](Pasted%20image%2020230726171415.png)
> ![500](Pasted%20image%2020230726171425.png)
> ![500](Pasted%20image%2020230726171436.png)

We need to deal with collisions as the possibility of keys increases, collision is unavoidable by the pigeonhole principle. An example of this is using separate chaining, where each hash value corresponds to a list:

![Pasted image 20230726172114](Pasted%20image%2020230726172114.png)
