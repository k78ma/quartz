---
title: Double Integration
tags:
  - mte203
date: 2023-11-05
aliases:
---
#### Basic Integration
Recall that the definite integral is defined as the limit of the Riemann sum:
$$
\int_{a}^{b} f(x) \, dx = \lim_{ || \Delta x_{i} || \to 0 } \sum_{i=1}^{n}f(x_{i}^{*}) \Delta x_{i} 
$$
where $a = x_{1} < x_{2} < \dots < x_{n} =b$, $\Delta x_{i}=x_{i+1}-x_{i}$ and $x_{i}^{*} \in [x_{i}, x_{i+1}]$.

#### Definition of Double Integral
Suppose we have a function $f(x,y)$. How do we define the volume under the curve for any given closed region $R$?

The **double integral** of $f(x,y)$ over region $R$ is defined as:
$$
\iint_{R} f(x,y)dA = \lim_{ || \Delta A_{i} || \to 0 } \sum_{i=1}^{n}f(x_{i}^{*}, y_{i}^{*}) \Delta A_{i}
$$
where $\{ R_{i} | \; i \in I \}$ is a partition of $R$, $\Delta A_{i}$ is the area of the sub-region $R_{i}$ and $(x_{i}^{*}, y_{i}^{*}) \in R_{i}$.

#### Properties

1. If $\iint_{R}f(x,y)\, dA$ exists and $c \in \mathbb{R}$ then: 
$$
\iint_{R} cf(x,y)\,dA = c\iint_{R}f(x,y)\,dA
$$
2. If $\iint_{R}f(x,y)dA$ and $\iint_{R}g(x,y)dA$ then
$$
\iint_{R}f(x,y)+g(x,y)\,dA = \iint_{R}f(x,y)\,dA + \iint_{R}g(x,y)\,dA
$$
3. If $R$ is partitioned by $R_{1}$ and $R_{2}$ that have piecewise-smooth boundaries and $\iint_{R}f(x,y)dA$ exists then:
$$
\iint_{R}f(x,y)+g(x,y)\,dA = \iint_{R_{1}}f(x,y)\,dA + \iint_{R_{2}}f(x,y)\,dA
$$
1. If the area of $R$ is defined then it is given by:
$$
\text{area of }R = \iint_{R}\, dA
$$
