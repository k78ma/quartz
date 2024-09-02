---
title: Fast Multiplication Algorithms
tags:
  - dsa
  - cs
date: 2024-09-01
aliases:
  - fast multiplication algorithms
  - Karatsuba's algorithm
---
## Naive Methods
We know that at least two ways to multiply integers $A$ and $B$ to get $A\times B$. 

First, we know that $A\times B$ meant adding up $B$ copies of $B$, which gives an $O(n\cdot10^{n})$ time algorithm to multiply two $n$-digit base-10 numbers. (Each addition is $O(n)$, and we do this $B$ times, where $B$ could be as large as $10^{n}$).

Then you learned to multiply long numbers on a digit-by-digit basis, like
$$
9256 \times 5367 = 9256 \times 7 + 9256 \times 60 + 9256 \times 300 + 9256 \times 5000 = 13, 787, 823 
$$
Recall that those zeros we pad the digit-terms by are not really computed as products. We implement their effect by shifting the product digits to the correct place. Assuming we perform each real digit-by-digit product in constant time, by looking it up in a times table, this algorithm multiplies two n-digit numbers in $O(n^{2})$ time.

## Divide-and-Conquer Method
Here we present an even faster algorithm for multiplying large numbers. It is a classic [[Divide and Conquer Algorithms|divide and conquer algorithm]].

Suppose each number has $n=2m$ digits. We can split each number into two pieces each of $m$ digits, such that the product of the full numbers can easily be constructed from the products of the pieces, as follows. 

Let $w=10^{m+1}$, and represent $A=a_{0}+a_{1}w$ and $B=b_{0}+b_{1}w$, where $a_{i}$ and $b_{i}$ are the pieces of a respective number. Then:
$$
A\times B=(a_{0}+a_{1}w)\times(b_{0}+b_{1}w)=a_{0}b_{0}+a_{0}b_{1}w+a_{1}b_{0}w+a_{1}b_{1}w
$$

> [!example] Example
> Let's say we have $A=1234$ and $B=5678$.
> 
> Then:
> - $A=1234$ can be split into $a_{1}=12$ and $a_{0}=34$.
> - $B=5678$ can be split into $b_{1}=56$ and $b_{0}=78$
> 
> We have $w=10^{m+1}=10^{2+1}=10^{3}=1000$.
> 

This procedure reduces the problem of multiplying two $n$-digit numbers to four products of ($n/2$)-digit numbers. Recall that multiplication by $w$ doesn’t count: it is simply padding the product with zeros. We also have to add together these four products once computed, which is $O(n)$ work.

Let $T(n)$ denote the amount of time it takes to multiply two $n$-digit numbers. Assuming we use the same algorithm recursively on each of the smaller products, the running time of this algorithm is given by the recurrence:
$$
T(n)=4T(n/2)+O(n)
$$
For $T(n)=aT(n / b)+f(n)$, we have:
- $a=4$
- $b=2$
- $f(n)=O(n)$. Thus, we have $O(n^{\log_{b}a-\epsilon})$, where $\epsilon=1$, for $\log_{b}a-\epsilon = \log_{2}4-1=2-1=1$. 
- Comparing $f(n)=O(n)$ and $O(n^{\log_{b}a})=O(n^{2})$, we see that $n$ grows slower than $n^{2}$. This means that that the recursive subproblems $a\cdot T(n / b)$ dominate the internal evaluation cost $f(n)$. 

Thus, this is a [[Divide and Conquer Recurrences#Solving Divide-and-Conquer Recurrences|Case 1 Divide-and-Conquer Recurrence]],which tells us that if $f(n)=O(n^{\log_{b}a-\epsilon})$ for some constant $\epsilon>0$, then $T(n)=\Theta(n^{\log_{b}a})$. Consequently, we see that this algorithm runs in $O(n^{2})$ time, exactly the same as the digit-by-digit method.

## Karatsuba's Algorithm
Karatsuba’s algorithm is an alternative recurrence for multiplication, which yields a better running time. Suppose we compute the following three products:
$$
\begin{align}
q_{0} & =a_{0}b_{0} \\
q_{1} & =(a_{0}+a_{1})(b_{0}+b_{1}) \\
q_{2} & =a_{1}b_{1}
\end{align}
$$
Note that
$$
\begin{align}
A\times B & =(a_{0}+a_{1}w)\times(b_{0}+b_{1}w) \\
	 & =a_{0}b_{0}+a_{0}b_{1}w+a_{1}b_{0}w+a_{1}b_{1}w^{2} \\
	 & =q_{0}+(q_{1}-q_{0}-q_{2})w+q_{2}w^{2}
\end{align}
$$
so now we have computed the full product with just three half-length multiplications and a constant number of additions. Again, the w terms don’t count as multiplications: recall that they are really just zero shifts.

The time complexity of this algorithm is therefore governed by the recurrence
$$
T(n)=3T(n/2)+O(n)
$$
For $T(n)=aT(n / b)+f(n)$, we have:
- $a=3$
- $b=2$
- $f(n)=O(n)=O(n^{\log_{2}3-\epsilon})$.

This is once again case 1 of the divide-and-conquer recurrence master theorem, so we have
$$
T(n)=\Theta(n^{\log_{2}3})=\Theta(n^{1.585})
$$
This is a substantial improvement over the quadratic algorithm for large numbers, and indeed beats the standard multiplication algorithm soundly for numbers of $500$ digits or so.

## Strassen Algorithm
This approach of defining a recurrence that uses fewer multiplications but more additions also lurks behind fast algorithms for matrix multiplication. The nested-loops algorithm for matrix multiplication for two $n\times n$ matrices, because we compute the dot product of n terms for each of the $n^{2}$ elements in the product matrix. However, Strassen discovered a divide-and-conquer algorithm that manipulates the products of seven $\frac{n}{2}\times \frac{n}{2}$ matrix products to yield the product of two $n \times n$ matrices. This yields a time-complexity recurrence
$$
T(n)=7\cdot T(n / 2)+O(n^{2})
$$
Because $\log_{2}7\approx 2.81$, $O(n^{\log_{2}7})$ dominates $O(n^{2})$, so Case 1 of the master theorem applies and $T(n) = \Theta(n^{2.81})$.

This algorithm has been repeatedly “improved” by increasingly complicated recurrences, and the current best is $O(n^{2.3727})$.