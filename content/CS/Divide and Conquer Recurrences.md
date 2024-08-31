---
title: Divide and Conquer Recurrences
tags:
  - cs
  - dsa
date: 2024-08-29
aliases:
  - divide and conquer recurrences
---
Typical [[Divide and Conquer Algorithms|divide-and-conquer algorithms]] break a given problem into $a$ smaller pieces, each of which is of size $n/b$. It then spends $f(n)$ time to combine these subproblem solutions into a complete result. 

Let $T(n)$ denotes the worst-case time this algorithm takes to solve a problem of size $n$. Then, $T(n)$ is given by the following [[Recurrence Relations|recurrence relation]]:
$$
T(n)=a\cdot T(n/b)+f(n)
$$
Consider the following examples of this:
- [[Mergesort]] – The running time of mergesort is governed by the recurrence $T(n)=2T(n /2)+O(n)$, since the algorithm divides the data into equally-sized halves and then spends linear time merging the halves after they are sorted. This recurrence evaluates to $T(n) = O(n \lg n)$, just as we got by our previous analysis.
- [[Binary Search]] – The running time of binary search is governed by the recurrence $T(n) = T(n/2) + O(1)$, since at each step we spend constant time to reduce the problem to an instance half its size. This recurrence evaluates to $T(n) = O(\lg n)$, just as we got by our previous analysis.
- [[Heap Data Structure#Faster Heap Construction|Fast heap construction]] – The "bubble down" method of heap construction builds an $n$-element heap by constructing two $n/2$ element heaps and then merging them with the root in logarithmic time. The running time is thus governed by the recurrence relation $T(n) = 2T(n/2) + O(\lg n)$. This recurrence evaluates to $T(n) = O(n)$, just as we got by our previous analysis.

Solving a recurrence means finding a nice closed form describing or bounding the result. We can use the **master theorem** to solve the recurrence relations typically arising from divide-and-conquer algorithms.

## Solving Divide-and-Conquer Recurrences
Divide-and-conquer recurrences of the form $T(n)=aT(n / b)+f(n)$ are generally easy to solve, because the solutions fall into three distinct cases:
1. If $f(n)=O(n^{\log_{b}a-\epsilon})$ for some constant $\epsilon>0$, then $T(n)=\Theta(n^{\log_{b}a})$.
2. If $f(n)=\Theta(n^{\log_{b}a})$, then $T(n)=\Theta(n^{\log_{b}a}\lg n)$.
3. If $f(n) = \Omega(n^{\log_{b}a+\epsilon})$ for some constant $\epsilon>0$, and if $af(n / b)\leq cf(n)$ for some $c<1$, then $T(n)=\Theta(f(n))$.

We just need to identify which case of this master theorem holds for our given recurrence:
- Case 1 holds for heap construction and matrix multiplication
- Case 2 holds for mergesort
- Case 3 generally arises with clumsier algorithms, where the cost of combining the subproblems dominates everything

The figure below shows the recursion tree associated with a typical $T(n) = aT(n/b)+ f(n)$ divide-and-conquer algorithm. 

![[Divide and Conquer Recurrences.png]]

- Each problem of size $n$ is decomposed into a problems of size $n/b$. 
- Each subproblem of size $k$ takes $O(f(k))$ time to deal with internally, between partitioning and merging. 
- The total time for the algorithm is the sum of these internal evaluation costs, plus the overhead of building the recursion tree. 
- The height of this tree is $h = \log_{b} n$ and the number of leaf nodes is $a^{h}=a^{\log_{b}n}$, which simplifies to $n\log_{b}a$.

The three cases of the master theorem correspond to three different costs, each of which might be dominant as a function of $a$, $b$, and $f(n)$:
- **Case 1: Too many leaves** – If the number of leaf nodes outweighs the overall internal evaluation cost, the total running time is $O(n^{\log_{b}a})$.
- **Case 2: Equal work per level** – As we move down the tree, each problem gets smaller but there are more of them to solve. If the sums of the internal evaluation costs at each level are equal, the total running time is the cost per level ($n^{\log_{b}a}$) times the number of levels ($\log_{b} n$), for a total running time of $O(n^{\log_{b}a}\lg n)$.
- **Case 3: Too expensive a root** – If the internal evaluation cost grows very rapidly with $n$, then the cost of the root evaluation may dominate everything. Then the total running time is $O(f(n))$.