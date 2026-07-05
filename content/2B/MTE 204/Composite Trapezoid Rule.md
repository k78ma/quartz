---
title: Composite Trapezoid Rule
tags:
  - mte204
date: 2023-10-21
---
This is the practical version of the [[Trapezoid Rule]] – we achieve improved accuracy by dividing a given curve into more intervals.

The total area, $I$, would be the summation of individual area:
$$
I  = \int_{x_{0}}^{x_{1}} f(x) \, dx +  \int_{x_{1}}^{x_{2}} f(x) \, dx +\dots+ \int_{x_{n-1}}^{x_{n}} f(x) \, dx
$$
Using the trapezoid rule:
$$
I  = h \frac{f(x_{0})+f(x_{1})}{2} + h \frac{f(x_{1})+f(x_{2})}{2} + \dots + h \frac{f(x_{n-1})+f(x_{n})}{2}
$$
In the equation above, $h$ is the width of the interval between two points. If we have $n$ equally spaced points, this would be:
$$
h = \frac{b-a}{n}
$$
For a cleaner formula, we can group the terms:
$$
I = \frac{h}{2} \left( f(x_{0})+ 2 \sum_{i=1}^{n-1}f(x_{i}) + f(x_{n}) \right)
$$
Or an even more general form:
$$
I = \underbrace{ (b-a) }_{ \text{Width} } \; \; \underbrace{ \frac{f(x_{0})+ 2 \sum_{i=1}^{n-1}f(x_{i}) + f(x_{n})}{2n} }_{ \text{Average height} }
$$


![[Composite Trapezoid Rule.png|460]]