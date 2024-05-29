---
title: Maximum of Transformed Density
tags:
  - stats
date: 2024-04-02
aliases:
---
Due to the nature of [[Transformation of Densities]], the concept of the *maximum* of a probability density is dependent on the choice of variable.

For a single variable $x$, suppose that $f(x)$ has a mode (i.e. a maximum) at $\hat{x}$ such that $f'(\hat{x})=0$. We have:
$$
\tilde{f}(y)=f(g(y))
$$
The corresponding mode $\tilde{f}(y)$ will occur at value $\hat{y}$ obtained by differentiating both sides with respect to $y$:
$$
\tilde{f}'(\hat{y})=f'(g(\hat{y}))g'(\hat{y}) = 0
$$
Assuming $g'(\hat{y}) \neq 0$ at the node, then $f'(g(\hat{y}))=0$. We know that $f(\hat{x})=0$, so we see that $\hat{x}=g(\hat{y})$, as we would expect. Thus, finding a mode with respect to the variable $x$ is equivalent to first transforming to the variable $y$, then finding a mode with respect to $y$, and then transforming back to $x$.

For a density $p_{x}(x)$, and new density $p_{y}(y)$, transformed under $x=g(y)$ we can write:
$$
\begin{align}
p_{y}(y) & = p_{x}(g(y)) \left| \frac{ dg }{ dy }  \right| \\[2ex]
	 & =p_{x}(g(y))sg'(y)
\end{align}
$$
where we simplify the modulus by choosing $s \in \{ -1, 1 \}$ such that $1 / s = s$ and $sg'(y)$ is always positive. Differentiating both sides with respect to $y$ gives:
$$
p'_{y}(y)=sp_{x}'(x)(g(y))\{ g'(y) \}^{2}+sp_{x}g((y))g''(y)
$$
Due to the presence of the second term on the the right side, the relationship $\hat{x}=g(\hat{y})$ no longer holds. Thus, the value of $x$ obtained by maximizing $p_{x}(x)$ will not be the value obtained by transforming to $p_{y}(y)$ then transforming back to $x$. This causes modes of densities to be dependent on the choice of variables.

![[Transformation of Densities.png]]

In the example above, the original Gaussian $p_{x}(x)$ is sampled 50000 times to obtain a histogram. Each point is then transformed from $x$ to $y$ with:
$$
x=g(y)=\ln(y)-\ln(1-y)+5
$$
The inverse of this is:
$$
y=g^{-1}(x)=\frac{1}{1+\exp(-x+5)}
$$
which is a logistic [[Sigmoid|sigmoid]] function.

If we simply transform $p_{x}(x)$ as a function of $x$, we obtain the green curve $p_{x}(g(y))$; the mode $p_{x}(x)$ is transformed via the sigmoid function as well. However, the density of $p_{y}(y)$, shown by the magenta curve, transforms instead according to our previously derived equations; its mode is shifted relative to the mode of the green curve.