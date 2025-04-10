---
title: Polynomial Stability
tags:
  - elec3200
date: 2025-04-06
aliases:
  - polynomial stability
---
A polynomial is said to be stable if all of its roots have negative real parts.

The pole of a transfer function $G(s)$ are the roots of its denominator polynomial. Thus, to determine the stability of an [[Linear Time-invariant Systems|LTI system]], we typically need to:
- Check the root positions of a polynomial
- Determine the stability of a polynomial

Consider a polynomial:
$$
a(s)=a_{0}s ^{n}+a_{1}s ^{n-1}+\dots+a_{n}, \quad  a_{0}>0
$$
If $a(s)$ is stable, then $a_{i}>0$ for $i=1, \dots,n$. Note that this is only a necessary condition for stability! We can have all positive coefficients but still have an unstable polynomial.