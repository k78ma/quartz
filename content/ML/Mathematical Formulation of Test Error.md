---
title: Mathematical Formulation of Test Error
tags:
  - dl
date: 2025-08-24
aliases:
  - mathematical formulation of test error
---
Let's make the notions of [[Sources of Test Error|noise, bias, and variance]] mathematically precise.

Consider a 1D regression problem where the data generation has additive noise with variance $\sigma^{2}$. We can observe different outputs $y$ for the same input $x$; so for each $x$, there is a distribution $\text{Pr}(y\, | \,x)$ with expected value (mean) $\mu(x)$:
$$
\mu[x]=\mathbb{E}_{y}[y[x]] = \int y[x] \,\text{Pr}(y\, | \,x) \, dy
$$
and fixed noise $\sigma^{2}=\mathbb{E}_{y}[(\mu[x]-y[x])^{2}]$. 
- Here we have used the notation $y[x]$ to specify that we are considering the output $y$ at a given input position $x$.

> [!definition]- Definition: Expectation
> Consider a function $f(x)$ and a probability function $Pr(x)$ defined over $x$. The expected value of a function $f[\bullet]$ of a random variable $x$ with respect to the probability $Pr(x)$ is defined as:
> $$
> \mathbb{E}_{x}[f[x]] = \int f[x] Pr(x) \, dx 
> $$

Now consider a least squares loss between the model prediction $\text{f}[x, \phi]$ at position $x$ and the observed value $y[x]$ at that position:
$$
\begin{align}
L[x] & = (\text{f}[x, \phi]-y[x])^{2} \\
     & = \big( (\text{f}[x, \phi]  - \mu [x]) + (\mu [x]-y[x])  \big)^{2} \\
     & = (\text{f}[x, \phi]-\mu[x] )^{2} + 2(\text{f}[x, \phi]-\mu [x])(\mu[x]-y[x])+(\mu[x]-y[x])^{2}
\end{align}
$$
where we have both added and subtracted the mean $\mu[x]$ of the underlying function in the second line and have expanded out the squared term in the third line.

The underlying function is stochastic, so this loss depends on the particular $y[x]$ we observe. The expected loss is:
$$
\begin{align}
\mathbb{E}_{y}[L[x]] & = \mathbb{E}_{y}\Big[(\text{f}[x, \phi]-\mu[x] )^{2} + 2(\text{f}[x, \phi]-\mu [x])(\mu[x]-y[x])+(\mu[x]-y[x])^{2}  \Big] \\[2ex]
     & = (\text{f}[x, \phi]-\mu[x] )^{2} + 2(\text{f}[x,\phi]-\mu[x] ) (\mu[x]-\mathbb{E}_{y}[y[x]] ) +\mathbb{E}_{y}[(\mu [x]-y[x])^{2}] \\[2ex]
     & = (\text{f}[x, \phi]-\mu[x])^{2} + 2(\text{f}[x, \phi]-\mu[x]) \cdot  0 + \mathbb{E}_{y}\Big[ (\mu[x]-y[x])^{2} \Big] \\[2ex] 
     & = (\text{f}[x,\phi]-\mu[x])^{2}+\sigma^{2}
\end{align}
$$
where we have made use of the rules for manipulating expectations. 
- In the second line, we have distributed the expectation operator and removed it from terms terms with no dependence on $y[x]$
- In the third line, we note that the second term is zero since $\mathbb{E}_{y}[y[x]] = \mu [x]$ by definition.
- In the fourth line, we have substituted in the definition of the noise $\sigma^{2}$.

We can see that the expected loss has been broken down into two terms: the first term is the squared deviation between the model and the true function mean, and the second term is the noise.

The first term can be further partitioned into bias and variance. 

The parameters $\phi$ of the model $\text{f}[x,\phi]$ depend on the training dataset $\mathcal{D}=\{ x_{i}, y_{i} \}$; so to be more proper, we should write $\text{f}[x, \phi[\mathcal{D}]]$. The training dataset is a random sample from the data generation process; with a different sample of training data, we would learn different parameter values. The expected model output $\text{f}_{\mu}[x]$ with respect to all datasets $\mathcal{D}$ is hence:
$$
\text{f}_{\mu}[x]=\mathbb{E}_{\mathcal{D}}\Big[ \text{f}\big[x, \phi[\mathcal{D}] \big] \Big]
$$
Returning to the first term of equation our equation, we add and subtract $\text{f}_{\mu}[x]$ and expand:
$$
\begin{align}
 & (\text{f}[x,\phi]-\mu[x])^{2}    \\[2ex]
& = (\text{f}[x, \phi[\mathcal{D}]]-\mu[x])^{2} \\[2ex]
 & = \big( (\text{f}[x,\phi[\mathcal{D}]]-f_{\mu} [x])+ (\text{f}_{\mu}[x] - \mu[x]) \big)^{2}  \\[2ex]
     & = ( (\text{f}[x, \phi[\mathcal{D}]]- \text{f}_{\mu}[x])^{2} + 2(\text{f}[x, \phi[\mathcal{D}]]-\text{f}_{\mu}[x])(\text{f}_{\mu}[x]-\mu[x]) )+(\text{f}_{\mu}[x]-\mu[x]^{2})
\end{align}
$$
We then take the expectation with respect to the training dataset $\mathcal{D}$:
$$
\mathbb{E}_{D}\Big[(\text{f}[x, \phi[\mathcal{D}]]-\mu[x])^{2} \Big] = \mathbb{E}_{D}\Big[ (\text{f}[x, \phi[\mathcal{D}]]-\text{f}_{\mu}[x])^{2} \Big] + (\text{f}_{\mu}[x]-\mu[x])^{2}
$$
- We removed the middle term since it doesn't depend on $\mathcal{D}$.

Finally, substituting this result gives:
$$
\mathbb{E}_{D}\Big[\mathbb{E}_{y}[L[x]]\Big] = \underbrace{ \mathbb{E}_{D}\Big[  (\text{f}[x, \phi[\mathcal{D}]]-\text{f}_{\mu}[x])^{2} \Big] }_{ \text{variance} } + \underbrace{ (\text{f}_{\mu}[x]-\mu[x])^{2} }_{ \text{bias} }+\underbrace{ \sigma^{2} }_{ \text{noise} }
$$
This equation says that the expected loss after considering the uncertainty in the training data $\mathcal{D}$ and the test data $y$ consists of three additive components.
- The variance is the uncertainty in the fitted model due to the particular training dataset we sample.
- The bias is the systematic deviation of the model from the mean of the function we are modeling.
- The noise is the inherently uncertainty in the true mapping from input to output.

These sources of error will be present for any task. We've seen that they combine additively for regression with least squares loss; however, their interaction can be more complex for other problem types.