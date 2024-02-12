---
title: Operations with Big O
tags:
  - cs
date: 2024-01-13
aliases:
---
#### Adding Functions
The sum of 2 functions is governed by the dominant one:
$$
f(n)+g(n)=\Theta(\text{max}(f(n),g(n)))
$$
This lets us simplify expressions. For example, $n^{3}+n^{2}+1=\Theta(n^{3})$.

#### Multiplying Functions
Multiplying by a constant gives the same thing:
$$
O(c \cdot f(n)) \to  O(f(n))
$$
Multiplying two functions is just the product of functions:
$$
O(f(n))\cdot O(g(n)) \to O(f(n)\cdot g(n))
$$
#### Transitive Property
If $f(n)=O(g(n))$ and $g(n)=O(h(n))$, then $f(n)=O(h(n))$. 