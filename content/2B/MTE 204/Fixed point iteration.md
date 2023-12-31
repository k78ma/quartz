---
title: Fixed point iteration
tags:
  - mte204
date: 2023-10-10
---
### Definition
Given an equation $x=g(x_{i})$, we continuously iterate on $x_{i+1} = g(x_{i})$ to predict the new value of $x$ based on its old value. 

>[!info] Transforming Equations
>Equations need to be in the right form for fixed point iteration to work. There are 2 options:
>- Isolate $x$
>- Add $x$ to both sides
>Basically, any $f(x) = 0$ needs to be transformed to $x=g(x)$.
> 
>**Example 1:** $x^{2}-2x+3 = 0$
>
>This is transformed by isolating $x$:
>$$
>\begin{align}
>x = \frac{x^{2}+3}{2} \\[3ex]
>x_{i+1}= \frac{x_{i}^{2}+3}2{}
>\end{align}
>$$
>
>**Example 2:** $\sin x + x^{2} = 0$
>
>This is transformed by adding $x$ to both sides:
>$$
>\begin{align}
>x &= \sin x + x^{2} + x \\
>x_{i} &= \sin x_{i}+ x_{i}^{2} + x_{i} \\[3ex]
> 
>\end{align}
>$$

^6e35b2

---
### Fixed Point Iteration Example
Let’s say we have:
$$
f(x) = e^{-x}-x = 0
$$
Isolating $x$ and putting it into fixed point iteration form:
$$
x_{i+1}=e^{-x_{i}}
$$

Then, we have:

| Iteration | $x_i$       | $x_{i+1}$ | $\epsilon_{a} (\%)$ |
| --------- | ----------- | --------- | ------------------- |
| 1         | 0 (initial) | 1         | 100                 |
| 2         | 1           | 0.3679    | 172                 |
| 3         | 0.3679      | 0.6922    | 47                  |
| …10       | 0.5711      | 0.5649    | 1.11                | 

Converges when $|g'(x)| < 1$  (slope at $x$).

---
### Convergence Properties

>[!info]- 2-curve Graphical Interpretation
>Since we are isolating $x$ for open methods (see [[Fixed point iteration#^6e35b2|here on transforming equations for fixed point iteration]]), these functions can be thought of as two curves. Using the function used above as an example, we would have:
>$$
>\begin{align}
>f_{1}(x) &= e^{-x} \\
>f_{2}(x)&=x
>\end{align}
>$$
>![[2 curve.png]]

Convergence occurs when the absolute value of the slope $f_{2}(x) = g(x)$ is less than the slope of $f_{1}(x) =x$. Basically the idea here is that if the curve changes to fast relative to the isolated $f_{1}(x) =x$ function, the two curves diverge since the iterations are no longer moving toward the $y=x$ line.

Convergence cases:

![[convergence.png]]


Divergence cases:
![[Fixed point iteration 2.png]]

- Converges when $|g'(x)| < 1$
- Diverges when $|g'(x)| \geq 1$
