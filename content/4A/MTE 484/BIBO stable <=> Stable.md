---
title: BIBO stable <=> Stable
tags:
  - mte484
date: 2025-10-06
aliases: bibo stable <=> stable
---
> [!theorem] Theorem: BIBO stability $\Leftrightarrow$ Stable
> Suppose $G[z]$ is real, rational, and proper. Then $G[z]$ is stable if and only if $G[z]$ is BIBO stable.

We will prove this for $G[z]$ strictly proper. 

First, we prove Stable $\implies$ BIBO stable.
- Given: $G[z]$ is stable, real, rational and strictly proper.
- WTS: BIBO stable

Proof:
- Consider a bounded input signal $u[k]$ which implies that $\exists \, \overline{u}>0$ such that $u[k]\leq 0 \,\, \forall \, \, k \in  \mathbb{Z}_{\geq 0}$ . \[definition of bounded]
- Let $y[m] = (g \ast u)[m]$. Then:
$$
\begin{align}
 | y[m] |  & = \Bigg| \sum_{\kappa=0}^{m} g[m-\kappa]u[\kappa] \Bigg| \leq \sum_{\kappa=0}^{m}\Big| g[m-\kappa] u[\kappa] \Big|    & [\text{triangle inequality}] \\[2ex]
     & = \sum_{\kappa=0}^{m} | g[m-\kappa] | | u[\kappa] |  & [\text{property of } | \cdot  |]\\[2ex]  
      & \leq \sum_{\kappa=0}^{m} | g[m-\kappa] | \overline{u}  \\[2ex] 
     & = \overline{u} \sum_{\kappa=0}^{m}| g[m-\kappa] |  & [\text{linearity of sums}]\\[2ex]
     & = \overline{u} \sum_{k=0}^{m} | g[k] | & [\text{change of variables: } k=m-\kappa] \\[2ex] 
     & = \overline{u} \sum_{k=0}^{m} \Bigg| \sum_{i=1}^{n} \sum_{j=1}^{n_{i}}c_{i,j} {k-1 \choose j-1} p_{i}^{k-j} \Bigg|  & [\text{expression for } g[k] \text{ from class}]\\[2ex] \\[2ex] 
     & = 
    
\end{align}
$$


Then, we prove BIBO $\implies$ stable.
- Given: $G[z]$ is BIBO stable, real, rational and strictly proper.
- WTS: BIBO stable

Last time we 