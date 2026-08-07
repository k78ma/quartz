---
title: Marginalization
tags:
  - dl
date: 2026-08-05
aliases:
  - marginalization
  - marginalized
---
If we know the joint distribution $Pr(x,y)$ over two variables, we can recover the marginal distributions $Pr(x)$ and $Pr(y)$ by integrating over the other variable:
$$
\begin{align*}
\int Pr(x,y) \, dx=Pr(y)  \\[2ex] 
\int Pr(x,y) \, dy =Pr(x)
\end{align*}
$$
This process is called marginalization and has the interpretation that we are computing the distribution of one variable regardless of the value the other one took.

The idea of marginalization extends to higher dimensions, so if we have a joint distribution $Pr(x,y,z)$, we can recover the joint distribution $Pr(x,z)$ by integrating over $y$.
