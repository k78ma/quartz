---
title: Normalizing Flows
tags:
  - dl
date: 2026-07-29
aliases: normalizing flows
---
Normalizing flows are [[Unsupervised Learning|probabilistic generative models]], learning a probability model by transforming a simple distribution into a more complex one using a deep network. Normalizing flows can both sample from this distribution and evaluate the probability of new examples. However, they require specialized architecture; each layer must be invertible (transform data in both directions).

Normalizing flows can be used for [[Generative Flows|generative applications]], as well as for [[Normalizing Flows for Approximating Densities|approximating other density models]].

## Intuition
See [[1D Normalizing Flows Intuition]] for an example.

## Formulation
We aim to transform a multivariate base distribution $Pr(z)$ to a model distribution $Pr(x)$ with a deep neural network.
- The invertibility requirement means that the latent space $z$ must be the same size as the data space $x$ (a continuous invertible map between ordinary Euclidean spaces requires equal dimensions).

Consider applying a function $x=f[z, \phi]$ to a random variable $z \in \mathbb{R}^{D}$ with base density $Pr(z)$, where $f[z, \phi]$ is a deep network. The resulting variable $x \in \mathbb{R}^{D}$ has a new distribution. A sample $x^{\ast }$ can be drawn from this distribution by drawing a sample $z^{\ast}$ from the base density and passing it through the neural network so that $x^{\ast}=f[z^{\ast}, \phi]$.

As we've seen from the 1D example, the likelihood of a sample under this distribution is:
$$
Pr(x|\phi) = \left| \frac{ \partial f[z, \phi] }{ \partial z }  \right| ^{-1} \cdot Pr(z)
$$
where $z=f^{-1}[x, \phi]$ is the latent variable $z$ that created $x$.
- The first term is the inverse of the determinant of the $D\times D$ Jacobian matrix $\partial f[z, \phi] / \partial z$, which contains elements $\partial f_{j}[z, \phi] / \partial z_{i}$ at position $(i,j)$.
    - Just as the absolute derivative measured the change of area at a point on a 1D function where the function was applied, the absolute determinant measures the change in volume at a point in the multivariate function.
- The second term is the probability of the latent variable under the base density.

## Forward and inverse mapping
In practice, the **forward mapping** $f[z, \phi]$ is usually defined by a neural network, consisting of a series of layers $f_{k}[\bullet, \phi_{k}]$ with parameters $\phi_{k}$, which are composed together as:
$$
x=f[z, \phi] = f_{K}\bigg[f_{K-1}\Big[\dots f_{2}\big[f_{1}[z, \phi_{1}], \phi_{2}\big], \dots \phi_{K-1}\Big], \phi_{K}\bigg]
$$
The **inverse mapping** (normalizing direction) is defined by the composition of the inverse of each layer $f_{k}^{-1}[\bullet, \phi_{k}]$ applied in the opposite order:
$$
z = f^{-1}[x, \phi] = f_{1}^{-1} \bigg[ f_{2}^{-1} \Big[\dots f_{K-1}^{-1} \big[f_{K}^{-1}[x, \phi_{K}], \phi_{K-1} \big], \dots \phi_{2} \Big], \phi_{1} \bigg]
$$
The base density $Pr(z)$ is usually defined as a multivariate standard normal (i.e., with mean zero and identity covariance). Hence, the effect of each subsequent inverse layer is to gradually move or "flow" the data density toward this normal distribution. This gives rise to the name "normalizing flows".

![[Normalizing Flows-1785724371564.webp]]

