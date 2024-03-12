---
title: Fast Exponentiation Algorithm
tags:
  - dsa
  - cs
date: 2024-03-12
aliases:
---
Let's say we need to compute the exact value of $a^{n}$ for a large $n$. 
- Such problems occur in primality testing for cryptography
- Issues of numerical precision prevent us from using $a^{n}=\exp(\ln(a^{n}))=\exp(n\ln a^{})$

The simplest algorithm, where we just do $a\times a \times a\dots \times a$ would perform $n-1$ multiplications. We can do better by observing that $n = \lfloor n / 2 \rfloor + \lceil n / 2 \rceil$.
- If $n$ is even, then $a^{n}=(a^{n/2})^{2}$
- If $n$ is odd, then $a^{n}=a(a^{\lfloor n / 2 \rfloor})^{2}$

In either case, we have halved the size of our exponent, at the cost of 2 multiplications at most. Thus, $O(\log_{2}n)$ multiplications suffice to compute the final value.

In Python:
```python
def power(a,n):
	if n == 0:
		return 1

	x = power(a, n // 2) # Floor division
	
	if n % 2 == 0: # n is even
		return x**2
	else: # n is odd
		return a * x**2
```

This simple algorithm illustrates an important principle of divide and conquer. When $n$ is not a power of two, the problem cannot always be divided perfectly evenly, but a difference of one element between the two sides as shown here cannot cause any serious imbalance.