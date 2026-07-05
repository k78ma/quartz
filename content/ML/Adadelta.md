---
title: Adagrad
tags:
  - ml
date: 2024-01-23
aliases:
  - adadelta
  - adagrad
---
Another useful idea in picking learning rate $\eta$ is that we want to take large steps in parts of the space where $J(W)$ is nearly flat (because there’s no risk of taking too big a step due to the gradient being large). We can apply this idea to each weight independently, and end up with a method called *adadelta*, which is a variant on *adagrad* (adaptive gradient). 

Even though our weights are indexed by layer, input unit and output unit, for simplicity here, just let $W_{j}$ be any weight in the network (we will do the same thing for all of them). We have:
$$
\begin{align}
g_{t,j} & =\nabla_{W}J(W_{t-1})_{j} = \frac{ \partial J(W_{j-1}) }{ \partial W_{j} }  \\[2ex]
G_{t,j} & =\gamma \, G_{t-1,j} + (1-\gamma)g_{t,j}^{2} \\[2ex]
W_{t,j} & =W_{t-1, j} - \frac{\eta}{\sqrt{ G_{t,j} + \epsilon }}\,g_{t,j}
\end{align}
$$
The sequence $G_{t,j}$ is a [[Running Averages|moving average]] of the square of the $j$th component of the gradient. We square it in order to be insensitive to the sign; we want to know whether the magnitude is big or small. Then, we perform a gradient update to weight $j$, but divide the step size by $\sqrt{ G_{t,j} + \epsilon }$, which is larger when the surface is steeper in direction $j$ at point $W_{t-1}$ in weight space; this means that the step size will be smaller when it’s steep and larger when it’s flat. The $\epsilon$ is a small smoothing value to prevent division by zero.

### Adagrad
Adagrad is a more basic version of the above; instead of using the running average, we just accumulate all past gradients. This is computationally more costly and makes the learning rate monotonically decreasing.