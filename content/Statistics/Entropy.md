---
title: Entropy
tags:
  - stats
  - physics
date: 2024-04-08
aliases:
---
The concept of entropy has origins in physics where it was introduced in the context of [[Thermodynamics|equilibrium thermodynamics]] and later given a deeper interpretation as a measure of disorder through developments in statistical mechanics. 

This view of entropy can be understood by considering a set of $N$ identical objects that are to be divided amongst a set of bins, such that there are $n_{i}$ objects in the $i$th bin. Consider the number of different ways of allocating the objects to the bins: 
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
	 & = \frac{1}{n} \ln\left(\frac{N!}{\prod_{i}n_{i}!}\right) \\[2ex] 
 & = \frac{1}{N}\ln N! - \frac{1}{N}\sum_{i}\ln n_{i}! \\[2ex] 
\end{align}
$$
We can then apply Stirling’s approximation of $\ln N! \approx N \ln N -N$. This gives us:
$$
\begin{align}
H & \approx \frac{1}{N}(N \ln N - N) - \frac{1}{N}\sum_{i}(n_{i}\ln n_{i} - n_{i}) \\[2ex]
& = \ln N - 1 - \sum_{i}\frac{n_{i}}{N}\ln n_{i} + \sum_{i}\frac{n_{i}}{N} \\[2ex]
& = \ln N - 1 -\sum_{i}\frac{n_{i}}{N}\ln n_{i} + 1 \\[2ex]
& = \ln N -  \sum_{i}\frac{n_{i}}{N}\ln n_{i} \\[2ex]
& = -\sum_{i}\frac{n_{i}}{N}\ln\left(\frac{n_{i}}{N}\right)
\end{align}
$$

Some simplifications that we used above:
- $\sum_{i}n_{i}=N$, so $\sum_{i}n_{i} / N=1$
- $\ln\left( \frac{n_{i}}{N} \right) = \ln(n_{i})-\ln(N)$

This gives us:
$$
H = -\sum_{i}\left( \frac{n_{i}}{N} \right) \ln \left( \frac{n_{i}}{N} \right)
$$
Consider the limit $N \to \infty$, in which the fractions $n_{i}/N$ are approach the probabilities $p_{i}$ of finding an object in the $i$th bin:
$$
\begin{align} \\
p_{i}  & = \lim_{ N \to \infty }\left( \frac{n_{i}}{N} \right) \\[2ex]
H  & =-\sum_{i}p_{i}\ln p_{i}
\end{align}
$$
The specific allocation of objects into bins is called a *microstate*. The overall distribution of occupation numbers, expressed by $n_{i} / N$, is called a *macrostate*.

We can interpret the bins as the states $x_{i}$ of a discrete random variable $X$, where $p(X=x_{i})=p_{i}$. The entropy of the random variable $X$ is then:
$$
H[p]=-\sum_{i}p(x_{i})\ln p(x_{i})
$$
Distributions $p(x_{i})$ that are sharply peaked around a few values will have lower entropy, whereas those spread more evenly will have higher entropy. Because $0 \leq p_{i} \leq 1$, the entropy is non-negative, and it will equal its minimum value of $0$ when one of the $p_{i}=1$ and all other $p_{j \neq i}=0$.

![[Physical Entropy.png]]

## Maximum Entropy
The maximum entropy configuration can be found by maximizing $H$ using a [[Lagrange Multipliers|Lagrange multiplier]] to enforce the normalization constraint on the probabilities. Thus, we maximize
$$
\tilde{H}=-\sum_{i}p(x_{i})\ln p(x_{i}) + \lambda\left( \sum_{i}p(x_{i})-1 \right)
$$
from which we find that all of the $p(x_{i})$ are equal and are given by $p(x_{i})=1 / M$ where $M$ is the total number of states $x_{i}$. The corresponding value of the entropy is then $H = \ln M$. This result can also be derived from [[Jensen’s Inequality]]. To verify that the stationary point is indeed a maximum, we can evaluate the second derivative of the entropy, which gives
$$
\frac{ \partial \tilde{H} }{ \partial p(x_{i})\partial p(x_{j}) } =-I_{ij} \frac{1}{p_{i}}
$$
where $I_{ij}$ are the elements of the identity matrix. We see that these values are all negative and, hence, the stationary point is indeed a maximum.