---
title: Midpoint Method
tags:
  - mte204
date: 2023-11-12
aliases:
---
The Midpoint (or Improved Polygon) Method is another modification of Euler's method, which uses Euler's method to predict a value at the mid-point of the interval.

The $y$ value at the midpoint is:
$$
y_{i+1 / 2} = y_{i} + f(x_{i}, y_{i}) \frac{h}{2}
$$
And the slope at the midpoint is:
$$
y'_{i+ 1 / 2} = f(x _{i+1 / 2}, y_{i+1 / 2})
$$
So the $y_{i+1}$ value is:
$$
y _{i+1} = y_{i} + f\left( x_{i+1 / 2}, y_{i+ 1 /2} \right)h
$$
