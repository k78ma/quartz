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

## Applications of Sorting
- *Searching* – [[Binary Search]] tests whether an item is in a dictionary/array in $O(\log n)$ time, provided the keys are sorted. Thus, sorting is a necessary pre-processing step.
- *Closest pair* – Given a set of $n$ numbers, how do you find the pair of numbers that have the smallest difference between them? Once the numbers are sorted, the closest pair of numbers must lie next to each other somewhere in sorted order.
- *Element uniqueness* – Are there any duplicates in a given set of $n$ items? This is a special case of the closest-pair problem, where now we ask if there is a pair separated by a gap of zero. An efficient way to do this is to sort the numbers and then does a linear scan checking all adjacent pairs.
- *Finding the mode* – Given a set of $n$ items, which element occurs the largest number of times in the set? If the items are sorted, we can sweep from left to right and count the number of occurrences of each element, since all identical items will be lumped together after sorting.
- *Selection* – Finding the $k$th largest item in an array. Some specific cases of this would be to find the smallest, largest, or median elements.
- *Convex hulls* – What is the polygon of smallest perimeter that contains a given set of $n$ points in two dimensions? The convex hull is like a rubber band stretched around the points in the plane and then released. It shrinks to just enclose the points. The convex hull gives a nice representation of the shape of the point set and is an important building block for more sophisticated geometric algorithms.

## Algorithms
- [[Merge Sort]]
- [[Quick Sort]]