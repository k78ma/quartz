---
title: Mutual Information
tags:
  - stats
date: 2024-04-13
aliases:
---
When two variables $\mathbf{x}$ and $\mathbf{y}$ are independent, their joint distribution will factorize into the product of their marginals, $p(\mathbf{x}, \mathbf{y})=p(\mathbf{x})p(\mathbf{y})$. 

If the variables are not independent, we can gain some idea of whether they are ‘close’ to being independent by considering the [[Kullback-Leibler Divergence]] between the joint distribution and the product of the marginals, given by
$$
\begin{align}
I[\mathbf{x}, \mathbf{y}] \equiv \text{KL}(p(\mathbf{x}, \mathbf{y}))\\[2ex] 
	 & =-\iint p(\mathbf{x}, \mathbf{y})\ln\left( \frac{p(\mathbf{x})p(\mathbf{y})}{p(\mathbf{x}, \mathbf{y})} \right)
\end{align}
$$
which is called the *mutual information* between the variables $\mathbf{x}$ and $\mathbf{y}$.

From the properties of KL divergence, we see that $I[\mathbf{x}, \mathbf{y}]\geq 0$, with equality iff $\mathbf{x}$ and $\mathbf{y}$ are independent. 

Using the [[Sum and Product Rules of Probability]], we see that the mutual information is related to the [[Conditional Entropy|conditional entropy]] through
$$
I[\mathbf{x}, \mathbf{y}]=H[\mathbf{x}]-H[\mathbf{x}|\mathbf{y}]=H[\mathbf{y}]-H[\mathbf{y}|\mathbf{x}]
$$
Thus, the mutual information represents the reduction in uncertainty about $\mathbf{x}$ by virtue of being told the value of $\mathbf{y}$, or vice versa. 

From a Bayesian perspective, we can view $p(\mathbf{x})$ as the [[Prior and Posterior|prior]] distribution for $\mathbf{x}$ and $p(\mathbf{x}|\mathbf{y})$ as the posterior distribution. The mutual information thus represents the reduction in uncertainty about $\mathbf{x}$ as a consequence of the new observation $\mathbf{y}$.