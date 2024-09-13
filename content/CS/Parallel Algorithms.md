---
title: Parallel Algorithms
tags:
  - dsa
  - cs
date: 2024-09-13
aliases:
  - parallel algorithms
---
Parallel processing has become increasingly prevalent, with the advent of multicore processors and cluster computing.

## Data Parallelism
[[Divide and Conquer Algorithms|Divide and conquer]] is the algorithm paradigm most suited to parallel computation. Typically, we seek to partition our problem of size $n$ into $p$ equal-sized parts, and simultaneously feed one to each processor. This reduces the time to completion (or *makespan*) from $T(n)$ to $T(n/p)$, plus the cost of combining the results together. 

If $T(n)$ is linear, this gives us a maximum possible speedup of $p$. If $T(n)=\Theta(n^{2})$, it may look like we can do even better, but this is generally an illusion. Suppose we want to sweep through all pairs of n items. Sure we can partition the items into p independent chunks, but $n^{2}-p(n /p)^{2}$ of the $n^{2}$ possible pairs will not ever have both elements on the same processor.

Multiple processors are typically best deployed to exploit data parallelism, running a single algorithm on different and independent data sets. For example, computer animation systems must render thirty frames per second for realistic animation. Assigning each frame to a distinct processor, or dividing each image into regions assigned to different processors, might be the best way to get the job done in time. Such tasks are often called *embarrassingly parallel*.

Generally speaking, such data parallel approaches are not algorithmically interesting, but they are simple and effective. There is a more advanced world of parallel algorithms where different processors synchronize their efforts so they can together solve a single problem quicker than one can.

## Pitfalls of Parallelism
There are several potential pitfalls and complexities associated with parallel algorithms:
- **There is often a small upper bound on the potential win** – Suppose that you have access to a machine with 24 cores that can be devoted exclusively to your job. These can potentially be used to speed up the fastest sequential program by up to a factor of 24. Sweet! But even greater performance gains can often result from developing more efficient sequential algorithms. Your time spent parallelizing a code might well be better spent enhancing the sequential version. Performance-tuning tools such as profilers are better developed for sequential machines/programs than for parallel models.
- **Speedup means nothing** – Suppose my parallel program runs 24 times faster on a 24-core machine than it does on a single processor. That’s great, isn’t it? If you get linear speedup and can increase the number of processors without bound, you will eventually beat any sequential algorithm. But the one-processor parallel version of your code is likely to be a crummy sequential algorithm, so measuring speedup typically provides an unfair test of the benefits of parallelism. And it is hard to buy machines with an unlimited number of cores.
	- The classic example of this phenomenon occurs in the minimax game-tree search algorithm used in computer chess programs. A brute-force tree search is embarrassingly easy to parallelize: just put each subtree on a different processor. However, a lot of work gets wasted because the same positions get considered on different machines. Moving from a brute-force search to the more clever alpha–beta pruning algorithm can easily save 99.99% of the work, thus dwarfing any benefits of a parallel brute-force search. Alpha–beta can be parallelized, but not easily, and the speedups grow surprisingly slowly as a function of the number of processors you have.
- **Parallel algorithms are tough to debug** – Unless your problem can be decomposed into several independent jobs, the different processors must communicate with each other to end up with the correct final result. Unfortunately, the non-deterministic nature of this communication makes parallel programs notoriously difficult to debug, because you will get different results each time you run the code. Data parallel programs typically have no communication except copying the results at the end, which makes things much simpler.