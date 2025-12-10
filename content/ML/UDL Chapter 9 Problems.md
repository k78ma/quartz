---
title: UDL Chapter 9 Problems
tags:
  - dl
date: 2025-09-26
aliases:
  - udl chapter 9 problems
---
> [!question] Problem 9.1
> Consider a model where the prior distribution over the parameter is a normal distribution with mean zero and variance $\sigma_{\phi}^{2}$ so that
> $$
> Pr(\phi) = \prod_{j=1}^{J} \text{Norm}_{\phi_{j}}[0, \sigma_{\phi}^{2}]
> $$
> where $j$ indexes the model parameters. We now maximize $\sum_{i=1}^{I}Pr(\mathbf{y}_{i}\, | \, \mathbf{x}_{i}, \phi) Pr(\phi)$. Show that the associated loss function of this model is equivalent to L2 regularization.

Recall from [[Explicit Regularization#Probabilistic interpretation]] that the regularization term can be considered a prior $Pr(\phi)$ representing some knowledge we have about the parameters.

The posterior objective is then:
$$
\hat{\phi}=\underset{\phi}{\operatorname{argmax}}\left[ \prod_{i=1}^{I} Pr(\mathbf{y}_{i}\, | \,\mathbf{x}_{i},\phi)Pr(\phi)\right]
$$
We use the log to convert from product to sum:
$$
\hat{\phi} = \underset{\phi}{\operatorname{argmax}} \left[ \sum_{i=1}^{I} \log Pr(y_{i}|x_{i}, \phi) + \log Pr(\phi) \right]
$$
The prior term is:
$$
\begin{align}
\log Pr(\phi)  & = \log \prod_{j=1}^{J}  \frac{1}{\sqrt{ 2\pi \sigma^{2}_{\phi} }}\exp\left( -\frac{\phi^{2}_{j}}{2\sigma^{2}_{\phi}} \right)  \\
 & = \sum_{j=1}^{J} - \frac{1}{2}\log(2\pi \sigma_{\phi}^{2}) - \frac{\phi^{2}_{j}}{2\sigma^{2}_{\phi}} \\[2ex]
     & =\sum_{j=1}^{J} C - \frac{\phi^{2}_{j}}{2\sigma^{2}_{\phi}}
\end{align}
$$
where we collapsed the first term into $C$ because it does not depend on the parameters $\phi$.

Therefore, maximizing the log posterior is equivalent to
$$
\begin{align}
\hat{\phi}  & = \underset{\phi}{\operatorname{argmax}} \left[ \sum_{i=1}^{I} \log Pr(y_i \mid x_i, \phi) - \frac{1}{2\sigma_\phi^2}\sum_{j=1}^{J}\phi_j^2 \right] \\[2ex] 
     & =
\underset{\phi}{\operatorname{argmax}} \sum_{i=1}^{I} \log Pr(y_{i}\, | \,x_{i}, \phi) - \frac{1}{2\sigma_{\phi}^{2}}|| \phi ||^{2}_{2}
\end{align}
$$
or equivalently minimizing
$$
L(\phi) = -\sum_{i=1}^{I} \log Pr(y_{i}\, | \,x_{i}, \phi) + \lambda || \phi ||^{2}_{2}
$$
with $\lambda=-\frac{1}{2\sigma^{2}_{\phi}}$.


> [!question] Problem 9.2
> How do the gradients of the loss function change when L2 regularization is added? 

The parameters are incentivized to stay small (near zero), as larger norm will cause the loss value to be higher. 
$$
L(\phi) = L_{0}(\phi) + \lambda || \phi ||^{2}
$$
where $L_{0}(\phi)$ is the regular NLL objective.

Then the gradient becomes:
$$
\nabla_{\phi}L(\phi) = \nabla_{\phi}L_{0}(\phi) + 2\lambda \phi
$$
Thus, every parameter is pulled toward zero proportionally to its magnitude.


> [!question] Problem 3
> 


> [!question] Problem 4
> 


> [!question] Problem 5
> 


> [!question] Problem 6
> 


> [!question] Problem 7
> 


> [!question] Problem 8
> 


> [!question] Problem 9
> 


> [!question] Problem 10
> 


