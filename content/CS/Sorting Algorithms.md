---
title: Sorting Algorithms
tags:
  - cs
date: 2023-06-25
aliases:
---
**Stable** sorting algorithm – relative order is maintained when two elements have the same value. 
- For example, if we are sorting a hand of cards, we have a Seven of Hearts before a Seven of Spades in the initial hand. After a stable sort, the Seven of Hearts is still before the Seven of Spades because their values are the same. However, in an unstable algorithm, the Seven of Spades might appear before the Seven of Hearts. The above is only valid when comparing the cards by value, not by suit.

**In-place** sorting algorithm – algorithm does not use any additional data structure to hold temporary data.
- Additional memory cannot be avoided (as swapping two elements requires additional memory), but it should be something like a temporary variable that uses very little extra memory.

## Algorithms
- [[Bubble Sort]]
- [[Insertion Sort]]
- [[Selection Sort]]
- [[Merge Sort]]
- [[Quick Sort]]