The Jacobian of the forward mapping can be expressed as:
$$
\frac{ \partial f[z, \phi] }{ \partial z }  = \frac{ \partial f_{1}[z, \phi_{1}] }{ \partial z } \cdot \frac{ \partial f_{2}[f_{1}, \phi_{2}] }{ \partial f_{1} }  \cdot \dots \cdot  \frac{ \partial f_{K-1}[f_{K-2},\phi_{K-1}] }{ \partial f_{K-2} } \cdot  \frac{ \partial f_{K}[f_{K-1}, \phi_{K}] }{ \partial f_{K-1} } 
$$
where we are abusing notation to make $f_{k}$ the output of the function $f_{k}[\bullet, \phi_{k}]$. The absolute determinant of this Jacobian can be computed by taking the product of the individual absolute determinants:
$$
\left| \frac{ \partial f[z, \phi] }{ \partial z } \right|   = \left| \frac{ \partial f_{1}[z, \phi_{1}] }{ \partial z } \right|  \cdot \left| \frac{ \partial f_{2}[f_{1}, \phi_{2}] }{ \partial f_{1} }  \right| \cdot \dots \cdot \left| \frac{ \partial f_{K-1}[f_{K-2},\phi_{K-1}] }{ \partial f_{K-2} }  \right|   \cdot \left| \frac{ \partial f_{K}[f_{K-1}, \phi_{K}] }{ \partial f_{K-1} }  \right| 
$$
The absolute determinant of the Jacobian of the inverse mapping is found by applying the same rule to the inverse mapping equation above:
$$
\frac{ \partial f^{-1}[x, \phi] }{ \partial x } = \frac{ \partial f_{1}^{-1}[f_{2}, \phi] }{ \partial f_{2} } \cdot \frac{ \partial f_{2}^{-1}[f_{3}, \phi_{2}] }{ \partial f_{3} } \cdot \dots\cdot  \frac{ \partial f^{-1}_{K-1}[f_{K}, \phi_{K-1}] }{ \partial f_{K} }  \cdot \frac{ \partial f_{K}^{-1}[x,\phi_{K}] }{ \partial x } 
$$
The determinant can either be computed as the product of the determinants in this expression, or just the inverse of the original determinant:
$$
 \left| \frac{ \partial f^{-1}[x, \phi] }{ \partial x } \right| = \left| \frac{ \partial f_{K}[f_{K-1}, \phi_{K}] }{ \partial f_{K-1} }  \right|^{-1} \cdot \left| \frac{ \partial f_{K-1}[f_{K-2}, \phi_{K-1}] }{ \partial f_{K-2} }  \right| ^{-1} \dots \left| \frac{ \partial f_{2}[f_{1}, \phi_{2}] }{ \partial f_{1} }   \right| ^{-1} \cdot \left| \frac{ \partial f_{1}[z, \phi_{1}] }{ \partial z }  \right|^{-1}
$$

## Training
We train normalizing flows with a dataset $\{ x_{i} \}$ of $I$ training examples using the [[Log-Likelihood Criterion|negative log-likelihood]] criterion:
$$
\begin{align*}
\hat{\phi}  & = \underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I}Pr(z_{i})\cdot  \left| \frac{ \partial f[z_{i}, \phi] }{ \partial z_{i} }  \right| ^{-1} \right] \\[2ex] 
&= \underset{\phi}{\operatorname{argmin}}\left[ \sum_{i=1}^{I} \log\left[ \left| \frac{ \partial f[z_{i}, \phi] }{ \partial z_{i} }  \right|  \right] - \log[Pr(z_{i})]\right]
\end{align*}
$$
where $z_{i}=f^{-1}[x_{i}, \phi]$, $Pr(z_{i})$ is measured under the base distribution, and the determinant is calculated as above.

## Architecture
The theory of normalizing flows is straightforward. However, for this to be practical, we need neural network layers $f_{k}$ that have four properties:
1. Collectively, the set of network layers must be sufficiently *expressive* to map a multivariate standard normal distribution to an arbitrary density.
2. The network layers must be *invertible*; each must define a unique one-to-one mapping from any input point to an output point ([[Bijectivity|bijective]]).
3. It must be possible to compute the inverse of each layer *efficiently*. We need to do this every time we evaluate the likelihood. This happens repeatedly during training, so there must be a closed-form solution or a fast algorithm for the inverse.
4. It also must be possible to evaluate the *determinant* of the efficiently for either the forward or inverse mapping.

With these requirements in mind, we can now describe different invertible network layers or flows for use in these models. We start with linear and elementwise flows. These are easy to invert, and it’s possible to compute the determinant of their Jacobians, but neither is sufficiently expressive to describe arbitrary transformations of the base density. However, they form the building blocks of coupling, autoregressive, and residual flows, which are all more expressive. 
- [[Linear Flows]], [[Elementwise Flows]] – easy to invert and compute Jacobians, but not sufficiently expressive.
- [[Coupling Flows]], [[Autoregressive Flows]], [[Residual Flows]]
- [[Multi-scale Flows]]


#cards/dl 
Normalizing flows
?
Generative model where we map a base distribution $Pr(z)$ to a model distribution $Pr(x)$ with a deep neural network. We can find the probability of a sample $x$ by computing the determinant of its inverse's Jacobian and multiplying by $Pr(z)$. However, normalizing flows have the requirement of invertible layers (one-to-one mapping between $z$ and $x$).
$$
Pr(x|\phi) = \left| \frac{ \partial f[z, \phi] }{ \partial z }  \right| ^{-1} \cdot Pr(z)
$$
- $z=f^{-1}[x, \phi]$ is the latent variable $z$ that created $x$.
+++