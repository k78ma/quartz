---
title: Momentum (ML)
tags:
  - ml
date: 2024-01-22
aliases:
  - momentum
---
Nice Distill blog: [Why Momentum Really Works](https://distill.pub/2017/momentum/)

A common modification of [[Stochastic Gradient Descent]] is to add a **momentum** term. We update the parameters with a weighted combination of the gradient computed from the current batch and the direction moved in the previous step:
$$
\begin{align}
\mathbf{m}_{t+1} \quad  & \longleftarrow \quad \beta\cdot \mathbf{m}_{t} + (1-\beta) \sum_{i \in  \mathcal{B}_{t}} \frac{ \partial \ell_{i} [ \phi_{t}] }{ \partial \phi } \\[2ex] 
\phi_{t+1} \quad  & \longleftarrow \quad \phi_{t} - \alpha\cdot \mathbf{m}_{t+1}
\end{align}
$$
where:
- $\mathbf{m}_{t}$ is the momentum (which drives the update at iteration $t$)
- $\beta \in [0,1)$ is a decay parameter that controls the degree to which the gradient is smoothed over time, $\alpha$ is the learning rate.
- $\alpha$ is the learning rate
- $\frac{ \partial \ell_{i}[\phi_{t}] }{ \partial \phi }$ is the gradient of the loss function for data point $i$, with respect to the model parameters $\phi$, evaluated at the current parameters $\phi_t$.

> [!tip] Intuition
> Essentially, we "remember" the direction that the past gradients took us in, and use a weighted average of the average past direction and the current gradient, resulting in a smoother path.
> 
> If we roll out the momentum expression, we can see that older gradients contribute less and less (exponential decay).


![[Momentum (ML)-20250708212819329.png]]

The recursive formulation of the momentum calculation means that the gradient step is an infinite weighted sum of all the previous gradients, where the weights get smaller as we move back in time. The effective learning rate increases if all these gradients are aligned over multiple iterations but decreases if the gradient direction repeatedly changes as the terms in the sum cancel out. The overall effect is a smoother trajectory and reduced oscillatory behavior in valleys.


## MIT 6.036 Notes
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