---
title: Randomized Algorithms
tags:
  - dsa
  - cs
date: 2024-09-15
aliases:
  - randomized algorithms
  - Las Vegas algorithm
  - Monte Carlo algorithm
---
Relaxing the demand for either always correct or always efficient can lead to useful algorithms that still have performance guarantees. Randomized algorithms are not merely heuristics: any bad performance is due to getting unlucky on coin flips, rather than adversarial input data.

Randomized algorithms are classified into two types, depending upon whether they guarantee correctness or efficiency:
- **Las Vegas algorithms:** These randomized algorithms guarantee correctness, and are usually (but not always) efficient. [[Quicksort]] (with a randomized pivot) is an excellent example of a Las Vegas algorithm.
	- Randomized quicksort always produces a sorted array, so we know it is always correct. Picking a very bad series of pivots due to random chance might cause the running to exceed $O(n \log n)$, but we are always going to end up sorted. Thus, quicksort is a nice example of a Las Vegas-style algorithm.
- **Monte Carlo algorithms:** These randomized algorithms are provably efficient, and usually (but not always) produce the correct answer or something close to it. Representative of this class are random sampling methods, where we return the best solution found in the course of (say) 1,000,000 random samples.

One blessing of randomized algorithms is that they tend to be very simple to describe and implement. Eliminating the need to worry about rare or unlikely situations makes it possible to avoid complicated data structures and other contortions. These clean randomized algorithms are often intuitively appealing, and relatively easy to design.

However, randomized algorithms are frequently quite difficult to analyze rigorously. 