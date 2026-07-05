---
title: Transformation of Densities
tags:
  - stats
date: 2024-04-02
aliases:
---
How does a probability density transform under a non-linear change of variable? Probability densities have different behavior than simple functions under such transforms. 

Consider a single variable $x$, and we make a change of variables $x=g(y)$, such that $f(x)$ becomes a new function $\tilde{f}(y)$ such that
$$
\tilde{f}(y)=f(g(y))
$$
For a probability density $p_{x}(x)$, if we want to find a density for a new variable $y$, such that $x=g(y)$. This density is expressed as $p_{y}(y)$. To make this transformation, we consider the probabilities of $x$ and $y$ falling into infinitesimally small ranges. 
- The probability that $x$ in the range $(x, x+\delta x)$ is $p_{x}(x)\delta x$ (see [[Probability Density Function|probability density]]).  
- Similarly, the probability that $x$ in the range $(y, y+\delta y)$ is $p_{y}(y)\delta y$.

Now, since $x$ and $y$ are related by $x=g(y)$, we can say that a small change in $y$ will cause a corresponding small change in $x$. This can be expressed mathematically by considering that probability is conserved when we change variables, such that:
$$
p_{x}(x)\delta x \approx p_{y}(y)\delta y
$$
This becomes exactly equal when we take the limit of $\delta x \to0$ and $\delta y\to 0$:
$$
\lim_{ \delta x \to 0 } p_{x}(x)\delta x = \lim_{ \delta y \to 0 } p_{y}(y)\delta y
$$
We can then turn this into:
$$
\begin{align}
p_{y}(y) & =p_{x}(x) \left| \frac{ dx }{ dy }  \right| \\[2ex]
	 & = p_{x}(g(y)) \left| \frac{ dg }{ dy }  \right|
\end{align}
$$
Here we're using the modulus $| \cdot |$ because the derivative could be negative, but we want to scale the density by the proportion of lengths, which is a positive value.

This sort of procedure is very powerful, as any density $p(y)$ can be obtained from a fixed density $q(x)$ by making a non-linear change of variable $y=f(x)$ in which $f(x)$ is monotonic so that $0 \leq f'(x) < \infty$, and $q(x)$ is non-zero everywhere. However, it can also make things more complicated, such as wen trying to find [[Maximum of Transformed Density]].
 
This property is important to [[Normalizing Flows]].

