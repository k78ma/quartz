---
title: Double Q-Learning
tags:
  - rl
date: 2026-08-27
aliases:
  - double Q-learning
  - double DQN
---
One potential flaw of [[Q-Learning]] is that the maximization over the actions in the update:
$$
q[s_{t}, a_{t}] \, \leftarrow \, q[s_{t}, a_{t}] + \alpha \Big ( r[s_{t}, a_{t}] + \gamma \cdot \underset{a}{\operatorname{max}} \big [ q[s_{t+1}, a] \big] - q[s_{t}, a_{t}] \Big)
$$
leads to a systematic bias in the estimated action values $q[s_{t}, a_{t}]$. 

Consider two actions that provide the same average reward, but one is stochastic and the other deterministic. The stochastic reward will exceed the average roughly half of the time and be chosen by the maximum operation, causing the corresponding action value $q[s_{t}, a_{t}]$ be over-estimated. A similar argument can be made about random inaccuracies in the output of the network $q[\mathbf{s}_{t}, a_{t}, \phi]$ or random initializations of the q-function.

The underlying problem is that the same network both selects the target (by the maximization operation) and updates the values. Double Q-Learning tackles this problem by training two models $q_{1}[s_{t}, a_{t}, \pi_{1}]$ and $q_{2}[s_{t}, a_{t}, \pi_{2}]$ simultaneously:
$$
\begin{align*}
q_{1}[s_{t}, a_{t}] \, \, \leftarrow \, \, q_{1}[s_{t},a_{t}]+ \alpha \Big ( r[s_{t}, a_{t}]+\gamma \cdot q_{2} \Big [ s_{t+1}, \underset{a}{\operatorname{argmax}}\big [ q_{1}[s_{t+1}, a] \big] \Big] - q_{1}[s_{t},a_{t}] \Big) \\[2ex] 
q_{2}[s_{t}, a_{t}] \, \, \leftarrow \, \, q_{2}[s_{t},a_{t}]+ \alpha \Big ( r[s_{t}, a_{t}]+\gamma \cdot q_{1} \Big [ s_{t+1}, \underset{a}{\operatorname{argmax}}\big [ q_{2}[s_{t+1}, a] \big] \Big] - q_{2}[s_{t},a_{t}] \Big) \\[2ex] 
\end{align*}
$$

Now the choice of the target and the target itself are decoupled, which helps prevent these biases. In practice, new tuples $\langle s,a,r,s' \rangle$ are randomly assigned to update one model or another. This is *double Q-learning*. 

*Double deep Q-networks* or *double DQNs* use deep networks $q[\mathbf{s}_{t}, a_{t}, \phi_{1}]$ and $q[\mathbf{s}_{t}, a_{t}, \phi_{2}]$ to estimate the action values, and the update becomes:
$$
\begin{align*}
\phi_{1} \, \leftarrow \, \phi_{1}+\alpha \Big ( r[\mathbf{s}_{t}, a_{t}] + \gamma \cdot q\Big [ \mathbf{s}_{t+1}, \underset{a}{\operatorname{argmax}} \big [ q[\mathbf{s}_{t+1}, a, \phi_{1}] \big], \phi_{2} \Big] - q[\mathbf{s}_{t}, a_{t}, \phi_{1}] \Big) \frac{ \partial q[\mathbf{s}_{t}, a_{t}, \phi_{1}] }{ \partial \phi_{1} } \\[2ex] 
\phi_{2} \, \leftarrow \, \phi_{2}+\alpha \Big ( r[\mathbf{s}_{t}, a_{t}] + \gamma \cdot q\Big [ \mathbf{s}_{t+1}, \underset{a}{\operatorname{argmax}} \big [ q[\mathbf{s}_{t+1}, a, \phi_{2}] \big], \phi_{1} \Big] - q[\mathbf{s}_{t}, a_{t}, \phi_{2}] \Big) \frac{ \partial q[\mathbf{s}_{t}, a_{t}, \phi_{2}] }{ \partial \phi_{2} }
\end{align*}
$$
