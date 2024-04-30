---
title: Hashing
tags:
  - cs
date: 2023-06-25
aliases:
  - hash function
---
Hashing is a practical way of maintaining a [[Dictionary|dictionary]], taking advantage of the fact that looking an item up in an array takes constant time once you have its index. With a hash function, we can create a [[Hash Table Example|hash table]] for fast look-ups.

Hash functions also provide useful tools for many things beyond powering hash tables, since the fundamental idea is just of *many-to-one* mappings, where "many" is controlled so it is very unlikely to be "too many". Some examples of this are [[Duplicate Detection via Hashing]], [[Canonicalization]], and [[Compaction]].
## Hash Function
Let's say we have a key and a value.

The hash function maps the key to an integer. Then, the output of the hash function (*hash value*) is used as index, such that the value is stored in the array (*hash table*) at this position.

The first step of the hash function is usually to map each key to a big integer. For example, let's say we are writing a hash function for a string $S$. Let $\alpha$ be the size of the alphabet on which $S$ is written. Let `char(c)` be a function that maps each symbol of the alphabet to a unique integer from $0$ to $\alpha − 1$. The function
$$
H(S) = \alpha^{| S |}+\sum_{i=0}^{| S |-1}\alpha^{| S |-(i+1)} \times \text{char}(s_{i})
$$
maps each string to a unique large integer by treating the characters of the string as "digits" in the base-$\alpha$ number system. We have to make sure the numbers produced by this function are small enough to fit in our hash table, so we do $H'(s)=H(s)\mod m$.

- Hash functions must always return the same hash value for two items representing the same values.
- Two different items hashing to the same value is a [[Hash Collision|hash collision]].

Some properties of good hash functions:
- Easy to calculate the hash value (function has low time complexity)
- Low chance of [[Hash Collision|hash collision]]
- All possible values are utilized approximately equally

>[!example] Hash Function Example
>Hash functions are an abstract concept that can be applied to any arbitrary data type. For example, here is a simple hash function for an integer array:
>- Sum up each entry in the array and modulo the sum by 100
>`[5, 23, 84] -> (5 + 23 + 84) % 100 = 12`

## Efficiency
Average time complexity is $O(n/k)$ for each insertion/access operation on the table, where $n$ is the number of entries in the hash tables and $k$ is the array size of the table. This is due to the pigeonhole principle.

For the worst case (everything is hashed to the same key), the time complexity becomes $O(n)$, which is why it’s important to have a good hash function where collision is unlikely.

Dynamic hash table – size dynamically changes as more items are added. Each access to the table has an average time complexity of $O(1)$, which is close to accessing an array. When you need an ***non-integer index***, you can use a hash table instead

- Python has `dict` class
- Java has `HashMap` class
