---
title: Fitted Q-Learning
tags:
  - rl
date: 2026-08-27
aliases:
  - fitted Q-learning
---
The [[Tabular Reinforcement Learning|tabular]] [[Monte Carlo Methods|Monte Carlo methods]] and [[Temporal Difference Methods|TD algorithms]] repeatedly traverse the entire MDP and update the action values. However, this is only practical if the state-action space is small.

In *fitted Q-learning*, the discrete representation $q[s_{t}, a_{t}]$ of the action values is replaced by a machine learning model $q[\mathbf{s}_{t}, a_{t}, \phi]$, where now the state is represented by a vector $s_{t}$ rather than just an index. 

We then define a least squares loss based on the consistency of adjacent action values (similar to [[Q-Learning]]):
$$
L[\phi]= \Big( r[\mathbf{s}_{t}, a_{t}] + \gamma \cdot \underset{a}{\operatorname{max}}\big[q[\mathbf{s}_{t+1}, a, \phi] \big] - q[s_{t}, a_{t}, \phi ] \Big)^{2}
$$
which in turn leads to the update:
$$
\phi \,\, \leftarrow \,\, \phi + \alpha \Big ( r[\mathbf{s}_{t}, a_{t}] + \gamma \cdot  \underset{a}{\operatorname{max}} \big [ q[\mathbf{s}_{t+1}, \alpha, \phi] \big] -q[\mathbf{s}_{t}, a_{t}, \phi] \Big) \frac{ \partial q(\mathbf{s}_{t}, a_{t}, \phi) }{ \partial \phi } 
$$

Fitted Q-learning differs from Q-Learning in that convergence is no longer guaranteed. A change to the parameters potentially modifies both the target $r[\mathbf{s}_{t}, a_{t}]+\gamma \cdot \text{max}_{a_{t+1}}[q[\mathbf{s}_{t+1}, a_{t+1}, \phi]]$ (the maximum value may change) and the prediction $q[\mathbf{s}_{t}, a_{t}, \phi]$. This can be shown both theoretically and empirically to damage convergence.

- [[Deep Q-Networks]]
- [[Double Q-Learning]]