---
title: Insertion Sort
tags:
  - dsa
date: 2024-07-11
aliases:
  - insertion sort
---
In insertion sort, we select the next element from the unsorted set, and put it into it’s proper position in the sorted set:
```c
for (i = 1; i < n; i++) {
	j = i;
	while ((j > 0) && (s[j] < s[j - 1])) {
		swap(&s[j], &s[j - 1]);
		j = j - 1;
	}
}
```

Insertion sort takes $O(n^{2})$ in the worst case, but it performs a lot better if the data is almost sorted, since we only need a few iterations of the inner loop to sift it into the proper position.

Insertion sort is the simplest example of the *incremental insertion* technique, where we build up a complicated structure on $n$ items by first building it on $n − 1$ items, and then making the necessary changes to add the last item.

Faster sorting algorithms based on incremental insertion follow from more efficient data structures. 
- Insertion into a balanced search tree takes $O(\log n)$ per operation, or a total of $O(n\log n)$ to construct the tree
- An [[Tree Traversal|in-order traversal]] reads through the elements in sorted order to complete the job in linear time.

