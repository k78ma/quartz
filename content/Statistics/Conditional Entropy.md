---
title: Conditional Entropy
tags:
  - stats
date: 2024-04-12
aliases:
---
Conditional entropy tells us the information needed to specify $\mathbf{y}$ given $\mathbf{x}$ for a joint distribution $p(\mathbf{x}, \mathbf{y})$.
## Formulation
Consider the joint distribution given by $p(\mathbf{x}, \mathbf{y})$ from which we draw pairs of values $\mathbf{x}$ and $\mathbf{y}$.

If the value of $\mathbf{x}$ is already known, then the additional information needed to specify the corresponding value of $\mathbf{y}$ is given by $-\ln p(\mathbf{y}|\mathbf{x})$. Thus, the average amount of information needed to specify $\mathbf{y}$ can be written as:
$$
H[\mathbf{y}|\mathbf{x}]= -\iint p(\mathbf{y}, \mathbf{x}) \,\ln p(\mathbf{y}|\mathbf{x}) \, d\mathbf{y} d\mathbf{x}
$$
which is called the *conditional entropy* of $\mathbf{y}$ given $\mathbf{x}$.

The [[Sum and Product Rules of Probability|product rule]] tells us that the conditional entropy satisfies the relation:
$$
H[\mathbf{x}, \mathbf{y}]=H[\mathbf{y}|\mathbf{x}]+H[\mathbf{x}]
$$
where:
- $H[\mathbf{x}, \mathbf{y}]$ is the [[Differential Entropy|differential entropy]] of $p(\mathbf{x}, \mathbf{y})$
- $H[\mathbf{x}]$ is the differential entropy of the marginal distribution $p(\mathbf{x})$

Thus, the information needed to describe $\mathbf{x}$ and $\mathbf{y}$ is given by:
$$
\text{ Information needed to describe $\mathbf{x}$ alone}\; +\; \text{Additional information required to specify $\mathbf{y}$ given $\mathbf{x}$}
$$

