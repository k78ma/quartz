---
title: Momentum (ML)
tags:
  - ml
date: 2024-01-22
aliases:
  - momentum
---
We can use methods like [[Running Averages]] to describe strategies for computing $\eta$. Momentum is a simple method that does this by "averaging" recent gradient updates, so that if they have been bouncing back and forth in some direction, we take out that component of the motion. For momentum, we have:
$$
\begin{align}
V_{0}  & = 0 \\
V_{t}  & =\gamma V_{t-1} + \eta \, \nabla _{W}J(W_{t-1}) \\
W_{t}  & = W_{t-1}-V_{t}
\end{align}
$$
This can also be written as:
$$
\begin{align}
M_{0} &  = 0  \\
M_{t} & = \gamma M_{t-1}+(1-\gamma) \, \nabla_{W} J(W_{t-1}) \\
W_{t}  & = W_{t-1} - \eta'M_{t}
\end{align}
$$
These two forms are equivalent if we let $\eta = \eta'(1-\gamma)$. Essentially, $V_{t}$ (or $M_{t}$) is a moving average of the gradient. We are doing an update with step size $\eta'$ on a moving average of the gradients with parameter $\gamma$. 

 $V_{t}$ will be bigger in dimensions that consistently have the same sign for $\nabla_{W}$ and smaller for those that don’t. Of course we now have two parameters to set ($\eta$ and $\gamma$), but the hope is that the algorithm will perform better overall, so it will be worth trying to find good values for them. Often γ is set to be something like 0.9.

![[Momentum (ML).png]]