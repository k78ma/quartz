---
title: Convolution Algorithm
tags:
  - dsa
  - cs
date: 2024-09-14
aliases:
  - convolution algorithm
---
The [[Convolution Sum|convolution]] of two arrays (or vectors) $A$ and $B$ is a new vector $C$ such that
$$
C[k]=\sum_{j=0}^{m-1}A[j]-B[k-j]
$$
If we assume $A$ and $B$ are of length $m$ and $n$ respectively, and indexed starting from $0$, the natural range on $C$ is from $C[0]$ to $C[n+m-2]$. The values of all out-of-range elements of $A$ and $B$ are interpreted as zero, so they do not contribute to any product.

> [!example]- 1D Convolution Example
> Suppose we have: 
> - $A=[1,2,3]$, such that length $m=3$
> - $B = [4, 5]$, such that length $n=2$ 
>   
> We want to compute the convolution sum $C$, which will have a length of $n+m-1=2+3-1=4$. Let's compute each element of $C$:
> 
> - For $C[0]$:
> $$
> C[0]=A[0]\cdot B[0]=1\cdot 4=4
> $$
> - For $C[1]$:
>  $$
> C[1]=A[0]\cdot B[1]+A[1]\cdot B[0]=1\cdot5+2\cdot4=5+8=13
> $$
> - For $C[2]$:
> $$
> C[2]=A[1]\cdot B[1]+A[2]\cdot B[0]=2\cdot5+3\cdot4=10+12=22
> $$
> - For $C[3]$:
>  $$
> C[3]=A[2]\cdot B[1]=3\cdot 5=15
> $$
> 
> Thus, the resulting vector is $C=[4,13,22,15]$.

An example of convolution is polynomial multiplication. Recall the problem of multiplying two polynomials, for example:
$$
\begin{align}
(3x^{2}+2x+6)\times(4x^{2}+3x+2) & = (3\cdot 4)x^{4}+(3\cdot 3+2\cdot 4)x^{3}   \\
 & +(3\cdot 2+2\cdot 3+6\cdot 4)x^{2}+(2\cdot 2+6\cdot 3)x^{1}+(6\cdot 2)x^{0}
\end{align}
$$
Let $A[i]$ and $B[i]$ denote the coefficients of $x_{i}$ in each of the polynomials. Then, multiplication is a convolution, because the coefficient of the $x_{k}$ term in the product polynomial is given by the convolution $C[k]$ above. This coefficient is the sum of the products of all terms which have exponent pairs adding to $k$. For example $x^{5}=x^{4}\cdot x^{1}=x^{3}\cdot x^{2}$.

The obvious way to implement convolution is by computing the $m$ term dot product $C[k]$ for each $0 \leq k \leq n + m − 2$. This is two nested loops, running in $\Theta(nm)$ time. The inner loop does not always involve $m$ iterations because of boundary conditions. Simpler loop bounds could have been employed if $A$ and $B$ were flanked by ranges of zeros.

```c
for (i = 0; i < n+m-1; i++) { 
	for (j = max(0,i-(n-1)); j <= min(m-1,i); j++) { 
		c[i] = c[i] + a[j] * b[i-j]; 
	} 
}
```

Convolution multiplies every possible pair of elements from $A$ and $B$, and hence it seems like we should require quadratic time to get these $n + m − 1$ numbers. Like sorting, there exists a clever divide-and-conquer algorithm that runs in $O(n \log n)$ time, assuming that $n \geq m$. And just like sorting, there are a large number of applications that take advantage of this enormous speedup for large sequences.