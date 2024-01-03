---
title: Best-Case, Worst-Case, Average-Case Complexity
tags:
  - cs
date: 2024-01-01
aliases:
  - Complexity
---
Using the [[RAM Model of Computation]], we can count how many steps our algorithm takes on any given input instance by executing it. To understand how good or bad an algorithm is in general, we must know how it works over **all possible instances**.

For best-case, worst-case, and average-case complexity, think about running an algorithm over all possible instances of data that can be fed to it. For the problem of sorting, the set of possible input instances includes every possible arrangement of n keys, for all possible values of n. We can represent each input instance as a point on a graph (shown in Figure 2.1) where the x-axis represents the size of the input problem (for sorting, the number of items to sort), and the y-axis denotes the number of steps taken by the algorithm in this instance.