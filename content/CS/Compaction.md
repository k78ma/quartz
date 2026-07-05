---
title: Compaction
tags:
  - cs
  - dsa
date: 2024-05-01
aliases:
  - fingerprinting
---
Compaction, also known as fingerprinting, is the process of representing large objects with small hash codes. Generally, it's easier to work with small objects than large ones, and the hash code should preserve the identity of the item.

## Content Hashing Example
Suppose we wanted to sort all $n$ books in a library, not by their titles, but by the contents of the actual text. Assuming the average book is $m \approx 100,000$ words long, doing this sort seems an expensive and clumsy job since each comparison involves two books.

Instead, we can represent each book by its first (say) 100 characters, and sort these strings. There will be collisions involving duplicates of the same prefix, multiple editions of the same book, and plagiarism, but these will be quite rare. After sorting the prefixes, we can then resolve the collisions by comparing the full texts.

The hash function here is trivial (just take prefix), but it's designed to accomplish a specific goal, not to maintain a hash table. More sophisticated hash functions can make the probability of collisions between even slightly different objects extremely low.