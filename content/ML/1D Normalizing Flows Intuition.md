---
title: 1D Normalizing Flows Intuition
tags:
  - dl
date: 2026-08-02
aliases: 1d normalizing flows
---
[[Normalizing Flows]] are probabilistic generative models; they fit a probability distribution to training data. 

Consider modeling a 1D distribution $Pr(x)$. Normalizing flows start with a simple tractable base distribution $Pr(z)$ over a [[Unsupervised Learning|latent variable]] $z$ and apply a function $x=f[z,\phi]$, where the parameters $\phi$  are chosen so that $Pr(x)$ has the desired distribution. We can then easily generate a new example $x^{\ast }$; we draw $z^{\ast }$ from the base density and pass this through the function so that $x^{\ast}=f[z^{\ast}, \phi]$.

![[1D Normalizing Flows-1785710944597.webp]]

## Measuring probability
Measuring the probability of a data point $x$ is more challenging. Consider applying a function $f[z, \phi]$ to a random variable with known density $Pr(z)$:
- The probability density will decrease in areas that are stretched by the function and increase in areas that are compressed so that the area under the under the new distribution remains one. 
- The degree to which a function $f[z, \phi]$ stretches or compresses its input depends on the magnitude of its gradient. 
- If a small change to the input causes a large change in the output, it stretches the function. If a small change to the input causes a smaller change in the output, it compresses the function.

![[1D Normalizing Flows-1785711422545.webp]]

- Intuition: if a small region of the base density corresponds to a large region of the model density, the height of the model density's large region must be smaller such that probability mass stays constant.

More precisely, the probability of data $x$ under the transformed distribution is:
$$
Pr(x | \phi) = \left| \frac{ \partial f[z, \phi] }{ \partial z }  \right| ^{-1} \cdot Pr(z)
$$
where $z=f^{-1}[x, \phi]$ is the latent variable that created $x$. The term $Pr(z)$ is the original probability of this latent variable under the base density. This is moderated according to the magnitude of the derivative of the function. If it is greater than one, the probability decreases; if it is smaller, the probability increases.

## Forward and inverse mappings
To draw samples form the distribution, we need the forward mapping $x=f[z, \phi]$, but to measure the likelihood, we need to compute the inverse $z=f^{-1}[x, \phi]$. Hence, we need to choose $f[z, \phi]$ so that it is *invertible*.
- The forward mapping is sometimes called the *generative direction*. 
- The base density is usually chosen to be a standard normal distribution. Hence, the inverse mapping is called the *normalizing direction* since this takes the complex distribution over $x$ and turns it into a normal distribution over $z$.

![[1D Normalizing Flows-1785713028149.webp]]

## Learning
To learn the distribution, we find parameters $\phi$ that maximize the likelihood of the training data $\{ x_{i} \}_{i=1}^{I}$ or equivalently minimize the negative log-likelihood:
$$
\begin{align*}
\hat{\phi} & =\underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(x_{i}|\phi) \right] \\[2ex] 
&= \underset{\phi}{\operatorname{argmin}}\left[ \sum_{i=1}^{I} -\log\Big[Pr(x_{i}|\phi)\Big]\right] \\[2ex] 
&= \underset{\phi}{\operatorname{argmin}}\left[ \sum_{i=1}^{I} \log\left[  \left| \frac{ \partial f[z_{i}, \phi] }{ \partial z }  \right|   \right] - \log[Pr(z_{i})] \right]
\end{align*}
$$
where we have assumed that the data are independent and identically distributed in the first line and used the likelihood equation from above in the third line.