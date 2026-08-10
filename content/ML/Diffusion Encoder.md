---
title: Diffusion Encoder
tags:
  - dl
date: 2026-08-09
aliases:
  - diffusion encoder
  - encoder
  - diffusion kernel
---
In a [[Diffusion Models|diffusion model]], the *diffusion* or *forward* process maps a data example $x$ through a series of intermediate variables $z_{1},z_{2},\dots,z_{T}$. 
- Note that this is opposite nomenclature to [[Normalizing Flows|normalizing flows]], where the inverse mapping moves from the data to the latent variable.

The mapping is done according to
$$
\begin{align*}
z_{1}&= \sqrt{ 1-\beta_{1} } \cdot  x + \sqrt{ \beta_{1} }\cdot \epsilon_{1}  \\
z_{t}&= \sqrt{ 1-\beta_{t} }\cdot z_{t-1} + \sqrt{ \beta_{t} } \cdot  \epsilon_{t} \quad  \,\, \forall \, t \in  2,\dots,T
\end{align*}
$$
where $\epsilon_{t}$ is drawn from a standard normal distribution.
- The first term attenuates the data plus any noise added so far
- The second term adds more noise
- The hyperparameters $\beta_{t} \in [0,1]$ determine how quickly the noise is blended and are collectively known as the *noise schedule*.

![[Diffusion Encoder-1786331908486.webp]]


The forward process can be equivalently written as:
$$
\begin{align*}
q(z_{1}|x) &= \text{Norm}_{z_{1}}[\sqrt{ 1-\beta_{1} }x, \beta_{1}I] \\[2ex] 
q(z_{t}|z_{t-1})&= \text{Norm}_{z_{t}}[\sqrt{ 1-\beta_{t} }z_{t-1}, \beta_{t}I] \quad  \,\, \forall \, t\in  \{ 2,\dots,T \}
\end{align*}
$$
This is a [[Markov Chain]] because the probability $z_{t}$ is determined entirely by the value of the immediately preceding valuable $z_{t-1}$. With sufficient steps $T$, all traces of the original data are removed, and $q(z_{T}|x)=q(z_{T})$ becomes a standard normal distribution.

The joint distribution of all latent variables $z_{1}, z_{2}, \dots, z_{T}$ given input $x$ is:
$$
q(z_{1\dots T}|x) = q(z_{1}|x) \prod_{t=2}^{T}q(z_{t}|z_{t-1})
$$

## Diffusion kernel $q(z_{t}|x)$
To train the [[Diffusion Encoder|decoder]] to invert this process, we use multiple samples $z_{t}$ at time $t$ for the same example $x$. However, generating these sequentially using the above equations step-by-step is time-consuming when $t$ is large. Fortunately, there is a closed-form expression for $q(z_{t}|x)$, which allows us to directly draw samples $z_{t}$ given initial datapoint $x$ without computing the intermediate variables $z_{1} \dots z_{t-1}$. This is known as the *diffusion kernel*.

![[Diffusion Encoder-1786333836717.webp]]

To derive an expression for $q(z_{t}|x)$, consider the first two steps of the forward process:
$$
\begin{align*}
z_{1}&= \sqrt{ 1-\beta_{1} }\cdot x + \sqrt{ \beta_{1} }\cdot \epsilon_{1}  \\
z_{2}&= \sqrt{ 1-\beta_{2} }\cdot z_{1} + \sqrt{ \beta_{2} }\cdot \epsilon_{2}
\end{align*}
$$
Substituting the first equation into the second, we get:
$$
\begin{align*}
z_{2} &= \sqrt{ 1-\beta_{2} } \left(\sqrt{ 1-\beta_{1} }\cdot x + \sqrt{ \beta_{1} }\cdot \epsilon_{1} \right) + \sqrt{ \beta_{2} }\cdot \epsilon_{2} \\[2ex]
&= \sqrt{ 1-\beta_{2} }\left(\sqrt{ 1-\beta_{1} }\cdot x + \sqrt{ 1-(1-\beta_{1})} \cdot \epsilon_{1}\right) + \sqrt{ \beta_{2} } \cdot \epsilon_{2} \\[2ex] 
&= \sqrt{ (1-\beta_{2})(1-\beta_{1}) }\cdot x + \sqrt{ 1-\beta_{2}-(1-\beta_{2})(1-\beta_{1}) }\cdot \epsilon_{1} + \sqrt{ \beta_{2} }\cdot \epsilon_{2}
\end{align*}
$$
The last two terms are independent samples from mean-zero normal distributions with variances $1-\beta_{2}-(1-\beta_{2})(1-\beta_{1})$ and $\beta_{2}$, respectively. The mean of this sum is zero, and its variance is the sum of the component variances (see problem 18.2), so:
$$
z_{2}=\sqrt{ (1-\beta_{2})(1-\beta_{1}) }\cdot x+\sqrt{ 1-(1-\beta_{2})(1-\beta_{1}) }\cdot \epsilon
$$
where $\epsilon$ is also a sample from a standard normal distribution.

If we continue this process by substituting this equation into the expression for $z_{3}$ and so on, we can show that:
$$
\begin{align*}
z_{t}&= \sqrt{ \alpha_{t} } \cdot  x + \sqrt{ 1-\alpha_{t} }\cdot \epsilon \\[2ex] 
\alpha_{t} &= \prod_{s=1}^{t}(1-\beta_{s})
\end{align*}
$$
We can equivalently write this in probabilistic form:
$$
q(z_{t}|x) = \text{Norm}_{z_{t}}[\sqrt{ a_{t} }\cdot x, (1-\alpha_{t})I]
$$
For any starting data point $x$, variable $z_{t}$ is normally distributed with a known mean and variance. Consequently, if we don't care about the history of the evolution through the intermediate variables $z_{1}, \dots, z_{t-1}$, it is easy to generate samples from $q(z_{t}|x)$.

## Marginal distributions


## 