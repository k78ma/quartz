---
title: Open Addressing
tags:
  - dsa
  - cs
date: 2024-04-30
aliases:
---
Open addressing is a method for [[Hash Collision|hash collision]] resolution. It uses a simple array of elements (not [[Separate Chaining|buckets]]).

Here's how it works:
- Each cell in the array is initialized to null.
- On each insertion, we check if the desired cell is empty.
	- If it's empty, we insert the item there.
	- If not empty, we find some other place to put the item.

![[Open Addressing-1.png]]

The simplest possibility is to do *sequential probing*, where we just insert the item into the next open cell in the table. If the table isn't too full, contiguous runs of non-empty cells should be fairly short, so this location should only be a few cells away form its intended position.

Searching for a given key now involves:
- Going to the appropriate hash value and check to see if the item there is the one we want.
	- If so, return it. 
	- Otherwise we must keep checking through the length of the run. 

Deletion in an open addressing scheme can get ugly, since removing one element might break a chain of insertions, making some elements inaccessible. We have to reinsert all the items in the run that follows the new hole.

Costs:
- Open addressing costs $O(m)$ to initialize an $m$-element hash table with null elements prior to the first insertion, where $m$ is the number of buckets.
- Traversal takes $O(m)$ time, since all we have to do is to inspect each slot to see whether it's occupied or empty. The number of actual elements $n$ does not change the number of slots we need to examine. 
	- Since each slot can only hold one element and no more, the number of elements $n$ that can be stored in the hash table is at most $m$ (the total number of slots). When the table is full (i.e., $n=m$), every slot is occupied.