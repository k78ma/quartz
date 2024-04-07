---
title: Physical Entropy
tags:
  - stats
date: 2024-04-06
aliases:
---
The concept of entropy has origins in physics where it was introduced in the context of equilibrium thermodynamics and later given a deeper interpretation as a measure of disorder through developments in statistical mechanics. 

This alternative view of entropy can be understood by considering a set of $N$ identical objects that are to be divided amongst a set of bins, such that there are $n_{i}$ objects in the $i$th bin. Consider the number of different ways of allocating the objects to the bins: 
- There are $N$ ways to choose the first object
- There are $N-1$ ways to choose the second object, and so on. 
- This leads to a total of $N!$ ways to allocate all $N$ objects to the bins.

We don't want to to distinguish between rearrangements of objects within each bin. In the $i$th bin there are $n_{i}!$ ways of reordering the objects, and so the total number of ways of allocating the $N$ objects to the bins is given by:
$$
W = \frac{N!}{\prod_{i}n_{i}!}
$$
which is called by *multiplicity*. 

The entropy is then defined as the logarithm of the multiplicity scaled by a constant factor $1/N$ so that
$$
\begin{align}
H  & = \frac{1}{N} \ln W \\[2ex] 
 & = \frac{1}{N}\ln N! - \frac{1}{N}\sum_{i}\ln n_{i}! \\[2ex] 
\end{align}
$$
Consider the limit $N \to \infty$, in which the fractions $n_{i}/N$ are held fixed, and apply Stirling’s approximation of $\ln N! \approx N \ln N -N$. This gives us:
$$
\begin{align}
H  & = -\lim_{ N \to \infty } \sum_{i}\left( \frac{n_{i}}{N} \right)\ln\left( \frac{n_{i}}{N} \right)\\[2ex] 
 & =-\sum_{i}p_{i}\ln p_{i}
\end{align}
$$
where we have used $\sum_{i}n_{i}=N$.
