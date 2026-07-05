---
title: Hidden Poles
tags:
  - elec3200
date: 2025-04-01
aliases:
  - hidden poles
---
In the transfer function of a state space model
$$
G(s)=c(sI-A)^{-1}b+d=\frac{c \text{adj}(sI-A)}{\det(sI-A)}+d
$$
where $\text{adj}$ is the adjugate of a matrix.

If there is no common factor on the denominator and numerator, then $a(s)= \text{det}(sI-A)$, i.e., $a(s)$ is the characteristic polynomial of matrix $A$, and the poles of the system are the eigen values of $A$.

Otherwise, $a(s)$ is only a factor of $\det(sI-A)$. Hence there exists hidden poles.
