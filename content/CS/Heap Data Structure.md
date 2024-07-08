---
title: Heap Data Structure
tags:
  - cs
  - dsa
date: 2024-06-30
aliases:
  - heap data structure
  - heap
  - heaps
---
Heaps are a data structure for supporting the [[Priority Queue|priority queue]] operations *insert* and *find-minimum*. They work by maintaining a partial order on the set of elements that is weaker than the sorted order (so it can be efficient to maintain), yet stronger than random order (so the minimum element can be quickly identified).

---
## Heap-Labeled Tree
A **heap-labeled tree** is defined to be a binary tree such that the key of each node dominates the keys of its children.
- In a **min-heap**, a node dominates its children by having a smaller key than they do
- In a **max-heap**, a node dominates its children by having a bigger key than they do

The most natural implementation of this binary tree would store each key in a node with pointers to its two children. However, similar to [[Binary Search Tree|binary search trees]], the memory used by the pointers can easily outweigh the size of keys, which is the data we're mostly interested in. 

Sometimes, "heap" is used to refer to a heap-labeled tree.

---
## Heap Array
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
h  & = \lceil \log_{2}(n+1) \rceil
\end{align}
$$
### Benefits/Drawbacks
This implicit representation of binary trees saves memory, but is less flexible than using pointers. 
- We cannot store arbitrary tree topologies without wasting large amounts of space. 
- We cannot move subtrees around by just changing a single pointer, only by explicitly moving all the elements in the subtree. 

This loss of flexibility explains why we cannot use this idea to represent binary search trees, but it works just fine for heaps.

*How can we efficiently search for a particular key $k$ in a heap?*  We can’t. Binary search does not work because a heap is not a binary search tree, and the array form of the heap is not sorted. We know almost nothing about the relative order of the $n/2$ leaf elements in a heap that would let us avoid doing linear search through them.

## Heap Construction
Heaps can be constructed incrementally, by inserting each new element into the left-most open spot in the array ($(n+1)$st position of a previously $n$-element heap). This ensures the desired balanced shape of the heap-labeled tree, but does not maintain the dominance ordering of the keys. The new key might be less than its parent in a min-heap, or greater than its parent in a max-heap, which we don't want.

The solution to this is to swap any dissatisfied element with its parent:
- The old parent is now happy, as it is properly dominated
- The other child of the old parent is happy, because it is now dominated by an element even more extreme than before
- The new element is now happier, but may still dominate its new parent. So we recur at a higher level, *bubbling up* the new key to its proper position in the hierarchy.
	- Since we replace the root of a subtree by a larger one at each step of bubbling up, we preserve the heap order elsewhere.

```c
void pq_insert(priority_queue *q, item_type x) {

	if (q->n >= PQ_SIZE) { // q->n dereferences pointer and accesses member of the struct it points to. Equivalent to (*q).n
		printf("Warning: priority queue overflow! \n");
	}
	else {
		q->n = (q->n) + 1; 
		q->q[q->n] = x;
		bubble_up(q, q->n);
	}
}

void bubble_up(priority_queue *q, int p) {

	if (pq_parent(p) == -1){
		return;
	}

	if (q->q[pq_parent(p)] > q->q[p]) {
		pq_swap(q, p, pq_parent(p));
		bubble_up(q, pq_parent(p));
	}

}
```

This swap process takes constant time at each level. Since the height of an $n$-element heap is $\log_{2}n$, each insertion takes at most $O(\log n)$ time. A heap of $n$ elements can thus be constructed in $O(n \log n)$ time through $n$ such insertions:

```c
void pq_init(priority_queue *q) {
	q->n = 0
}

void make_heap(priority_queue *q, item_type s[], int n) {
	int i;
	pq_init(q);

	for (i = 0; i < n; i++){
		pq_insert(q, s[i]);
	}
}
```

## Find and Delete Min/Max
The remaining priority queue operations are **identifying** and **deleting** the dominant element (min or max). Identification is easy, since the top of the heap sits in the first position of the array.

Removing the top elements leaves a hole in the array, which can be filled by moving the *right-most* leaf (sitting in the $n$th position of the array) into the first position. This restores the shape of the tree, but the labeling of the root might not satisfy the heap property. The new root might be dominated by both of its children. 

For example, the root of a min-heap should be the smallest of 3 elements: the current root and its 2 children. The cases are:
- If the current root is dominant, the heap order has been restored.
- If not, the dominant child should be swapped with the root, and the problem is pushed down to its next level.

The dissatisfied element *bubbles down* the heap until it dominates all its children. This operation is called *heapify*, because it merges two heaps (the subtrees below the original root) with a new key.

```c
item_type extract_min (priority_queue *q) {
	int min = -1;
	
	if (q->n <= 0){
		printf("Warning: empty priority queue. \n")
	}
	
	else{
		min = q->q[1];
		q->q[1]= q->q[q->n];
		q->n = q->n - 1;
		bubble_down(q, 1);
	}

	return min;
}

void bubble_down(priority_queue *q, int p){
	int c; // child index
	int i; // counter
	int min_index; // index of lightest child

	c = pq_young_child(p);
	min_index = p;

	for (i = 0; i <= 1; i++) {
		if ((c+1) <= q->n) {
			if (q->q[min_index] > q->q[c+i]) {
				min_index = c + i;
			}
		}
	}
	if (min_index != p) {
		pq_swap(q, p, min_index);
		bubble_down(q, min_index);
	}
}
```

We will reach a leaf after $\lfloor \log_{2}n \rfloor$ steps of `bubble_down`, each constant time. Thus, root deletion is completed in $O(\log n)$ time.

Repeatedly exchanging the maximum element with the last element and caling heapify yields an $O(n\log n)$ sorting algorithm, [[Heapsort|heapsort]].