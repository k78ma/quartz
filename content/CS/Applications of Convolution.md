---
title: Applications of Convolution
tags:
  - dsa
  - cs
date: 2024-09-14
aliases:
  - applications of convolution
---
Convolutions often arise when you are trying all possible ways of doing things that add up to $k$, for a large range of values of $k$, or when sliding a mask or pattern $A$ over a sequence $B$ and calculating at each position.

## Integer Multiplication
We can interpret integers as polynomials in any base $b$. For example, $632 = 6\cdot b_{2} + 3\cdot b_{1} + 2\cdot b_{0}$, where $b = 10$. Polynomial multiplication behaves like integer multiplication without carrying.

There are two different ways we can use fast polynomial multiplication (done with convolution) to deal with integers. 
1. First, we can explicitly perform the carrying operation on the product polynomial, adding $\lfloor C[i] / b \rfloor$ and then replacing $C[i]$ with $C[i](\text{mod } b)$.
2. Alternatively, we could compute the product polynomial and then evaluate it at $b$ to get the integer product $A \times B$. With fast convolution, either way gives us an even faster multiplication algorithm than [[Fast Multiplication Algorithms|Karatsuba's algorithm]], running in $O(n \log n)$.

## Cross-Correlation
For two time series $A$ and $B$, the cross-correlation function measures the similarity as a function of the shift or displacement of one relative to the other. 

Perhaps people buy a product on average $k$ days after seeing an advertisement for it. Then there should be high correlation between sales and advertising expenditures lagged by $k$ days. This cross-correlation function $C[k]$ can be computed:
$$
C[k]=\sum_{j}A[j]\,B[j+k]
$$
Note that the dot product here is computed over backward shifts of $B$ instead of forward shifts, as in the original definition of a convolution. But we can still use fast convolution to compute this: simply input the reversed sequence $B^{R}$ instead of $B$.

## Moving Average Filters
Often we are tasked with smoothing time series data by averaging over a window. Perhaps we want $C[i−1] = 0.25B[i−1]+ 0.5B[i]+0.25B[i+ 1]$ over all positions $i$. This is just another convolution, where $A$ is the vector of weights within the window around $B[i]$.

### String Matching
Recall the problem of substring pattern matching. We are given a text string $S$ and a pattern string $P$, and seek to identify all locations in $P$ where $P$ may be found. For $S = abaababa$ and $P = aba$, we can find $P$ in $S$ starting at positions $0$, $3$, and $5$. 

The naive $O(mn)$ algorithm for this problem works by sliding the length-$m$ pattern over each of the $n$ possible starting points in the text. This sliding window approach is suggestive of being a convolution with the reversed pattern $P^{R}$, as shown in the figure below.

![[Applications of Convolution.png]]

Can we solve string matching in $O(n \log n)$ by using fast convolution? The answer is yes! Suppose our strings have an alphabet of size $\alpha$. We can represent each character by a binary vector of length $\alpha$ having exactly one non-zero bit (one-hot encoding). Say $a = 10$ and $b = 01$ for the alphabet $\{ a,b \}$. Then we can encode the strings $S$ and $P$ above as
$$
\begin{align}
S & =1001101001100110 \\
P & =100110
\end{align}
$$
The dot product over a window will be $m$ (the length of the pattern) on an even-numbered position of $s$ if and only if $p$ starts at that position in the text. So fast convolution can identify all locations of $p$ in $s$ in $O(n \log n)$.
- We only care about even-numbered positions because each letter is 2 bits; either `01` or `10`.

Implementation here: https://github.com/k78ma/implementations/blob/main/misc/string-match-conv.py
