---
title: Polynomial Interpolation
tags:
  - mte204
date: 2023-10-19
---
Interpolation refers to having a set of data and determining the values between the measured/reported data points. A polynomial interpolation fits one curve to all points, while a [[spline interpolation]] fits them one curve per interval.

In general, we can fit a polynomial of order $n$ to $n+1$ data points. For example, if we have 2 points, we would be able to use a first order polynomial ($f(x) = a_{0} + a_{1}(x)$)