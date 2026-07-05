---
title: Array
tags:
  - cs
  - dsa
date: 2024-03-14
aliases:
---
The array is the fundamental [[Contiguous vs Linked Data Structures|contiguously allocated]] data structure. Arrays are structures of fixed-size data records such that each element can be efficiently located by its index or (equivalently) address.

Advantages:
- Constant time access given the index – because the index of each element maps directly to a particular memory address, we can access arbitrary data items instantly provided we know the index.
- Space efficiency – Arrays consist purely of data, so no space is wasted with links or other formatting information. Further, end-of-record information is not needed because arrays are built from fixed-size records.
- Memory locality – Many programming tasks require iterating through all the elements of a data structure. Arrays are good for this because they exhibit excellent memory locality. Physical continuity between successive data accesses helps exploit the high-speed cache memory on modern computer architectures.

Downsides:
- Cannot adjust size of array in the middle of a program's execution. 
	- There are some attempts to address this downside, such as the [[Dynamic Array]]