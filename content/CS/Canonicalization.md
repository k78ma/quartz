---
title: Canonicalization
tags:
  - cs
  - dsa
date: 2024-05-01
aliases:
---
Canonicalization refers to reducing complicated object to a standard ("canonical") form.

A common example of this is string transformations, like reducing letters to lower case or stemming (removing word suffixes like -ed, -s, or -ing).
## Word Game Example with Hashing
Consider a word game that gives you a set of letters $S$, and asks you to find all dictionary words that can be made by reordering them. For example, given $S=(a,e,k,l)$ I can make *kale, lake, leak*.

The most straightforward approach to writing a program to do this would be to test each word in the dictionary $D$ against the characters of $S$. If $n$ is the amount of words in the dictionary $D$, this would take $O(n)$ time and be a bit tricky to code.

Instead, we can hash every word in $D$ to a string, sorted by the word's letters. For example, *kale, lake*, and *leak* would all get hashed to *aekl*. We can build a hash table where the sorted strings, like *aekl*, are keys, and the words with the same letters (*kale, lake, leak)* get hashed to the same bucket (like [[Separate Chaining]]). Once we have this hash table, we can use it for different query sets $S$. The time for each query will be proportional to the number of matching words in $D$, which is a lot smaller than $n$.

Which set of $k$ letters can be used to make the most dictionary words? This seems like a hard problem because there are $\alpha^{k}$ possible letter sets, where $\alpha=26$ for the English alphabet. However, the answer is simply the hash code with the largest amount of collisions (items in its bucket). We can find this by simply sweeping over a sorted array of hash codes, or walking through each bucket in a chained hash table.