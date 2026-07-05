---
title: Differential Entropy
tags:
  - stats
date: 2024-04-07
aliases:
---
We can extend the definition of [[Statistical Entropy|entropy]] to include distributions $p(x)$ over continuous variables $x$. 

We can do this by dividing $x$ into "bins" of width $\Delta$. Then, assuming $p(x)$ is continuous, the *mean value theorem* tells us that, for each such bin, there must exist a value $x_{i}$ in the range $i\Delta \leq x_{i} \leq (i+1)\Delta$ such that
$$
\int_{i\Delta}^{(i+1)\Delta} p(x) \, dx =p(x_{i})\Delta
$$
We can now quantize the continuous variable $x$ by saying any $x$ within the $i$th bin is approximated/quantized to the value $x_{i}$. Since $x_{i}$ represents all values in its bin, the probability of observing the value $x_{i}$ is then the integral of $p(x)$ over the bin (above), which is $p(x_{i})\Delta$. 

The entropy of this discrete distribution gives:
$$
\begin{align}
H_{\Delta} & =-\sum_{i}p(x_{i})\Delta \ln(p(x_{i})\Delta) \\[2ex]
	 & = -\sum_{i}p(x_{i})\Delta \ln p(x_{i})-\ln\Delta
\end{align}
$$
We omit the second term $-\ln \Delta$ on the right hand side, since it's independent of $p(x)$.

Now we consider the limit $\Delta \to 0$, which gives:
$$
\lim_{ \Delta \to 0 }\left\{  -\sum_{i}p(x_{i})\Delta \ln p(x_{i})  \right\} = \boxed{-\int p(x)\ln p(x) \, dx }
$$
The boxed quantity on the right-hand side is called the *differential entropy*. The discrete and continuous forms of the entropy differ by a quantity $\ln \Delta$, which diverges in the limit $\Delta\to 0$. 

For a density defined over multiple continuous variables denoted by the vector $\mathbf{x}$, the differential entropy is given by
$$
H[\mathbf{x}]=-\int p(\mathbf{x})\ln p(\mathbf{x}) \, dx 
$$