---
title: "Specs for Control Design"
tags: 
date: "2025-09-29"
aliases: "specs for control design"
---
1. Closed loop stability $\Leftrightarrow$ $W, X, V$ stables $\implies$ already guaranteed by choosing $\{ p_{i} \}_{i=1}^{m}\subset \mathbb{D}$ and satisfying Equations ($\ast$) and ($\ast \ast$) from [[Simple Pole Approximation]]

2. Steady-state error ($e_{ss}$) is given by
    $$
    \begin{align}
    e_{ss} = T_{re}[1] & =X[1] \quad  \quad  [\text{IOP theorem part b}] \\[2ex]
     & = 1+ \sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}}+\sum_{k=1}^{\hat{n}} \frac{\hat{x}_{k}}{1-q_{k}}
     \end{align}
    $$
- Case 1. $e_{ss}=0$
$$
1+\sum_{i=1}^{m} \frac{x_{i}}{1-p_{i}} + \frac{\sum_{k=1}^{\hat{n}}\hat{x}_{k}}{1-q_{k}}
$$
- Case . $| e_{ss} |\leq C$
$$

$$
