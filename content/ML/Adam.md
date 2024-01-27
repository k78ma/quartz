---
title: Adam
tags:
  - ml
date: 2024-01-24
aliases:
---
Adam has become the default method for managing step sizes in neural networks. It combines the ideas of [[Momentum (ML)]] and [[Adadelta|adagrad/adadelta]].
- Take the average of the gradient
- Moderate step size based on magnitude of gradient

We start by writing the moving averages of the gradient and squared gradient, which reflect estimates of the mean and variance of the gradient for weight $j$:
$$
\begin{align}
g_{t,j} & =\nabla_{W}J(W_{t-1})_{j} \\
m_{t,j} & =B_{1}m_{t-1,j} + (1-B_{1})g_{t,j} \\
v_{t,j} & =B_{2}v_{t-1,j}+(1-B_{2})g_{t,j}^{2}
\end{align}
$$
A problem with these estimates is that, if we initialize $m_{0} = v_{0} = 0$, they will always be biased (slightly too small). So we will correct for that bias by defining:
$$
\begin{align}
\hat{m}_{t,j}  & = \frac{m_{t,j}}{1-B_{1}^{t}} \\[2ex] 
\hat{v}_{t,j} & = \frac{v_{t,j}}{1-B_{2}^{t}} \\[2ex] 
W_{t,j} & =W_{t-1,j}- \frac{\eta}{\sqrt{ \hat{v}_{t,j} + \epsilon }}\hat{m}_{t,j}
\end{align}
$$
Note that $B_{1}^{t}$ is $B_{1}$ raised to the power of $t$ and likewise for $B_{2}^{t}$. To justify these corrections, note that if we were to expand $m_{t,j}$ in terms of $m_{0,j}$ and $g_{0,j}, g_{1,j}, \dots, g_{t,j}$ the coefficients would sum to $1.$ However, the coefficient behind $m_{0,j}$ is $B_{1}^{t}$ and since $m_{0,j}=0$, the sum of coefficients of non-zero terms is $1-B_{1}^{t}$ , hence the correction. The same justification holds for $v_{t,j}$.

Now, our update for weight $j$ has a step size that takes the steepness into account (like [[Adadelta]]) but also tends to move in the same direction (like [[Momentum (ML)|momentum]]). The authors of adam like setting:
- $B_{1}=0.9$
- $B_{2} = 0.990$
- $\epsilon = 10^{-8}$

Although we now have even more parameters, adam is not highly sensitive to their values. Even though we now have a step-size for each weight, and we have to update various quantities on each iteration of gradient descent, it’s relatively easy to implement by maintaining a matrix for each quantity $(m_{t}^{l}, v_{t}^{l}, g_{t}^{l}, g_{t}^{2^{l}})$ in each layer of the network.