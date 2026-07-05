---
title: Maximum Entropy
tags:
  - stats
date: 2024-04-08
aliases:
---
## Discrete
The maximum entropy configuration can be found by maximizing $H$ using a [[Lagrange Multipliers|Lagrange multiplier]] to enforce the normalization constraint on the probabilities, such that $\sum_{i=1}^{n}p_{i}=1$.

Thus, we maximize
$$
\tilde{H}=-\sum_{i}p(x_{i})\ln p(x_{i}) + \lambda\left( \sum_{i}p(x_{i})-1 \right)
$$
from which we find that all of the $p(x_{i})$ are equal and are given by $p(x_{i})=1 / M$ where $M$ is the total number of states $x_{i}$. The corresponding value of the entropy is then $H = \ln M$. This result can also be derived from [[Jensen’s Inequality]]. To verify that the stationary point is indeed a maximum, we can evaluate the second derivative of the entropy, which gives
$$
\frac{ \partial \tilde{H} }{ \partial p(x_{i})\partial p(x_{j}) } =-I_{ij} \frac{1}{p_{i}}
$$
where $I_{ij}$ are the elements of the identity matrix. We see that these values are all negative and, hence, the stationary point is indeed a maximum.

## Continuous
We saw that the maximum entropy configuration for discrete distributions corresponds to a uniform distribution of probabilities across the possible states of the variable. For continuous distributions, if we want the maximum to be well-defined, we need to constrain the first and second moments $p(x)$ and to preserve the normalization constraint.

Thus, we maximize [[Differential Entropy|differential entropy]] with three constraints:
$$
\begin{align}
\int_{-\infty}^{\infty} p(x) \, dx  & = 1 \\[2ex] 
\int_{-\infty}^{\infty} xp(x) \, dx  & = \mu \\[2ex] 
\int_{-\infty}^{\infty} (x-\mu)^{2}p(x) \, dx  & =\sigma^{2}
\end{align}
$$

We can then do constrained optimization with [[Lagrange Multipliers]] so that we maximize the following functional with respect to $p(x)$:
$$
\begin{align*}
-\int_{-\infty}^{\infty} p(x)\ln p(x) \, dx+\lambda_{1}\left( \int_{-\infty}^{\infty} p(x) \, dx  -1\right) \\
+ \lambda_{2}\left( \int_{-\infty}^{\infty} xp(x) \, dx -\mu \right)+\lambda_{3}\left( \int_{-\infty}^{\infty} (x-\mu)^{2}p(x) \, dx - \sigma^{2}  \right)
\end{align*}
$$
We set the derivative of this function to zero giving:
$$
p(x)=\exp \{-1+\lambda_{1}+\lambda_{2}x+\lambda_{3}(x-\mu)^{2} \}
$$
The Lagrange multipliers can be found by back-substitution of this result into the three constraint equations, leading to the result:
$$
p(x)=\frac{1}{(2\pi \sigma^{2})^{1 }{ 2}} \exp\left( -\frac{(x-\mu)^{2}}{2\sigma^{2}} \right)
$$
and so the distribution that maximizes the differential entropy is the Gaussian.

If we evaluate the differential entropy of the Gaussian, we obtain
$$
H[x]=\frac{1}{2}\{ 1+\ln(2\pi \sigma^{2}) \}
$$
Thus, we see again that the entropy increases as the distribution becomes broader (as $\sigma^{2}$ increases).

This result also shows that the differential entropy, unlike the discrete entropy, can be negative, because $H(x) < 0$ for $\sigma^{2}< 1 / (2\pi e)$.