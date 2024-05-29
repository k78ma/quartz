---
title: Romberg Integration
tags:
  - mte204
date: 2023-11-03
aliases:
---
Challenges with [[Simpson's Rule]] and [[Trapezoid Rule]] methods:
- Require a large number of terms
- Increasing the number of terms can lead to round-off error
- Simpson’s rule requires an even number of intervals

### Definition
**Romberg Integration** uses two successive trapezoid rule estimates of the integral to obtain a 3rd accurate value (using Richardson extrapolation). This is achieved by halving the interval (doubling $n$). This method that the function be sufficiently differentiable over the evaluation interval.

Let us say that an integral is:
$$
\begin{align}
I = I(h) + E(h)
\end{align}
$$
where $I(h)$ is the approximation and $E(h)$ is the error.

Consider two estimates using different step sizes $h_{1}$ and $h_{2}$, then:
$$
\begin{align}
I(h_{1})+E(h_{1}) = I(h_{2})+ E(h_{2})
\end{align}
$$
Recall that the error associated with trapezoid rule could be approximated as:
$$
E \approx - \frac{b-a}{12}h^{2}\bar{f}''
$$
where $n = (b-a) / h$.

Assuming that $\bar{f}''$ is constant (not dependent on step size), then the ratio:
$$
\frac{E(h_{1})}{E(h_{2})} \approx \frac{h_{1}^{2}}{h_{2}^{2}} \quad \text{or} \quad E(h_{1})\approx E(h_{2})\left( \frac{h_{1}}{h_{2}} \right)^{2}
$$
This gives:
$$
\begin{align}
I(h_{1})+E(h_{2})\left( \frac{h_{1}}{h_{2}} \right)^{2}  & \approx I(h_{2})+E(h_{2}) \\[3ex] 
E(h_{2}) &  \approx \frac{I(h_{1})-I(h_{2})}{1 - (h_{1} / h_{2})^{2}}
\end{align}
$$
From (1), (2), (4), we have:
$$
I \approx I(h_{2})+\frac{1}{(h_{1} / h_{2})^{2}-1}[I(h_{2})-I(h_{1})]
$$
If we use $h_{2} = \frac{h_{1}}{2}$, we have:
$$
I \approx \frac{4}{3}I(h_{2}) - \frac{1}{3}I(h_1)
$$
The error for this is $O(h^{4})$, such that the as the step size $h$ is reduced, the error decreases at a rate proportional to $h^{2}$.

You can continue to combine integrals gives a result of:
$$
I \approx \frac{16}{15}I_{m} - \frac{1}{15}I_{l}
$$
which would result in $O(h_{6})$.

In general:
$$
I_{j,k}\approx \frac{4^{k-1}I_{j+1, k-1} - I_{j,k-1}}{4^{k-1}-1}
$$
Here $j$ indicates the accuracy of the integral we are referring to, such that $j+1$ is the more accurate integral and $j$ is the less accurate integral. We use $k$ to refer to the level of accuracy of the interval estimation; $k$ is basically the number of intervals being used for trapezoid rule, so that $k=2$ has $O(h^{4})$ and $k=3$ has $O(h^{6})$. 