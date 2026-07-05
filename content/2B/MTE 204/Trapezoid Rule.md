---
title: Trapezoid Rule
tags:
  - mte204
date: 2023-10-21
---
The trapezoid is a subset of the Newton-Cotes closed formulations using a first order (linear) representation of the curve.

### Formulation

![[Trapezoid Rule.png|480]]

Consider a small interval between $a$ and $b$:
$$
I = \int_{a}^{b} f(x) \, dx \approx \int_{a}^{b} f_{1}(x) \, dx  
$$
where $f_{1}(x)$ is a linear approximation:
$$
f_{1}(x) = f(a) + \frac{f(b)-f(a)}{b-a}(x-a)
$$
Substituting, we have:
$$
\begin{align}
I   & = \int_{a}^{b} f(a) + \frac{f(b)-f(a)}{b-a}(x-a) \, dx  \\[3ex] 

	 & = (b-a) \frac{f(a)+f(b)}{2}
\end{align}
$$
This is based on the area of trapezoid formula:
$$
I = (b-a) \times \text{average height}
$$
![[Trapezoid Rule-1.png|245]]

(In middle school this was written as $A = \frac{a+b}{2}h$)

When applied, we use the [[Composite Trapezoid Rule]].

### Data Distributions

The trapezoid rule can be applied to evenly-spaced and unevenly-spaced data, as long as we define some interval $h$ to apply with [[Composite Trapezoid Rule]].

The trapezoid rule is often used due to its ease of implementation, versatility for both data and functions, and applicability to unevenly-spaced data.

### Accuracy
In general, the accuracy improves as we increase the number of intervals. The error in applying can be determined by summing up the errors of each individual interval, where $\xi$ lies somewhere in the interval from $a$ to $b$.

The error for an individual interval is:
$$
E_{t} = -\frac{(b-a)^{3}}{12n^{3}}\sum_{n=1}^{n}f''(\xi_{i})
$$
where $f''(\xi_{i})$ is the second derivative at a point $\xi_{i}$ located in the segment $i$. The intuition here is that since the second derivative describes the curvature of a function, we are comparing how the curviness of the function to the straight trapezoid line.

We can simplify things by considering:
$$
\sum f''(\xi_{i}) \approx n \bar{f}''
$$
where $\bar{f}''$ is the mean or average value of the second derivative for the entire interval.

The approximate error (due to the approximation of $f''$ above) is then:
$$
E_{a} = - \frac{(b-a)^{3}}{12n^{2}}\bar{f}''
$$
Interestingly, this is a function of $1 / n^{2}$, which means that doubling the number of points reduces the error by a factor of $4$.