---
title: Heun's Method
tags:
  - mte204
date: 2023-11-12
aliases:
---
Heun's Method improves the estimation of the slope done by [[Euler's Method]] by calculating an average slope over the interval $h$. This is a **predictor/corrector** method.

Starting on the left side, we can evaluate the slope using the equation and our initial condition (the predictor).
$$
y_{i}' = f(x_{i}, y_{i})
$$
The right side (the corrector) has slope:
$$
y'_{i+1} = f(x_{i+1}, y^{0}_{i+1})
$$
This is more difficult since we don't know $y_{i+1}$ to begin. We can estimate $y_{i+1}$ to begin, using the same extrapolation as the Euler's method to get $y_{i+1}^{0}$, an intermediate value.
$$
y^{0}_{i+1} = y_{i} + f(x_{i}, y_{i})h
$$
Then, we find the average slope over the interval:
$$
\bar{y}' = \frac{y_{i}' + y_{i+1}'}{2} = \frac{f(x_{i}+y_{i})+f(x_{i+1}, y^{0}_{i+1})}{2}
$$
This average slope is then used to extrapolate to the next point:
$$
y_{i+1} = y_{i} + \bar{y}'h
$$
#### Example
Let's say we have $\frac{dy}{dx}=\frac{x^{3}+1}{y}$, $0 \leq x \leq 10$, $h=0.5$ with an I.C. of $y(0)=2$.

The left slope (predictor) would be:
$$
y' = f(x_{0}, y_{0}) = \left( \frac{0^{3}+1}{2} \right)=\frac{1}{2}
$$
Then:
$$
y_{i+1}^{0} = y_{i} + f(x_{i}, y_{i})h
= 2+\left( \frac{1}{2} \right)(0.5) = 2.25
$$
Then, the slope at $y_{i+1}$ is $f(x_{i+1}, y^{0}_{i+1})$:
$$
y^{0}_{i+1} = \frac{0.5^{3}+1}{2.25}=\frac{1}{2}
$$
Then:
$$
\bar{y} = \frac{1 / 2  + 1  / 2}{2} = \frac{1}{2}
$$
and
$$
y = 2+\left( \frac{1}{2} \right)0.5 = 2.25
$$