---
title: Heap Data Structure
tags:
  - cs
  - dsa
date: 2024-06-30
aliases:
  - heap data structure
---
Heaps are a data structure for supporting the [[Priority Queue|priority queue]] operations *insert* and *find-minimum*. They work by maintaining a partial order on the set of elements that is weaker than the sorted order (so it can be efficient to maintain), yet stronger than random order (so the minimum element can be quickly identified).

## Heap-Labeled Tree
A **heap-labeled tree** is defined to be a binary tree such that the key of each node dominates the keys of its children.
- In a **min-heap**, a node dominates its children by having a smaller key than they do
- In a **max-heap**, a node dominates its children by having a bigger key than they do

The most natural implementation of this binary tree would store each key in a node with pointers to its two children. However, similar to [[Binary Search Tree|binary search trees]], the memory used by the pointers can easily outweigh the size of keys, which is the data we're mostly interested in. 
## Heap Data Structure
The **heap** is a slick data structure that enables us to represent binary trees without using any pointers. We store data as as an array of keys, and use the position of the keys to implicitly play the role of pointers. We assume that the array starts with index 1 for simplicity.

![[Heap Data Structure.png]]

We store the root of the tree at the first position of the array, and its left and right children in the second and third positions. In general, we store the $2^{l-1}$ keys of the $l$th level of a complete binary tree from left to right in positions $2^{l-1}$ to $2^{l}-1$, as shown above. 
- Level 1 (1492): $2^{1-1}=1$ key, stored at position $2^{1-1}=1$
- Level 2 (1783, 1776): $2^{2-1}=2$ keys, stored between positions $2^{2-1}=2$ and $2^{2}-1=3$
- Level 3 (1804, 1865, 1945, 1963): $2^{3-1}=4$ keys, stored between positions $2^{3-1}=4$ and $2^{3}-1=7$.

What is especially nice about this representation is that the positions of the parent and children of the key at position $k$ are readily determined. Thus, we can move around the tree without any pointers.
- The left child of $k$ sits in position $2k$ and the right child in $2k + 1$
- The parent of k holds court in position $\lfloor k / 2 \rfloor$ . 

```c
typedef struct { 
	item_type q[PQ_SIZE+1]; /* body of queue */ 
	int n;                  /* number of queue elements */ 
} priority_queue;
```

```c
typedef struct { 
	item_type q[PQ_SIZE+1]; /* body of queue */ 
	int n;                  /* number of queue elements */ 
} priority_queue;

int pq_parent(int n) {
	if (n == 1) { 
		return(-1); 
	} 
	return((int) n/2); /* implicitly take floor(n/2) */ 
}

int pq_young_child(int n) { 
	return(2 * n); 
}
```

This approach means that we can store any binary tree in an array without pointers. What is the catch? Suppose our height $h$ tree was sparse, meaning that the number of nodes $n \ll 2^{h}-1$. All of the missing internal nodes still take up space in our structure, since we must represent a full binary tree to maintain the positional mapping between parents and children.

To avoid these holes and ensure space efficiency, we make each level be packed as much as it can be, such that:
- Only the last level may be incomplete.
- The elements of the last level as far left as possible.

Thus, we can represent an $n$-key tree using the first $n$ elements of the array. If we did not enforce these structural constraints, we might need an array of size $2n − 1$ to store $n$ elements. 

With heaps, all but the last level are filled, so the height $h$ of an $n$ element heap is logarithmic because:
$$
\begin{align}
\sum_{i=0}^{h-1}2^{i}=2^{h}-1 & \geq n \\[2ex] 
2^{h} & \geq n+1 \\[2ex] 
h  & = \lceil \lg(n+1) \rceil
\end{align}
$$
### Benefits/Drawbacks
This implicit representation of binary trees saves memory, but is less flexible than using pointers. 
- We cannot store arbitrary tree topologies without wasting large amounts of space. 
- We cannot move subtrees around by just changing a single pointer, only by explicitly moving all the elements in the subtree. 

This loss of flexibility explains why we cannot use this idea to represent binary search trees, but it works just fine for heaps.

*How can we efficiently search for a particular key $k$ in a heap?*  We can’t. Binary search does not work because a heap is not a binary search tree, and the array form of the heap is not sorted. We know almost nothing about the relative order of the $n/2$ leaf elements in a heap that would let us avoid doing linear search through them.