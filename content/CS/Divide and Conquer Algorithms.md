---
title: Divide and Conquer Algorithms
tags:
  - cs
  - dsa
date: 2024-08-23
aliases:
  - divide and conquer algorithms
  - divide-and-conquer
---
One of the most powerful techniques for solving problems is to break them down into smaller, more easily solved pieces. Smaller problems are less overwhelming, and they permit us to focus on details that are lost when we are studying the whole thing. A recursive algorithm starts to become apparent whenever we can break the problem into smaller instances of the same type of problem. Multicore processors now sit in almost every computer, but effective parallel processing requires decomposing jobs into at least as many tasks as the number of processors.

Two important algorithm design paradigms are based on breaking problems down into smaller problems. 
- [[Dynamic Programming|Dynamic programming]], which typically removes one element from the problem, solves the smaller problem, and then adds back the element to the solution of this smaller problem in the proper way. 
- Divide and conquer instead splits the problem into (say) halves, solves each half, then stitches the pieces back together to form a full solution. 

Thus, to use divide and conquer as an algorithm design technique, we must divide the problem into two smaller subproblems, solve each of them recursively, and then meld the two partial solutions into one solution to the full problem. Whenever the merging takes less time than solving the two subproblems, we get an efficient algorithm. [[Mergesort]] is the classic example of a divide-and-conquer algorithm. It takes only linear time to merge two sorted lists of $n/2$ elements, each of which was obtained in $O(n \lg n)$ time.

Divide and conquer is a design technique with many important algorithms to its credit, including mergesort, the [[fast Fourier transform]], and [[Strassen’s matrix multiplication]] algorithm. 

Beyond binary search and its many variants, however, it can be a difficult design technique to apply in practice. Our ability to analyze divide and conquer algorithms rests on our proficiency in solving the recurrence relations governing the cost of such recursive algorithms, so we will introduce techniques for solving recurrences.