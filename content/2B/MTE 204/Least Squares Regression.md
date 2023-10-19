---
title: Least Squares Regression
tags:
  - mte204
date: 2023-10-19
---
Least-squares regression seeks to minimze the residual (or error) between data points and corresponding points on the curve (trend line).

Consider the equation of a straight line:
$$
y = \underbrace{ a_{0} }_{ \text{intercept} } + \underbrace{ a_{1} }_{ \text{slope} }x + \underbrace{ e }_{ \text{error} }
$$
Rearranging, we would have:
$$
e = y- a_{0} - a_{1}x
$$
A common strategy would be to minimize the sum of squares of the residuals, such as:
$$
S_{r} = \sum_{i=1}^{n}e^{2}_{i} = \sum_{i=1}^{n}(y_{i, \text{measured}} - y_{i, \text{model}})= \sum_{i=1}^{n}(y_{i} -a_{0}-a_{1}x_{i})^{2}
$$
### Least Squares Regression Definition