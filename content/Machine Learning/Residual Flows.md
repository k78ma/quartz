---
title: Residual Flows
tags:
  - dl
date: 2026-08-04
aliases: residual flows
---
## iRevNet
Residual flows take inspiration from [[Residual Networks|residual networks]]. They divide the input into two parts $h=h[h_{1}^{T}, h_{2}^{T}]^{T}$ (similar to [[Coupling Flows|coupling flows]]) and define the outputs as:
$$
\begin{align*}
h_{1}'&= h_{1}+f_{1}[h_{2}, \phi_{1}] \\
h_{2}' &= h_{2}+f_{2}[h_{1}', \phi_{2}]
\end{align*}
$$
where $f_{1}$ and $f_{2}$ are two functions that do not necessarily have to be invertible. The inverse can be computed by reversing the order of computation:
$$
\begin{align*}
h_{2}&= h_{2}'-f_{2}[h_{1}', \phi_{2}] \\
h_{1}&= h_{1}'-f_{1}[h_{2}, \phi_{1}]
\end{align*}
$$

![[Residual Flows-1785875170816.webp]]

As for coupling flows, the division into blocks restricts the family of transformations that can be represented. Thus, the inputs are permuted between layers so that the variables can mix in arbitrary ways.

This formulation can be inverted easily, but for general functions $f_{1}[\bullet, \phi_{1}]$ and $f_{2}[\bullet, \phi_{2}]$, there is no efficient way to compute the Jacobian.

This formulation is sometimes used to save memory when training residual networks; because the network is invertible, storing the activations at each layer in the forward pass is unnecessary.

## iResNet
Another approach to exploit residual networks is to utilize the *Banach fixed point theorem* or *contraction mapping theorem*, which states that every [[Lipschitz constant|contraction mapping]] has a fixed point. A contraction mapping $f[\bullet]$ has the property that:
$$
\text{dist}[f[z'], f[z]] < \beta \bullet \text{dist}[z', z] \quad  \quad  \,\, \forall \, z, z'
$$
where $\text{dist}[\bullet,\bullet]$ is a distance function and $0 < \beta<1$. When a function with this property is iterated (i.e., the output is repeatedly passed back in as an input), the result converges to a fixed point where $f[z]=z$.
- To understand this, consider applying the function to both the fixed point and the current position; the fixed point remains static, but the distance between the two must become smaller, so the current position must get closer to the fixed point.

![[Residual Flows-1785875992777.webp]]

The theorem can be exploited to invert an equation of the form:
$$
y=z+f[z]
$$
if $f[z]$ is a contraction mapping. In other words, it can be used to find the $z^{\ast}$ that maps to a given value, $y^{\ast}$. This can be done by starting with any point $z_{0}$ and iterating $z_{k+1}=y^{\ast}-f[z_{k}]$. This has a fixed point at $z+f[z]=y^{\ast}$.

The same principle can be used to invert residual network layers of the form $h'=h+f[h,\phi]$ if we ensure that $f[h,\phi]$ is a contraction mapping. In practice, this means that the [[Lipschitz constant]] must be less than one. Assuming that the slope of the activation functions is not greater than one, this is equivalent to ensuring that the largest eigenvalue of each weight matrix $\Omega$ must be less than one. A crude way to do this is to ensure that the absolute magnitudes of the weights $\Omega$ are small by clipping them.

The Jacobian determinant cannot be computed easily, but its logarithm can be approximated using a series of tricks:
$$
\begin{align*}
\log\left[ \left| I+ \frac{ \partial f[h, \phi] }{ \partial h }  \right|  \right]&= \text{trace}\left[ \log\left[ I+ \frac{ \partial f[h, \phi] }{ \partial h }  \right] \right] \\[2ex] 
&= \sum_{k=1}^{\infty} \frac{(-1)^{k-1}}{k} \text{trace}\left[ \frac{ \partial f[h,\phi] }{ \partial h }  \right]^{k}
\end{align*}
$$
where we have used the identity $\log[\left| A \right|]=\text{trace}[\log[A]]$ in the first line, and expanded this into a power series in the second line.

Even when we truncate this series, it's still computationally expensive to compute the trace of the constituent terms. Hence, we approximate this using *Hutchinson's trace estimator*. Consider a normal random variable $\epsilon$ with mean $0$ and variance $I$. The trace of a matrix $A$ can be estimated as:
$$
\begin{align*}
\text{trace}[A]&= \text{trace}[A\mathbb{E}[\epsilon\epsilon^{T}]] \\
&= \text{trace}[\mathbb{E}[A\epsilon \epsilon^{T}]] \\
&= \mathbb{E}[\text{trace}[A\epsilon\epsilon^{T}]] \\
&= \mathbb{E}[\text{trace}[\epsilon^{T}A\epsilon]] \\
&= \mathbb{E}[\epsilon^{T}A\epsilon]
\end{align*}
$$
where:
- The first line is true because $\mathbb{E}[\epsilon\epsilon^{T}]=I$.
- The second line derives from the properties of the expectation operator. 
- The third line comes form the linearity of the trace operator.
- The fourth line is due to the invariance of the trace to cyclic permutation
- The final line is true because the argument in the fourth line is now a scalar.

We estimate the trace by drawing samples $\epsilon_{i}$ from $Pr(\epsilon)$:
$$
\begin{align*}
\text{trace}[A] &= \mathbb{E}[\epsilon^{T}A\epsilon ] \\[2ex] 
&= \frac{1}{I} \sum_{i=1}^{I} \epsilon_{i}^{T}A\epsilon_{i}
\end{align*}
$$
In this way, we can approximate the trace of the powers of the Taylor expansion and evaluate the log probability.
