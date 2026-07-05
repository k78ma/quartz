---
title: Choosing Poles for IOP and SPA
tags:
  - mte484
date: 2025-10-10
aliases: choosing poles for iop and spa
---
For [[Control Design with IOP and SPA|control design with IOP and SPA]], we want to choose poles that satisfy the equations for IOP, as well as our equations for [[Specs for Control Design|specs for control design]].

There is some "best" choice of poles for solving these equations. This best choice of poles could lie anywhere in $\mathbb{D}$ – we do not know the best choice of poles in advance.

![[Choosing Poles for IOP and SPA-20251010003406953.png|193]]

One strategy is to choose $\{ p_{i} \}_{i=1}^{m}$ uniformly distributed over $\mathbb{D}$ to maximize our chances of having some poles in $\{ p_{i} \}_{i=1}^{m}$ that are close to the unknown best poles. However, an exactly uniform selection of poles over $\mathbb{D}$ is challenging to obtain. Instead, we approximate a uniform selection of poles using an Archimedes spiral, where we also include their complex conjugates as well.

![[Choosing Poles for IOP and SPA-20251010003805150.png]]

In particularly, if we want $m$ total poles, where $m$ is a positive even number, then we select poles in polar coordinates by the formulas
$$
\begin{align}
r_{i}  & = r_{\text{max}} \sqrt{ \frac{i}{\frac{m}{2}} } \\[2ex] 
\theta_{i} & = 2 \sqrt{ \pi i } \\[2ex]
p_{i} & = (r_{i}, \theta_{i}) \\[2ex]
\overline{p_{i}} & =(r_{i}, -\theta_{i}) \quad  \text{(complex conjugate)}
\end{align}
$$
for $i \in \left\{  1, \dots, \frac{m}{2}  \right\}$ and $r_{\text{max}}\in (0,1)$ the maximum radius desired for the poles.
