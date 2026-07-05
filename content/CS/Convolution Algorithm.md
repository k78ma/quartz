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

Convolution multiplies every possible pair of elements from $A$ and $B$, and hence it seems like we should require quadratic time to get these $n + m − 1$ numbers. Like sorting, there exists a clever [[Divide and Conquer Algorithms|divide and conquer algorithm]] that runs in $O(n \log n)$ time, assuming that $n \geq m$. And just like sorting, there are a large number of applications that take advantage of this enormous speedup for large sequences.

## Fast Convolution/Polynomial Multiplication
We present convolution through a fast algorithm for multiplying polynomials. It is based on a series of observations:

**Polynomials can can be represented either as equations or sets of points.** We know that every pair of points defines a line; more generally, any degree-$n$ polynomial $P(x)$ is completely defined by $n + 1$ points on the polynomial. For example, the points $(−1, −2)$, $(0, −1)$, and $(1, 2)$ define (and are defined by) the quadratic equation $y=x^{2}+2x-1$.

**We can find $n+1$ such points on $P(x)$ by evaluation, but it looks expensive.** Generating a point on a given polynomial is easy – simply pick an arbitrary value $x$ and plug it into $P(x)$. The time it takes for one such $x$ will be linear in the degree of $P(x)$, which means $n$ doubles for the problems we are interested in. But doing this $n + 1$ times for different values of $x$ would take $O(n^{2})$ time, which is more than we can afford if we want fast multiplication.

**Multiplying polynomials A and B in a points representation is easy, if they have both been evaluated on the same values of $x$:** Suppose we want to compute the product of $(3x^{2}+2x+6)(4x^{2}+3x+2)$. The result will be will be a degree-$4$ polynomial, so we need five points to define it. We can evaluate both factors on the same $x$ values:
$$
\begin{align}
A(x)=3x^{2}+2x+6\quad  & \longrightarrow \quad (−2, 14),(−1, 7),(0, 6),(1, 11),(2, 22) \\
B(x)=4x^{2}+3x+2\quad  & \longrightarrow \quad (−2, 12),(−1, 3),(0, 2),(1, 9),(2, 24)
\end{align}
$$
Since $C(x) = A(x)B(x)$, we can now construct points on $C(x)$ by multiplying the corresponding $y$-values:
$$
C(x) \quad \longleftarrow \quad  (−2, 168),(−1, 21),(0, 12),(1, 99),(2, 528)
$$
Thus, multiplying points in this representation takes only linear time.

**We can evaluate a degree-n polynomial $A(x)$ as two degree-$(n/2)$ polynomials in $x^{2}$**. We can partition the terms of $A$ into those of even and odd degree, for example:
$$
12x^{4} + 17x^{4} + 36x^{2} + 22x + 12 = (12x^{4} + 36x^{2} + 12) + x(17x^{2} + 22)
$$
By replacing $x^{2}$ with $x'$, the right side gives us two smaller, lower degree polynomials as promised.

**This suggests an efficient divide-and-conquer algorithm.** We need to evaluate $n$ points of a degree-$d$ polynomial. We need $n \geq 2d + 1$ points, since we will be using them to compute the product of two polynomials. We can decompose the problem into doing this evaluation on two polynomials of half the degree, plus a linear amount of work stitching the results together. This defines the recurrence $T(n)=2T(n/2) + O(n)$, which evaluates to $O(n \log n)$.

**Making this work correctly requires picking the right $x$ values to evaluate on.** The trick with the squares makes it desirable for our sample points to come in pairs of the form $\pm x$, since their evaluation requires half as much work because they are identical when squared.

However, this property does not hold recursively, unless the $x$ values are carefully chosen complex numbers. The $n$th roots of unity are the set of solutions to the equation $x^{n} = 1$. In reals, we only get $x \in \{ -1,1 \}$, but there are $n$ solutions with complex numbers. The $k$th of these $n$ roots is given by
$$
w_{k}=\cos(2k\pi / n)+i\sin(2k\pi / n)
$$
To appreciate the magic properties of these numbers, look at what happens when we raise them to powers:
$$
\begin{align}
w & =\left\{  1, \frac{1+i}{\sqrt{ 2 }}, i, -\frac{1-i}{\sqrt{ 2 }}, -1, -\frac{1+i}{\sqrt{ 2 }}, -i, \frac{1-i}{\sqrt{ 2 }}  \right\} \\[2ex] 
w^{2} & =\{ 1, i, -1, -i, 1, i, -1, -i \} \\[2ex] 
w^{4} & =\{ 1, -1, 1, -1, 1, -1, 1, -1 \} \\[2ex] 
w^{8} & =\{ 1,1,1,1,1,1,1,1 \}
\end{align}
$$
Observe that these terms come in positive/negative pairs, and the number of distinct terms gets halved with each squaring. These are the properties we need to make the divide and conquer work.

The best implementations of fast convolution generally compute the [[fast Fourier transform]] (FFT), so usually we seek to reduce our problems to FFTs to take advantage of existing libraries.