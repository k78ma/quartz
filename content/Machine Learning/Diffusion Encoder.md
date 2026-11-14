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
In a [[Diffusion Model|diffusion model]], the *diffusion* or *forward* process maps a data example $x$ through a series of intermediate variables $z_{1},z_{2},\dots,z_{T}$. 
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
To train the [[Diffusion Decoder|decoder]] to invert this process, we use multiple samples $z_{t}$ at time $t$ for the same example $x$. However, generating these sequentially using the above equations step-by-step is time-consuming when $t$ is large. Fortunately, there is a closed-form expression for $q(z_{t}|x)$, which allows us to directly draw samples $z_{t}$ given initial datapoint $x$ without computing the intermediate variables $z_{1} \dots z_{t-1}$. This is known as the *diffusion kernel*.

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

## Marginal distributions $q(z_{t})$
The marginal distribution $q(z_{t})$ is the probability of observing a value of $z_{t}$ given the distribution of possible starting points $x$ and the possible diffusion paths for each starting point.

![[Diffusion Encoder-1786411212297.webp]]

It can be computed by considering the joint distribution $q(x, z_{1\dots t})$ and [[Marginalization|marginalizing]] over all the variables except $z_{t}$:
$$
\begin{align*}
q(z_{t}) &= \int \int q(z_{1\dots t},x) \, dz_{1\dots t-1}  \, dx \\[2ex] 
&= \int \int q(z_{1\dots t}|x)Pr(x) \, dz_{1\dots t-1}  \, dx 
\end{align*}
$$
where $q(z_{1\dots t}|x)$ was defined above as the joint distribution of all latent variables.

However, since we now have an expression for the diffusion kernel that skips the intervening variables, we can equivalently write:
$$
q(z_{t}) = \int q(z_{t}|x)Pr(x) \, dx 
$$
Hence, if we repeatedly sample from the data distribution $Pr(x)$ and superimpose the diffusion kernel $q(z_{t}|x)$ on each sample, the result is the marginal distribution $q(z_{t})$. However, the marginal distribution cannot be written in closed form because we don't know the original data distribution $Pr(x)$.

## Conditional distribution $q(z_{t-1}|z_{t})$
We defined the conditional probability $q(z_{t}|z_{t-1})$ in the forward process. To reverse this process, we apply [[Bayes' Rule]]:
$$
q(z_{t-1}|z_{t}) = \frac{q(z_{t}|z_{t-1})q(z_{t-1})}{q(z_{t})}
$$
This is intractable since we cannot compute the marginal distribution $q(z_{t-1})$.

For simple 1D examples, it's possible to evaluate $q(z_{t-1}|z_{t})$ numerically. In general, their form is complex, but in many cases, they are well-approximated by a normal distribution. This is important because when we build the [[Diffusion Decoder|decoder]], we will approximate the reverse process using a normal distribution.

![[Diffusion Encoder-1786412915022.webp]]


## Conditional diffusion distribution $q(z_{t-1}|z_{t}, x)$
There is one final distribution related to the encoder to consider. We noted above that we could not find the conditional distribution $q(z_{t-1}|z_{t})$ because we do not know the marginal distribution $q(z_{t-1})$. However, if we know the starting variable $x$, then we do know the distribution $q(z_{t-1}|x)$ at the time before. This is just the diffusion kernel, and it is normally distributed.

Hence, it is possible to compute the conditional diffusion distribution $q(z_{t-1}|z_{t}, x)$ in closed form. This distribution is used to train the decoder. It is the distribution over $z_{t-1}$ when we know the current latent variable $z_{t}$ and the training data example $x$ (which we of course know). 

![[Diffusion Encoder-1786413990381.webp]]

To compute an expression for $q(z_{t-1}|z_{t},x)$ we start with Bayes' rule:
$$
\begin{align*}
q(z_{t-1}|z_{t},x) &= \frac{q(z_{t}|z_{t-1}, x)q(z_{t-1}|x)}{q(z_{t}|x)} \\[2ex] 
 & \propto q(z_{t}|z_{t-1})q(z_{t-1}|x) \\[2ex] 
 &= \text{Norm}_{z_{t}} \left[ \sqrt{ 1-\beta_{t} }\cdot z_{t-1}, \beta_{t}I \right] \text{Norm}_{z_{t-1}}\left[\sqrt{ \alpha_{t-1} } \cdot x, (1-\alpha_{t-1})I\right] \\[2ex] 
 & \propto  \text{Norm}_{z_{t-1}}\left[ \frac{1}{\sqrt{ 1-\beta_{t} }}z_{t}, \frac{\beta_{t}}{1-\beta_{t}}I \right]\text{Norm}_{z_{t-1}} [\sqrt{ \alpha_{t-1} }\cdot x, (1-\alpha_{t-1})I]
\end{align*}
$$
- Between the first two lines, we have used the fact that $q(z_{t}|z_{t-1}, x)=q(z_{t}|z_{t-1})$ because the diffusion process is Markov, and all the information about $z_{t}$ is captured by $z_{t-1}$.
- Between lines 3 and 4, we use the Gaussian change of variables identity:
    $$
    \text{Norm}_{v}[Aw,B] \propto  \text{Norm}_{w}[(A^{T}B^{-1}A)^{-1}A^{T}B^{-1}v, (A^{T}B^{-1}A)^{-1}]
    $$
    to rewrite the first distribution in terms of $z_{t-1}$. 

We then use a second Gaussian identity:
$$
\text{Norm}_{w}[a,A] \cdot  \text{Norm}_{w}[b,B] \propto  \text{Norm}_{w}[(A^{-1}+B^{-1})^{-1}(A^{-1}a+B^{-1}b), (A^{-1}+B^{-1})^{-1}]
$$
to combine the two normal distributions in $z_{t-1}$, which gives:
$$
q(z_{t-1}|z_{t}, x) = \text{Norm}_{z_{t-1}}\left[ \frac{(1-\alpha_{t-1})}{1-\alpha_{t}} \sqrt{ 1-\beta_{t} }z_{t} + \frac{\sqrt{ \alpha_{t-1} }\beta_{t}}{1-\alpha_{t}}x, \frac{\beta_{t}(1-\alpha_{t-1})}{1-\alpha_{t}}I \right]
$$
Note that the constants of proportionality in the equations above must cancel out since the final result is already a correctly normalized probability distribution.